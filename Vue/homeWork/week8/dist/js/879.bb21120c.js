"use strict";(self["webpackChunkweek8"]=self["webpackChunkweek8"]||[]).push([[879],{5879:function(e,t,a){a.r(t),a.d(t,{default:function(){return H}});var l=a(3396),s=a(7139),o=a(9242);const r={class:"container"},i={class:"text-end"},d={class:"table align-middle"},n=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th"),(0,l._)("th",null,"圖片"),(0,l._)("th",null,"品名"),(0,l._)("th",{style:{width:"150px"}},"數量/單位"),(0,l._)("th",null,"單價")])],-1),m=["onClick","disabled"],c={class:"input-group input-group-sm"},u={class:"input-group mb-3"},h=["onUpdate:modelValue","onChange","disabled"],p=["value"],g={class:"input-group-text",id:"basic-addon2"},b={class:"text-end"},_=(0,l._)("td",null,null,-1),f=(0,l._)("td",{colspan:"3",class:"text-end"},"總計",-1),v={class:"text-end"},C=(0,l._)("tr",null,null,-1),y={class:"my-5 row justify-content-center"},k={class:"mb-3"},I=(0,l._)("label",{for:"email",class:"form-label"},"Email",-1),w={class:"mb-3"},x=(0,l._)("label",{for:"name",class:"form-label"},"收件人姓名",-1),V={class:"mb-3"},$=(0,l._)("label",{for:"tel",class:"form-label"},"收件人電話",-1),D={class:"mb-3"},W=(0,l._)("label",{for:"address",class:"form-label"},"收件人地址",-1),U={class:"mb-3"},q=(0,l._)("label",{for:"message",class:"form-label"},"留言",-1),L={class:"text-end"},z=["disabled"];function Z(e,t,a,Z,A,O){const j=(0,l.up)("v-field"),E=(0,l.up)("error-message"),H=(0,l.up)("v-form");return(0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("div",i,[(0,l._)("button",{onClick:t[0]||(t[0]=(...e)=>O.removeAllCartItem&&O.removeAllCartItem(...e)),class:(0,s.C_)([{disabled:0===A.cartData.carts.length},"btn btn-outline-danger"]),type:"button"},"清空購物車",2)]),(0,l._)("table",d,[n,(0,l._)("tbody",null,[A.cartData.carts?((0,l.wg)(!0),(0,l.iD)(l.HY,{key:0},(0,l.Ko)(A.cartData.carts,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("td",null,[(0,l._)("button",{onClick:t=>O.removeCartItem(e.id),disabled:A.isLoadingItem===e.id,type:"button",class:"btn btn-outline-danger btn-sm"}," x ",8,m)]),(0,l._)("td",null,[(0,l._)("div",{style:(0,s.j5)([{backgroundImage:`url( ${e.product.imageUrl})`},{height:"100px","background-size":"cover","background-position":"center"}])},null,4)]),(0,l._)("td",null,(0,s.zw)(e.product.title),1),(0,l._)("td",null,[(0,l._)("div",c,[(0,l._)("div",u,[(0,l.wy)((0,l._)("select",{id:"",class:"form-select","onUpdate:modelValue":t=>e.qty=t,onChange:t=>O.updataCartItem(e),disabled:A.isLoadingItem===e.id},[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(20,(t=>(0,l._)("option",{value:t,key:`${t} + ${e.id}`},(0,s.zw)(t),9,p))),64))],40,h),[[o.bM,e.qty]]),(0,l._)("span",g,(0,s.zw)(e.product.unit),1)])])]),(0,l._)("td",b,(0,s.zw)(e.total),1)])))),128)):(0,l.kq)("",!0)]),(0,l._)("tfoot",null,[(0,l._)("tr",null,[_,f,(0,l._)("td",v,(0,s.zw)(A.cartData.total),1)]),C])]),(0,l._)("div",y,[(0,l.Wm)(H,{onSubmit:O.createOrder,ref:"form",class:"col-md-6"},{default:(0,l.w5)((({errors:e})=>[(0,l._)("div",k,[I,(0,l.Wm)(j,{modelValue:A.form.user.email,"onUpdate:modelValue":t[1]||(t[1]=e=>A.form.user.email=e),id:"email",name:"email",type:"email",class:(0,s.C_)(["form-control",{"is-invalid":e["email"]}]),placeholder:"請輸入 Email",rules:"email"},null,8,["modelValue","class"]),(0,l.Wm)(E,{name:"email",class:"invalid-feedback"})]),(0,l._)("div",w,[x,(0,l.Wm)(j,{modelValue:A.form.user.name,"onUpdate:modelValue":t[2]||(t[2]=e=>A.form.user.name=e),id:"name",name:"姓名",type:"text",class:(0,s.C_)(["form-control",{"is-invalid":e["姓名"]}]),placeholder:"請輸入姓名",rules:"required"},null,8,["modelValue","class"]),(0,l.Wm)(E,{name:"姓名",class:"invalid-feedback"})]),(0,l._)("div",V,[$,(0,l.Wm)(j,{modelValue:A.form.user.tel,"onUpdate:modelValue":t[3]||(t[3]=e=>A.form.user.tel=e),id:"tel",name:"電話",type:"text",class:(0,s.C_)(["form-control",{"is-invalid":e["電話"]}]),placeholder:"請輸入電話",rules:O.isPhone},null,8,["modelValue","class","rules"]),(0,l.Wm)(E,{name:"電話",class:"invalid-feedback"})]),(0,l._)("div",D,[W,(0,l.Wm)(j,{modelValue:A.form.user.address,"onUpdate:modelValue":t[4]||(t[4]=e=>A.form.user.address=e),id:"address",name:"地址",type:"text",class:(0,s.C_)(["form-control",{"is-invalid":e["地址"]}]),placeholder:"請輸入地址",rules:"required"},null,8,["modelValue","class"]),(0,l.Wm)(E,{name:"地址",class:"invalid-feedback"})]),(0,l._)("div",U,[q,(0,l.wy)((0,l._)("textarea",{"onUpdate:modelValue":t[5]||(t[5]=e=>A.form.message=e),id:"message",class:"form-control",cols:"30",rows:"10"},null,512),[[o.nr,A.form.message]])]),(0,l._)("div",L,[(0,l._)("button",{type:"submit",class:"btn btn-danger",disabled:Object.keys(e).length>0||0===A.cartData.carts.length},"送出訂單",8,z)])])),_:1},8,["onSubmit"])])])}var A=a(4902),O={data(){return{cartData:{carts:[]},products:[],productsID:"",isLoadingItem:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},components:{},methods:{getCart(){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/ming123/cart").then((e=>{this.cartData=e.data.data,console.log("getCart()",e)})).catch((e=>{alert(e.data.message)}))},updataCartItem(e){const t={product_id:e.id,qty:e.qty};this.isLoadingItem=e.id,this.$http.put(`https://vue3-course-api.hexschool.io/v2/api/ming123/cart/${e.id}`,{data:t}).then((e=>{console.log("updataCartItem()",e),this.getCart(),this.isLoadingItem="",A.Z.emit("get-cart",(()=>{this.getCart()}))})).catch((e=>{console.dir(e.data.message),alert(e.data.message)}))},removeCartItem(e){this.isLoadingItem=e,this.$http.delete(`https://vue3-course-api.hexschool.io/v2/api/ming123/cart/${e}`).then((e=>{console.log("removeCartItem()",e),this.getCart(),A.Z.emit("get-cart",(()=>{this.getCart()})),this.isLoadingItem=""})).catch((e=>{alert(e.data.message)}))},removeAllCartItem(){this.$http.delete("https://vue3-course-api.hexschool.io/v2/api/ming123/carts").then((e=>{console.log("removeAllCartItem()",e),this.getCart(),A.Z.emit("get-cart",(()=>{this.getCart()}))})).catch((e=>{alert(e.data.message)}))},createOrder(){const e=this.form;this.$http.post("https://vue3-course-api.hexschool.io/v2/api/ming123/order",{data:e}).then((e=>{console.log("createOrder()",e),this.$refs.form.resetForm(),this.getCart(),this.form.message="",A.Z.emit("get-cart",(()=>{this.getCart()})),this.$router.push(`/pay/${e.data.orderId}`),console.log("已送出訂單")})).catch((e=>{console.log(e.data.message)}))},isPhone(e){const t=/^(09)[0-9]{8}$/;return!!t.test(e)||"需要正確的電話號碼"}},mounted(){this.getCart()}},j=a(89);const E=(0,j.Z)(O,[["render",Z]]);var H=E}}]);
//# sourceMappingURL=879.bb21120c.js.map