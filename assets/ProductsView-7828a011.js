import{_ as P,J as I,a as k,m as x,r as l,o as p,c as u,d as g,b as t,n as c,f as n,F as _,k as V,t as h,w as C,e as L,p as T,h as E}from"./index-0834e0d2.js";import{P as S}from"./PaginationView-93ca4e7a.js";import{c as A}from"./cart-8b44ab36.js";import{c as R}from"./toCategory-a28b6622.js";const{VITE_API_URL:b,VITE_API_PATH:v}={VITE_API_URL:"https://vue3-course-api.hexschool.io/v2",VITE_API_PATH:"59487@@",VITE_UN:"j33241796@gmail.com",VITE_PW:"Jj741236p",BASE_URL:"/vite-works/",MODE:"production",DEV:!1,PROD:!0},j={data(){return{products:[],status:{loadingItem:""},page:{},isLoading:!1,category:""}},components:{RouterLink:I,PaginationView:S},methods:{getProducts(i=1,e=""){const a=`${b}/api/${v}/products?page=${i}&category=${e}`;this.isLoading=!0,this.$http.get(a).then(d=>{this.isLoading=!1,this.products=d.data.products,this.page=d.data.pagination,this.category=e}).catch(d=>{this.isLoading=!1,console.log(d.data)}),setTimeout(function(){window.scrollTo(0,0)},300)},addToCart(i){const e={product_id:i,qty:1};this.status.loadingItem=i,this.$http.post(`${b}/api/${v}/cart`,{data:e}).then(a=>{console.log(a.data),this.status.loadingItem="",this.$httpMessageState(a,"加入購物車"),this.getCartInfo()}).catch(a=>{console.log(a.message)})},...k(A,["getCartInfo"])},mounted(){this.getProducts(1,this.continent)},computed:{...x(R,["continent"])}},m=i=>(T("data-v-bbb13e88"),i=i(),E(),i),U={class:"container my-5"},B={class:"allGroup row"},D={class:"listWrap col-2"},N={class:"list-group border border-primary border-1"},M=m(()=>t("div",{class:"col-2"},null,-1)),z={class:"d-flex justify-content-end col-5"},F={class:"row g-0"},H={class:"col-md-4"},J=["src"],O={class:"col-md-8"},W={class:"card-body"},q={class:"card-title"},G={class:"card-text"},K={class:"d-flex justify-content-start ms-3 w-100"},Q=m(()=>t("p",{class:"connectTo"},"繼續閱讀",-1)),X={class:"d-flex justify-content-end mx-3 my-3"},Y=["onClick","disabled"],Z=m(()=>t("i",{class:"bi bi-cart me-2"},null,-1));function $(i,e,a,d,s,r){const y=l("VueLoading"),f=l("RouterLink"),w=l("PaginationView");return p(),u(_,null,[g(y,{active:s.isLoading,"z-index":1060},null,8,["active"]),t("div",U,[t("div",B,[t("div",D,[t("div",N,[t("a",{href:"#",class:c(["list-group-item list-group-item-action list-group-item-white border border-primary border-1",{active:s.category===""}]),"aria-current":"true",onClick:e[0]||(e[0]=n((...o)=>r.getProducts&&r.getProducts(...o),["prevent"]))}," 全部 ",2),t("a",{href:"#",class:c(["list-group-item list-group-item-action list-group-item-white border border-primary border-1",{active:s.category==="北美洲小說"}]),onClick:e[1]||(e[1]=n(o=>r.getProducts(1,"北美洲小說"),["prevent"]))},"北美洲小說",2),t("a",{href:"#",class:c(["list-group-item list-group-item-action list-group-item-white border border-primary border-1",{active:s.category==="南美洲小說"}]),onClick:e[2]||(e[2]=n(o=>r.getProducts(1,"南美洲小說"),["prevent"]))},"南美洲小說",2),t("a",{href:"#",class:c(["list-group-item list-group-item-action list-group-item-white border border-primary border-1",{active:s.category==="歐洲小說"}]),onClick:e[3]||(e[3]=n(o=>r.getProducts(1,"歐洲小說"),["prevent"]))},"歐洲小說",2),t("a",{href:"#",class:c(["list-group-item list-group-item-action list-group-item-white border border-primary border-1",{active:s.category==="亞洲小說"}]),onClick:e[4]||(e[4]=n(o=>r.getProducts(1,"亞洲小說"),["prevent"]))},"亞洲小說",2),t("a",{href:"#",class:c(["list-group-item list-group-item-action list-group-item-white border border-primary border-1",{active:s.category==="非洲小說"}]),onClick:e[5]||(e[5]=n(o=>r.getProducts(1,"非洲小說"),["prevent"]))},"非洲小說",2),t("a",{href:"#",class:c(["list-group-item list-group-item-action list-group-item-white border border-primary border-1",{active:s.category==="大洋洲小說"}]),onClick:e[6]||(e[6]=n(o=>r.getProducts(1,"大洋洲小說"),["prevent"]))},"大洋洲小說",2)])]),M,t("div",z,[t("table",null,[t("tbody",null,[(p(!0),u(_,null,V(s.products,o=>(p(),u("div",{class:"card mb-3 bg-black text-white border border-primary border-1",style:{"min-width":"600px"},key:o.id},[t("div",F,[t("div",H,[t("img",{src:o.imageUrl,alt:"",width:"200",class:"mx-auto d-block"},null,8,J)]),t("div",O,[t("div",W,[t("h5",q,h(o.title),1),t("p",G,h(o.content),1)]),t("div",K,[g(f,{to:`/product/${o.id}`,class:"text-white-50"},{default:C(()=>[Q]),_:2},1032,["to"])]),t("div",X,[t("button",{class:"btn btn-outline-primary py-2 d-flex",onClick:tt=>r.addToCart(o.id),disabled:s.status.loadingItem===o.id},[Z,L(" 加入購物車 ")],8,Y)])])])]))),128))])])]),g(w,{class:"my-5 d-flex justify-content-center col-12",pages:s.page,"get-product":r.getProducts},null,8,["pages","get-product"])])])],64)}const it=P(j,[["render",$],["__scopeId","data-v-bbb13e88"]]);export{it as default};