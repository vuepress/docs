import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{h as l,c as o,a as c,b as a,t as h,e as B,f as g,i as p,o as u}from"./app-B5XEyT9V.js";const m="Vue in Markdown",y={__name:"markdown-and-vue-sfc.html",setup(k,{expose:s}){s();const e=(r,t)=>p("div",{class:"red-div"},t.slots.default()),i=l(0),n={RedDiv:e,msg:m,count:i,h:p,ref:l};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function A(k,s,e,i,n,r){return u(),o("div",null,[s[1]||(s[1]=c(`<h1 id="markdown-and-vue-sfc" tabindex="-1"><a class="header-anchor" href="#markdown-and-vue-sfc"><span>Markdown and Vue SFC</span></a></h1><p>Each Markdown file is first compiled into HTML, and then converted to a Vue SFC. In other words, you can write a Markdown file like a Vue SFC:</p><ul><li>Blocks <code>&lt;script&gt;</code> and <code>&lt;style&gt;</code> are treated as Vue SFC blocks as they are. In other words, they are hoisted from the <code>&lt;template&gt;</code> block to the top-level of SFC.</li><li>Everything outside <code>&lt;script&gt;</code> and <code>&lt;style&gt;</code> will be compiled into HTML, and be treated as Vue SFC <code>&lt;template&gt;</code> block.</li></ul><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>As Vue SFC can contain only one <code>&lt;script&gt;</code> element, you should avoid using more than one <code>&lt;script&gt;</code> in VuePress markdown.</p></div><p>Here comes an example:</p><p><strong>Input</strong></p><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="markdown-and-vue-sfc.md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">_Hello, {{ msg }}_</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">RedDiv</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">_Current count is: {{ count }}_</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">RedDiv</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> @</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">click</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">count</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;Click Me!&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> setup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ref</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> RedDiv</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">_</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">ctx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &#39;div&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      class</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;red-div&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    ctx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">slots</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  )</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> msg</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;Vue in Markdown&#39;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> count</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ref</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">.red-div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>`,8)),a("p",null,[a("em",null,"Hello, "+h(i.msg))]),B(i.RedDiv,null,{default:g(()=>[a("p",null,[a("em",null,"Current count is: "+h(i.count),1)])]),_:1}),a("p",null,[a("button",{onClick:s[0]||(s[0]=t=>i.count++)},"Click Me!")])])}const b=d(y,[["render",A],["__file","markdown-and-vue-sfc.html.vue"]]),C=JSON.parse('{"path":"/advanced/cookbook/markdown-and-vue-sfc.html","title":"Markdown and Vue SFC","lang":"en-US","frontmatter":{"icon":"fa6-brands:vuejs","description":"Markdown and Vue SFC Each Markdown file is first compiled into HTML, and then converted to a Vue SFC. In other words, you can write a Markdown file like a Vue SFC: Blocks <scrip...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuejs.press/zh/advanced/cookbook/markdown-and-vue-sfc.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/advanced/cookbook/markdown-and-vue-sfc.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"Markdown and Vue SFC"}],["meta",{"property":"og:description","content":"Markdown and Vue SFC Each Markdown file is first compiled into HTML, and then converted to a Vue SFC. In other words, you can write a Markdown file like a Vue SFC: Blocks <scrip..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-25T14:35:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-25T14:35:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Markdown and Vue SFC\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-25T14:35:00.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1701614677000,"updatedTime":1727274900000,"contributors":[{"name":"Mr.Hope","username":"Mr.Hope","email":"mister-hope@outlook.com","commits":2,"url":"https://github.com/Mr.Hope"},{"name":"meteorlxy","username":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":2,"url":"https://github.com/meteorlxy"},{"name":"Xinyu Liu","username":"Xinyu Liu","email":"meteor.lxy@foxmail.com","commits":1,"url":"https://github.com/Xinyu Liu"}]},"readingTime":{"minutes":0.71,"words":214},"filePathRelative":"advanced/cookbook/markdown-and-vue-sfc.md","localizedDate":"December 3, 2023","autoDesc":true}');export{b as comp,C as data};