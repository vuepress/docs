import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as c,c as o,d as i,a as n,b as e,w as v,e as l}from"./app-fcUJjNM4.js";const u={},p=n("h1",{id:"命令行接口",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#命令行接口"},[n("span",null,"命令行接口")])],-1),m={href:"https://www.npmjs.com/package/@vuepress/cli",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},b=l(`<p>执行 <code>vuepress --help</code> 来获取下列帮助信息：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Usage:
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),f={class:"hint-container tip"},g=n("p",{class:"hint-container-title"},"提示",-1),_={href:"https://www.npmjs.com/package/debug",target:"_blank",rel:"noopener noreferrer"},x=n("p",null,[e("设置环境变量 "),n("code",null,"DEBUG=vuepress*"),e(" 可以启用调试日志。")],-1),y=l(`<h2 id="dev" tabindex="-1"><a class="header-anchor" href="#dev"><span>dev</span></a></h2><p>启动一个开发服务器，在本地开发你的 VuePress 站点。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Usage:
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>通过命令行设置的配置项，会覆盖你配置文件中的同名配置项。</p></div><h2 id="build" tabindex="-1"><a class="header-anchor" href="#build"><span>build</span></a></h2>`,5),w=l(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Usage:
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>通过命令行设置的配置项，会覆盖你配置文件中的同名配置项。</p></div><h2 id="info" tabindex="-1"><a class="header-anchor" href="#info"><span>info</span></a></h2><p>输出当前系统和依赖相关的信息。</p><p>在你想要检查你的环境，或者提交 Issue 时候，可以使用该命令。</p>`,5);function k(D,S){const a=t("NpmBadge"),s=t("ExternalLinkIcon"),d=t("RouterLink");return c(),o("div",null,[p,i(a,{package:"@vuepress/cli"}),n("p",null,[e("VuePress 命令行接口是由 "),n("a",m,[e("@vuepress/cli"),i(s)]),e(" 包提供的。它包含在 "),n("a",h,[e("vuepress"),i(s)]),e(" 包之中，当然你也可以单独安装它。")]),b,n("div",f,[g,n("p",null,[e("VuePress 使用了 "),n("a",_,[e("debug"),i(s)]),e(" 模块。")]),x]),y,n("p",null,[e("将你的 VuePress 站点构建成静态文件，以便你进行后续"),i(d,{to:"/zh/guide/deployment.html"},{default:v(()=>[e("部署")]),_:1}),e("。")]),w])}const C=r(u,[["render",k],["__file","cli.html.vue"]]);export{C as default};
