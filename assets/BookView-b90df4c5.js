import{_ as i,o as r,c as _,b as o,t as a,p as d,h as l}from"./index-b9757bf8.js";const{VITE_API_URL:p,VITE_API_PATH:h}={VITE_API_URL:"https://vue3-course-api.hexschool.io/v2",VITE_API_PATH:"59487@@",BASE_URL:"/vite-works/",MODE:"production",DEV:!1,PROD:!0},u={data(){return{bookContent:{}}},methods:{getBook(){const{id:t}=this.$route.params,n=`${p}/api/${h}/article/${t}`;let s="";this.$http.get(n).then(e=>{this.bookContent=e.data.article,console.log(this.bookContent),s={...this.bookContent},document.getElementById("articleArea").innerHTML=s.content}).catch(e=>{console.log(e)})}},mounted(){this.getBook(),setTimeout(function(){window.scrollTo(0,0)},300)}},f=t=>(d("data-v-946f1016"),t=t(),l(),t),k={class:"container my-5"},m={class:"d-flex justify-content-center my-3"},I={class:"d-flex justify-content-center my-2"},b=f(()=>o("div",{class:"contentBack border border-dark border-2"},[o("div",{id:"articleArea",class:"p-4"})],-1));function v(t,n,s,e,c,B){return r(),_("div",k,[o("h3",null,[o("b",m,a(c.bookContent.title),1)]),o("span",I,"作者: "+a(c.bookContent.author),1),b])}const A=i(u,[["render",v],["__scopeId","data-v-946f1016"]]);export{A as default};
