import { defineConfig } from 'vitepress'
import { existsSync } from 'node:fs'

const siteUrl = 'https://www.wheelos.cn'
const hasEnglish = existsSync('en/index.md')
const hasEnglishDocs = existsSync('en/about/wheelos.md')

const zhNav = [
  { text: '首页', link: '/' },
  {
    text: '解决方案',
    activeMatch: '^/solutions/',
    items: [
      { text: '解决方案总览', link: '/solutions/' },
      { text: '应用场景与商业模式', link: '/solutions/applications' },
      { text: '交付与试点流程', link: '/solutions/delivery-process' },
      { text: '一体化自动驾驶套件', link: '/solutions/integrated-autonomous-driving-kit' }
    ]
  },
  {
    text: '工程知识',
    activeMatch: '^/(knowledge|resources)/',
    items: [
      { text: '知识库总览', link: '/knowledge/' },
      { text: 'AI 问题回答协议', link: '/knowledge/answer-protocol' },
      { text: '资源与算法包', link: '/resources/' }
    ]
  },
  {
    text: '证据',
    activeMatch: '^/(evidence|practice)/',
    items: [
      { text: '证据索引', link: '/evidence/' },
      { text: '实践记录', link: '/practice/' },
      { text: '待验证假设', link: '/practice/hypotheses' },
      { text: '记录模板', link: '/evidence/record-template' }
    ]
  },
  {
    text: '关于 WheelOS',
    items: [
      { text: '项目与理念', link: '/about/wheelos' },
      { text: '仓库原则', link: '/about/principles' },
      { text: '如何阅读和引用', link: '/about/how-to-read' },
      { text: '系统地图与业界对标', link: '/about/system-map' },
      { text: '路线图', link: '/roadmap/2025' },
      { text: '社区组织', link: '/organization/organization' }
    ]
  },
  { text: '联系支持', link: 'mailto:support@wheelos.cn' }
]

const enNav = [
  { text: 'Home', link: '/en/' },
  {
    text: 'Solutions',
    activeMatch: '^/en/solutions/',
    items: [
      { text: 'Solution overview', link: '/en/solutions/' },
      { text: 'Applications and commercial models', link: '/en/solutions/applications' },
      { text: 'Delivery and pilot process', link: '/en/solutions/delivery-process' },
      { text: 'Integrated Autonomous Driving Kit', link: '/en/solutions/integrated-autonomous-driving-kit' }
    ]
  },
  {
    text: 'Knowledge',
    activeMatch: '^/en/(knowledge|resources)/',
    items: [
      { text: 'Knowledge base', link: '/en/knowledge/' },
      { text: 'AI answer protocol', link: '/en/knowledge/answer-protocol' },
      { text: 'Resources and algorithm packages', link: '/en/resources/' }
    ]
  },
  {
    text: 'Evidence',
    activeMatch: '^/en/(evidence|practice)/',
    items: [
      { text: 'Evidence index', link: '/en/evidence/' },
      { text: 'Practice records', link: '/en/practice/' },
      { text: 'Pending hypotheses', link: '/en/practice/hypotheses' },
      { text: 'Record template', link: '/en/evidence/record-template' }
    ]
  },
  {
    text: 'About',
    items: [
      { text: 'Project and principles', link: '/en/about/wheelos' },
      { text: 'Repository principles', link: '/en/about/principles' },
      { text: 'How to read and cite', link: '/en/about/how-to-read' },
      { text: 'System map and benchmarks', link: '/en/about/system-map' },
      { text: 'Roadmap', link: '/en/roadmap/2025' },
      { text: 'Community', link: '/en/organization/organization' }
    ]
  },
  { text: 'Contact', link: 'mailto:support@wheelos.cn' }
]

const zhSidebar = {
  '/solutions/': [
    {
      text: '自动驾驶解决方案',
      items: [
        { text: '解决方案总览', link: '/solutions/' },
        { text: '应用场景与商业模式', link: '/solutions/applications' },
        { text: '交付与试点流程', link: '/solutions/delivery-process' },
        { text: '一体化自动驾驶套件', link: '/solutions/integrated-autonomous-driving-kit' }
      ]
    }
  ],
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
    {
      text: '社区',
      items: [
        { text: '组织结构', link: '/organization/organization' },
        { text: '成员', link: '/organization/members' }
      ]
    }
  ],
  '/roadmap/': [
    { text: '路线图', items: [{ text: '2025 路线图', link: '/roadmap/2025' }] }
  ]
}

const enSidebar = hasEnglish
  ? {
      '/en/solutions/': [
        {
          text: 'Autonomous driving solutions',
          items: [
            { text: 'Solution overview', link: '/en/solutions/' },
            { text: 'Applications and commercial models', link: '/en/solutions/applications' },
            { text: 'Delivery and pilot process', link: '/en/solutions/delivery-process' },
            {
              text: 'Integrated Autonomous Driving Kit',
              link: '/en/solutions/integrated-autonomous-driving-kit'
            }
          ]
        }
      ],
      ...(hasEnglishDocs
        ? {
            '/en/about/': [
              {
                text: 'WheelOS',
                items: [
                  { text: 'Project and principles', link: '/en/about/wheelos' },
                  { text: 'Repository principles', link: '/en/about/principles' },
                  { text: 'How to read', link: '/en/about/how-to-read' },
                  { text: 'System map', link: '/en/about/system-map' }
                ]
              }
            ],
            '/en/knowledge/': [
              {
                text: 'Autonomous driving knowledge',
                items: [
                  { text: 'Knowledge base', link: '/en/knowledge/' },
                  { text: 'AI answer protocol', link: '/en/knowledge/answer-protocol' },
                  { text: 'Problem record template', link: '/en/knowledge/problem-template' },
                  { text: 'Sensors and time synchronization', link: '/en/knowledge/sensors-and-time' },
                  {
                    text: 'Localization, coordinates and calibration',
                    link: '/en/knowledge/localization-and-calibration'
                  },
                  { text: 'Planning, control and chassis', link: '/en/knowledge/planning-control' },
                  { text: 'Simulation, replay and validation', link: '/en/knowledge/validation' }
                ]
              }
            ],
            '/en/resources/': [
              {
                text: 'Autonomous driving resources',
                items: [{ text: 'Resources', link: '/en/resources/' }]
              }
            ],
            '/en/practice/': [
              {
                text: 'Practice and evidence',
                items: [
                  { text: 'Practice records', link: '/en/practice/' },
                  { text: 'Verified solutions', link: '/en/practice/verified' },
                  { text: 'Pending hypotheses', link: '/en/practice/hypotheses' },
                  { text: 'Evidence index', link: '/en/evidence/' },
                  { text: 'Evidence record template', link: '/en/evidence/record-template' }
                ]
              }
            ],
            '/en/evidence/': [
              {
                text: 'Evidence',
                items: [
                  { text: 'Practice evidence index', link: '/en/evidence/' },
                  { text: 'Evidence record template', link: '/en/evidence/record-template' }
                ]
              }
            ],
            '/en/organization/': [
              {
                text: 'Community',
                items: [
                  { text: 'Organization', link: '/en/organization/organization' },
                  { text: 'Members', link: '/en/organization/members' }
                ]
              }
            ],
            '/en/roadmap/': [
              {
                text: 'Roadmap',
                items: [{ text: '2025 roadmap', link: '/en/roadmap/2025' }]
              }
            ]
          }
        : {})
    }
  : {}

function routePath(relativePath) {
  let path = relativePath.replaceAll('\\', '/')
  if (path === 'index.md') return '/'
  path = path.replace(/\/index\.md$/, '/').replace(/\.md$/, '')
  return `/${path}`
}

function pageHead({ pageData }) {
  const relativePath = pageData.relativePath
  const isEnglish = relativePath === 'en/index.md' || relativePath.startsWith('en/')
  const currentPath = routePath(relativePath)
  const zhPath = isEnglish
    ? currentPath.replace(/^\/en(?=\/|$)/, '') || '/'
    : currentPath
  const enPath = isEnglish
    ? currentPath
    : currentPath === '/'
      ? '/en/'
      : `/en${currentPath}`
  const zhUrl = `${siteUrl}${zhPath}`
  const enUrl = `${siteUrl}${enPath}`
  const currentUrl = isEnglish ? enUrl : zhUrl
  const counterpart = isEnglish ? relativePath.slice(3) : `en/${relativePath}`
  const tags = [
    ['meta', { property: 'og:url', content: currentUrl }],
    ['meta', { property: 'og:locale', content: isEnglish ? 'en_US' : 'zh_CN' }],
    ['meta', { name: 'content-language', content: isEnglish ? 'en' : 'zh-CN' }],
    ['link', { rel: 'canonical', href: currentUrl }]
  ]

  if (existsSync(counterpart)) {
    tags.push(
      ['link', { rel: 'alternate', hreflang: 'zh-CN', href: zhUrl }],
      ['link', { rel: 'alternate', hreflang: 'en', href: enUrl }],
      ['link', { rel: 'alternate', hreflang: 'x-default', href: zhUrl }]
    )
  }

  if (
    currentPath === '/solutions/integrated-autonomous-driving-kit' ||
    currentPath === '/en/solutions/integrated-autonomous-driving-kit'
  ) {
    tags.push([
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'WheelOS Integrated Autonomous Driving Kit',
        description:
          'A pre-integrated hardware and software development kit for low-speed autonomous vehicles in controlled or semi-controlled environments.',
        brand: { '@type': 'Brand', name: 'WheelOS' },
        category: 'Autonomous driving development kit',
        url: currentUrl,
        offers: {
          '@type': 'AggregateOffer',
          lowPrice: '39900',
          priceCurrency: 'CNY',
          offerCount: '1',
          url: currentUrl
        }
      })
    ])
  }

  return tags
}

const rootTheme = {
  nav: zhNav,
  sidebar: zhSidebar,
  outlineTitle: '本页目录',
  docFooter: { prev: '上一页', next: '下一页' },
  lastUpdated: {
    text: '最后更新于',
    formatOptions: { dateStyle: 'short', timeStyle: 'short' }
  },
  returnToTopLabel: '返回顶部',
  sidebarMenuLabel: '文档目录',
  darkModeSwitchLabel: '外观',
  langMenuLabel: '切换语言',
  footer: {
    message: '内容以工程实践记录为准，不等同于安全或量产保证。',
    copyright: 'Copyright © WheelOS contributors'
  }
}

const englishTheme = {
  nav: enNav,
  sidebar: enSidebar,
  outlineTitle: 'On this page',
  docFooter: { prev: 'Previous', next: 'Next' },
  lastUpdated: {
    text: 'Last updated',
    formatOptions: { dateStyle: 'short', timeStyle: 'short' }
  },
  returnToTopLabel: 'Return to top',
  sidebarMenuLabel: 'Contents',
  darkModeSwitchLabel: 'Appearance',
  langMenuLabel: 'Change language',
  footer: {
    message:
      'Engineering records are evidence-based and do not by themselves constitute safety certification or production approval.',
    copyright: 'Copyright © WheelOS contributors'
  }
}

export default defineConfig({
  lang: 'zh-CN',
  title: 'WheelOS',
  description: '面向工业、医疗、零售和园区短途运输的自动驾驶套件、应用方案、工程知识与验证入口。',
  base: '/',
  srcExclude: ['AGENTS.md', 'README.md', 'PRINCIPLES.md'],
  locales: hasEnglish
    ? {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
          title: 'WheelOS',
          description: '面向工业、医疗、零售和园区短途运输的自动驾驶套件、应用方案、工程知识与验证入口。',
          themeConfig: rootTheme
        },
        en: {
          label: 'English',
          lang: 'en',
          link: '/en/',
          title: 'WheelOS',
          description:
            'Short-distance autonomous transport solutions for manufacturing, healthcare, retail, logistics campuses and specialized sites, with engineering knowledge and evidence.',
          themeConfig: englishTheme
        }
      }
    : undefined,
  sitemap: { hostname: siteUrl },
  cleanUrls: true,
  lastUpdated: true,
  transformHead: pageHead,
  head: [
    ['meta', { name: 'robots', content: 'index,follow,max-image-preview:large' }],
    [
      'meta',
      {
        name: 'ai-content-declaration',
        content:
          'This is a version-controlled engineering and product knowledge base. Evidence status and formal quotations are authoritative.'
      }
    ],
    ['meta', { property: 'og:site_name', content: 'WheelOS' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'alternate', type: 'text/plain', href: '/llms.txt', title: 'AI-readable index' }],
    ['link', { rel: 'alternate', type: 'application/json', href: '/site-index.json', title: 'Bilingual site index' }],
    ['link', { rel: 'alternate', type: 'text/plain', href: '/llms-full.txt', title: 'Complete bilingual corpus' }],
    ['link', { rel: 'alternate', type: 'application/json', href: '/site-index.json', title: 'Structured bilingual page index' }],
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': `${siteUrl}/#organization`,
            name: 'WheelOS',
            url: siteUrl,
            email: 'support@wheelos.cn',
            telephone: '+86-183-2081-3902',
            address: {
              '@type': 'PostalAddress',
              streetAddress:
                'Floor 11, Building A, Pingshan Chengtou Zhiyuan, No. 37 Cuijing Road, Zhukeng Community, Longtian Street, Pingshan District',
              addressLocality: 'Shenzhen',
              addressRegion: 'Guangdong',
              addressCountry: 'CN'
            }
          },
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            name: 'WheelOS',
            url: siteUrl,
            inLanguage: ['zh-CN', 'en'],
            publisher: { '@id': `${siteUrl}/#organization` }
          }
        ]
      })
    ]
  ],
  themeConfig: {
    i18nRouting: hasEnglishDocs,
    socialLinks: [{ icon: 'github', link: 'https://github.com/wheelos' }],
    search: { provider: 'local' }
  }
})
