"use strict";(self["webpackChunkshop"]=self["webpackChunkshop"]||[]).push([[916],{8916:function(t,e,a){a.r(e),a.d(e,{default:function(){return Y}});var o=a(3396),i=a(7139),n=a(9242);const s={class:"navbar navbar-expand-lg navbar-light justify-content-center border border-start-0 border-end-0 border-top border-bottom"},l={class:"navbar-nav flex-row overflow-auto navbar-custom-scroll"},r=(0,o.Uk)("其他用品"),c=(0,o._)("span",{class:"sr-only"},"(current)",-1),p=[r,c],d={class:"container mt-md-5 mt-3 mb-7"},g={class:"row"},u={class:"card border-0 mb-4 position-relative"},h=["onClick"],v=["onClick"],m={class:"card-body p-0"},_={class:"mb-0 mt-3"},b={class:"fs-6 m-0",style:{height:"3rem",overflow:"hidden"},onmouseover:"this.style.color='#B08968';",onmouseout:"this.style.color='';"},f={class:"card-text text-muted mb-0",style:{height:"4.5rem",overflow:"hidden"}},k=["onClick"],x={class:"mb-0 text-muted text-end mt-2"},w={class:"h4 fw-bold text-end mt-1 fs-5"};function y(t,e,a,r,c,y){const C=(0,o.up)("router-link"),D=(0,o.up)("PaginationView");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",s,[(0,o._)("div",l,[(0,o._)("a",{class:"nav-item nav-link text-nowrap px-2",onClick:e[0]||(e[0]=t=>y.getData()),onclick:"event.preventDefault()",href:"#"},"全部商品"),(0,o._)("a",{class:"nav-item nav-link text-nowrap px-2",onClick:e[1]||(e[1]=t=>(c.pagination={total_pages:1},y.getData(1,"分類一"))),onclick:"event.preventDefault()",href:"#"},"文物書籍"),(0,o._)("a",{class:"nav-item nav-link text-nowrap px-2",onClick:e[2]||(e[2]=t=>(c.pagination={total_pages:1},y.getData(1,"分類二"))),onclick:"event.preventDefault()",href:"#"},"周邊雜誌"),(0,o._)("a",{class:"nav-item nav-link text-nowrap px-2",onClick:e[3]||(e[3]=t=>(c.pagination={total_pages:1},y.getData(1,"分類三"))),onclick:"event.preventDefault()",href:"#"},p)])]),(0,o._)("div",d,[(0,o._)("div",g,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(c.products,(t=>((0,o.wg)(),(0,o.iD)("div",{class:"col-md-3",key:t.id},[(0,o._)("div",u,[(0,o._)("div",{style:(0,i.j5)([{backgroundImage:`url(${t.imageUrl})`},{height:"325px","background-size":"cover","background-position":"center center"}])},null,4),(0,o.Wm)(C,{to:""},{default:(0,o.w5)((()=>[c.favorite.includes(t.id)?((0,o.wg)(),(0,o.iD)("i",{key:0,onClick:e=>y.toggleFavorite(t.id),class:"bi bi-heart-fill position-absolute btn btn-lg",style:{right:"3px",top:"3px",color:"red"}},null,8,h)):((0,o.wg)(),(0,o.iD)("i",{key:1,onClick:e=>y.toggleFavorite(t.id),class:"bi bi-suit-heart position-absolute btn btn-lg",style:{right:"3px",top:"3px",color:"red"}},null,8,v))])),_:2},1024),(0,o._)("div",m,[(0,o._)("h4",_,[(0,o.Wm)(C,{class:"card-text text-muted",to:`/product/${t.id}`,style:{"text-decoration":"none"}},{default:(0,o.w5)((()=>[(0,o._)("p",b,(0,i.zw)(t.title),1)])),_:2},1032,["to"])]),(0,o._)("p",f,(0,i.zw)(t.description),1),(0,o._)("button",{onClick:(0,n.iM)((e=>y.addToCart(t)),["prevent"]),type:"button",class:"btn btn-secondary position-absolute bottom-0 start-0 mb-2"},"加入購物車",8,k),(0,o._)("p",x,[(0,o._)("del",null,"NT$ "+(0,i.zw)(t.origin_price),1)]),(0,o._)("p",w,"NT$ "+(0,i.zw)(t.price),1)])])])))),128))]),(0,o.Wm)(D,{class:"mt-6",pages:c.pagination,onGetData:y.getData},null,8,["pages","onGetData"])])],64)}var C=a(4902);const D={"aria-label":"Page navigation example"},$={class:"pagination justify-content-center"},z=(0,o._)("span",{"aria-hidden":"true"},"«",-1),N=[z],T=["onClick"],I=(0,o._)("span",{"aria-hidden":"true"},"»",-1),M=[I];function P(t,e,a,s,l,r){return(0,o.wg)(),(0,o.iD)("nav",D,[(0,o._)("ul",$,[(0,o._)("li",{class:(0,i.C_)(["page-item",{disabled:!a.pages.has_pre}])},[(0,o._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,n.iM)((e=>t.$emit("get-data",l.inside_pages.current_page-1)),["prevent"]))},N)],2),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.pages.total_pages,(e=>((0,o.wg)(),(0,o.iD)("li",{class:(0,i.C_)(["page-item",{active:e===a.pages.current_page}]),key:e+"page"},[(0,o._)("a",{class:"page-link",href:"",onClick:(0,n.iM)((a=>t.$emit("get-data",e)),["prevent"])},(0,i.zw)(e),9,T)],2)))),128)),(0,o._)("li",{class:(0,i.C_)(["page-item",{disabled:!a.pages.has_next}])},[(0,o._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,n.iM)((e=>t.$emit("get-data",l.inside_pages.current_page+1)),["prevent"]))},M)],2)])])}var S={data(){return{inside_pages:{}}},props:["pages"],updated(){this.inside_pages=this.pages}},j=a(89);const A=(0,j.Z)(S,[["render",P]]);var F=A,H={data(){return{category:"all",products:[],productsAll:[],pagination:"",favorite:JSON.parse(localStorage.getItem("favorite"))||[]}},components:{PaginationView:F},methods:{getData(t=1,e){let a=`https://vue3-course-api.hexschool.io/v2/api/ming123/products/?page=${t}`;e&&(a=`https://vue3-course-api.hexschool.io/v2/api/ming123/products/?page=${t}&category=${e}`),this.$http.get(a).then((t=>{this.products=t.data.products,this.pagination=t.data.pagination})).catch((t=>{console.dir(t)}))},getDataAll(){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/ming123/products/all").then((t=>{this.productsAll=t.data.products})).catch((t=>{console.dir(t)}))},addToCart(t,e=1){const a={product_id:t.id,qty:e};this.$http.post("https://vue3-course-api.hexschool.io/v2/api/ming123/cart",{data:a}).then((t=>{console.log("addToCart()",t),C.Z.emit("get-cart")})).catch((t=>{console.dir(t.data.message)}))},toggleFavorite(t){console.log("favor");const e=this.favorite.findIndex((e=>e===t));console.log(e),-1===e?(this.favorite.push(t),console.log(this.favorite)):(this.favorite.splice(e,1),console.log(this.favorite,e))}},watch:{favorite:{handler(){localStorage.setItem("favorite",JSON.stringify(this.favorite))},deep:!0}},mounted(){this.getData()}};const W=(0,j.Z)(H,[["render",y]]);var Y=W}}]);
//# sourceMappingURL=916.6c0a2682.js.map