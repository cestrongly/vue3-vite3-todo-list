import{c as E,E as y,s as b}from"./todo.d68dd2f1.js";import{E as T}from"./el-alert.73b5b797.js";import{a as V}from"./el-checkbox.8c9f3b44.js";import{d as A,s as B,r as D,e as d,c as L,a as r,p as s,w as u,u as t,h as N,m as R,o as _,v as i,_ as w}from"./index.03e2952b.js";const F={class:"Footer flex items-center justify-between"},j={class:"flex"},H=i("\u5168\u9009"),I=i("\u53CD\u9009"),S={class:"flex items-center justify-end"},$=A({__name:"index",setup(U){const h=E(),{todoList:l,doneTodoList:e}=B(h),n=D(!1),m=d(()=>e.value.length===0?!1:e.value.length===l.value.length),f=d(()=>(console.log("doneTodoList.length",e.value.length),console.log("todoList.length",l.value.length),e.value.length>0&&e.value.length<l.value.length)),v=o=>{console.log("handleCheckAllTodo value",o)},g=o=>{console.log("handleReverseCheck value",o),n.value=o},p=o=>{console.log("clearAllDoneEventHandler e",o)};return(o,a)=>{const c=V,C=T,k=y;return _(),L("div",F,[r("div",j,[s(c,{border:"","model-value":t(m),indeterminate:t(f),onChange:v},{default:u(()=>[H]),_:1},8,["model-value","indeterminate"]),s(c,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=x=>n.value=x),border:"",onChange:g},{default:u(()=>[I]),_:1},8,["modelValue"])]),r("div",S,[s(C,{title:`\u5DF2\u5B8C\u6210 ${t(e).length} / \u5168\u90E8 ${t(l).length}`,type:"info",closable:!1},null,8,["title"]),t(e).length>0?(_(),N(k,{key:0,class:"todo-del-icon",type:"danger",icon:t(b),circle:"",onClick:p},null,8,["icon"])):R("",!0)])])}}});const K=w($,[["__scopeId","data-v-d732d61d"]]);export{K as default};
