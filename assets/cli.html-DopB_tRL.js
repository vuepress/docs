import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as l,c as t,a as r,b as e,d as c,w as d,e as n}from"./app-5nSivCWm.js";const p={},o=n(`<h1 id="command-line-interface" tabindex="-1"><a class="header-anchor" href="#command-line-interface"><span>Command Line Interface</span></a></h1><p>Run <code>vuepress --help</code> to get following help messages:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">Usage:</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>VuePress is using <a href="https://www.npmjs.com/package/debug" target="_blank" rel="noopener noreferrer">debug</a> module.</p><p>Set environment variable <code>DEBUG=vuepress*</code> to enable debug logs.</p></div><h2 id="dev" tabindex="-1"><a class="header-anchor" href="#dev"><span>dev</span></a></h2><p>Start a development server to develop your VuePress site locally.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">Usage:</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Options set by CLI will override those options with the same name in your config file.</p></div><h2 id="build" tabindex="-1"><a class="header-anchor" href="#build"><span>build</span></a></h2>`,9),m=n(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">Usage:</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Options set by CLI will override those options with the same name in your config file.</p></div><h2 id="info" tabindex="-1"><a class="header-anchor" href="#info"><span>info</span></a></h2><p>Outputs information about your system and dependencies.</p><p>This command would be helpful when you want to check your environment or report an issue.</p>`,5);function v(u,h){const s=a("RouteLink");return l(),t("div",null,[o,r("p",null,[e("Build your VuePress site to static files, which are ready for "),c(s,{to:"/guide/deployment.html"},{default:d(()=>[e("deployment")]),_:1}),e(".")]),m])}const g=i(p,[["render",v],["__file","cli.html.vue"]]),y=JSON.parse('{"path":"/reference/cli.html","title":"Command Line Interface","lang":"en-US","frontmatter":{"icon":"bi:terminal-fill","description":"Command Line Interface Run vuepress --help to get following help messages: Tips VuePress is using debug module. Set environment variable DEBUG=vuepress* to enable debug logs. de...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuejs.press/zh/reference/cli.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/reference/cli.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Command Line Interface"}],["meta",{"property":"og:description","content":"Command Line Interface Run vuepress --help to get following help messages: Tips VuePress is using debug module. Set environment variable DEBUG=vuepress* to enable debug logs. de..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-06T14:32:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-06T14:32:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Command Line Interface\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-06T14:32:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"dev","slug":"dev","link":"#dev","children":[]},{"level":2,"title":"build","slug":"build","link":"#build","children":[]},{"level":2,"title":"info","slug":"info","link":"#info","children":[]}],"git":{"createdTime":1701614677000,"updatedTime":1707229978000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3},{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":3}]},"readingTime":{"minutes":1.1,"words":330},"filePathRelative":"reference/cli.md","localizedDate":"December 3, 2023","autoDesc":true}');export{g as comp,y as data};
