import { readFile } from 'node:fs/promises'

const registry = JSON.parse(await readFile('evidence/registry.json', 'utf8'))
const required = ['id', 'title', 'status', 'record_url', 'tested_at', 'software_commit', 'environment', 'metrics', 'result', 'limitations', 'reviewer']
const accepted = new Set(['已验证', '部分验证', '待验证'])

if (!Array.isArray(registry.records)) {
  throw new Error('evidence/registry.json: records must be an array')
}

for (const [index, record] of registry.records.entries()) {
  for (const field of required) {
    if (!record[field] || (Array.isArray(record[field]) && record[field].length === 0)) {
      throw new Error(`evidence record ${index}: missing ${field}`)
    }
  }
  if (!accepted.has(record.status)) {
    throw new Error(`evidence record ${record.id}: invalid status ${record.status}`)
  }
  if (record.status === '已验证' && (!record.raw_artifacts || record.raw_artifacts.length === 0)) {
    throw new Error(`evidence record ${record.id}: 已验证 requires raw_artifacts`)
  }
}

console.log(`evidence check passed: ${registry.records.length} record(s)`)
