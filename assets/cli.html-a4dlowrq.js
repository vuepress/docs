import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as c,c as o,d as n,a as i,b as e,w as p,e as l}from"./app-O97jTrPz.js";const v={},m=i("h1",{id:"命令行接口",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#命令行接口"},[i("span",null,"命令行接口")])],-1),u={href:"https://www.npmjs.com/package/@vuepress/cli",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},b=l(`<p>执行 <code>vuepress --help</code> 来获取下列帮助信息：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Usage:
  $ vuepress &lt;command&gt; [options]

Commands:
  dev [sourceDir]    Start development server
  build [sourceDir]  Build to static site
  info               Display environment information

For more info, run any command with the \`--help\` flag:
  $ vuepress dev --help
  $ vuepress build --help
  $ vuepress info --help

Options:
  -v, --version  Display version number
  -h, --help     Display this message
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),f={class:"hint-container tip"},g=i("p",{class:"hint-container-title"},"提示",-1),_={href:"https://www.npmjs.com/package/debug",target:"_blank",rel:"noopener noreferrer"},y=i("p",null,[e("设置环境变量 "),i("code",null,"DEBUG=vuepress*"),e(" 可以启用调试日志。")],-1),x=l(`<h2 id="dev" tabindex="-1"><a class="header-anchor" href="#dev"><span>dev</span></a></h2><p>启动一个开发服务器，在本地开发你的 VuePress 站点。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Usage:
  $ vuepress dev [sourceDir]

Options:
  -c, --config &lt;config&gt;  Set path to config file
  -p, --port &lt;port&gt;      Use specified port (default: 8080)
  -t, --temp &lt;temp&gt;      Set the directory of the temporary files
  --host &lt;host&gt;          Use specified host (default: 0.0.0.0)
  --cache &lt;cache&gt;        Set the directory of the cache files
  --clean-temp           Clean the temporary files before dev
  --clean-cache          Clean the cache files before dev
  --open                 Open browser when ready
  --debug                Enable debug mode
  --no-watch             Disable watching page and config files (default: true)
  -v, --version          Display version number
  -h, --help             Display this message
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>通过命令行设置的配置项，会覆盖你配置文件中的同名配置项。</p></div><h2 id="build" tabindex="-1"><a class="header-anchor" href="#build"><span>build</span></a></h2>`,5),k=l(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Usage:
  $ vuepress build [sourceDir]

Options:
  -c, --config &lt;config&gt;  Set path to config file
  -d, --dest &lt;dest&gt;      Set the directory build output (default: .vuepress/dist)
  -t, --temp &lt;temp&gt;      Set the directory of the temporary files
  --cache &lt;cache&gt;        Set the directory of the cache files
  --clean-temp           Clean the temporary files before build
  --clean-cache          Clean the cache files before build
  --debug                Enable debug mode
  -v, --version          Display version number
  -h, --help             Display this message
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>通过命令行设置的配置项，会覆盖你配置文件中的同名配置项。</p></div><h2 id="info" tabindex="-1"><a class="header-anchor" href="#info"><span>info</span></a></h2><p>输出当前系统和依赖相关的信息。</p><p>在你想要检查你的环境，或者提交 Issue 时候，可以使用该命令。</p>`,5);function w(D,S){const a=s("NpmBadge"),t=s("ExternalLinkIcon"),r=s("RouteLink");return c(),o("div",null,[m,n(a,{package:"@vuepress/cli"}),i("p",null,[e("VuePress 命令行接口是由 "),i("a",u,[e("@vuepress/cli"),n(t)]),e(" 包提供的。它包含在 "),i("a",h,[e("vuepress"),n(t)]),e(" 包之中，当然你也可以单独安装它。")]),b,i("div",f,[g,i("p",null,[e("VuePress 使用了 "),i("a",_,[e("debug"),n(t)]),e(" 模块。")]),y]),x,i("p",null,[e("将你的 VuePress 站点构建成静态文件，以便你进行后续"),n(r,{to:"/zh/guide/deployment.html"},{default:p(()=>[e("部署")]),_:1}),e("。")]),k])}const V=d(v,[["render",w],["__file","cli.html.vue"]]),z=JSON.parse('{"path":"/zh/reference/cli.html","title":"命令行接口","lang":"zh-CN","frontmatter":{"icon":"bi:terminal-fill","description":"命令行接口 ","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuejs.press/reference/cli.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/zh/reference/cli.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"命令行接口"}],["meta",{"property":"og:description","content":"命令行接口 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-02T14:23:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T14:23:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"命令行接口\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-02T14:23:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"dev","slug":"dev","link":"#dev","children":[]},{"level":2,"title":"build","slug":"build","link":"#build","children":[]},{"level":2,"title":"info","slug":"info","link":"#info","children":[]}],"git":{"createdTime":1701614677000,"updatedTime":1706883783000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2},{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":2}]},"readingTime":{"minutes":1.46,"words":439},"filePathRelative":"zh/reference/cli.md","localizedDate":"2023年12月3日","autoDesc":true}');export{V as comp,z as data};
