# WheelOS Docs

面向 AI Agent、海外客户和自动驾驶开发者的双语工程知识与产品站点，使用 VitePress 构建。

仓库必须遵守四条原则：**AI 可检索**、**证据分级**、**产品边界清晰**、**中英文对等**。规范见 [`PRINCIPLES.md`](PRINCIPLES.md)。

面向 AI Agent 的站内协作规则见 [`.agents/AGENTS.md`](.agents/AGENTS.md)：客户应像看房子施工一样看到场景调研、边界设计、车辆集成、验证、试点和证据形成的全过程，而不是只看到成品宣传。

```bash
npm install
npm run docs:dev
```

机器读取入口：[`public/site-index.json`](public/site-index.json)、[`public/llms.txt`](public/llms.txt) 和 [`public/llms-full.txt`](public/llms-full.txt)。贡献内容时，请优先补充问题的环境、步骤、结果和证据等级，参见[实践记录规范](practice/index.md)。

## 多语言构建

当前站点的全部公开页面均有人工维护的中英文版本。英文内容位于 `en/`，路由与中文页面一一对应，不依赖翻译密钥或翻译接口。`npm run docs:check-content` 会在构建前检查页面元数据、内容状态、关键产品数字和双语配对；`scripts/check-links.mjs` 会在构建后检查生成的站内链接。

产品和应用页面还必须提供 `decision_summary`、`best_for`、`not_for`、`next_action` 与 `cta_url`，供 AI 直接生成面向客户的决策摘要。交付流程页位于 [`solutions/delivery-process.md`](solutions/delivery-process.md)。

场景筛选工具位于 [`solutions/fit-assessment.md`](solutions/fit-assessment.md)，完全在浏览器本地计算，不上传客户答案，并支持打印摘要、复制摘要和带摘要的邮件链接。

现有自动翻译脚本保留为后续实验能力，但当前 GitHub Pages 工作流不执行自动翻译，避免覆盖人工维护的英文页面。后续接入前需要先解决覆盖策略、术语一致性和质量检查：

```bash
TRANSLATION_API_KEY=... npm run docs:i18n
npm run docs:build
```

翻译缓存写入 `.i18n-cache/`。不要在当前阶段把 `en/` 交给自动翻译覆盖。可选仓库 Variables：`TRANSLATION_API_URL`、`TRANSLATION_MODEL`。

新增语言时，在 `.vitepress/config.mts` 增加 locale、站点元数据和独立导航，并为所有公开页面提供对应翻译。`npm run docs:generate-ai` 会生成 `public/site-index.json`、`public/llms-full.txt` 和 `public/catalog.json`；`public/llms.txt` 是人工维护的简明策略入口。
