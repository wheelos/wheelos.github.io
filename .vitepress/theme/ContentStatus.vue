<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter, lang } = useData()
const isEnglish = computed(() => lang.value === 'en')

const typeLabels = {
  policy: { 'zh-CN': '发布原则', en: 'Publication policy' },
  principle: { 'zh-CN': '发布原则', en: 'Publication policy' },
  landing: { 'zh-CN': '首页', en: 'Home' },
  overview: { 'zh-CN': '概览', en: 'Overview' },
  methodology: { 'zh-CN': '方法与协议', en: 'Method and protocol' },
  guide: { 'zh-CN': '工程指南', en: 'Engineering guide' },
  knowledge: { 'zh-CN': '工程知识', en: 'Engineering knowledge' },
  evidence: { 'zh-CN': '验证证据', en: 'Validation evidence' },
  practice: { 'zh-CN': '实践记录', en: 'Practice records' },
  product: { 'zh-CN': '产品与解决方案', en: 'Product and solution' },
  application: { 'zh-CN': '应用场景评估', en: 'Application assessment' },
  assessment: { 'zh-CN': '场景适配判断', en: 'Scenario fit assessment' },
  delivery: { 'zh-CN': '交付与试点流程', en: 'Delivery and pilot process' },
  resources: { 'zh-CN': '工程资源', en: 'Engineering resources' },
  organization: { 'zh-CN': '社区信息', en: 'Community' },
  roadmap: { 'zh-CN': '计划能力', en: 'Planned capability' },
  template: { 'zh-CN': '内容模板', en: 'Content template' }
}

const statusLabels = new Map([
  ['产品规格', { 'zh-CN': '产品规格', en: 'Product specification' }],
  ['Product specification', { 'zh-CN': '产品规格', en: 'Product specification' }],
  ['product specification', { 'zh-CN': '产品规格', en: 'Product specification' }],
  ['仓库事实', { 'zh-CN': '仓库事实', en: 'Repository fact' }],
  ['Repository fact', { 'zh-CN': '仓库事实', en: 'Repository fact' }],
  ['repository fact', { 'zh-CN': '仓库事实', en: 'Repository fact' }],
  ['设计建议', { 'zh-CN': '设计建议', en: 'Design guidance' }],
  ['Design guidance', { 'zh-CN': '设计建议', en: 'Design guidance' }],
  ['design guidance', { 'zh-CN': '设计建议', en: 'Design guidance' }],
  ['部分验证', { 'zh-CN': '部分验证', en: 'Partially verified' }],
  ['Partially verified', { 'zh-CN': '部分验证', en: 'Partially verified' }],
  ['partially verified', { 'zh-CN': '部分验证', en: 'Partially verified' }],
  ['已验证', { 'zh-CN': '已验证', en: 'Verified' }],
  ['Verified', { 'zh-CN': '已验证', en: 'Verified' }],
  ['verified', { 'zh-CN': '已验证', en: 'Verified' }],
  ['待验证', { 'zh-CN': '待验证', en: 'Pending verification' }],
  ['Pending verification', { 'zh-CN': '待验证', en: 'Pending verification' }],
  ['pending verification', { 'zh-CN': '待验证', en: 'Pending verification' }],
  ['计划能力', { 'zh-CN': '计划能力', en: 'Planned' }],
  ['Planned', { 'zh-CN': '计划能力', en: 'Planned' }],
  ['planned', { 'zh-CN': '计划能力', en: 'Planned' }]
])

const localeKey = computed(() => (isEnglish.value ? 'en' : 'zh-CN'))
const typeLabel = computed(() => {
  const type = String(frontmatter.value.content_type ?? '').toLowerCase()
  return typeLabels[type]?.[localeKey.value] ?? frontmatter.value.content_type
})
const statusLabel = computed(() => {
  return statusLabels.get(frontmatter.value.status)?.[localeKey.value] ?? frontmatter.value.status
})
const guideLink = computed(() =>
  isEnglish.value ? '/en/about/how-to-read' : '/about/how-to-read'
)
const statusAria = computed(() =>
  isEnglish.value ? 'Content evidence status' : '内容证据状态'
)
</script>

<template>
  <aside v-if="statusLabel" class="content-status" :aria-label="statusAria">
    <span class="content-status__type">{{ typeLabel }}</span>
    <span class="content-status__state">{{ statusLabel }}</span>
    <a :href="guideLink">
      {{ isEnglish ? 'How to interpret this status' : '如何理解此状态' }}
    </a>
  </aside>
</template>
