# 客户端 API

客户端 API 可以通过 `vuepress/client` 来引入。

## 组合式 API

### useClientData

- 详情：

  返回所有客户端数据的 Ref 对象。

  每个属性也可以通过下列的组合式 API 来访问，但 `pageHeadTitle` 除外，它只能通过 `useClientData()` 访问。

  客户端数据对象还提供了下列别名：`frontmatter` (`pageFrontmatter`) 、`head` (`pageHead`) 、`headTitle` (`pageHeadTitle`) 、`lang` (`pageLang`) 、`page` (`pageData`) 、`site` (`siteData`) 和 `siteLocale` (`siteLocaleData`) 。

  这些组合式 API 还提供了下列别名：`useData` (`useClientData`) 、`useFrontmatter` (`usePageFrontmatter`) 、`useHead` (`usePageHead`) 、`useLang` (`usePageLang`) 、`usePage` (`usePageData`) 、`useSite` (`useSiteData`) 和 `useSiteLocale` (`useSiteLocaleData`) 。

- 示例：

```vue
<script setup lang="ts">
import { useClientData } from 'vuepress/client'

const {
  pageData,
  pageFrontmatter,
  pageHead,
  pageHeadTitle,
  pageLang,
  routeLocale,
  siteData,
  siteLocaleData,
} = useClientData()
</script>
```

### useLayouts

- 详情：

  返回所有布局组件的 Ref 对象。

  它的值是由所有 [客户端配置文件](./plugin-api.md#clientconfigfile) 注册的布局，包括主题必需的 `Layout` 和 `NotFound` 布局。

- 参考：
  - [深入 > 编写主题](../advanced/theme.md)

### usePageComponent

- 详情：

  返回当前页面的页面组件的 Ref 对象。

  它的值是从页面 chunk 中加载的组件。

### usePageData

- 详情：

  返回当前页面数据的 Ref 对象。

- 参考：
  - [Node API > Page 属性 > data](./node-api.md#data)
  - [插件 API > extendsPage](./plugin-api.md#extendspage)

### usePageFrontmatter

- 详情：

  返回当前页面 Frontmatter 的 Ref 对象。

  它的值是页面数据的 `frontmatter` 属性。

### usePageHead

- 详情：

  返回当前页面 Head 配置的 Ref 对象。

  它的值是合并 [head](./frontmatter.md#head) Frontmatter 和 [head](./config.md#head) 配置，并进行去重后得到的。

### useClientData().pageHeadTitle

- 类型：`ComputedRef<string>`

- 详情：

  返回当前页面 Head 中的标题的 Ref 对象。

  它的值是连接页面标题和站点标题后得到的。它不是独立的组合式 API，而是由 [`useClientData`](#useclientdata) 返回的计算属性，`<title>` 元素由 [`useUpdateHead`](#useupdatehead) 与其保持同步。

  它的值可以通过 [`resolvers`](#resolvers) 自定义。

- 示例：

```ts
import { useClientData } from 'vuepress/client'

const { pageHeadTitle } = useClientData()
```

### usePageLang

- 详情：

  返回当前页面语言的 Ref 对象。

  它的值是页面数据的 `lang` 属性。

### usePageLayout

- 详情：

  返回当前页面的布局组件的 Ref 对象。

  它的值是由 [layout](./frontmatter.md#layout) Frontmatter 和 [客户端配置文件](./plugin-api.md#clientconfigfile) 注册的布局解析得到的。

- 参考：
  - [深入 > 编写主题](../advanced/theme.md)

### useRoutes

- 详情：

  返回所有路由的 Ref 对象。

  它的值是站点数据的路由信息。

- 参考：
  - [深入 > Cookbook > 解析路由](../advanced/cookbook/resolving-routes.md)

### useRouteLocale

- 详情：

  返回当前路由对应的 locale path 的 Ref 对象。

  它的值是 [locales](./config.md#locales) 配置的键之一。

### useRoutePath

- 详情：

  返回当前路由的路由路径的 Ref 对象。

  它的值是当前路由的 `path` 属性。

### useRedirects

- 详情：

  返回重定向信息的 Ref 对象。

  它的键是源路由路径，值是目标路由路径。它被用于解析路由路径，参考 [`resolveRoutePath`](#resolveroutepath) 。

### useSiteData

- 详情：

  返回站点数据的 Ref 对象。

### useSiteLocaleData

- 详情：

  返回当前 locale 的站点数据的 Ref 对象。

  当前 locale 中的配置已经合并到顶层配置中。

### onContentUpdated

- 详情：

  当 markdown 文件内容发生变化时，触发回调。

  该函数仅能在组件的 `setup` 阶段被调用。

  ```vue
  <script setup>
  import { onContentUpdated } from 'vuepress/client'

  onContentUpdated((reason) => {
    console.log(`content updated reason: ${reason}`)
  })
  </script>
  ```

### useUpdateHead

- 详情：

  返回一个用于更新当前页面 `<head>` 的函数。

  它会立即把当前 [`usePageHead`](#usepagehead) 的值应用到文档的 head 中。客户端应用 Mount 后 VuePress 会自动保持 head 同步，因此只有在你希望强制立即更新时才需要调用它。

  该函数仅能在客户端应用的组件的 `setup` 阶段被调用。

## 工具函数

### defineClientConfig

- 详情：

  帮助你创建 [clientConfigFile](./plugin-api.md#clientconfigfile) 的工具函数。

- 参考：
  - [深入 > Cookbook > 客户端配置的使用方法](../advanced/cookbook/usage-of-client-config.md)
  - [深入 > Cookbook > 客户端配置的使用方法 > 滚动恢复](../advanced/cookbook/usage-of-client-config.md#滚动恢复)

### resolveRoute

- 详情：

  解析给定链接对应的路由

- 参考：
  - [深入 > Cookbook > 解析路由](../advanced/cookbook/resolving-routes.md)

### resolveRoutePath

- 详情：

  解析给定链接对应的路由路径

- 参考：
  - [深入 > Cookbook > 解析路由](../advanced/cookbook/resolving-routes.md)

### resolveRouteFullPath

- 详情：

  解析给定链接对应的完整路由路径，即解析后的路由路径，并保留给定链接中的 hash 和 query 。

- 参考：
  - [深入 > Cookbook > 解析路由](../advanced/cookbook/resolving-routes.md)

### withBase

- 详情：

  在 URL 前添加站点 [base](./config.md#base) 前缀。

- 参考：
  - [指南 > 静态资源 > Base Helper](../guide/assets.md#base-helper)

## 常量

在客户端代码中有一些常量可以使用。

如果想要把这些常量的类型定义补充到你的代码环境中，请将 `vuepress/client-types` 添加到你的 `tsconfig.json` 里：

```json
{
  "compilerOptions": {
    "types": ["vuepress/client-types"]
  }
}
```

### `__VUEPRESS_VERSION__`

- 类型： `string`

- 详情：

  VuePress Core 的版本号。

### `__VUEPRESS_BASE__`

- 类型： `string`

- 详情：

  配置中的 [base](./config.md#base) 字段。

### `__VUEPRESS_DEV__`

- 类型： `boolean`

- 详情：

  一个环境标记，用于标识当前是否运行在 `dev` 模式下。

### `__VUEPRESS_SSR__`

- 类型： `boolean`

- 详情：

  一个环境标记，用于标识当前是否运行在服务端渲染 (SSR) 环境下。

## 进阶能力

### resolvers <Badge text="实验性能力" />

- 类型： `Record<string, Function>`

- 详情：

  一个响应式对象，其中的方法决定了如何获取全局计算属性。

- 示例：

在客户端配置文件中自定义 `<title>` 的格式：

```ts
import { defineClientConfig, resolvers } from 'vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    resolvers.resolvePageHeadTitle = (page, siteLocale) =>
      `${siteLocale.title} > ${page.title}`
  },
})
```

::: danger
`resolvers` 会直接影响 VuePress 的基础功能，在修改前请确保你已充分了解其用途。
:::
