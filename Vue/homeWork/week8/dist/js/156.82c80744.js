"use strict";(self["webpackChunkweek8"]=self["webpackChunkweek8"]||[]).push([[156],{2156:function(t,e,l){l.r(e),l.d(e,{default:function(){return V}});var s=l(3396),r=l(7139);const o={key:0,class:"container"},d={class:"row"},n={class:"container"},i={class:"card text-center my-5 mx-5",style:{}},a=(0,s._)("div",{class:"card-header"},null,-1),c={class:"card-body"},u={key:0},_=(0,s._)("p",{class:"m-0",style:{"font-size":"2rem",color:"green"}},"已付款",-1),p=[_],w={key:1},h=(0,s._)("p",{class:"m-0",style:{"font-size":"2rem",color:"red"}},"尚未付款",-1),y=[h],g=(0,s._)("div",{class:"card-footer text-muted"},null,-1),m={class:"container mt-5"},v={class:"row row-cols-1 row-cols-md-2 row-cols-lg-2"},x={class:"col mb-9"},f=(0,s._)("h4",null,"訂單資訊",-1),k={class:"table table-striped"},b=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"品名"),(0,s._)("th",{style:{width:"150px"}},"數量/單位"),(0,s._)("th",null,"單價")])],-1),z={style:{"white-space":"nowrap"}},D=(0,s._)("i",{class:"bi bi-link-45deg p-2"},null,-1),O={class:"text-end"},$={class:"position-relative"},C={class:"position-absolute start-50"},H={class:"d-flex d-flex align-items-center justify-content-center flex-nowrap"},K=(0,s._)("div",{class:"d-flex flex-nowrap fs-2 fw-bolder",style:{"white-space":"nowarp","word-break":"keep-all"}},"總金額: ",-1),S={class:"text-end",style:{color:"red","font-size":"1.5rem"}},Y={class:"col mb-5"},q=(0,s._)("h4",null,"訂單細節",-1),j={class:"table"},I=(0,s._)("th",{style:{width:"100px"}},"下訂時間",-1),T=(0,s._)("th",{style:{width:"100px"}},"訂單編號",-1),U=(0,s._)("th",null,"付款狀態",-1),W={key:0,class:"text-success"},Z={key:1,class:"text-muted"},A=(0,s._)("th",{style:{width:"100px"}},"收件人名稱",-1),B=(0,s._)("th",{style:{width:"100px"}},"收件人信箱",-1),E=(0,s._)("th",{style:{width:"100px"}},"收件人電話",-1),F=(0,s._)("th",{style:{width:"100px"}},"收件人地址",-1),G=(0,s._)("th",{style:{width:"100px"}},"留言",-1),J=(0,s._)("th",{style:{width:"100px"}},"訂單總金額",-1),L={style:{color:"red","text-align":"end","font-size":"1.5rem"}},M={class:"modal-footer"};function N(t,e,l,_,h,N){const P=(0,s.up)("router-link");return h.ready?((0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",d,[(0,s._)("div",n,[(0,s._)("div",i,[a,(0,s._)("div",c,[h.order.is_paid?((0,s.wg)(),(0,s.iD)("strong",u,p)):((0,s.wg)(),(0,s.iD)("strong",w,y))]),g])]),(0,s._)("div",m,[(0,s._)("div",v,[(0,s._)("div",x,[f,(0,s._)("table",k,[b,(0,s._)("tbody",null,[(0,s._)("td",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(h.order.products,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t.id,style:{width:"250px",overflow:"hidden"}},[(0,s.Wm)(P,{to:`/product/${t.product_id}`},{default:(0,s.w5)((()=>[(0,s._)("td",z,[D,(0,s.Uk)(" "+(0,r.zw)(t.product.title),1)])])),_:2},1032,["to"])])))),128))]),(0,s._)("td",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(h.order.products,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t.id},[(0,s._)("td",null,(0,r.zw)(t.product.price)+" x "+(0,r.zw)(t.qty)+" "+(0,r.zw)(t.product.unit),1)])))),128))]),(0,s._)("td",O,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(h.order.products,(t=>((0,s.wg)(),(0,s.iD)("div",{key:t.id},[(0,s._)("td",null,(0,r.zw)(t.total),1)])))),128))])]),(0,s._)("tfoot",null,[(0,s._)("div",$,[(0,s._)("div",C,[(0,s._)("div",H,[K,(0,s._)("div",S,[(0,s._)("strong",null,(0,r.zw)(h.order.total),1)])])])])])])]),(0,s._)("div",Y,[q,(0,s._)("table",j,[(0,s._)("tbody",null,[(0,s._)("tr",null,[I,(0,s._)("td",null,(0,r.zw)(new Date(1e3*h.order.create_at).toISOString().split("T").toString().slice(0,-5).replace(",","-")),1)]),(0,s._)("tr",null,[T,(0,s._)("td",null,(0,r.zw)(h.order.id),1)]),(0,s._)("tr",null,[U,(0,s._)("td",null,[h.order.is_paid?((0,s.wg)(),(0,s.iD)("strong",W,"已付款")):((0,s.wg)(),(0,s.iD)("span",Z,"尚未付款"))])]),(0,s._)("tr",null,[A,(0,s._)("td",null,(0,r.zw)(h.order.user.name),1)]),(0,s._)("tr",null,[B,(0,s._)("td",null,(0,r.zw)(h.order.user.email),1)]),(0,s._)("tr",null,[E,(0,s._)("td",null,(0,r.zw)(h.order.user.tel),1)]),(0,s._)("tr",null,[F,(0,s._)("td",null,(0,r.zw)(h.order.user.address),1)]),(0,s._)("tr",null,[G,(0,s._)("td",null,(0,r.zw)(h.order.message),1)]),(0,s._)("tr",null,[J,(0,s._)("td",L,[(0,s._)("strong",null,(0,r.zw)(h.order.total),1)])])])]),(0,s._)("div",M,[(0,s._)("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=t=>N.payOrder())},"確認付款")])])])])])])):(0,s.kq)("",!0)}var P={data(){return{ready:!1,order:{create_at:"",is_paid:"",message:"",total:0,user:{}}}},components:{},methods:{getOrders(){const t=this.$route.params.id;this.$http(`https://vue3-course-api.hexschool.io/v2/api/ming123/order/${t}`).then((e=>{console.log("getOrders()",t,e),this.order=e.data.order,this.ready=!0})).catch((t=>{console.log(t),console.dir(t)}))},payOrder(){const t=this.$route.params.id;console.log(t),this.$http.post(`https://vue3-course-api.hexschool.io/v2/api/ming123/pay/${t}`).then((t=>{console.log("pay() ok end"),this.getOrders()})).catch((t=>{console.log(t),console.dir(t)}))}},mounted(){this.getOrders()}},Q=l(89);const R=(0,Q.Z)(P,[["render",N]]);var V=R}}]);
//# sourceMappingURL=156.82c80744.js.map