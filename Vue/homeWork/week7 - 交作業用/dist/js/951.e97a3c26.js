"use strict";(self["webpackChunkweek6"]=self["webpackChunkweek6"]||[]).push([[951],{951:function(t,e,s){s.r(e),s.d(e,{default:function(){return C}});var a=s(3396),l=s(7139);const c={class:"container"},i={class:"row align-items-center mt-5"},o={class:"col-md-7"},r={id:"carouselExampleControls",class:"carousel slide","data-ride":"carousel"},d={class:"carousel-inner"},n={class:"carousel-item active"},u=["src"],p=(0,a._)("div",{class:"carousel-item"},null,-1),b=(0,a._)("div",{class:"carousel-item"},null,-1),m={class:"col-md-5"},h=(0,a.uE)('<nav aria-label="breadcrumb"><ol class="breadcrumb bg-white px-0 mb-0 py-3"><li class="breadcrumb-item"><a class="text-muted" href="./index.html">Home</a></li><li class="breadcrumb-item"><a class="text-muted" href="./product.html">Product</a></li><li class="breadcrumb-item active" aria-current="page">Detail</li></ol></nav>',1),v={class:"fw-bold h1 mb-1"},g=(0,a._)("div",{class:"mb-4"},null,-1),w=(0,a._)("h4",{class:"h4 mb-1"},"商品描述",-1),_=(0,a._)("div",{class:"mb-3"},null,-1),f=(0,a._)("h5",{class:"h5 mb-2"},"商品說明",-1),x={class:"mb-0 text-muted text-end"},k={class:"h4 fw-bold text-end"},y=(0,a.uE)('<div class="row align-items-center"><div class="col-6"><div class="input-group my-3 bg-light rounded"><div class="input-group-prepend"><button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1"><i class="fas fa-minus"></i></button></div><input type="text" class="form-control border-0 text-center my-auto shadow-none bg-light" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1"><div class="input-group-append"><button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2"><i class="fas fa-plus"></i></button></div></div></div><div class="col-6"><a href="./checkout.html" class="text-nowrap btn btn-dark w-100 py-2">Lorem ipsum</a></div></div>',1);function z(t,e,s,z,$,E){return(0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("div",i,[(0,a._)("div",o,[(0,a._)("div",r,[(0,a._)("div",d,[(0,a._)("div",n,[(0,a._)("img",{src:$.product.imageUrl,class:"d-block",alt:"...",height:"600"},null,8,u)]),p,b])])]),(0,a._)("div",m,[h,(0,a._)("h2",v,(0,l.zw)($.product.title),1),g,w,(0,a.Uk)(" "+(0,l.zw)($.product.description)+" ",1),_,f,(0,a.Uk)(" "+(0,l.zw)($.product.content)+" ",1),(0,a._)("p",x,[(0,a._)("del",null,"NT$"+(0,l.zw)($.product.origin_price),1)]),(0,a._)("p",k,"NT$"+(0,l.zw)($.product.price),1),y])])])}var $={data(){return{product:[]}},methods:{getProduct(){console.log("getProducts");const t=this.$route.params.id;this.$http(`https://vue3-course-api.hexschool.io/v2/api/ming123/product/${t}`).then((t=>{console.log(t),this.product=t.data.product})).catch((t=>{console.log(t)}))}},mounted(){this.getProduct()}},E=s(89);const P=(0,E.Z)($,[["render",z]]);var C=P}}]);
//# sourceMappingURL=951.e97a3c26.js.map