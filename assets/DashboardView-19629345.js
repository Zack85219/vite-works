import{m as V,a as w,_ as k,u as f,o as u,c as d,F as v,j as x,n as $,b as c,t as g,k as R,R as b,r as m,e as n,d as i,w as p,s as C}from"./index-f93256b3.js";function A(t){return{all:t=t||new Map,on:function(e,s){var o=t.get(e);o?o.push(s):t.set(e,[s])},off:function(e,s){var o=t.get(e);o&&(s?o.splice(o.indexOf(s)>>>0,1):t.set(e,[]))},emit:function(e,s){var o=t.get(e);o&&o.slice().map(function(r){r(s)}),(o=t.get("*"))&&o.slice().map(function(r){r(e,s)})}}}const L=A(),E={computed:{...V(f,["messages"])},methods:{...w(f,["clearToast"])}},M={class:"toast-container position-fixed pe-3 top-0 end-0",style:{"z-index":"1500"}},D={class:"toast-header"},I={class:"me-auto"},P=["onClick"],y={key:0,class:"toast-body"};function B(t,e,s,o,r,_){return u(),d("div",M,[(u(!0),d(v,null,x(t.messages,(a,l)=>(u(),d("div",{key:l,class:$(["toast show",`toast${l}`]),role:"alert"},[c("div",D,[c("span",{class:$([`bg-${a.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),c("strong",I,g(a.title),1),c("button",{type:"button",class:"btn-close",onClick:h=>t.clearToast(l),"aria-label":"Close"},null,8,P)]),a.content?(u(),d("div",y,g(a.content),1)):R("",!0)],2))),128))])}const N=k(E,[["render",B]]),{VITE_API_URL:O}={VITE_API_URL:"https://vue3-course-api.hexschool.io/v2",VITE_API_PATH:"59487@@",BASE_URL:"/Vue3-works/",MODE:"production",DEV:!1,PROD:!0},S={components:{RouterView:b,ToastMessages:N},methods:{logout(){document.cookie=`hexToken=;expires=${new Date}`,this.$router.push("/login")},checkLogin(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t,this.$http.post(`${O}/api/user/check`).then(e=>{console.log(e.data)}).catch(e=>{console.log(e),this.$router.push("/login")})}},provide(){return{emitter:L}},mounted(){this.checkLogin()}},z=c("hr",null,null,-1);function U(t,e,s,o,r,_){const a=m("RouterLink"),l=m("ToastMessages"),h=m("RouterView");return u(),d(v,null,[n(" 這是後台頁面 "),i(a,{to:"/admin/adminOrders"},{default:p(()=>[n("後台訂單列表")]),_:1}),n(" | "),i(a,{to:"/admin/adminProducts"},{default:p(()=>[n("後台產品列表")]),_:1}),n(" | "),i(a,{to:"/admin/adminCoupon"},{default:p(()=>[n("後台優惠卷列表")]),_:1}),n(" | "),i(a,{to:"/admin/adminArtical"},{default:p(()=>[n("書籍開放列表")]),_:1}),n(" | "),c("a",{href:"#",onClick:e[0]||(e[0]=C((...T)=>_.logout&&_.logout(...T),["prevent"]))},"登出"),n(" | "),i(l),z,i(h)],64)}const j=k(S,[["render",U]]);export{j as default};
