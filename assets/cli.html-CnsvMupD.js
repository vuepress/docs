import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c as t,a as c,b as e,d as r,w as p,e as s}from"./app-5nSivCWm.js";const d={},o=s(`<h1 id="命令行接口" tabindex="-1"><a class="header-anchor" href="#命令行接口"><span>命令行接口</span></a></h1><p>执行 <code>vuepress --help</code> 来获取下列帮助信息：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">Usage:</span>
<span class="line">  $ vuepress &lt;command&gt; [options]</span>
<span class="line"></span>
<span class="line">Commands:</span>
<span class="line">  dev [sourceDir]    Start development server</span>
<span class="line">  build [sourceDir]  Build to static site</span>
<span class="line">  info               Display environment information</span>
<span class="line"></span>
<span class="line">For more info, run any command with the \`--help\` flag:</span>
<span class="line">  $ vuepress dev --help</span>
<span class="line">  $ vuepress build --help</span>
<span class="line">  $ vuepress info --help</span>
<span class="line"></span>
<span class="line">Options:</span>
<span class="line">  -v, --version  Display version number</span>
<span class="line">  -h, --help     Display this message</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>VuePress 使用了 <a href="https://www.npmjs.com/package/debug" target="_blank" rel="noopener noreferrer">debug</a> 模块。</p><p>设置环境变量 <code>DEBUG=vuepress*</code> 可以启用调试日志。</p></div><h2 id="dev" tabindex="-1"><a class="header-anchor" href="#dev"><span>dev</span></a></h2><p>启动一个开发服务器，在本地开发你的 VuePress 站点。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">Usage:</span>
<span class="line">  $ vuepress dev [sourceDir]</span>
<span class="line"></span>
<span class="line">Options:</span>
<span class="line">  -c, --config &lt;config&gt;  Set path to config file</span>
<span class="line">  -p, --port &lt;port&gt;      Use specified port (default: 8080)</span>
<span class="line">  -t, --temp &lt;temp&gt;      Set the directory of the temporary files</span>
<span class="line">  --host &lt;host&gt;          Use specified host (default: 0.0.0.0)</span>
<span class="line">  --cache &lt;cache&gt;        Set the directory of the cache files</span>
<span class="line">  --clean-temp           Clean the temporary files before dev</span>
<span class="line">  --clean-cache          Clean the cache files before dev</span>
<span class="line">  --open                 Open browser when ready</span>
<span class="line">  --debug                Enable debug mode</span>
<span class="line">  --no-watch             Disable watching page and config files (default: true)</span>
<span class="line">  -v, --version          Display version number</span>
<span class="line">  -h, --help             Display this message</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>通过命令行设置的配置项，会覆盖你配置文件中的同名配置项。</p></div><h2 id="build" tabindex="-1"><a class="header-anchor" href="#build"><span>build</span></a></h2>`,9),v=s(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">Usage:</span>
<span class="line">  $ vuepress build [sourceDir]</span>
<span class="line"></span>
<span class="line">Options:</span>
<span class="line">  -c, --config &lt;config&gt;  Set path to config file</span>
<span class="line">  -d, --dest &lt;dest&gt;      Set the directory build output (default: .vuepress/dist)</span>
<span class="line">  -t, --temp &lt;temp&gt;      Set the directory of the temporary files</span>
<span class="line">  --cache &lt;cache&gt;        Set the directory of the cache files</span>
<span class="line">  --clean-temp           Clean the temporary files before build</span>
<span class="line">  --clean-cache          Clean the cache files before build</span>
<span class="line">  --debug                Enable debug mode</span>
<span class="line">  -v, --version          Display version number</span>
<span class="line">  -h, --help             Display this message</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>通过命令行设置的配置项，会覆盖你配置文件中的同名配置项。</p></div><h2 id="info" tabindex="-1"><a class="header-anchor" href="#info"><span>info</span></a></h2><p>输出当前系统和依赖相关的信息。</p><p>在你想要检查你的环境，或者提交 Issue 时候，可以使用该命令。</p>`,5);function u(m,h){const n=i("RouteLink");return l(),t("div",null,[o,c("p",null,[e("将你的 VuePress 站点构建成静态文件，以便你进行后续"),r(n,{to:"/zh/guide/deployment.html"},{default:p(()=>[e("部署")]),_:1}),e("。")]),v])}const g=a(d,[["render",u],["__file","cli.html.vue"]]),y=JSON.parse('{"path":"/zh/reference/cli.html","title":"命令行接口","lang":"zh-CN","frontmatter":{"icon":"bi:terminal-fill","description":"命令行接口 执行 vuepress --help 来获取下列帮助信息： 提示 VuePress 使用了 debug 模块。 设置环境变量 DEBUG=vuepress* 可以启用调试日志。 dev 启动一个开发服务器，在本地开发你的 VuePress 站点。 提示 通过命令行设置的配置项，会覆盖你配置文件中的同名配置项。 build 将你的 VuePr...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuejs.press/reference/cli.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/zh/reference/cli.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"命令行接口"}],["meta",{"property":"og:description","content":"命令行接口 执行 vuepress --help 来获取下列帮助信息： 提示 VuePress 使用了 debug 模块。 设置环境变量 DEBUG=vuepress* 可以启用调试日志。 dev 启动一个开发服务器，在本地开发你的 VuePress 站点。 提示 通过命令行设置的配置项，会覆盖你配置文件中的同名配置项。 build 将你的 VuePr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-06T14:32:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-06T14:32:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"命令行接口\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-06T14:32:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"dev","slug":"dev","link":"#dev","children":[]},{"level":2,"title":"build","slug":"build","link":"#build","children":[]},{"level":2,"title":"info","slug":"info","link":"#info","children":[]}],"git":{"createdTime":1701614677000,"updatedTime":1707229978000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3},{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":3}]},"readingTime":{"minutes":1.33,"words":399},"filePathRelative":"zh/reference/cli.md","localizedDate":"2023年12月3日","autoDesc":true}');export{g as comp,y as data};
