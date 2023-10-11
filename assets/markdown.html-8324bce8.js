import{_ as u,r as t,o as p,c as v,a,b as n,w as e,d as s,e as c}from"./app-4728242c.js";const m={},b=n("h1",{id:"markdown",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#markdown","aria-hidden":"true"},"#"),s(" Markdown")],-1),g=n("h2",{id:"自定义容器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#自定义容器","aria-hidden":"true"},"#"),s(" 自定义容器")],-1),k=c(`<p>使用：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span> [title]
[content]
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>type</code> 是必需的， <code>title</code> 和 <code>content</code> 是可选的。</p><p>支持的 <code>type</code> 有：</p>`,4),h=n("li",null,[n("code",null,"tip")],-1),_=n("li",null,[n("code",null,"warning")],-1),f=n("li",null,[n("code",null,"danger")],-1),w=n("li",null,[n("code",null,"details")],-1),y=n("ul",null,[n("li",null,[n("code",null,"code-group")]),n("li",null,[n("code",null,"code-group-item")])],-1),x=n("li",null,[n("p",null,"示例 1 （默认标题）：")],-1),q=c(`<p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tip

这是一个提示

:::

::: warning

这是一个警告

:::

::: danger

这是一个危险警告

:::

::: details
这是一个 details 标签

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这是一个提示</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这是一个警告</p></div><div class="hint-container danger"><p class="hint-container-title">警告</p><p>这是一个危险警告</p></div><details class="hint-container details"><summary>详情</summary><p>这是一个 details 标签</p></details><ul><li>示例 2 （自定义标题）：</li></ul><p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: danger STOP
危险区域，禁止通行

:::

::: details 点击查看代码

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">ts</span>
<span class="token code-block language-ts"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;你好，VuePress！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="hint-container danger"><p class="hint-container-title">STOP</p><p>危险区域，禁止通行</p></div><details class="hint-container details"><summary>点击查看代码</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;你好，VuePress！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><ul><li>示例 3 （Code Group 别名）：</li></ul><p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::: code-group
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p>`,17),B=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" foo "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"foo"'),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" bar "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"bar"'),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1);function A(C,N){const o=t("NpmBadge"),d=t("RouterLink"),r=t("CodeTabs");return p(),v("div",null,[b,a(o,{package:"@vuepress/theme-default"}),g,n("ul",null,[n("li",null,[k,n("ul",null,[h,_,f,w,n("li",null,[a(d,{to:"/zh/reference/default-theme/components.html#codegroup"},{default:e(()=>[s("CodeGroup")]),_:1}),s(" 和 "),a(d,{to:"/zh/reference/default-theme/components.html#codegroupitem"},{default:e(()=>[s("CodeGroupItem")]),_:1}),s(" 的别名： "),y])])]),x]),q,a(r,{id:"129",data:[{id:"FOO"},{id:"BAR"}]},{title0:e(({value:i,isActive:l})=>[s("FOO")]),title1:e(({value:i,isActive:l})=>[s("BAR")]),tab0:e(({value:i,isActive:l})=>[B]),tab1:e(({value:i,isActive:l})=>[O]),_:1})])}const R=u(m,[["render",A],["__file","markdown.html.vue"]]);export{R as default};
