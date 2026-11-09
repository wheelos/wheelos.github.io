import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { extname, join } from 'node:path'

const root = '.vitepress/dist'
const files = []

function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) walk(path)
    else if (entry.name.endsWith('.html')) files.push(path)
  }
}

function targetFor(clean) {
  if (clean.endsWith('/')) return join(root, clean, 'index.html')
  if (extname(clean)) return join(root, clean)
  const html = join(root, `${clean}.html`)
  return existsSync(html) ? html : join(root, clean, 'index.html')
}

walk(root)

const missing = new Map()
for (const file of files) {
  const html = readFileSync(file, 'utf8')
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const raw = match[1]
    const [rawPath, rawHash = ''] = raw.split('#')
    if ((!raw.startsWith('#') && !rawPath.startsWith('/')) || raw.startsWith('//')) continue

    const clean = decodeURI(rawPath.split('?')[0])
    if (clean === '/vp-icons.css') continue

    const target = clean ? targetFor(clean) : file
    if (existsSync(target)) {
      if (!rawHash) continue
      const hash = decodeURIComponent(rawHash)
      if (readFileSync(target, 'utf8').includes(`id="${hash}"`)) continue
    }

    const key = rawHash ? `${rawPath || ''}#${rawHash}` : raw
    if (!missing.has(key)) missing.set(key, [])
    missing.get(key).push(file)
  }
}

if (missing.size) {
  for (const [href, sources] of missing) {
    console.error(`missing internal link ${href} in ${sources.slice(0, 3).join(', ')}`)
  }
  process.exit(1)
}

console.log(`link check passed: ${files.length} HTML files, no missing internal targets`)
