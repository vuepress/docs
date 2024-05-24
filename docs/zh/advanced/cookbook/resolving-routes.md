# 解析路由

## 获取全部路由

在开发主题和插件时，你可能希望获取所有页面的信息。通过 [useRoutes](../../reference/client-api.md#useroutes) 就可以获取所有页面的路由记录。

`useRoutes` 的返回值是一个包含了所有路由信息的 Ref 对象。其属性是每条路由的路由路径，对应的值是路径的路由信息。

```ts
import { useRoutes } from 'vuepress/client'

const routes = useRoutes()
// {
//   '/': { meta: { title: 'Home' }, loader: HomePageLoader },
//   '/404.html': { meta: { title: 'Not Found' }, loader: NotFoundPageLoader },
//   ...
// }

const routePaths = computed(() => Object.keys(routes.value))
// => [’/‘, '/404.html', '/foo/', '/bar/', ...]
```

## 解析路由地址

你可以使用 [resolveRoutePath](../../reference/client-api.md#resolveroutepath) 来解析给定的链接对应的路由路径。

`resolveRoutePath` 接收一个链接地址和一个可选的基础路径，返回一个解析后的路由地址:

```ts
import { resolveRoutePath } from 'vuepress/client'

const routePath = resolveRoutePath('/foo/') // => '/foo/'
const routePath = resolveRoutePath('baz.html', '/foo/bar.html') // => '/foo/baz.html'
```

## 解析路由信息

你可以使用 [resolveRoute](../../reference/client-api.md#resolveroute) 来解析给定的链接对应的路由信息。

`resolveRoute` 接收一个链接地址和一个可选的基础路径，返回一个解析后的路由信息:

```ts
import { resolveRoute } from 'vuepress/client'

const route = resolveRoute('/foo/') // => { notFound: false, path: '/foo/', meta: { title: 'Foo' }, loader: FooPageLoader }
const route = resolveRoute('baz.html', '/foo/bar.html') // => { notFound: false, path: '/foo/baz.html', meta: { title: 'Baz' }, loader: BazPageLoader }
const route = resolveRoute('/not-exist.html') // => { notFound: true, path: '/not-exist.html', meta: { title: 'Not Found' }, loader: NotFoundPageLoader }
```

路由信息中存在一个 `notFound` 字段，用于标识给定的路径是否存在对应的路由。当路由不存在时，返回值中的 `notFound` 字段为 `true`，其 `path` 字段为规范化后的路径，而 `meta` 和 `loader` 字段则会指向默认的 404 页面。
