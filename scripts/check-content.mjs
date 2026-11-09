import { existsSync, readdirSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { statusCodes } from './content-status.mjs'

const roots = ['about', 'knowledge', 'resources', 'practice', 'evidence', 'organization', 'roadmap', 'solutions']

function parseFrontmatter(source, path) {
  if (!source.startsWith('---\n')) throw new Error(`${path}: missing frontmatter`)
  const end = source.indexOf('\n---\n', 4)
  if (end < 0) throw new Error(`${path}: unterminated frontmatter`)

  const after = source.slice(end + 5)
  if (after.trimStart().startsWith('---\n')) {
    throw new Error(`${path}: duplicate frontmatter block`)
  }

  const values = {}
  for (const line of source.slice(4, end).split('\n')) {
    const match = line.match(/^([A-Za-z_][A-Za-z0-9_]*):\s*(.*)$/)
    if (!match) continue
    if (Object.hasOwn(values, match[1])) {
      throw new Error(`${path}: duplicate frontmatter key ${match[1]}`)
    }
    values[match[1]] = match[2].replace(/^['"]|['"]$/g, '').trim()
  }
  return values
}

function walk(directory) {
  const pages = []
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) pages.push(...walk(path))
    else if (entry.name.endsWith('.md') && !entry.name.startsWith('_')) pages.push(path)
  }
  return pages
}

function pagePaths() {
  const pages = ['index.md']
  for (const root of roots) {
    if (!existsSync(root)) throw new Error(`missing content root: ${root}`)
    pages.push(...walk(root))
  }
  return pages
}

async function validatePage(path, expected) {
  const source = await readFile(path, 'utf8')
  const frontmatter = parseFrontmatter(source, path)

  for (const field of ['title', 'description', 'status', 'content_type', 'keywords']) {
    if (!frontmatter[field]) throw new Error(`${path}: missing ${field}`)
  }

  const code = statusCodes.get(frontmatter.status)
  if (!code) throw new Error(`${path}: unknown status "${frontmatter.status}"`)
  if (code === 'verified' && !frontmatter.evidence_ids) {
    throw new Error(`${path}: verified pages require evidence_ids`)
  }
  if (['product', 'application', 'delivery', 'landing'].includes(frontmatter.content_type)) {
    for (const field of ['decision_summary', 'best_for', 'not_for', 'next_action', 'cta_url']) {
      if (!frontmatter[field]) {
        throw new Error(`${path}: ${frontmatter.content_type} page requires ${field}`)
      }
    }
  }

  return {
    path,
    title: frontmatter.title,
    description: frontmatter.description,
    status: frontmatter.status,
    status_code: code,
    content_type: frontmatter.content_type,
    ...expected
  }
}

const zhPages = pagePaths()
const index = []

for (const zhPath of zhPages) {
  const enPath = join('en', zhPath)
  if (!existsSync(enPath)) throw new Error(`${zhPath}: missing English counterpart ${enPath}`)

  const route = `/${zhPath.replace(/\/index\.md$/, '/').replace(/index\.md$/, '').replace(/\.md$/, '')}`
  const enRoute = `/${enPath.replace(/\/index\.md$/, '/').replace(/index\.md$/, '').replace(/\.md$/, '')}`
  const zh = await validatePage(zhPath, { lang: 'zh-CN', route, counterpart: enRoute })
  const en = await validatePage(enPath, { lang: 'en', route: enRoute, counterpart: route })

  if (zh.status_code !== en.status_code) {
    throw new Error(`${zhPath}: status mismatch ${zh.status_code} vs ${en.status_code}`)
  }
  if (zh.content_type !== en.content_type) {
    throw new Error(`${zhPath}: content_type mismatch ${zh.content_type} vs ${en.content_type}`)
  }

  index.push(zh, en)
}

const productPaths = [
  'solutions/integrated-autonomous-driving-kit.md',
  'en/solutions/integrated-autonomous-driving-kit.md'
]
const protectedProductFacts = [
  ['price', /39,900/],
  ['AI compute', /200\s*TOPS/i],
  ['memory', /32\s*(?:G|GB)/i],
  ['storage', /512\s*GB/i],
  ['LiDAR channels', /16[\s-]*(?:line|线)/i],
  ['camera count', /4\s*[×x]/i],
  ['LiDAR range', /120\s*m/i],
  ['camera resolution', /1280\s*[×x]\s*720/i],
  ['camera frame rate', /30\s*fps/i],
  ['GNSS/INS update rate', /100\s*Hz/i],
  ['controller power', /80\s*W/i],
  ['input voltage', /9[–-]36\s*V/i],
  ['operating temperature', /-20°C[^\n]{0,80}\+?60°C/],
  ['ingress protection', /IP65/i]
]

for (const path of productPaths) {
  const source = await readFile(path, 'utf8')
  for (const [name, pattern] of protectedProductFacts) {
    if (!pattern.test(source)) {
      throw new Error(`${path}: missing protected product fact: ${name}`)
    }
  }
}

console.log(`content check passed: ${zhPages.length} bilingual page pairs, ${index.length} pages`)
