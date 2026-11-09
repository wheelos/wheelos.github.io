import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { statusCodes } from './content-status.mjs'

const roots = ['solutions', 'about', 'knowledge', 'resources', 'practice', 'evidence', 'organization', 'roadmap']
const siteUrl = 'https://www.wheelos.cn'
const statusTaxonomy = [
  { code: 'repository-fact', 'zh-CN': '仓库事实', en: 'repository fact' },
  { code: 'product-specification', 'zh-CN': '产品规格', en: 'product specification' },
  { code: 'design-guidance', 'zh-CN': '设计建议', en: 'design guidance' },
  { code: 'partially-verified', 'zh-CN': '部分验证', en: 'partially verified' },
  { code: 'verified', 'zh-CN': '已验证', en: 'verified' },
  { code: 'pending-verification', 'zh-CN': '待验证', en: 'pending verification' },
  { code: 'planned', 'zh-CN': '计划能力', en: 'planned capability' }
]

async function collect(directory) {
  const pages = []
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) pages.push(...await collect(path))
    else if (entry.name.endsWith('.md') && !entry.name.startsWith('_')) pages.push(path)
  }
  return pages
}

function parseFrontmatter(source) {
  if (!source.startsWith('---\n')) return {}
  const end = source.indexOf('\n---\n', 4)
  if (end < 0) return {}

  const values = {}
  for (const line of source.slice(4, end).split('\n')) {
    const match = line.match(/^([A-Za-z_][A-Za-z0-9_]*):\s*(.*)$/)
    if (match) values[match[1]] = match[2].replace(/^['"]|['"]$/g, '').trim()
  }
  return values
}

function parseList(value = '') {
  return value
    .replace(/^\[|\]$/g, '')
    .split(',')
    .map((item) => item.trim().replace(/^['"]|['"]$/g, ''))
    .filter(Boolean)
}

function titleFor(source, frontmatter, path) {
  return source.match(/^#\s+(.+)$/m)?.[1] ?? frontmatter.title ?? path
}

function routeFor(path) {
  return `/${path.replace(/\/index\.md$/, '/').replace(/index\.md$/, '').replace(/\.md$/, '')}`
}

async function pageRecord(path, language) {
  const source = await readFile(path, 'utf8')
  const frontmatter = parseFrontmatter(source)
  const statusCode = statusCodes.get(frontmatter.status)
  if (!statusCode) throw new Error(`${path}: unknown status "${frontmatter.status}"`)

  const route = routeFor(path)
  const decision = frontmatter.decision_summary
    ? {
        decision_summary: frontmatter.decision_summary,
        best_for: parseList(frontmatter.best_for),
        not_for: parseList(frontmatter.not_for),
        next_action: frontmatter.next_action ?? '',
        cta_url: frontmatter.cta_url ?? ''
      }
    : {}
  return {
    title: titleFor(source, frontmatter, path),
    description: frontmatter.description ?? '',
    route,
    url: `${siteUrl}${route}`,
    content_type: frontmatter.content_type ?? 'unknown',
    status: frontmatter.status,
    status_code: statusCode,
    claim_type: statusCode,
    scope: frontmatter.scope ?? '',
    keywords: parseList(frontmatter.keywords),
    evidence_ids: parseList(frontmatter.evidence_ids),
    ...decision,
    source_path: path
  }
}

const zhPages = (await Promise.all(roots.map(collect))).flat()
zhPages.unshift('index.md')
zhPages.sort((a, b) => (a === 'index.md' ? -1 : b === 'index.md' ? 1 : a.localeCompare(b)))

const pairs = []
for (const zhPath of zhPages) {
  const enPath = join('en', zhPath)
  const [zh, en] = await Promise.all([
    pageRecord(zhPath, 'zh-CN'),
    pageRecord(enPath, 'en')
  ])

  if (zh.content_type !== en.content_type || zh.status_code !== en.status_code) {
    throw new Error(`${zhPath}: bilingual metadata mismatch`)
  }

  pairs.push({
    logical_id:
      zhPath
        .replace(/\/?index\.md$/, '')
        .replace(/\.md$/, '')
        .replaceAll('/', '-')
        .toUpperCase() || 'HOME',
    translation_key: zhPath,
    content_type: zh.content_type,
    status: zh.status,
    status_code: zh.status_code,
    languages: {
      'zh-CN': zh,
      en
    }
  })
}

const evidence = JSON.parse(await readFile('evidence/registry.json', 'utf8'))
const siteIndex = {
  schema_version: '1.0',
  generated_by: 'scripts/generate-ai-index.mjs',
  site_url: siteUrl,
  languages: ['zh-CN', 'en'],
  bilingual_pairs: pairs.length,
  authority_model: {
    safety_or_performance_claim:
      'Use evidence/registry.json and the linked verified or partially verified record. A product page alone is insufficient.',
    offered_configuration_or_price:
      'Use the product page for scope and request a formal quotation; do not infer validation.',
    engineering_guidance:
      'Use the knowledge page and preserve its status_code, scope and limitations.',
    application_fit:
      'Application pages are market and deployment guidance. Validate task frequency, route, operating owner, regulation, insurance and unit economics before quoting.',
    planned_capability:
      'Roadmap content is planned, not proof of a delivered or validated capability.'
  },
  status_taxonomy: statusTaxonomy,
  evidence_registry: {
    url: `${siteUrl}/evidence/registry.json`,
    record_count: evidence.records.length
  },
  pages: pairs
}

await mkdir('public', { recursive: true })
await writeFile('public/site-index.json', JSON.stringify(siteIndex, null, 2) + '\n')

const sections = [
  '# WheelOS AI-readable content',
  '',
  '> This file contains the current Chinese and English Markdown sources for retrieval.',
  '> Read /site-index.json first for page type, status, bilingual routes and evidence IDs.',
  '> Product specifications describe an offering, not independently verified performance.',
  '> Verified or partially verified engineering claims require an evidence record.',
  `> Current evidence registry records: ${evidence.records.length}.`,
  '',
  '## Retrieval protocol',
  '',
  '1. Identify whether the question concerns product configuration, engineering guidance, verified evidence, roadmap, or community information.',
  '2. Read the matching page in the user’s language and preserve its status_code, scope and limitations.',
  '3. Use evidence/registry.json before calling a performance or safety claim verified.',
  '4. If Chinese and English pages conflict, report both URLs and do not choose the more favorable claim.',
  ''
]

for (const pair of pairs) {
  for (const language of ['zh-CN', 'en']) {
    const page = pair.languages[language]
    const source = await readFile(page.source_path, 'utf8')
    sections.push(
      `## [${language}] ${page.title}`,
      '',
      `<!-- source: ${page.source_path}; route: ${page.route}; content_type: ${page.content_type}; status_code: ${page.status_code} -->`,
      '',
      source.trim().replace(/[ \t]+$/gm, ''),
      '',
      '---',
      ''
    )
  }
}

await writeFile('public/llms-full.txt', sections.join('\n'))
await mkdir('public/evidence', { recursive: true })
await writeFile('public/evidence/registry.json', await readFile('evidence/registry.json'))
await writeFile('public/catalog.json', await readFile('knowledge/catalog.json'))
console.log(`generated bilingual AI index for ${pairs.length} page pairs (${pairs.length * 2} pages)`)
