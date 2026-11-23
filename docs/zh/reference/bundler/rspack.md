# Rspack

<NpmBadge package="@vuepress/bundler-rspack" />

Rspack 打包工具是由 [@vuepress/bundler-rspack](https://www.npmjs.com/package/@vuepress/bundler-rspack) 包提供的。

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

::: tip
没有 `vuepress-rspack` 命令行简写。与 `vuepress-vite` 和 `vuepress-webpack` 命令不同，你始终需要在配置文件中通过 `bundler: rspackBundler()` 来指定打包工具。
:::

## 导出

### rspackBundler

- 类型： `(options?: RspackBundlerOptions) => Bundler`

- 详情：

  创建一个 rspack 打包工具实例。

### rspackMergeConfig

- 类型： `(configA: RspackConfiguration, configB: RspackConfiguration) => RspackConfiguration`

- 详情：

  合并两个 rspack 配置对象，由 [rspack-merge](https://github.com/rstackjs/rspack-merge) 提供。

### 导出的类型

该包重新导出了其配置项以及底层工具的类型：

- `RspackBundlerOptions`
- `RspackConfiguration` （来自 `@rspack/core`）
- `RspackDevServer` （来自 `@rspack/dev-server`）
- `VueLoaderOptions` 、 `PostcssLoaderOptions` 、 `StylusLoaderOptions` 、 `SassLoaderOptions` 、 `LessLoaderOptions`

## 配置项

### configureRspack

- 类型： `(config: RspackConfiguration, isServer: boolean, isBuild: boolean) => RspackConfiguration | void`

- 详情：

  用于修改内部的 Rspack 配置。

  该配置项接收一个函数，该函数的第一个参数是 Rspack 配置对象，第二个参数是 `isServer` 标志位，第三个参数是 `isBuild` 标志位。你可以直接修改配置对象，也可以返回一个对象来替换 Rspack 配置对象。

### chainRspack

- 类型： `(config: RspackChain, isServer: boolean, isBuild: boolean) => void`

- 详情：

  通过 [rspack-chain](https://github.com/rstackjs/rspack-chain) 来修改内部的 Rspack 配置。

  该配置项接收一个函数，该函数的第一个参数是由 `rspack-chain` 提供的 `Config` 实例，第二个参数是 `isServer` 标志位，第三个参数是 `isBuild` 标志位。

### devServerSetupMiddlewares

- 类型： `RspackDevServerConfiguration['setupMiddlewares']`

- 详情：

  在 [@rspack/dev-server](https://www.npmjs.com/package/@rspack/dev-server) 的 `devServer.setupMiddlewares` 中调用的 Hook 。

  函数的参数即是 `devServer.setupMiddlewares` 的参数。如果你需要自己为该 Hook 标注类型，可以从 `@rspack/dev-server` 导入 `RspackDevServerConfiguration` 类型。

- 参考：
  - [Rspack > Configuration > DevServer](https://rspack.dev/config/dev-server)

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

### 使用基于 SASS 的主题

默认主题使用纯 CSS，因此不需要任何 SASS 配置。如果你使用了以 [SASS](https://sass-lang.com/) 作为 CSS 预处理器的主题 —— 例如经典主题（`@vuepress/theme-classic`）—— 那么你可能需要手动安装 [sass-loader](https://www.npmjs.com/package/sass-loader) 作为 peer 依赖，来确保其在 Rspack 下正常工作，特别是在使用 [pnpm](https://pnpm.io/) 时。
