import { createHash } from 'node:crypto'
import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { join, relative } from 'node:path'

const sourceRoot = '.'
const outputRoot = 'en'
const cacheRoot = '.i18n-cache/en'
const targetLanguage = process.env.TRANSLATION_LANGUAGE ?? 'English'
const apiUrl = process.env.TRANSLATION_API_URL ?? 'https://api.openai.com/v1/chat/completions'
const apiKey = process.env.TRANSLATION_API_KEY
const model = process.env.TRANSLATION_MODEL ?? 'gpt-4o-mini'
const glossary = [
  ['Apollo Lite', 'Apollo Lite'],
  ['CyberRT', 'CyberRT'],
  ['Dreamview', 'Dreamview'],
  ['精准停车', 'precision parking'],
  ['地面检测', 'ground detection'],
  ['动力学标定', 'vehicle dynamics calibration'],
  ['开放空间规划', 'open-space planning'],
  ['参考线规划', 'reference-line planning'],
  ['证据等级', 'evidence level'],
  ['待验证', 'pending verification'],
  ['已验证', 'verified']
]

if (!apiKey) {
  await rm(outputRoot, { recursive: true, force: true })
  console.log('translation skipped: TRANSLATION_API_KEY is not configured')
  process.exit(0)
}

async function collect(directory) {
  const files = []
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === outputRoot) continue
    const path = join(directory, entry.name)
    if (entry.isDirectory()) files.push(...await collect(path))
    else if (entry.name.endsWith('.md')) files.push(path)
  }
  return files
}

function splitFrontmatter(source) {
  if (!source.startsWith('---\n')) return { frontmatter: '', body: source }
  const end = source.indexOf('\n---\n', 4)
  if (end < 0) return { frontmatter: '', body: source }
  return { frontmatter: source.slice(0, end + 5), body: source.slice(end + 5) }
}

function hashContent(source) {
  return createHash('sha256').update(source).digest('hex')
}

function promptFor(source) {
  const terms = glossary.map(([from, to]) => `- ${from} => ${to}`).join('\n')
  return `Translate the following Markdown documentation into ${targetLanguage}.

Rules:
- Preserve Markdown structure, heading levels, tables, list markers, code fences, inline code, HTML, URLs, anchors, file paths, commands, identifiers, model names, API names, and product names exactly.
- Translate prose, headings, table descriptions, and link labels naturally for technical readers.
- Do not add explanations, omit content, or wrap the result in a code fence.
- Use this terminology consistently:
${terms}

Markdown source:

${source}`
}

async function translate(source) {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { authorization: `Bearer ${apiKey}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      model,
      temperature: 0.1,
      messages: [
        { role: 'system', content: 'You are a careful technical documentation translator.' },
        { role: 'user', content: promptFor(source) }
      ]
    })
  })
  if (!response.ok) throw new Error(`translation API returned ${response.status}: ${await response.text()}`)
  const payload = await response.json()
  const translated = payload.choices?.[0]?.message?.content
  if (!translated) throw new Error('translation API returned no translated content')
  return translated.trim() + '\n'
}

await mkdir(cacheRoot, { recursive: true })
await rm(outputRoot, { recursive: true, force: true })

const files = await collect(sourceRoot)
for (const sourcePath of files) {
  const source = await readFile(sourcePath, 'utf8')
  const { frontmatter, body } = splitFrontmatter(source)
  const digest = hashContent(body)
  const cachePath = join(cacheRoot, `${digest}.md`)
  let translatedBody
  try {
    translatedBody = await readFile(cachePath, 'utf8')
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
    translatedBody = await translate(body)
    await writeFile(cachePath, translatedBody)
  }

  const outputPath = join(outputRoot, relative(sourceRoot, sourcePath))
  await mkdir(join(outputPath, '..'), { recursive: true })
  await writeFile(outputPath, frontmatter + translatedBody)
  console.log(`translated ${sourcePath} -> ${outputPath}`)
}

console.log(`generated ${files.length} ${targetLanguage} page(s)`)
