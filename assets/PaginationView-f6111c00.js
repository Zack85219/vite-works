import{_ as l,o as n,c as i,b as a,n as r,s as o,F as c,j as d,t as _}from"./index-f93256b3.js";const g={props:["pages","getProduct"]},u={class:"container"},p={"aria-label":"Page navigation example"},h={class:"pagination"},v=a("span",{"aria-hidden":"true"},"«",-1),k=[v],m=["onClick"],f=a("span",{"aria-hidden":"true"},"»",-1),P=[f];function b(x,s,e,C,B,w){return n(),i("div",u,[a("nav",p,[a("ul",h,[a("li",{class:r(["page-item",{disabled:!e.pages.has_pre}])},[a("a",{class:"page-link",href:"#","aria-label":"Previous","aria-disabled":"true",onClick:s[0]||(s[0]=o(t=>e.getProduct(e.pages.current_page-1),["prevent"]))},k)],2),(n(!0),i(c,null,d(e.pages.total_pages,t=>(n(),i("li",{class:r(["page-item",{active:t===e.pages.current_page}]),key:t+"pg"},[a("a",{class:"page-link",href:"#",onClick:o(y=>e.getProduct(t),["prevent"])},_(t),9,m)],2))),128)),a("li",{class:r(["page-item",{disabled:!e.pages.has_next}])},[a("a",{class:"page-link",href:"#","aria-label":"Next",onClick:s[1]||(s[1]=o(t=>e.getProduct(e.pages.current_page+1),["prevent"]))},P)],2)])])])}const N=l(g,[["render",b]]);export{N as P};
