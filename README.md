# WheelOS Docs

面向 AI 的自动驾驶工程知识库，使用 VitePress 构建。

仓库必须遵守两条原则：**对 AI 友好**，以及**用完整实践和验证替代纸面结论**。规范见 [`PRINCIPLES.md`](PRINCIPLES.md)。

```bash
npm install
npm run docs:dev
```

机器读取入口：[`public/llms.txt`](public/llms.txt)。贡献内容时，请优先补充问题的环境、步骤、结果和证据等级，参见[实践记录规范](practice/index.md)。

## 多语言构建

中文 Markdown 是唯一人工维护的源文件。配置 `TRANSLATION_API_KEY` 后，运行以下命令会使用兼容 OpenAI Chat Completions API 的翻译服务，按内容哈希缓存并生成英文页面：

```bash
TRANSLATION_API_KEY=... npm run docs:i18n
npm run docs:build
```

翻译生成到被 Git 忽略的 `en/` 和 `.i18n-cache/`，不需要手工维护第二套 Markdown。GitHub Pages 工作流会在仓库 Secret `TRANSLATION_API_KEY` 存在时自动生成英文站点；未配置密钥时仍可正常构建中文版。可选仓库 Variables：`TRANSLATION_API_URL`、`TRANSLATION_MODEL`。