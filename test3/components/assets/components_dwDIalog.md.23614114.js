import{h as c,D as y,o as u,c as F,G as l,B as o,a as p,z as s,R as g}from"./chunks/framework.ab15ea6c.js";const f=s("div",null,"新的对话框",-1),v=s("div",null,"默认对话框",-1),m={__name:"bacsic",setup(_){const n=c(!1),t=c(!1),a=c("add"),d=c(!1),C=()=>{console.log("我是提交回调"),d.value=!0},D=()=>{console.log("我是重置回调")},h=()=>{n.value=!1,console.log("我是关闭回调")},q=()=>{a.value="add",n.value=!0},b=()=>{a.value="edit",n.value=!0},B=()=>{t.value=!0};return(Es,e)=>{const r=y("qy-button"),i=y("dw-dialog");return u(),F("div",null,[l(r,{type:"primary",onClick:B},{default:o(()=>[p("基础用法")]),_:1}),l(r,{type:"primary",onClick:q},{default:o(()=>[p("点击新增")]),_:1}),l(r,{type:"primary",onClick:b},{default:o(()=>[p("点击编辑")]),_:1}),l(i,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=E=>n.value=E),title:"新的对话框",width:"700px",showFooter:"",footerType:a.value,leftLoading:d.value,onLeftBtn:C,onReset:D,onClose:h},{default:o(()=>[f]),_:1},8,["modelValue","footerType","leftLoading"]),l(i,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=E=>t.value=E),title:"默认对话框",width:"700px"},{default:o(()=>[v]),_:1},8,["modelValue"])])}}},A=s("h1",{id:"dwdialog-对话框",tabindex:"-1"},"dwDialog 对话框",-1),V=s("p",null,"在保留当前页面状态的情况下，告知用户并承载相关操作。",-1),w=g(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">qy-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;onClick&quot;</span><span style="color:#E1E4E8;">&gt;基础用法&lt;/</span><span style="color:#85E89D;">qy-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">qy-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;open&quot;</span><span style="color:#E1E4E8;">&gt;点击新增&lt;/</span><span style="color:#85E89D;">qy-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">qy-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;edit&quot;</span><span style="color:#E1E4E8;">&gt;点击编辑&lt;/</span><span style="color:#85E89D;">qy-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">dw-dialog</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dialogVisible&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;新的对话框&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">               </span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;700px&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">               </span><span style="color:#B392F0;">showFooter</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:footerType</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;footerType&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">               </span><span style="color:#B392F0;">:leftLoading</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;loading&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@leftBtn</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;onSubmit&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@reset</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;onReset&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">               </span><span style="color:#B392F0;">@close</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;onClose&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;新的对话框&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">dw-dialog</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">dw-dialog</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;dialogVisible2&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;默认对话框&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;700px&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;默认对话框&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">dw-dialog</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dialogVisible</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dialogVisible2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">footerType</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;add&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">loading</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onSubmit</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;我是提交回调&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  loading.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onReset</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;我是重置回调&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onClose</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  dialogVisible.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;我是关闭回调&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  footerType.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;add&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  dialogVisible.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">edit</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  footerType.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;edit&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  dialogVisible.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onClick</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  dialogVisible2.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">qy-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;onClick&quot;</span><span style="color:#24292E;">&gt;基础用法&lt;/</span><span style="color:#22863A;">qy-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">qy-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;open&quot;</span><span style="color:#24292E;">&gt;点击新增&lt;/</span><span style="color:#22863A;">qy-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">qy-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;edit&quot;</span><span style="color:#24292E;">&gt;点击编辑&lt;/</span><span style="color:#22863A;">qy-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">dw-dialog</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dialogVisible&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;新的对话框&quot;</span></span>
<span class="line"><span style="color:#24292E;">               </span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;700px&quot;</span></span>
<span class="line"><span style="color:#24292E;">               </span><span style="color:#6F42C1;">showFooter</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:footerType</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;footerType&quot;</span></span>
<span class="line"><span style="color:#24292E;">               </span><span style="color:#6F42C1;">:leftLoading</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;loading&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@leftBtn</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;onSubmit&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@reset</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;onReset&quot;</span></span>
<span class="line"><span style="color:#24292E;">               </span><span style="color:#6F42C1;">@close</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;onClose&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;新的对话框&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">dw-dialog</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">dw-dialog</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;dialogVisible2&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;默认对话框&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;700px&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;默认对话框&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">dw-dialog</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dialogVisible</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dialogVisible2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">footerType</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;add&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">loading</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onSubmit</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;我是提交回调&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  loading.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onReset</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;我是重置回调&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onClose</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  dialogVisible.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;我是关闭回调&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">open</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  footerType.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;add&#39;</span></span>
<span class="line"><span style="color:#24292E;">  dialogVisible.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">edit</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  footerType.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;edit&#39;</span></span>
<span class="line"><span style="color:#24292E;">  dialogVisible.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onClick</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  dialogVisible2.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="attributes" tabindex="-1">Attributes</h2>`,2),T=s("thead",null,[s("tr",null,[s("th",null,"属性名"),s("th",null,"说明"),s("th",null,"类型"),s("th",null,"可选值"),s("th",null,"默认值")])],-1),k=s("tr",null,[s("td",null,"model-value / v-model"),s("td",null,"是否显示 Dialog"),s("td",null,"boolean"),s("td",null,"—"),s("td",null,"—")],-1),S=s("tr",null,[s("td",null,"title"),s("td",null,"Dialog 对话框 Dialog 的标题， 也可通过具名 slot （见下表）传入"),s("td",null,"string"),s("td",null,"—"),s("td",null,"—")],-1),x=s("tr",null,[s("td",null,"width"),s("td",null,"Dialog 的宽度"),s("td",null,"string / number"),s("td",null,"—"),s("td",null,"50%")],-1),R=s("tr",null,[s("td",null,"fullscreen"),s("td",null,"是否为全屏 Dialog"),s("td",null,"boolean"),s("td",null,"—"),s("td",null,"false")],-1),N=s("tr",null,[s("td",null,"top"),s("td",null,"Dialog CSS 中的 margin-top 值"),s("td",null,"string"),s("td",null,"—"),s("td",null,"15vh")],-1),I=s("tr",null,[s("td",null,"modal"),s("td",null,"是否需要遮罩层"),s("td",null,"boolean"),s("td",null,"—"),s("td",null,"true")],-1),P=s("tr",null,[s("td",null,"append-to-body"),s("td",null,"Dialog 自身是否插入至 body 元素上。 嵌套的 Dialog 必须指定该属性并赋值为 true"),s("td",null,"boolean"),s("td",null,"—"),s("td",null,"false")],-1),L=s("tr",null,[s("td",null,"lock-scroll"),s("td",null,"是否在 Dialog 出现时将 body 滚动锁定"),s("td",null,"boolean"),s("td",null,"—"),s("td",null,"true")],-1),U=s("td",null,"Dialog 的自定义类名",-1),$=s("td",null,"string",-1),G=s("td",null,"—",-1),O=s("td",null,"—",-1),j=s("tr",null,[s("td",null,"open-delay"),s("td",null,"Dialog 打开的延时时间，单位毫秒"),s("td",null,"number"),s("td",null,"—"),s("td",null,"0")],-1),z=s("tr",null,[s("td",null,"close-delay"),s("td",null,"Dialog 关闭的延时时间，单位毫秒"),s("td",null,"number"),s("td",null,"—"),s("td",null,"0")],-1),J=s("tr",null,[s("td",null,"close-on-click-modal"),s("td",null,"是否可以通过点击 modal 关闭 Dialog"),s("td",null,"boolean"),s("td",null,"—"),s("td",null,"true")],-1),W=s("tr",null,[s("td",null,"close-on-press-escape"),s("td",null,"是否可以通过按下 ESC 关闭 Dialog"),s("td",null,"boolean"),s("td",null,"—"),s("td",null,"true")],-1),H=s("tr",null,[s("td",null,"show-close"),s("td",null,"是否显示关闭按钮"),s("td",null,"boolean"),s("td",null,"—"),s("td",null,"true")],-1),K=s("tr",null,[s("td",null,"before-close"),s("td",null,"关闭前的回调，会暂停 Dialog 的关闭. 回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候."),s("td",null,"Function(done) (done is used to close the Dialog)"),s("td",null,"—"),s("td",null,"—")],-1),M=s("tr",null,[s("td",null,"draggable"),s("td",null,"为 Dialog 启用可拖拽功能"),s("td",null,"boolean"),s("td",null,"—"),s("td",null,"false")],-1),Q=s("tr",null,[s("td",null,"center"),s("td",null,"是否让 Dialog 的 header 和 footer 部分居中排列"),s("td",null,"boolean"),s("td",null,"—"),s("td",null,"false")],-1),X=s("tr",null,[s("td",null,"align-center"),s("td",null,"是否水平垂直对齐对话框"),s("td",null,"boolean"),s("td",null,"—"),s("td",null,"false")],-1),Y=s("tr",null,[s("td",null,"destroy-on-close"),s("td",null,"当关闭 Dialog 时，销毁其中的元素"),s("td",null,"boolean"),s("td",null,"—"),s("td",null,"false")],-1),Z=s("tr",null,[s("td",null,"showFooter"),s("td",null,"是否显示默认底部按钮"),s("td",null,"boolean"),s("td"),s("td",null,"false")],-1),ss=s("tr",null,[s("td",null,"footerType"),s("td",null,"使用showFooter时设置"),s("td",null,"string 'edit'| 'add'"),s("td"),s("td")],-1),ls=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,"custom-class 已被 弃用, 之后 将会被 移除到 2.3.0, 请使用 class.")],-1),ns=s("h2",{id:"slots",tabindex:"-1"},"Slots",-1),as=s("thead",null,[s("tr",null,[s("th",null,"插槽名"),s("th",null,"说明")])],-1),os=s("tr",null,[s("td",null,"—"),s("td",null,"content of Dialog")],-1),ps=s("tr",null,[s("td",null,"header"),s("td",null,"对话框标题的内容；会替换标题部分，但不会移除关闭按钮。")],-1),ts=s("td",null,"与 header 作用相同 请使用 header",-1),es=s("tr",null,[s("td",null,"footer"),s("td",null,"Dialog 按钮操作区的内容")],-1),cs=g('<h2 id="events" tabindex="-1">Events</h2><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>open</td><td>Dialog 打开的回调</td><td>—</td></tr><tr><td>opened</td><td>Dialog 打开动画结束时的回调</td><td>—</td></tr><tr><td>close</td><td>Dialog 关闭的回调</td><td>—</td></tr><tr><td>closed</td><td>Dialog 关闭动画结束时的回调</td><td>—</td></tr><tr><td>open-auto-focus</td><td>输入焦点聚焦在 Dialog 内容时的回调</td><td>—</td></tr><tr><td>close-auto-focus</td><td>输入焦点从 Dialog 内容失焦时的回调</td><td>—</td></tr><tr><td>leftBtn</td><td>左按钮回调</td><td></td></tr><tr><td>reset</td><td>重置按钮回调</td><td></td></tr></tbody></table>',2),ds=JSON.parse('{"title":"dwDialog 对话框","description":"","frontmatter":{},"headers":[],"relativePath":"components/dwDIalog.md","filePath":"components/dwDIalog.md","lastUpdated":1679474181000}'),rs={name:"components/dwDIalog.md"},is=Object.assign(rs,{setup(_){return(n,t)=>{const a=y("DeprecatedTag");return u(),F("div",null,[A,V,l(m),w,s("table",null,[T,s("tbody",null,[k,S,x,R,N,I,P,L,s("tr",null,[s("td",null,[p("custom-class"),l(a)]),U,$,G,O]),j,z,J,W,H,K,M,Q,X,Y,Z,ss])]),ls,ns,s("table",null,[as,s("tbody",null,[os,ps,s("tr",null,[s("td",null,[p("title"),l(a)]),ts]),es])]),cs])}}});export{ds as __pageData,is as default};
