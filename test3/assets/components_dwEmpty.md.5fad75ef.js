import{D as r,o as s,c as n,F as o,N as E,z as a,t as y,A as i,G as d,R as F}from"./chunks/framework.760f5397.js";const _={__name:"bacsic",setup(t){const p=["noData","404","error","loadFail"];return(e,C)=>{const c=r("DwEmpty");return s(),n("div",null,[(s(),n(o,null,E(p,l=>(s(),n(o,{key:l},[a("h3",null,y(l),1),(s(),i(c,{key:0,type:l},null,8,["type"]))],64))),64))])}}};const u=a("h1",{id:"dwempty-空白占位",tabindex:"-1"},"dwEmpty 空白占位",-1),m=a("p",null,"常用网格列表布局",-1),h=a("h2",{id:"基础用法",tabindex:"-1"},"基础用法",-1),g=F(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">item </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> type</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">item</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;{{ item }}&lt;/</span><span style="color:#85E89D;">h3</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#FDAEB7;font-style:italic;">DwEmpty</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;show&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">show</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;noData&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;404&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;error&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;loadFail&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">v-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">item </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> type</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> :</span><span style="color:#6F42C1;">key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">item</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;{{ item }}&lt;/</span><span style="color:#22863A;">h3</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#B31D28;font-style:italic;">DwEmpty</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-if</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;show&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">show</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">type</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;noData&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;404&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;error&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;loadFail&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="attributes" tabindex="-1">Attributes</h2><table><thead><tr><th>属性名</th><th>说明</th><th>取值</th></tr></thead><tbody><tr><td>type</td><td>空白占位的类型</td><td>&#39;noData&#39; | &#39;404&#39; | &#39;error&#39; | &#39;loadFail&#39;</td></tr></tbody></table>`,3),A=JSON.parse('{"title":"dwEmpty 空白占位","description":"","frontmatter":{},"headers":[],"relativePath":"components/dwEmpty.md","filePath":"components/dwEmpty.md","lastUpdated":1679879110000}'),D={name:"components/dwEmpty.md"},v=Object.assign(D,{setup(t){return(p,e)=>(s(),n("div",null,[u,m,h,d(_),g]))}});export{A as __pageData,v as default};
