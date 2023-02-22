import{_ as p,P as v,Q as m,Z as e,S as n,a0 as s,$ as a,a1 as t,D as i}from"./framework-5062c97b.js";const g={},b=n("h1",{id:"markdown",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown","aria-hidden":"true"},"#"),s(" Markdown")],-1),k=n("h2",{id:"custom-containers",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#custom-containers","aria-hidden":"true"},"#"),s(" Custom Containers")],-1),h=t(`<p>Usage:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span> [title]
[content]
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>type</code> is required, and the <code>title</code> and <code>content</code> are optional.</p><p>Supported <code>type</code> :</p>`,4),_=n("li",null,[n("code",null,"tip")],-1),w=n("li",null,[n("code",null,"warning")],-1),f=n("li",null,[n("code",null,"danger")],-1),x=n("li",null,[n("code",null,"details")],-1),y=n("ul",null,[n("li",null,[n("code",null,"code-group")]),n("li",null,[n("code",null,"code-group-item")])],-1),T=n("li",null,[n("p",null,"Example 1 (default title):")],-1),C=t(`<p><strong>Input</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tip

This is a tip

:::

::: warning

This is a warning

:::

::: danger

This is a dangerous warning

:::

::: details
This is a details block

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>This is a tip</p></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p>This is a warning</p></div><div class="hint-container danger"><p class="hint-container-title">Warning</p><p>This is a dangerous warning</p></div><details class="hint-container details"><summary>Details</summary><p>This is a details block</p></details><ul><li>Example 2 (custom title):</li></ul><p><strong>Input</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: danger STOP
Danger zone, do not proceed

:::

::: details Click me to view the code

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts</span>
<span class="token code-block language-ts"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, VuePress!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p><div class="hint-container danger"><p class="hint-container-title">STOP</p><p>Danger zone, do not proceed</p></div><details class="hint-container details"><summary>Click me to view the code</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, VuePress!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><ul><li>Example 3 (code group alias):</li></ul><p><strong>Input</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: code-group
::: code-group-item FOO

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts</span>
<span class="token code-block language-ts"><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::: code-group-item BAR

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts</span>
<span class="token code-block language-ts"><span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::

::::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>`,17),q=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" foo "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"foo"'),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" bar "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"bar"'),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1);function B(N,V){const d=i("NpmBadge"),l=i("RouterLink"),o=i("CodeTabs");return v(),m("div",null,[b,e(d,{package:"@vuepress/theme-default"}),k,n("ul",null,[n("li",null,[h,n("ul",null,[_,w,f,x,n("li",null,[s("Alias of "),e(l,{to:"/reference/default-theme/components.html#codegroup"},{default:a(()=>[s("CodeGroup")]),_:1}),s(" and "),e(l,{to:"/reference/default-theme/components.html#codegroupitem"},{default:a(()=>[s("CodeGroupItem")]),_:1}),s(": "),y])])]),T]),C,e(o,{id:"129",data:[{title:"FOO"},{title:"BAR"}]},{tab0:a(({title:c,value:r,isActive:u})=>[q]),tab1:a(({title:c,value:r,isActive:u})=>[O]),_:1})])}const P=p(g,[["render",B],["__file","markdown.html.vue"]]);export{P as default};
