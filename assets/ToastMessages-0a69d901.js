import{m as i,a as d,_ as p,u as c,o as e,c as t,F as _,k as u,n as l,b as o,t as r,l as m}from"./index-0834e0d2.js";const h={computed:{...i(c,["messages"])},methods:{...d(c,["clearToast"])}},b={class:"toast-container position-fixed pe-3 top-0 end-0",style:{"z-index":"1500"}},$={class:"toast-header"},f={class:"me-auto"},k=["onClick"],g={key:0,class:"toast-body"};function v(n,y,C,T,x,B){return e(),t("div",b,[(e(!0),t(_,null,u(n.messages,(s,a)=>(e(),t("div",{key:a,class:l(["toast show",`toast${a}`]),role:"alert"},[o("div",$,[o("span",{class:l([`bg-${s.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),o("strong",f,r(s.title),1),o("button",{type:"button",class:"btn-close",onClick:S=>n.clearToast(a),"aria-label":"Close"},null,8,k)]),s.content?(e(),t("div",g,r(s.content),1)):m("",!0)],2))),128))])}const F=p(h,[["render",v]]);export{F as T};