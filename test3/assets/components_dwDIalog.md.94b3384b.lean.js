import{h as c,D as y,o as u,c as F,G as l,B as o,a as p,z as s,R as g}from"./chunks/framework.435bee4c.js";const f=s("div",null,"新的对话框",-1),v=s("div",null,"默认对话框",-1),m={__name:"bacsic",setup(_){const n=c(!1),t=c(!1),a=c("add"),d=c(!1),C=()=>{console.log("我是提交回调"),d.value=!0},D=()=>{console.log("我是重置回调")},h=()=>{n.value=!1,console.log("我是关闭回调")},q=()=>{a.value="add",n.value=!0},b=()=>{a.value="edit",n.value=!0},B=()=>{t.value=!0};return(Es,e)=>{const r=y("qy-button"),i=y("dw-dialog");return u(),F("div",null,[l(r,{type:"primary",onClick:B},{default:o(()=>[p("基础用法")]),_:1}),l(r,{type:"primary",onClick:q},{default:o(()=>[p("点击新增")]),_:1}),l(r,{type:"primary",onClick:b},{default:o(()=>[p("点击编辑")]),_:1}),l(i,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=E=>n.value=E),title:"新的对话框",width:"700px",showFooter:"",footerType:a.value,leftLoading:d.value,onLeftBtn:C,onReset:D,onClose:h},{default:o(()=>[f]),_:1},8,["modelValue","footerType","leftLoading"]),l(i,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=E=>t.value=E),title:"默认对话框",width:"700px"},{default:o(()=>[v]),_:1},8,["modelValue"])])}}},A=s("h1",{id:"dwdialog-对话框",tabindex:"-1"},"dwDialog 对话框",-1),V=s("p",null,"在保留当前页面状态的情况下，告知用户并承载相关操作。",-1),w=g("",2),T=s("thead",null,[s("tr",null,[s("th",null,"属性名"),s("th",null,"说明"),s("th",null,"类型"),s("th",null,"可选值"),s("th",null,"默认值")])],-1),k=s("tr",null,[s("td",null,"model-value / v-model"),s("td",null,"是否显示 Dialog"),s("td",null,"boolean"),s("td",null,"—"),s("td",null,"—")],-1),S=s("tr",null,[s("td",null,"title"),s("td",null,"Dialog 对话框 Dialog 的标题， 也可通过具名 slot （见下表）传入"),s("td",null,"string"),s("td",null,"—"),s("td",null,"—")],-1),x=s("tr",null,[s("td",null,"width"),s("td",null,"Dialog 的宽度"),s("td",null,"string / number"),s("td",null,"—"),s("td",null,"50%")],-1),R=s("tr",null,[s("td",null,"fullscreen"),s("td",null,"是否为全屏 Dialog"),s("td",null,"boolean"),s("td",null,"—"),s("td",null,"false")],-1),N=s("tr",null,[s("td",null,"top"),s("td",null,"Dialog CSS 中的 margin-top 值"),s("td",null,"string"),s("td",null,"—"),s("td",null,"15vh")],-1),I=s("tr",null,[s("td",null,"modal"),s("td",null,"是否需要遮罩层"),s("td",null,"boolean"),s("td",null,"—"),s("td",null,"true")],-1),P=s("tr",null,[s("td",null,"append-to-body"),s("td",null,"Dialog 自身是否插入至 body 元素上。 嵌套的 Dialog 必须指定该属性并赋值为 true"),s("td",null,"boolean"),s("td",null,"—"),s("td",null,"false")],-1),L=s("tr",null,[s("td",null,"lock-scroll"),s("td",null,"是否在 Dialog 出现时将 body 滚动锁定"),s("td",null,"boolean"),s("td",null,"—"),s("td",null,"true")],-1),U=s("td",null,"Dialog 的自定义类名",-1),$=s("td",null,"string",-1),G=s("td",null,"—",-1),O=s("td",null,"—",-1),j=s("tr",null,[s("td",null,"open-delay"),s("td",null,"Dialog 打开的延时时间，单位毫秒"),s("td",null,"number"),s("td",null,"—"),s("td",null,"0")],-1),z=s("tr",null,[s("td",null,"close-delay"),s("td",null,"Dialog 关闭的延时时间，单位毫秒"),s("td",null,"number"),s("td",null,"—"),s("td",null,"0")],-1),J=s("tr",null,[s("td",null,"close-on-click-modal"),s("td",null,"是否可以通过点击 modal 关闭 Dialog"),s("td",null,"boolean"),s("td",null,"—"),s("td",null,"true")],-1),W=s("tr",null,[s("td",null,"close-on-press-escape"),s("td",null,"是否可以通过按下 ESC 关闭 Dialog"),s("td",null,"boolean"),s("td",null,"—"),s("td",null,"true")],-1),H=s("tr",null,[s("td",null,"show-close"),s("td",null,"是否显示关闭按钮"),s("td",null,"boolean"),s("td",null,"—"),s("td",null,"true")],-1),K=s("tr",null,[s("td",null,"before-close"),s("td",null,"关闭前的回调，会暂停 Dialog 的关闭. 回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候."),s("td",null,"Function(done) (done is used to close the Dialog)"),s("td",null,"—"),s("td",null,"—")],-1),M=s("tr",null,[s("td",null,"draggable"),s("td",null,"为 Dialog 启用可拖拽功能"),s("td",null,"boolean"),s("td",null,"—"),s("td",null,"false")],-1),Q=s("tr",null,[s("td",null,"center"),s("td",null,"是否让 Dialog 的 header 和 footer 部分居中排列"),s("td",null,"boolean"),s("td",null,"—"),s("td",null,"false")],-1),X=s("tr",null,[s("td",null,"align-center"),s("td",null,"是否水平垂直对齐对话框"),s("td",null,"boolean"),s("td",null,"—"),s("td",null,"false")],-1),Y=s("tr",null,[s("td",null,"destroy-on-close"),s("td",null,"当关闭 Dialog 时，销毁其中的元素"),s("td",null,"boolean"),s("td",null,"—"),s("td",null,"false")],-1),Z=s("tr",null,[s("td",null,"showFooter"),s("td",null,"是否显示默认底部按钮"),s("td",null,"boolean"),s("td"),s("td",null,"false")],-1),ss=s("tr",null,[s("td",null,"footerType"),s("td",null,"使用showFooter时设置"),s("td",null,"string 'edit'| 'add'"),s("td"),s("td")],-1),ls=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,"custom-class 已被 弃用, 之后 将会被 移除到 2.3.0, 请使用 class.")],-1),ns=s("h2",{id:"slots",tabindex:"-1"},"Slots",-1),as=s("thead",null,[s("tr",null,[s("th",null,"插槽名"),s("th",null,"说明")])],-1),os=s("tr",null,[s("td",null,"—"),s("td",null,"content of Dialog")],-1),ps=s("tr",null,[s("td",null,"header"),s("td",null,"对话框标题的内容；会替换标题部分，但不会移除关闭按钮。")],-1),ts=s("td",null,"与 header 作用相同 请使用 header",-1),es=s("tr",null,[s("td",null,"footer"),s("td",null,"Dialog 按钮操作区的内容")],-1),cs=g("",2),ds=JSON.parse('{"title":"dwDialog 对话框","description":"","frontmatter":{},"headers":[],"relativePath":"components/dwDIalog.md","filePath":"components/dwDIalog.md","lastUpdated":1679474181000}'),rs={name:"components/dwDIalog.md"},is=Object.assign(rs,{setup(_){return(n,t)=>{const a=y("DeprecatedTag");return u(),F("div",null,[A,V,l(m),w,s("table",null,[T,s("tbody",null,[k,S,x,R,N,I,P,L,s("tr",null,[s("td",null,[p("custom-class"),l(a)]),U,$,G,O]),j,z,J,W,H,K,M,Q,X,Y,Z,ss])]),ls,ns,s("table",null,[as,s("tbody",null,[os,ps,s("tr",null,[s("td",null,[p("title"),l(a)]),ts]),es])]),cs])}}});export{ds as __pageData,is as default};
