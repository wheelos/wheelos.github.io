import { defineConfig } from 'vitepress'
import { existsSync } from 'node:fs'

const hasEnglish = existsSync('en/index.md')

export default defineConfig({
  lang: 'zh-CN',
  locales: hasEnglish ? {
    root: { label: '简体中文', lang: 'zh-CN' },
    en: { label: 'English', lang: 'en', link: '/en/' }
  } : undefined,
  title: 'WheelOS Docs',
  description: '面向 AI 的自动驾驶工程知识库',
  base: '/',
  sitemap: { hostname: 'https://www.wheelos.cn' },
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'robots', content: 'index,follow,max-image-preview:large' }],
    ['meta', { name: 'ai-content-declaration', content: 'This is a version-controlled engineering knowledge base. Evidence status is authoritative.' }],
    ['meta', { property: 'og:site_name', content: 'WheelOS Docs' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['link', { rel: 'alternate', type: 'text/plain', href: '/llms.txt', title: 'AI-readable index' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      name: 'WheelOS Docs',
      description: '面向 AI 的自动驾驶工程知识库，包含可追溯的实践和验证记录。',
      url: 'https://www.wheelos.cn/',
      isAccessibleForFree: true,
      publisher: { '@type': 'Organization', name: 'WheelOS' }
    })]
  ],
  themeConfig: {
    locales: hasEnglish ? {
      root: {
        label: '简体中文',
        lang: 'zh-CN'
      },
      en: {
        label: 'English',
        lang: 'en',
        link: '/en/'
      }
    } : undefined,
    nav: [
      { text: '首页', link: '/' },
      { text: '开始了解', link: '/about/wheelos' },
      { text: '自动驾驶问题库', link: '/knowledge/' },
      { text: '资源下载', link: '/resources/' },
      { text: '实践记录', link: '/practice/' },
      { text: '证据索引', link: '/evidence/' },
      { text: 'GitHub', link: 'https://github.com/wheelos' }
    ],
    sidebar: {
      '/about/': [
        {
          text: 'WheelOS',
          items: [
            { text: '项目与理念', link: '/about/wheelos' },
            { text: '仓库原则', link: '/about/principles' },
            { text: '如何阅读本知识库', link: '/about/how-to-read' },
            { text: '系统地图', link: '/about/system-map' }
          ]
        }
      ],
      '/knowledge/': [
        {
          text: '自动驾驶问题库',
          items: [
            { text: '问题库总览', link: '/knowledge/' },
            { text: 'AI 问题回答协议', link: '/knowledge/answer-protocol' },
            { text: '问题记录模板', link: '/knowledge/problem-template' },
            { text: '传感器与时间同步', link: '/knowledge/sensors-and-time' },
            { text: '定位、坐标系与标定', link: '/knowledge/localization-and-calibration' },
            { text: '规划、控制与底盘', link: '/knowledge/planning-control' },
            { text: '仿真、回放与验证', link: '/knowledge/validation' }
          ]
        }
      ],
      '/resources/': [
        {
          text: '自动驾驶资源下载',
          items: [{ text: '资源总览与下载', link: '/resources/' }]
        }
      ],
      '/practice/': [
        {
          text: '实践记录',
          items: [
            { text: '记录规范', link: '/practice/' },
            { text: '已验证方案', link: '/practice/verified' },
            { text: '待验证假设', link: '/practice/hypotheses' }
          ]
        }
      ],
      '/evidence/': [
        {
          text: '可复现证据',
          items: [
            { text: '实践证据索引', link: '/evidence/' },
            { text: '实践记录模板', link: '/evidence/record-template' }
          ]
        }
      ],
      '/organization/': [
        { text: '社区', items: [{ text: '组织结构', link: '/organization/organization' }, { text: '成员', link: '/organization/members' }] }
      ],
      '/roadmap/': [
        { text: '路线图', items: [{ text: '2025 路线图', link: '/roadmap/2025' }] }
      ],
      ...(hasEnglish ? {
        '/en/': [
          {
            text: 'WheelOS',
            items: [
              { text: 'Project and principles', link: '/en/about/wheelos' },
              { text: 'How to read', link: '/en/about/how-to-read' },
              { text: 'System map', link: '/en/about/system-map' }
            ]
          },
          {
            text: 'Autonomous driving knowledge',
            items: [{ text: 'Knowledge base', link: '/en/knowledge/' }]
          },
          {
            text: 'Apollo Lite resources',
            items: [{ text: 'Resources', link: '/en/resources/' }]
          },
          {
            text: 'Practice and evidence',
            items: [
              { text: 'Practice records', link: '/en/practice/' },
              { text: 'Evidence index', link: '/en/evidence/' }
            ]
          }
        ]
      } : {})
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/wheelos' }],
    search: { provider: 'local' },
    footer: {
      message: '内容以工程实践记录为准，不等同于安全或量产保证。',
      copyright: 'Copyright © WheelOS contributors'
    }
  }
})
