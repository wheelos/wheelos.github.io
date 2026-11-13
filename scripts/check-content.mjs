import { existsSync, readdirSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { statusCodes } from './content-status.mjs'

const roots = ['about', 'knowledge', 'resources', 'practice', 'evidence', 'organization', 'roadmap', 'solutions']
const registry = JSON.parse(await readFile('evidence/registry.json', 'utf8'))
const evidenceById = new Map(registry.records.map((record) => [record.id, record]))

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

function parseList(value = '') {
  return value
    .replace(/^\[|\]$/g, '')
    .split(',')
    .map((item) => item.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean)
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
  const evidenceIds = parseList(frontmatter.evidence_ids)
  if (code === 'verified' || code === 'partially-verified') {
    if (evidenceIds.length === 0) {
      throw new Error(`${path}: ${code} pages require at least one evidence ID`)
    }
    for (const evidenceId of evidenceIds) {
      const record = evidenceById.get(evidenceId)
      if (!record) {
        throw new Error(`${path}: unknown evidence ID ${evidenceId}`)
      }
      if (code === 'verified' && record.status !== '已验证') {
        throw new Error(`${path}: evidence ${evidenceId} is not verified`)
      }
      if (code === 'partially-verified' && !['已验证', '部分验证'].includes(record.status)) {
        throw new Error(`${path}: evidence ${evidenceId} has insufficient status`)
      }
    }
  }
  if (['product', 'application', 'assessment', 'delivery', 'landing'].includes(frontmatter.content_type)) {
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
    evidence_ids: evidenceIds,
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
  if (JSON.stringify(zh.evidence_ids) !== JSON.stringify(en.evidence_ids)) {
    throw new Error(`${zhPath}: evidence_ids mismatch between languages`)
  }

  index.push(zh, en)
}

const productPaths = [
  'solutions/integrated-autonomous-driving-kit.md',
  'en/solutions/integrated-autonomous-driving-kit.md'
]
const protectedProductFacts = [
  ['price', /(?:(?:RMB|CNY)\s*(\d[\d,]+)|(\d[\d,]+)\s*元)/gi],
  ['AI compute', /(\d+)\s*TOPS/gi],
  ['memory', /(\d+)\s*(?:G|GB)\s*LPDDR5/gi],
  ['storage', /(\d+)\s*GB\s*NVMe/gi],
  ['LiDAR channels', /(\d+)[\s-]*(?:line|线)/gi],
  ['camera count', /(\d+)\s*[×x]\s*(?:车规|automotive)/gi],
  ['LiDAR range', /(\d+)\s*m\s*@?\s*(?:10%|at\s+10%)/gi],
  ['camera resolution', /(1280)\s*[×x]\s*(720)/gi],
  ['camera frame rate', /(\d+)\s*fps/gi],
  ['GNSS/INS update rate', /(?:更新率[^\n]{0,20}?(\d+)\s*Hz|(\d+)\s*Hz[^\n]{0,20}?update rate)/gi],
  ['controller power', /(?:典型功耗约\s*(\d+)\s*W|(\d+)\s*W\s*typical)/gi],
  ['input voltage', /(9)[–-](36)\s*V/gi],
  ['operating temperature', /(-20)°C[^\n]{0,80}\+?(60)°C/gi],
  ['ingress protection', /(IP65)/gi]
]

const productFactValues = new Map()
for (const path of productPaths) {
  const source = await readFile(path, 'utf8')
  const values = new Map()
  for (const [name, pattern] of protectedProductFacts) {
    const matches = [...source.matchAll(pattern)].map((match) =>
      match.slice(1).filter(Boolean).join('x').replaceAll(',', '')
    )
    if (matches.length === 0) {
      throw new Error(`${path}: missing protected product fact: ${name}`)
    }
    const unique = [...new Set(matches)]
    if (unique.length !== 1) {
      throw new Error(`${path}: conflicting ${name} values: ${unique.join(', ')}`)
    }
    values.set(name, unique[0])
  }
  productFactValues.set(path, values)
}

const [zhProductPath, enProductPath] = productPaths
for (const [name] of protectedProductFacts) {
  const zhValue = productFactValues.get(zhProductPath).get(name)
  const enValue = productFactValues.get(enProductPath).get(name)
  if (zhValue !== enValue) {
    throw new Error(`${name}: bilingual value mismatch ${zhValue} vs ${enValue}`)
  }
}

const zhLanding = await readFile('index.md', 'utf8')
const enLanding = await readFile('en/index.md', 'utf8')
if (!/39,900/.test(zhLanding) || !/39,900/.test(enLanding)) {
  throw new Error('landing pages: reference price must appear in both languages')
}
if (!zhLanding.includes('不是已认证的量产自动驾驶系统') || !enLanding.includes('not a certified production autonomous-driving system')) {
  throw new Error('landing pages: production-scope disclaimer missing')
}
if (!zhLanding.includes('四项原则') || !/four principles/i.test(enLanding)) {
  throw new Error('landing pages: principle count mismatch')
}

console.log(`content check passed: ${zhPages.length} bilingual page pairs, ${index.length} pages`)
