# Vite

<NpmBadge package="@vuepress/bundler-vite" />

Vite 打包工具是由 [@vuepress/bundler-vite](https://www.npmjs.com/package/@vuepress/bundler-vite) 包提供的。

## 使用方法

安装打包工具：

```bash
npm i -D @vuepress/bundler-vite@next
```

在配置文件中指定打包工具：

```ts title=".vuepress/config.ts"
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
})
```

## 导出

### viteBundler

- 类型： `(options?: ViteBundlerOptions) => Bundler`

- 详情：

  创建一个 vite 打包工具实例。

### viteMergeConfig

- 类型： `(configA: ViteUserConfig, configB: ViteUserConfig) => ViteUserConfig`

- 详情：

  合并两个 vite 配置对象，由 Vite 的 [mergeConfig](https://cn.vite.dev/guide/api-javascript#mergeconfig) JavaScript API 提供。

### 导出的类型

该包重新导出了其配置项的类型： `ViteBundlerOptions` 。

## 配置项

### viteOptions

- 详情：

  接收 Vite 的所有配置项。

- 参考：
  - [Vite > Config](https://cn.vite.dev/config/)

### vuePluginOptions

- 详情：

  接收 [@vitejs/plugin-vue](https://www.npmjs.com/package/@vitejs/plugin-vue) 的所有配置项。

- 参考：
  - [Vite > 插件 > 官方插件](https://cn.vite.dev/plugins/#vitejsplugin-vue)

### configureVite

- 类型： `(config: ViteUserConfig, isServer: boolean, isBuild: boolean) => ViteUserConfig | void`

- 详情：

  用于修改内部的 Vite 配置。

  该配置项接收一个函数，该函数的第一个参数是 Vite 配置对象，第二个参数是 `isServer` 标志位，第三个参数是 `isBuild` 标志位。你可以直接修改配置对象，也可以返回一个对象来替换 Vite 配置对象。
