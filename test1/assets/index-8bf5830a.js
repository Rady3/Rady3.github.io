import{J as k,d as X,r as p,c as Y,G as Z,e as s,M as F,o as b,f as T,g as e,w as r,A as ee,v as C,j as x,h as d,m as ae,C as U,z as V,K as _,_ as te}from"./index-e296d5bf.js";const le=(c,n)=>k.get(`/admin/product/baseTrademark/${c}/${n}`),oe=c=>c.id?k.put("/admin/product/baseTrademark/update",c):k.post("/admin/product/baseTrademark/save",c),re=c=>k.delete("/admin/product/baseTrademark/remove/"+c),se=["src"],ne=["src"],ie=X({__name:"index",setup(c){let n=p(1),f=p(6),N=p(0),v=p([]),u=p(!1),o=Y({tmName:"",logoUrl:""}),m=p();const g=async(t=1)=>{n.value=t;let a=await le(n.value,f.value);a.code==200&&(N.value=a.data.total,v.value=a.data.records,console.log(v.value))};Z(()=>{g()});const z=()=>{g()},w=()=>{u.value=!0,o.id=0,o.tmName="",o.logoUrl="",V(()=>{m.value.clearValidate("tmName"),m.value.clearValidate("logoUrl")})},O=t=>{V(()=>{m.value.clearValidate("tmName"),m.value.clearValidate("logoUrl")}),u.value=!0,Object.assign(o,t)},G=()=>{u.value=!1},P=async()=>{await m.value.validate(),(await oe(o)).code==200?(u.value=!1,_({type:"success",message:o.id?"修改品牌成功":"添加品牌成功"}),g(o.id?n.value:1)):(_({type:"error",message:o.id?"修改品牌失败":"添加品牌失败"}),u.value=!1)},q=t=>t.type=="image/png"||t.type=="image/jpeg"||t.type=="image/gif"?t.size/1024/1024<4?!0:(_({type:"error",message:"上传文件大小小于4M"}),!1):(_({type:"error",message:"上传文件格式务必PNG|JPG|GIF"}),!1),A=t=>{o.logoUrl=t.data,m.value.clearValidate("logoUrl")},D={tmName:[{required:!0,trigger:"blur",validator:(t,a,i)=>{a.trim().length>=2?i():i(new Error("品牌名称位数大于等于两位"))}}],logoUrl:[{required:!0,validator:(t,a,i)=>{a?i():i(new Error("LOGO图片务必上传"))}}]},E=async t=>{(await re(t)).code==200?(_({type:"success",message:"删除品牌成功"}),g(v.value.length>1?n.value:n.value-1)):_({type:"error",message:"删除品牌失败"})};return(t,a)=>{const i=s("el-button"),y=s("el-table-column"),L=s("el-popconfirm"),M=s("el-table"),j=s("el-pagination"),$=s("el-card"),R=s("el-input"),h=s("el-form-item"),S=s("Plus"),B=s("el-icon"),H=s("el-upload"),I=s("el-form"),J=s("el-dialog"),K=F("has");return b(),T("div",null,[e($,{class:"box-card"},{default:r(()=>[ee((b(),C(i,{type:"primary",size:"default",icon:"Plus",onClick:w},{default:r(()=>[x(" 添加品牌 ")]),_:1})),[[K,"btn.Trademark.add"]]),e(M,{style:{margin:"10px 0px"},border:"",data:d(v)},{default:r(()=>[e(y,{label:"序号",width:"80px",align:"center",type:"index"}),e(y,{label:"品牌名称",prop:"tmName"}),e(y,{label:"品牌LOGO"},{default:r(({row:l,$index:Q})=>[ae("img",{src:l.logoUrl,style:{width:"100px",height:"100px"}},null,8,se)]),_:1}),e(y,{label:"品牌操作"},{default:r(({row:l,$index:Q})=>[e(i,{type:"primary",size:"small",icon:"Edit",onClick:W=>O(l)},null,8,["onClick"]),e(L,{title:`您确定要删除${l.tmName}?`,width:"250px",icon:"Delete",onConfirm:W=>E(l.id)},{reference:r(()=>[e(i,{type:"primary",size:"small",icon:"Delete"})]),_:2},1032,["title","onConfirm"])]),_:1})]),_:1},8,["data"]),e(j,{onSizeChange:z,onCurrentChange:g,"pager-count":9,"current-page":d(n),"onUpdate:currentPage":a[0]||(a[0]=l=>U(n)?n.value=l:n=l),"page-size":d(f),"onUpdate:pageSize":a[1]||(a[1]=l=>U(f)?f.value=l:f=l),"page-sizes":[3,5,7,9],background:!0,layout:"prev, pager, next, jumper,->,sizes,total",total:d(N)},null,8,["current-page","page-size","total"])]),_:1}),e(J,{modelValue:d(u),"onUpdate:modelValue":a[3]||(a[3]=l=>U(u)?u.value=l:u=l),title:d(o).id?"修改品牌":"添加品牌"},{footer:r(()=>[e(i,{type:"primary",size:"default",onClick:G},{default:r(()=>[x(" 取消 ")]),_:1}),e(i,{type:"primary",size:"default",onClick:P},{default:r(()=>[x(" 确定 ")]),_:1})]),default:r(()=>[e(I,{style:{width:"80%"},model:d(o),rules:D,ref_key:"formRef",ref:m},{default:r(()=>[e(h,{label:"品牌名称","label-width":"100px",prop:"tmName"},{default:r(()=>[e(R,{placeholder:"请您输入品牌名称",modelValue:d(o).tmName,"onUpdate:modelValue":a[2]||(a[2]=l=>d(o).tmName=l)},null,8,["modelValue"])]),_:1}),e(h,{label:"品牌LOGO","label-width":"100px",prop:"logoUrl"},{default:r(()=>[e(H,{class:"avatar-uploader",action:"/api/admin/product/fileUpload","show-file-list":!1,"on-success":A,"before-upload":q},{default:r(()=>[d(o).logoUrl?(b(),T("img",{key:0,src:d(o).logoUrl,class:"avatar"},null,8,ne)):(b(),C(B,{key:1,class:"avatar-uploader-icon"},{default:r(()=>[e(S)]),_:1}))]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])])}}});const me=te(ie,[["__scopeId","data-v-139a9314"]]);export{me as default};
