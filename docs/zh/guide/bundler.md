# 打包工具

VuePress 支持使用 [Vite](https://vitejs.dev/) 或 [Webpack](https://webpack.js.org/) 作为打包工具来进行网站的开发和构建。你可以根据自己的喜好来选择使用哪个打包工具，并且不需要进行额外的配置。

## 安装打包工具

在安装 [vuepress](https://www.npmjs.com/package/vuepress) 包时，并不会自动安装打包工具，你需要选择并安装一个打包工具。

<CodeGroup>
  <CodeGroupItem title="pnpm" active>

```bash
# 安装 vite 打包工具
pnpm add -D vuepress@next @vuepress/bundler-vite@next
# 安装 webpack 打包工具
pnpm add -D vuepress@next @vuepress/bundler-webpack@next
```

  </CodeGroupItem>

  <CodeGroupItem title="yarn">

```bash
# 安装 vite 打包工具
yarn add -D vuepress@next @vuepress/bundler-vite@next
# 安装 webpack 打包工具
yarn add -D vuepress@next @vuepress/bundler-webpack@next
```

  </CodeGroupItem>

  <CodeGroupItem title="npm">

```bash
# 安装 vite 打包工具
npm install -D vuepress@next @vuepress/bundler-vite@next
# 安装 webpack 打包工具
npm install -D vuepress@next @vuepress/bundler-webpack@next
```

  </CodeGroupItem>
</CodeGroup>

## 使用打包工具

一般情况下，你不要任何额外配置就可以使用打包工具，因为我们已经帮你配置好了它们。

你只需要通过 [bundler](../reference/config.md#bundler) 配置项指定打包工具即可：

```ts
import { viteBundler } from '@vuepress/bundler-vite'
// import { webpackBundler } from '@vuepress/bundler-webpack'

export default {
  bundler: viteBundler(),
  // bundler: webpackBundler(),
}
```

当你需要对打包工具进行进阶配置时，只需要传入对应的配置项即可：

- [打包工具 > Vite](../reference/bundler/vite.md)
- [打包工具 > Webpack](../reference/bundler/webpack.md)
