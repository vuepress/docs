# 快速上手

::: warning
VuePress v2 目前仍处于 RC (Release Candidate) 阶段。你已经可以用它来构建你的站点，但是它的配置和 API 还不够稳定，有可能会发生一些微小的 Breaking Changes 。因此，在每次更新 RC 版本之后，请一定要仔细阅读 [更新日志](https://github.com/vuepress/core/blob/main/CHANGELOG.md)。
:::

## 在线试一试

你可以通过 [StackBlitz](https://stackblitz.com/fork/vuepress) 在你的浏览器里直接使用 VuePress 。

## 安装

### 依赖环境

- [Node.js v18.16.0+](https://nodejs.org/)
- 包管理器，如 [pnpm](https://pnpm.io/zh/)、[yarn](https://classic.yarnpkg.com/en/)、[npm](https://www.npmjs.com/) 等。

::: tip

- 使用 [pnpm](https://pnpm.io/zh/) 时，你需要安装 `vue` 作为 peer-dependencies 。
- 使用 [yarn 2+](https://yarnpkg.com/) 时，你需要在 [`.yarnrc.yml`](https://yarnpkg.com/configuration/yarnrc#nodeLinker) 文件中设置 `nodeLinker: 'node-modules'` 。

:::

### 创建项目

#### 通过命令行创建

你可以通过 [create-vuepress](https://www.npmjs.com/package/create-vuepress) 直接创建项目模板。

<CodeGroup>
  <CodeGroupItem title="pnpm" active>

```bash
pnpm create vuepress vuepress-starter
```

  </CodeGroupItem>

  <CodeGroupItem title="yarn">

```bash
yarn create vuepress vuepress-starter
```

  </CodeGroupItem>

  <CodeGroupItem title="npm">

```bash
npm init vuepress vuepress-starter
```

  </CodeGroupItem>
</CodeGroup>

#### 手动创建

这一章节会帮助你从头搭建一个简单的 VuePress 文档网站。

- 创建并进入一个新目录

```bash
mkdir vuepress-starter
cd vuepress-starter
```

- 初始化项目

<CodeGroup>
  <CodeGroupItem title="pnpm" active>

```bash
git init
pnpm init
```

  </CodeGroupItem>

  <CodeGroupItem title="yarn">

```bash
git init
yarn init
```

  </CodeGroupItem>

  <CodeGroupItem title="npm">

```bash
git init
npm init
```

  </CodeGroupItem>
</CodeGroup>

- 安装 VuePress

<CodeGroup>
  <CodeGroupItem title="pnpm" active>

```bash
# 安装 vuepress 和 vue
pnpm add -D vuepress@next vue
# 安装打包工具和主题
pnpm add -D @vuepress/bundler-vite@next @vuepress/theme-default@next
```

  </CodeGroupItem>

  <CodeGroupItem title="yarn">

```bash
# 安装 vuepress
yarn add -D vuepress@next
# 安装打包工具和主题
yarn add -D @vuepress/bundler-vite@next @vuepress/theme-default@next
```

  </CodeGroupItem>

  <CodeGroupItem title="npm">

```bash
# 安装 vuepress
npm install -D vuepress@next
# 安装打包工具和主题
npm install -D @vuepress/bundler-vite@next @vuepress/theme-default@next
```

  </CodeGroupItem>
</CodeGroup>

- 创建 `docs` 目录和 `docs/.vuepress` 目录

```bash
mkdir docs
mkdir docs/.vuepress
```

- 创建 VuePress 配置文件 `docs/.vuepress/config.js`

```ts
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
})
```

- 创建你的第一篇文档

```bash
echo '# Hello VuePress' > docs/README.md
```

## 目录结构

创建完成后，你项目的目录结构应该是这样的：

```
├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
└─ package.json
```

`docs` 目录是你放置 Markdown 文件的地方，它同时也会作为 VuePress 的源文件目录。

`docs/.vuepress` 目录，即源文件目录下的 `.vuepress` 目录，是放置所有和 VuePress 相关的文件的地方。当前这里只有一个配置文件。默认还会在该目录下生成临时文件、缓存文件和构建输出文件。建议你把它们添加到 `.gitignore` 文件中。

::: details 示例 `.gitignore` 文件

```
# VuePress 默认临时文件目录
.vuepress/.temp
# VuePress 默认缓存目录
.vuepress/.cache
# VuePress 默认构建生成的静态文件目录
.vuepress/dist
```

:::

## 开始使用 VuePress

### 启动开发服务器

你可以在 `package.json` 中添加一些 [scripts](https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts) ：

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

运行 `docs:dev` 脚本可以启动开发服务器:

<CodeGroup>
  <CodeGroupItem title="pnpm" active>

```bash
pnpm docs:dev
```

  </CodeGroupItem>

  <CodeGroupItem title="yarn">

```bash
yarn docs:dev
```

  </CodeGroupItem>

  <CodeGroupItem title="npm">

```bash
npm run docs:dev
```

  </CodeGroupItem>
</CodeGroup>

VuePress 会在 [http://localhost:8080](http://localhost:8080) 启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。

### 构建你的网站

运行 `docs:build` 脚本可以构建你的网站：

<CodeGroup>
  <CodeGroupItem title="pnpm" active>

```bash
pnpm docs:build
```

  </CodeGroupItem>

  <CodeGroupItem title="yarn">

```bash
yarn docs:build
```

  </CodeGroupItem>

  <CodeGroupItem title="npm">

```bash
npm run docs:build
```

  </CodeGroupItem>
</CodeGroup>

在 `docs/.vuepress/dist` 目录中可以找到构建生成的静态文件。你可以查看 [部署](./deployment.md) 来了解如何部署你的网站。

## 进一步了解 VuePress

现在，你应该已经有了一个简单可用的 VuePress 网站。但你可能仍需要阅读后续的指南来更加了解 VuePress 。

下一步，前往 [配置](./configuration.md) 了解更多配置文件相关的内容。
