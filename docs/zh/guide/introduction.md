# 介绍

VuePress 是一个以 Markdown 为中心的静态网站生成器（Static Site Generator, SSG）。你可以使用 [Markdown](https://zh.wikipedia.org/wiki/Markdown) 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。

VuePress 诞生的初衷是为了支持 Vue.js 及其子项目的文档需求，但是现在它已经在帮助大量用户构建他们的文档、博客和其他静态网站。

## 它是如何工作的？

一个 VuePress 站点本质上是一个由 [Vue](https://vuejs.org/) 和 [Vue Router](https://router.vuejs.org) 驱动的单页面应用 (Single-Page Application, SPA)。

路由会根据你的 Markdown 文件的相对路径来自动生成。每个 Markdown 文件都通过 [markdown-it](https://github.com/markdown-it/markdown-it) 编译为 HTML ，然后将其作为 Vue 组件的模板。因此，你可以在 Markdown 文件中直接使用 Vue 语法，便于你嵌入一些动态内容。

在开发过程中，我们启动一个常规的开发服务器 (dev-server) ，并将 VuePress 站点作为一个常规的 SPA。如果你以前使用过 Vue 的话，你在使用时会感受到非常熟悉的开发体验。

在构建过程中，我们会为 VuePress 站点创建一个服务端渲染 (SSR) 的版本，然后通过虚拟访问每一条路径来渲染对应的 HTML 。这种做法的灵感来源于 [Nuxt](https://nuxtjs.org/) 的 `nuxt generate` 命令，以及其他的一些项目，比如 [Gatsby](https://www.gatsbyjs.org/)。

## VuePress 与 VitePress 的关系

VitePress 可以看作是 VuePress 的孪生兄弟。它们最初都是由 Vue.js 的作者 Evan You 创建。如今，VitePress 由 Vue.js 团队维护，而 VuePress 则由 VuePress 团队维护。

两个项目的大致历史是这样的：VuePress v0 和 v1 是基于 Webpack 构建的。后来 Evan 创建了 Vite ，他基于 Vite 开发了一个新的静态站点生成器 —— VitePress —— 复用了 VuePress 的一些理念和代码。与此同时，社区 Fork 了 VuePress v2 分支，继续推动其发展，并为其增加了对 Webpack、Vite 和 Rspack 的支持。

我们曾经考虑过将这两个项目合并到 VuePress 这一名称下。然而，随着时间的推移，它们的目标和技术路线逐渐分化。因此，Vue.js 团队选择专注于 VitePress，而社区 —— 也就是现在的 VuePress 团队 —— 接手了 VuePress，并持续推动其发展。

作为用户，你可以根据需求自由选择使用哪个项目。VitePress 与 Vite 深度集成。而 VuePress 则更开放，可以支持不同的打包工具：目前支持 Vite、Webpack 和 Rspack，并且同样可以支持其他打包工具。此外，VuePress 拥有官方的 [生态系统](https://ecosystem.vuejs.press/) 项目，提供了大量的插件，为你构建功能丰富的网站提供了便利。
