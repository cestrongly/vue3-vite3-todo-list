import{c as r,s as _,E as i}from"./todo.d68dd2f1.js";import{E as a}from"./el-message.7ec3989d.js";import{a as u}from"./el-checkbox.8c9f3b44.js";import{h as n,w as m,o as d,v as f,t as p,U as b,m as x,_ as y}from"./index.03e2952b.js";const E={name:"Item",props:{todo:{type:Object,default:()=>({})},index:{type:Number,default:0}},setup(){const o=r();return{Delete:_,deleteEventHandler:e=>{const{id:t}=e.currentTarget.dataset;o.remove({id:t}),a.closeAll(),a.success("\u5220\u9664\u6210\u529F")}}}};function k(o,s,e,t,v,h){const c=i,l=u;return d(),n(l,{label:e.todo.id},{default:m(()=>[f(p(e.todo.name),1),e.todo.done?(d(),n(c,{key:0,class:"todo-del-icon",type:"danger",icon:t.Delete,circle:"",onClick:b(t.deleteEventHandler,["stop"]),"data-id":e.todo.id},null,8,["icon","onClick","data-id"])):x("",!0)]),_:1},8,["label"])}const D=y(E,[["render",k],["__scopeId","data-v-1f6338ab"]]);export{D as default};