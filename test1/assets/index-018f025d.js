import{d as H,N as K,r as N,c as M,y as Q,H as R,e as c,o as y,f as x,g as e,h as n,w as a,A as L,B as A,m as z,j as f,F as G,q as W,v as I,t as B,z as O,O as X,K as _,P as Y,Q as Z}from"./index-e296d5bf.js";const ee=["onClick"],se=H({__name:"index",setup(te){let u=K(),g=N([]),d=N(0),t=M({attrName:"",attrValueList:[],categoryId:"",categoryLevel:3}),b=N([]);Q(()=>u.c3Id,()=>{g.value=[],u.c3Id&&V()});const V=async()=>{const{c1Id:s,c2Id:i,c3Id:v}=u;console.log(u);let r=await Z(s,i,v);r.code==200&&(g.value=r.data,console.log(g.value))},S=()=>{Object.assign(t,{attrName:"",attrValueList:[],categoryId:u.c3Id,categoryLevel:3}),d.value=1},$=s=>{d.value=1,Object.assign(t,JSON.parse(JSON.stringify(s)))},k=()=>{d.value=0},U=()=>{t.attrValueList.push({valueName:"",flag:!0}),O(()=>{b.value[t.attrValueList.length-1].focus()})},q=async()=>{(await X(t)).code==200?(d.value=0,_({type:"success",message:t.id?"修改成功":"添加成功"}),V()):_({type:"error",message:t.id?"修改失败":"添加失败"})},w=(s,i)=>{if(s.valueName.trim()==""){t.attrValueList.splice(i,1),_({type:"error",message:"属性值不能为空"});return}if(t.attrValueList.find(r=>{if(r!=s)return r.valueName===s.valueName})){t.attrValueList.splice(i,1),_({type:"error",message:"属性值不能重复"});return}s.flag=!1},D=(s,i)=>{s.flag=!0,O(()=>{b.value[i].focus()})},E=async s=>{(await Y(s)).code==200?(_({type:"success",message:"删除成功"}),V()):_({type:"error",message:"删除失败"})};return R(()=>{u.$reset()}),(s,i)=>{const v=c("Category"),r=c("el-button"),p=c("el-table-column"),P=c("el-tag"),j=c("el-popconfirm"),C=c("el-table"),h=c("el-input"),F=c("el-form-item"),J=c("el-form"),T=c("el-card");return y(),x("div",null,[e(v,{scene:n(d)},null,8,["scene"]),e(T,{style:{margin:"10px 0px"}},{default:a(()=>[L(z("div",null,[e(r,{onClick:S,type:"primary",size:"default",icon:"Plus",disabled:!n(u).c3Id},{default:a(()=>[f(" 添加属性 ")]),_:1},8,["disabled"]),e(C,{border:"",style:{margin:"10px 0px"},data:n(g)},{default:a(()=>[e(p,{label:"序号",type:"index",align:"center",width:"80px"}),e(p,{label:"属性名称",width:"120px",prop:"attrName"}),e(p,{label:"属性值名称"},{default:a(({row:l,$index:m})=>[(y(!0),x(G,null,W(l.attrValueList,(o,ae)=>(y(),I(P,{style:{margin:"5px"},key:o.id},{default:a(()=>[f(B(o.valueName),1)]),_:2},1024))),128))]),_:1}),e(p,{label:"操作",width:"120px"},{default:a(({row:l,$index:m})=>[e(r,{type:"primary",size:"small",icon:"Edit",onClick:o=>$(l)},null,8,["onClick"]),e(j,{title:`你确定删除${l.attrName}?`,width:"200px",onConfirm:o=>E(l.id)},{reference:a(()=>[e(r,{type:"primary",size:"small",icon:"Delete"})]),_:2},1032,["title","onConfirm"])]),_:1})]),_:1},8,["data"])],512),[[A,n(d)==0]]),L(z("div",null,[e(J,{inline:!0},{default:a(()=>[e(F,{label:"属性名称"},{default:a(()=>[e(h,{placeholder:"请你输入属性名称",modelValue:n(t).attrName,"onUpdate:modelValue":i[0]||(i[0]=l=>n(t).attrName=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(r,{onClick:U,disabled:!n(t).attrName,type:"primary",size:"default",icon:"Plus"},{default:a(()=>[f(" 添加属性值 ")]),_:1},8,["disabled"]),e(r,{type:"primary",size:"default",onClick:k},{default:a(()=>[f(" 取消 ")]),_:1}),e(C,{border:"",style:{margin:"10px 0px"},data:n(t).attrValueList},{default:a(()=>[e(p,{label:"序号",width:"80px",type:"index",align:"center"}),e(p,{label:"属性值名称"},{default:a(({row:l,$index:m})=>[l.flag?(y(),I(h,{key:0,ref:o=>n(b)[m]=o,onBlur:o=>w(l,m),size:"small",placeholder:"请你输入属性值名称",modelValue:l.valueName,"onUpdate:modelValue":o=>l.valueName=o},null,8,["onBlur","modelValue","onUpdate:modelValue"])):(y(),x("div",{key:1,onClick:o=>D(l,m)},B(l.valueName),9,ee))]),_:1}),e(p,{label:"属性值操作"},{default:a(({row:l,index:m})=>[e(r,{type:"primary",size:"small",icon:"Delete",onClick:o=>n(t).attrValueList.splice(m,1)},null,8,["onClick"])]),_:1})]),_:1},8,["data"]),e(r,{type:"primary",size:"default",onClick:q,disabled:!(n(t).attrValueList.length>0)},{default:a(()=>[f(" 保存 ")]),_:1},8,["disabled"]),e(r,{type:"primary",size:"default",onClick:k},{default:a(()=>[f(" 取消 ")]),_:1})],512),[[A,n(d)==1]])]),_:1})])}}});export{se as default};
