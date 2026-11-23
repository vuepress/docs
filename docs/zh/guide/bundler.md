# 打包工具

VuePress 支持使用 [Webpack](https://webpack.js.org/)、[Vite](https://vite.dev/) 或 [Rspack](https://rspack.dev/) 作为打包工具来进行网站的开发和构建。你可以根据自己的喜好来选择使用哪个打包工具，并且不需要进行额外的配置。

## 安装打包工具

在安装 [vuepress](https://www.npmjs.com/package/vuepress) 包时，并不会自动安装打包工具，你需要选择并安装一个打包工具。

::: code-tabs#shell

@tab pnpm

```bash
# 安装 vite 打包工具
pnpm add -D vuepress@next @vuepress/bundler-vite@next
# 安装 webpack 打包工具
pnpm add -D vuepress@next @vuepress/bundler-webpack@next
# 安装 rspack 打包工具
pnpm add -D vuepress@next @vuepress/bundler-rspack@next
```

@tab yarn

```bash
# 安装 vite 打包工具
yarn add -D vuepress@next @vuepress/bundler-vite@next
# 安装 webpack 打包工具
yarn add -D vuepress@next @vuepress/bundler-webpack@next
# 安装 rspack 打包工具
yarn add -D vuepress@next @vuepress/bundler-rspack@next
```

@tab npm

```bash
# 安装 vite 打包工具
npm install -D vuepress@next @vuepress/bundler-vite@next
# 安装 webpack 打包工具
npm install -D vuepress@next @vuepress/bundler-webpack@next
# 安装 rspack 打包工具
npm install -D vuepress@next @vuepress/bundler-rspack@next
```

:::

## 使用打包工具

一般情况下，你不需要任何额外配置就可以使用打包工具，因为我们已经帮你配置好了它们。

你只需要通过 [bundler](../reference/config.md#bundler) 配置项指定打包工具即可：

```ts
import { viteBundler } from '@vuepress/bundler-vite'
// import { webpackBundler } from '@vuepress/bundler-webpack'
// import { rspackBundler } from '@vuepress/bundler-rspack'

export default {
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  // bundler: rspackBundler(),
}
```

当你需要对打包工具进行进阶配置时，只需要传入对应的配置项即可：

- [打包工具 > Vite](../reference/bundler/vite.md)
- [打包工具 > Webpack](../reference/bundler/webpack.md)
- [打包工具 > Rspack](../reference/bundler/rspack.md)

## 自定义打包工具

打包工具是一个实现了 `@vuepress/core` 中 `Bundler` 接口的对象：

```ts
import type { App, DeepPartial } from '@vuepress/core'

interface Bundler {
  name: string
  type: string
  dev: (app: App) => Promise<() => Promise<void>>
  build: (app: App) => Promise<void>
  mergeConfig: <
    Config extends Record<string, unknown> = Record<string, unknown>,
  >(
    currentConfig: Config,
    newConfig: DeepPartial<Config>,
  ) => Config
}
```

- `name` ：打包工具的唯一包名，例如 `'@vuepress/bundler-vite'`。
- `type` ：打包工具的类型，供插件进行稳定的判断，例如 `'vite'` 、 `'webpack'` 或 `'rspack'`。
- `dev` ：启动应用的开发服务器，并返回一个用于关闭它的函数。
- `build` ：构建应用的站点。
- `mergeConfig` ：将部分配置合并到当前配置对象中。自 v2.0.0-rc.32 起它是必须实现的成员，同时也会作为 `app.options.bundler.mergeConfig` 暴露出来。

打包工具的配置项会通过 [bundler](../reference/config.md#bundler) 配置项传入，其类型由 `BundlerOptions` （ `Record<string, unknown>` ）定义。插件和主题可以通过 [extendsBundlerOptions](../reference/plugin-api.md#extendsbundleroptions) Hook 来扩展它们。

一个自定义打包工具的最小示例如下：

```ts
import type { Bundler, BundlerOptions } from '@vuepress/core'

export interface MyBundlerOptions extends BundlerOptions {
  // ...你自己的配置项
}

export const myBundler = (options: MyBundlerOptions = {}): Bundler => ({
  name: '@example/bundler-my',
  type: 'my-bundler',
  async dev(app) {
    // 为 `app` 启动开发服务器，然后返回一个关闭函数
    return async () => {
      // 关闭开发服务器
    }
  },
  async build(app) {
    // 构建 `app` 的站点
  },
  mergeConfig(currentConfig, newConfig) {
    // 使用你的打包工具的合并方法进行深度合并，例如 webpack-merge
    return { ...currentConfig, ...newConfig } as typeof currentConfig
  },
})
```
