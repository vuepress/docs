# Rspack

<NpmBadge package="@vuepress/bundler-rspack" />

Rspack 打包工具是由 [@vuepress/bundler-rspack](https://www.npmjs.com/package/@vuepress/bundler-rspack) 包提供的。

[Rspack](https://rspack.dev/zh/) 是一个基于 Rust 编写的高性能 JavaScript 打包工具，几乎完全兼容 Webpack。它在支持大部分 Webpack 配置和 Loader 的同时，提供了显著更快的构建速度。

## 使用方法

安装打包工具：

```bash
npm i -D @vuepress/bundler-rspack@next
```

在配置文件中指定打包工具：

```ts title=".vuepress/config.ts"
import { rspackBundler } from '@vuepress/bundler-rspack'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: rspackBundler({
    postcss: {},
    vue: {},
  }),
})
```

## 配置项

由于 Rspack 旨在高度兼容 Webpack，其配置项与 [Webpack](./webpack.md) 非常相似。以下是可用的配置项：

### configureRspack

- 类型： `(config: RspackConfiguration, isServer: boolean, isBuild: boolean) => RspackConfiguration | void`

- 详情：

  用于修改内部的 Rspack 配置。

  该配置项接收一个函数，该函数的第一个参数是 Rspack 配置对象，第二个参数是 `isServer` 标志位，第三个参数是 `isBuild` 标志位。你可以直接修改配置对象，或者返回一个对象通过 [rspack-merge](https://github.com/rstackjs/rspack-merge) 进行合并。

### chainRspack

- 类型： `(config: RspackChain, isServer: boolean, isBuild: boolean) => void`

- 详情：

  通过 [rspack-chain](https://github.com/rstackjs/rspack-chain) 来修改内部的 Rspack 配置。

  该配置项接收一个函数，该函数的第一个参数是 `RspackChain` 实例，第二个参数是 `isServer` 标志位，第三个参数是 `isBuild` 标志位。

### devServerSetupMiddlewares

- 类型： `(middlewares: Middleware[], devServer: Server) => Middleware[]`

- 详情：

  在 Rspack 的 `devServer.setupMiddlewares` 中调用的 Hook 。

  函数的参数即是 `devServer.setupMiddlewares` 的参数。

- 参考：
  - [Rspack > Configuration > DevServer > devServer.setupMiddlewares](https://rspack.dev/zh/guide/dev-server)

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

  如果你的对象只有那些 "常青树" 浏览器，你可以将其设置成 `true` 。这将会禁用一些转译过程和 Polyfills ，带来更快的构建速度和更小的文件体积。

## 常见问题

### 为什么选择 Rspack ？

Rspack 几乎完全兼容 Webpack，同时由于其基于 Rust 的实现，构建速度显著更快。如果你当前正在使用 Webpack 但希望在不重写现有 Webpack 配置的情况下获得更好的性能，Rspack 是一个绝佳的选择。

### 在修改 `base` 后引用 Public 文件

与 Webpack 一样， Rspack 不会为 Public 文件自动处理 `base`。因此如果你修改了网站的 `base`，建议你在引用 Public 图片文件时使用 [Base Helper](../../guide/assets.md#base-helper)。

### 使用默认主题

默认主题使用 [SASS](https://sass-lang.com/) 作为 CSS 预处理器，因此你在使用 Rspack 时（特别是在使用 [pnpm](https://pnpm.io/) 时）可能需要手动安装 [sass-loader](https://www.npmjs.com/package/sass-loader) 来确保其正常工作。
