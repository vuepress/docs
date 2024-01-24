# Page Data and Page Meta

For scalability reasons, VuePress bind page data together with page component and make them async. This means that data and component for every page is only loaded once the page is being visited, and you can only synchronously access current page data.

But there are some times that you want to access page data in other pages, e.g.: You need to access their title to display them in navbar and sidebar, and for blogging feature you may need to synchronously access their date and tags to display them in blog index page. So we add page meta concept for it.

On node side, `data` and `meta` property `Page` object are page data and page meta, and you can access and modify them in plugin API lifecycle hooks like `onInitialized` and `extendsPage`:

```js
export default {
  extendsPage: (page) => {
    if (page.path === '/') {
      // set page data
      page.data = { ...page.data, foo: 'bar1' }

      // set page meta
      page.meta = { ...page.meta, bar: 'baz1' }
    }
    if (page.path === '/zh/') {
      // set page data
      page.data = { ...page.data, foo: 'bar2' }

      // set page meta
      page.meta = { ...page.meta, bar: 'baz2' }
    }
  },
}
```

At client, you can call `resolve` from `@vuepress/client` to access page meta and call `usePageData` from `@vuepress/client` to access current page data:

```js
import { resolve, usePageData } from '@vuepress/client'

// you can access any page meta
resolve('/') // { path: "/", meta: { bar: "baz1", ... } }
resolve('/zh/') // { path: "/zh/", meta: { bar: "baz2", ... } }

// a computed page data
const pageData = usePageData()

// when you are at `/`
pageData.value // { foo: "bar1", ... }

// when you are at `/zh/`
pageData.value // { foo: "bar2", ... }
```

You should try to store data of pages in page data as first choice, and only use page meta when the data need to be accessed globally or in other pages.
