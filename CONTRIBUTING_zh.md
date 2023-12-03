# VuePress 文档贡献指南

## 概览

VuePress 的文档是由 VuePress 自己驱动的，是由该仓库中的源码构建而来。

所有的 Markdown 源文件都放置在 `docs` 目录下。我们维护了两种翻译：

- 英语 (en-US) 在 `/` 路径下
- 中文 (zh-CN) 在 `/zh/` 路径下

我们部署了两套站点：

- 在 [Netlify](https://www.netlify.com) 部署的 Release 版本。该站点是从最新发布的版本中构建而来，因此用户不会看到未发布的改动。域名为 [https://v2.vuepress.vuejs.org](https://v2.vuepress.vuejs.org)。
- 在 [GitHub Pages](https://pages.github.com) 部署的 Developer 版本。该站点是从最新的提交中构建而来，因此开发者可以预览最新的改动。域名为 [https://vuepress.github.io](https://vuepress.github.io)。
