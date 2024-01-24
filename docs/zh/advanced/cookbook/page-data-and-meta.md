# 页面数据和页面元数据

出于可扩展性的原因，VuePress将页面数据与页面组件绑定在一起，并使它们异步加载。这意味着每个页面的数据和组件仅在访问页面时加载，并且你只能同步访问当前页面的数据。

但有时候你想在其他页面中访问页面数据，例如：你需要访问它们的标题以在导航栏和侧边栏中显示它们，在博客功能中，你可能需要同步访问它们的日期和标签以在博客索引页面中显示它们。因此，我们添加了页面元数据的概念。

在 Node 一侧，`data` 和 `meta` 属性是 `Page` 对象的页面数据和页面元数据，你可以在插件 API 生命周期钩子（如 `onInitialized` 和 `extendsPage`）中访问和修改它们：

```js
export default {
  extendsPage: (page) => {
    if (page.path === '/') {
      // 设置页面数据
      page.data = { ...page.data, foo: 'bar1' }

      // 设置页面元数据
      page.meta = { ...page.meta, bar: 'baz1' }
    }
    if (page.path === '/zh/') {
      // 设置页面数据
      page.data = { ...page.data, foo: 'bar2' }

      // 设置页面元数据
      page.meta = { ...page.meta, bar: 'baz2' }
    }
  },
}
```

在客户端，你可以从 `@vuepress/client` 中调用 `resolve` 来访问页面元数据，调用 `usePageData` 来访问当前页面数据：

```js
import { resolve, usePageData } from '@vuepress/client'

// 你可以访问任何页面元数据
resolve('/') // { path: "/", meta: { bar: "baz1", ... } }
resolve('/zh/') // { path: "/zh/", meta: { bar: "baz2", ... } }

// 计算出的页面数据
const pageData = usePageData()

// 当你在 `/` 页面时
pageData.value // { foo: "bar1", ... }

// 当你在 `/zh/` 页面时
pageData.value // { foo: "bar2", ... }
```

你应该尽可能将页面的数据存储在页面数据中作为首选，只有在需要全局或其他页面访问数据时才使用页面元数据。
