import{i as s,j as e}from"./index-0834e0d2.js";const{VITE_API_URL:r,VITE_API_PATH:o}={VITE_API_URL:"https://vue3-course-api.hexschool.io/v2",VITE_API_PATH:"59487@@",VITE_UN:"j33241796@gmail.com",VITE_PW:"Jj741236p",BASE_URL:"/vite-works/",MODE:"production",DEV:!1,PROD:!0},i=s("cart",{state:()=>({carts:[],total:0,final_total:0,cartLength:0}),actions:{getCartInfo(){const a=`${r}/api/${o}/cart`;e.get(a).then(t=>{this.carts=t.data.data.carts,this.total=t.data.data.total,this.final_total=t.data.data.final_total,(this.cartLength===0||this.cartLength!=this.carts.length)&&(this.cartLength=this.carts.length)}).catch(t=>{alert(t.res.data.message)})}},getters:{}});export{i as c};
