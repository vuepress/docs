# Resolving Routes

## Getting all routes

You can make use of [useRoutes](../../reference/client-api.md#useroutes) to get all routes information.

The return value of `useRoutes` is a Ref object containing all routes. The keys are route paths of each route, and the values are the corresponding route information.

```ts
import { useRoutes } from 'vuepress/client'

const routes = useRoutes()
// {
// '/': { meta: { title: 'Home' }, loader: HomePageLoader },
// '/404.html': { meta: { title: 'Not Found' }, loader: NotFoundPageLoader },
// ...
// }

const routePaths = computed(() => Object.keys(routes.value))
// => ['/‘, '/404.html', '/foo/', '/bar/', ...]
```

## Resolving route path

You can make use of [resolveRoutePath](../../reference/client-api.md#resolveroutepath) to resolve the route path of the given link.

`resolveRoutePath` receives a link and an optional base path, and returns the resolved route path:

```ts
import { resolveRoutePath } from 'vuepress/client'

const routePath = resolveRoutePath('/foo/') // => '/foo/'
const routePath = resolveRoutePath('baz.html', '/foo/bar.html') // => '/foo/baz.html'
```

## Resolving route information

You can make use of [resolveRoute](../../reference/client-api.md#resolveroute) to resolve route information for a given link.

`resolveRoute` receives a link and an optional base path, and returns the resolved route information:

```ts
import { resolveRoute } from 'vuepress/client'

const route = resolveRoute('/foo/') // => { notFound: false, path: '/foo/', meta: { title: 'Foo' }, loader: FooPageLoader }
const route = resolveRoute('baz.html', '/foo/bar.html') // => { notFound: false, path: '/foo/baz.html', meta: { title: 'Baz' }, loader: BazPageLoader }
const route = resolveRoute('/not-exist.html') // => { notFound: true, path: '/not-exist.html', meta: { title: 'Not Found' }, loader: NotFoundPageLoader }
```

There is a `notFound` field in the returned information, which is used to indicate whether a corresponding route exists for a given path. When the route does not exist, the `notFound` field would be `true`, the `path` field would be the normalized path, and the `meta` and `loader` fields would point to the default 404 page.
