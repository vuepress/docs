# Webpack

<NpmBadge package="@vuepress/bundler-webpack" />

Webpack 打包工具是由 [@vuepress/bundler-webpack](https://www.npmjs.com/package/@vuepress/bundler-webpack) 包提供的。

## 使用方法

安装打包工具：

```bash
npm i -D @vuepress/bundler-webpack@next
```

在配置文件中指定打包工具：

```ts title=".vuepress/config.ts"
import { webpackBundler } from '@vuepress/bundler-webpack'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: webpackBundler({
    postcss: {},
    vue: {},
  }),
})
```

## 导出

### webpackBundler

- 类型： `(options?: WebpackBundlerOptions) => Bundler`

- 详情：

  创建一个 webpack 打包工具实例。

### webpackMergeConfig

- 类型： `(configA: WebpackConfiguration, configB: WebpackConfiguration) => WebpackConfiguration`

- 详情：

  合并两个 webpack 配置对象，由 [webpack-merge](https://github.com/survivejs/webpack-merge) 提供。

### 导出的类型

该包重新导出了其配置项以及底层工具的类型：

- `WebpackBundlerOptions`
- `WebpackConfiguration` （来自 `webpack`）
- `WebpackChainConfig` （来自 `webpack-v5-chain`）
- `WebpackDevServerConfiguration` （来自 `webpack-dev-server`）
- `VueLoaderOptions` 、 `PostcssLoaderOptions` 、 `StylusLoaderOptions` 、 `SassLoaderOptions` 、 `LessLoaderOptions`

::: tip
在 `webpack-dev-server` v6 中，配置类型不再通过 `WebpackDevServer.Configuration` 命名空间暴露。 `@vuepress/bundler-webpack` 现在将其作为具名类型 `WebpackDevServerConfiguration` 重新导出（同时仍然导出 `WebpackDevServer` 类型），并且 `devServerSetupMiddlewares` 使用的是 `WebpackDevServerConfiguration` 。
:::

## 配置项

### configureWebpack

- 类型： `(config: WebpackConfiguration, isServer: boolean, isBuild: boolean) => WebpackConfiguration | void`

- 详情：

  用于修改内部的 Webpack 配置。

  该配置项接收一个函数，该函数的第一个参数是 Webpack 配置对象，第二个参数是 `isServer` 标志位，第三个参数是 `isBuild` 标志位。你可以直接修改配置对象，也可以返回一个对象来替换 Webpack 配置对象。

  如果你需要合并配置而不是替换配置，可以使用 [webpackMergeConfig](#webpackmergeconfig) 。

### chainWebpack

- 类型： `(config: WebpackChainConfig, isServer: boolean, isBuild: boolean) => void`

- 详情：

  通过 [webpack-v5-chain](https://github.com/Mister-Hope/webpack-v5-chain) 来修改内部的 Webpack 配置。

  该配置项接收一个函数，该函数的第一个参数是由 `webpack-v5-chain` 提供的 `Config` 实例，第二个参数是 `isServer` 标志位，第三个参数是 `isBuild` 标志位。

### devServerSetupMiddlewares

- 类型： `WebpackDevServerConfiguration['setupMiddlewares']`

- 详情：

  在 [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) 的 `devServer.setupMiddlewares` 中调用的 Hook 。

  函数的参数即是 `devServer.setupMiddlewares` 的参数。 `WebpackDevServerConfiguration` 类型由 `@vuepress/bundler-webpack` 重新导出。

- 参考：
  - [Webpack > Configuration > DevServer > devServer.setupMiddlewares](https://webpack.js.org/configuration/dev-server/#devserversetupmiddlewares)

### vue

- 类型： `VueLoaderOptions`

- 详情：

  `vue-loader` 的配置项。

- 参考：
  - [vue-loader > 选项参考](https://vue-loader.vuejs.org/zh/options.html)

### postcss

- 类型： `PostcssLoaderOptions`

- 详情：

  `postcss-loader` 的配置项。

- 参考：
  - [postcss-loader > Options](https://github.com/webpack-contrib/postcss-loader#options)

### stylus

- 类型： `StylusLoaderOptions`

- 详情：

  `stylus-loader` 的配置项。

- 参考：
  - [stylus-loader > Options](https://github.com/webpack-contrib/stylus-loader#options)

### scss

- 类型： `SassLoaderOptions`

- 详情：

  针对 `.scss` 文件的 `sass-loader` 的配置项。

- 参考：
  - [sass-loader > Options](https://github.com/webpack-contrib/sass-loader#options)

### sass

- 类型： `SassLoaderOptions`

- 详情：

  针对 `.sass` 文件的 `sass-loader` 的配置项。

- 参考：
  - [sass-loader > Options](https://github.com/webpack-contrib/sass-loader#options)

### less

- 类型： `LessLoaderOptions`

- 详情：

  `less-loader` 的配置项。

- 参考：
  - [less-loader > Options](https://github.com/webpack-contrib/less-loader#options)

### evergreen

- 类型： `boolean`

- 默认值： `true`

- 详情：

  如果你的对象只有那些 “常青树” 浏览器，你可以将其设置成 `true` 。这将会禁用一些转译过程和 Polyfills ，带来更快的构建速度和更小的文件体积。

## 常见问题

### 在修改 `base` 后引用 Public 文件

VuePress 会在使用 Webpack 和 Rspack 打包工具时自动为 Markdown 中的绝对资源路径添加 `base` 前缀，因此修改网站的 `base` 后，从 Markdown 中引用的 Public 文件依然可以正常访问。如果你需要在运行时（例如在 Vue 组件中）生成链接，请使用 [Base Helper](../../guide/assets.md#base-helper)。

### 使用基于 SASS 的主题

默认主题使用纯 CSS，因此不需要任何 SASS 配置。如果你使用了以 [SASS](https://sass-lang.com/) 作为 CSS 预处理器的主题 —— 例如经典主题（`@vuepress/theme-classic`）—— 那么你可能需要手动安装 [sass-loader](https://www.npmjs.com/package/sass-loader) 作为 peer 依赖，来确保其在 Webpack（或 Rspack）下正常工作，特别是在使用 [pnpm](https://pnpm.io/) 时。
