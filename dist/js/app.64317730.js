(function(t){function e(e){for(var a,o,s=e[0],i=e[1],u=e[2],d=0,l=[];d<s.length;d++)o=s[d],c[o]&&l.push(c[o][0]),c[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);h&&h(e);while(l.length)l.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==c[s]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},c={app:0},r=[];function s(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-00520b16":"06e27425","chunk-07bd982e":"1da64f4c","chunk-106285bc":"59134c14","chunk-196aaec8":"cc6d4e6d","chunk-2595d1cf":"e250e934","chunk-2b43cb10":"7d04840d","chunk-2b89becc":"ceb01ac0","chunk-334b8a13":"077a053a","chunk-501de6f5":"7ce0e960","chunk-5c07b563":"21a2fb14","chunk-65952f3d":"cf0aa6bd","chunk-6b177c4f":"f5dc58d0","chunk-714346c5":"b8b5f43b","chunk-a6767ca6":"92c4b8ca","chunk-a7ebcdd2":"346afa8d","chunk-ea7bfcbc":"04051ad5","chunk-eec6e7ea":"1d131cc8"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-07bd982e":1,"chunk-106285bc":1,"chunk-196aaec8":1,"chunk-2595d1cf":1,"chunk-2b43cb10":1,"chunk-2b89becc":1,"chunk-334b8a13":1,"chunk-501de6f5":1,"chunk-5c07b563":1,"chunk-65952f3d":1,"chunk-6b177c4f":1,"chunk-714346c5":1,"chunk-a6767ca6":1,"chunk-a7ebcdd2":1,"chunk-ea7bfcbc":1,"chunk-eec6e7ea":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-00520b16":"31d6cfe0","chunk-07bd982e":"63acffe0","chunk-106285bc":"0604bce6","chunk-196aaec8":"daf16ba7","chunk-2595d1cf":"558e0744","chunk-2b43cb10":"ceb9f0df","chunk-2b89becc":"acc3e213","chunk-334b8a13":"aab3a9cd","chunk-501de6f5":"698fb9d6","chunk-5c07b563":"980fbcc8","chunk-65952f3d":"b3784a13","chunk-6b177c4f":"172cc437","chunk-714346c5":"aaa3a8a5","chunk-a6767ca6":"846409c6","chunk-a7ebcdd2":"6b75653c","chunk-ea7bfcbc":"a9aeea02","chunk-eec6e7ea":"b0eec754"}[t]+".css",c=i.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var u=r[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===a||d===c))return e()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],d=u.getAttribute("data-href");if(d===a||d===c)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||c,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.request=a,delete o[t],h.parentNode.removeChild(h),n(r)},h.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(h)}).then(function(){o[t]=0}));var a=c[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise(function(e,n){a=c[t]=[e,n]});e.push(a[2]=r);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=s(t),u=function(e){d.onerror=d.onload=null,clearTimeout(l);var n=c[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");r.type=a,r.request=o,n[1](r)}c[t]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var h=d;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"41cb":function(t,e,n){"use strict";var a=n("2b0e"),o=n("8c4f"),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-4"},[a("div",{staticClass:"shortCut"},[a("a",{staticClass:"scrollTop",attrs:{href:"#news"}},[a("i",{staticClass:"fab fa-neos mr-3"}),t._v("最新消息")]),a("a",{staticClass:"scrollTop",attrs:{href:"#onSale"}},[a("i",{staticClass:"far fa-clock mr-3"}),t._v("限時優惠")]),a("a",{staticClass:"scrollTop",attrs:{href:"#brandStory"}},[a("i",{staticClass:"fas fa-info mr-4"}),t._v("品牌故事")])]),a("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleIndicators","data-ride":"carousel","data-interval":"true"}},[a("ol",{staticClass:"carousel-indicators"},[a("li",{staticClass:"active",attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"0"}}),a("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}}),a("li",{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"2"}})]),a("div",{staticClass:"carousel-inner",attrs:{id:"news"}},[a("div",{staticClass:"carousel-item active"},[a("img",{staticClass:"d-block w-100",attrs:{src:"https://net.wimg.tw/files/1/adpics/20190201100132_67.jpg?v=19117",alt:"..."}})]),a("div",{staticClass:"carousel-item"},[a("img",{staticClass:"d-block w-100",attrs:{src:"https://net.wimg.tw/files/1/adpics/20190130174951_43.jpg?v=19117",alt:"..."}})]),a("div",{staticClass:"carousel-item"},[a("img",{staticClass:"d-block w-100",attrs:{src:"https://net.wimg.tw/files/1/adpics/20190130173419_59.jpg?v=19117",alt:"..."}})])]),a("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleIndicators",role:"button","data-slide":"prev"}},[a("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Previous")])]),a("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleIndicators",role:"button","data-slide":"next"}},[a("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Next")])])]),a("section",{attrs:{id:"onSale"}},[a("img",{staticClass:"img-fluid",attrs:{id:"lookbook_1",src:"https://net.wimg.tw/files/1/lookbooks/20190131142020_27.jpg?v=19117",alt:"sale1"}}),a("img",{staticClass:"img-fluid",attrs:{id:"lookbook_2",src:"https://net.wimg.tw/files/1/lookbooks/20190130114647_95.jpg?v=19117",alt:"sale2"}})]),a("section",{staticClass:"brandStory my-4 bg-light",attrs:{id:"brandStory"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("img",{staticClass:"img-fluid animated",attrs:{src:n("9d64"),alt:""}})]),a("div",{staticClass:"col-md-6 animated"},[a("h3",{staticClass:"text-center my-3"},[t._v("品牌故事"),a("br"),t._v("About SimpleDress")]),a("p",[t._v("Simple Dress創立於1996年，隨著世界的脈動一起呼吸。")]),a("p",[t._v("如何滿足我們的客戶，是SIMPLE不段努力學習的目標。好的品質、合理的價格、貼心的服務，一直是SIMPLE的基本精神。近年來，奢侈品牌的平民化，使得一般人可以享受如貴族般的生活品味，以及所帶來的歡愉和滿足；時下年輕人更喜歡把平價商品及奢華商品混搭出不同的風格，許多有趣且富創意的街頭流行文化因此產生，這些創意更時常成為奢華品牌的設計靈感來源。")])])])]),a("a",{staticClass:"scrollup",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-arrow-circle-up fa-3x"})]),a("button",{staticClass:"btn btn-outline-primary"},[t._v("123")])])}],s=n("1157"),i=n.n(s),u={data:function(){return{isLoading:"false"}},created:function(){i()(document).ready(function(t){i()(".scrollTop").click(function(t){t.preventDefault();var e=i()(this).attr("href"),n=i()(e).offset().top;i()("html, body").animate({scrollTop:n},1e3)}),i()(window).scroll(function(){var t=i()(window).scrollTop(),e=i()(window).height();t>300?i()(".scrollup").addClass("visible"):i()(".scrollup").removeClass("visible"),i()(".animated").each(function(){var n=i()(this).offset().top;t+e>=n&&i()(this).addClass("fadeIn")}),i()(".scrollTop").each(function(){var e=i()(this).attr("href"),n=i()(e).offset().top;console.log(n);var a=i()(e).outerHeight();n-200<t&&n+a>t?(i()(".scrollTop").removeClass("active"),i()(this).addClass("active")):i()(this).removeClass("active")})}),i()(".carousel").carousel({interval:4e3}),i()(".scrollup").click(function(t){t.preventDefault(),i()("html, body").animate({scrollTop:0},600)})})}},d=u,l=(n("6909"),n("2877")),h=Object(l["a"])(d,c,r,!1,null,"fbe62680",null),m=h.exports;a["a"].use(o["a"]);e["a"]=new o["a"]({mode:"history",routes:[{path:"*",redirect:"/Home"},{path:"/",name:"Dashboard",component:function(){return n.e("chunk-196aaec8").then(n.bind(null,"ee10"))},children:[{path:"productmenu",name:"productmenu",component:function(){return n.e("chunk-07bd982e").then(n.bind(null,"5f6e"))}},{path:"productmenu/men",name:"Men",component:function(){return n.e("chunk-501de6f5").then(n.bind(null,"d032"))}},{path:"productmenu/women",name:"Women",component:function(){return n.e("chunk-a7ebcdd2").then(n.bind(null,"2148"))}},{path:"productmenu/kid",name:"Kid",component:function(){return n.e("chunk-a6767ca6").then(n.bind(null,"72d5"))}},{path:"productmenu/sale",name:"Sale",component:function(){return n.e("chunk-65952f3d").then(n.bind(null,"f1ac"))}},{path:"product/:productId",name:"product",component:function(){return n.e("chunk-2595d1cf").then(n.bind(null,"7ab0"))}},{path:"cart",name:"cart",component:function(){return n.e("chunk-106285bc").then(n.bind(null,"53fe"))}},{path:"order",name:"order",component:function(){return n.e("chunk-714346c5").then(n.bind(null,"d8e4"))}},{path:"checkout/:orderId",name:"checkout",component:function(){return n.e("chunk-2b43cb10").then(n.bind(null,"243d"))}},{path:"Home",name:"Home",component:m}]},{path:"/login",name:"Login",component:function(){return n.e("chunk-eec6e7ea").then(n.bind(null,"62d5"))}},{path:"/admin",name:"BackDashboard",component:function(){return n.e("chunk-334b8a13").then(n.bind(null,"ccf0"))},meta:{requiresAuth:!0},children:[{path:"products",name:"Products",component:function(){return n.e("chunk-5c07b563").then(n.bind(null,"372d"))},meta:{requiresAuth:!0}},{path:"orders",name:"Orders",component:function(){return n.e("chunk-ea7bfcbc").then(n.bind(null,"0d5f"))},meta:{requiresAuth:!0}},{path:"coupon",name:"Coupon",component:function(){return n.e("chunk-00520b16").then(n.bind(null,"73a8"))},meta:{requiresAuth:!0}}]},{path:"/",name:"BackDashboard",component:function(){return n.e("chunk-334b8a13").then(n.bind(null,"ccf0"))},children:[{path:"customer_order",name:"CustomerOrder",component:function(){return n.e("chunk-2b89becc").then(n.bind(null,"43b0"))}},{path:"customer_checkout/:orderId",name:"CustomerCheckout",component:function(){return n.e("chunk-6b177c4f").then(n.bind(null,"9d1a"))}}]}]})},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=n("7bb1"),c=n("427f"),r=n.n(c),s=n("bc3a"),i=n.n(s),u=n("a7fe"),d=n.n(u),l=n("9062"),h=n.n(l),m=n("2f62"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),n("router-view")],1)},f=[],g=n("cebc"),b={name:"App",data:function(){return{}},computed:Object(g["a"])({},Object(m["c"])(["isLoading"]))},v=b,k=(n("5c0b"),n("2877")),O=Object(k["a"])(v,p,f,!1,null,null,null),C=O.exports,I=n("41cb"),A=(n("6762"),n("2fdb"),n("ac6a"),{namespaced:!0,strict:!0,state:{products:[],pagination:{},WomenProduct:[],SaleProduct:[],MenProduct:[],KidProduct:[],product:[],tempProduct:"",isNew:!0,modalHead:""},actions:{getProducts:function(t,e){var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("johnnyli326","/products?page=").concat(e);t.commit("LOADING",!0,{root:!0}),i.a.get(n).then(function(e){window.scrollTo(0,0),t.commit("PRODUCTS",e.data.products),t.commit("PAGINATION",e.data.pagination),t.commit("LOADING",!1,{root:!0})})},getWomenProduct:function(t){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("johnnyli326","/products/all"),n=[];t.commit("LOADING",!0,{root:!0}),i.a.get(e).then(function(e){e.data.products.forEach(function(t){t.category.includes("Women")&&n.push(t)}),t.commit("WomenProduct",n),t.commit("LOADING",!1,{root:!0})})},getSaleProduct:function(t){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("johnnyli326","/products/all"),n=[];t.commit("LOADING",!0,{root:!0}),i.a.get(e).then(function(e){e.data.products.forEach(function(t){t.category.includes("Sale")&&n.push(t)}),t.commit("SaleProduct",n),t.commit("LOADING",!1,{root:!0})})},getMenProduct:function(t){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("johnnyli326","/products/all"),n=[];t.commit("LOADING",!0,{root:!0}),i.a.get(e).then(function(e){e.data.products.forEach(function(t){t.category.includes("Men")&&n.push(t)}),t.commit("MenProduct",n),t.commit("LOADING",!1,{root:!0})})},getKidProduct:function(t){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("johnnyli326","/products/all"),n=[];t.commit("LOADING",!0,{root:!0}),i.a.get(e).then(function(e){e.data.products.forEach(function(t){t.category.includes("Kid")&&n.push(t)}),t.commit("KidProduct",n),t.commit("LOADING",!1,{root:!0})})},getProduct:function(t,e){var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("johnnyli326","/product/").concat(e);t.commit("LOADING",!0,{root:!0}),window.scrollTo(0,0),i.a.get(n).then(function(e){t.commit("PRODUCT",e.data.product),t.commit("LOADING",!1,{root:!0})})},getProductDetail:function(t,e){I["a"].push({path:"/product/".concat(e)})}},mutations:{PRODUCTS:function(t,e){t.products=e},PAGINATION:function(t,e){t.pagination=e},WomenProduct:function(t,e){t.WomenProduct=e},SaleProduct:function(t,e){t.SaleProduct=e},MenProduct:function(t,e){t.MenProduct=e},KidProduct:function(t,e){t.KidProduct=e},PRODUCT:function(t,e){t.product=e}},getters:{products:function(t){return t.products},pagination:function(t){return t.pagination},WomenProduct:function(t){return t.WomenProduct},SaleProduct:function(t){return t.SaleProduct},MenProduct:function(t){return t.MenProduct},KidProduct:function(t){return t.KidProduct},Product:function(t){return t.product}}}),y=n("795b"),L=n.n(y),T={namespaced:!0,strict:!0,state:{cart:[],finalTotal:"",originalTotal:""},actions:{getCart:function(t){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("johnnyli326","/cart");return t.commit("LOADING",!0,{root:!0}),new L.a(function(){i.a.get(e).then(function(e){console.log(e.data),e.data.data&&(t.commit("CART",e.data.data.carts),t.commit("FINALTOTAL",e.data.data.final_total),t.commit("ORIGINALTOTAL",e.data.data.total),t.commit("LOADING",!1,{root:!0}))})})},addtoCart:function(t,e){var n=e.id,a=e.qty,o="".concat("https://vue-course-api.hexschool.io","/api/").concat("johnnyli326","/cart"),c={product_id:n,qty:a};return new L.a(function(e,a){t.commit("LOADINGITEM",n,{root:!0}),i.a.post(o,{data:c}).then(function(n){n.data.success?(t.dispatch("getCart"),e(),t.dispatch("alertModules/updateMessage",{message:n.data.message,status:"success"},{root:!0})):(a(),t.dispatch("alertModules/updateMessage",{message:n.data.message},{root:!0})),t.commit("LOADINGITEM","",{root:!0})})})},removeCart:function(t,e){var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("johnnyli326","/cart/").concat(e);t.commit("LOADINGITEM",e,{root:!0}),i.a.delete(n).then(function(e){t.dispatch("getCart"),t.commit("LOADINGITEM","",{root:!0}),t.dispatch("alertModules/updateMessage",{message:e.data.message},{root:!0})})}},mutations:{CART:function(t,e){t.cart=e},FINALTOTAL:function(t,e){t.finalTotal=e},ORIGINALTOTAL:function(t,e){t.originalTotal=e}},getters:{carts:function(t){return t.cart},finalTotal:function(t){return t.finalTotal},originalTotal:function(t){return t.originalTotal}}},w={namespaced:!0,strict:!0,state:{messages:[]},actions:{updateMessage:function(t,e){var n=e.message,a=e.status,o=void 0===a?"danger":a,c=Math.floor(new Date/1e3);t.commit("ADDMESSAGE",{message:n,status:o,timestamp:c}),t.dispatch("removeMessageWithTiming",c)},removeMessage:function(t,e){t.commit("REMOVEMESSAGE",e)},removeMessageWithTiming:function(t,e){setTimeout(function(){t.state.messages.forEach(function(n,a){n.timestamp===e&&t.commit("REMOVEMESSAGE",a)})},5e3)}},mutations:{ADDMESSAGE:function(t,e){t.messages.push(e)},REMOVEMESSAGE:function(t,e){t.messages.splice(e,1)}},getters:{messages:function(t){return t.messages}}},M={namespaced:!0,strict:!0,state:{},actions:{addCouponCode:function(t,e){var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("johnnyli326","/coupon");return new L.a(function(a,o){t.commit("LOADING",!0,{root:!0}),i.a.post(n,{data:e}).then(function(e){e.data.success?(t.dispatch("alertModules/updateMessage",{message:e.data.message,status:"success"},{root:!0}),t.dispatch("cartModules/getCart",null,{root:!0}),a()):(t.dispatch("alertModules/updateMessage",{message:e.data.message},{root:!0}),o()),t.commit("LOADING",!1,{root:!0})})})}},mutations:{},getters:{}},E={namespaced:!0,strict:!0,state:{order:{user:{user:{}}}},actions:{createOrder:function(t,e){var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("johnnyli326","/order");t.commit("LOADING",!0,{root:!0}),i.a.post(n,{data:e}).then(function(t){t.data.success&&I["a"].push("/checkout/".concat(t.data.orderId))}),t.commit("LOADING",!1,{root:!0})},getOrder:function(t,e){var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("johnnyli326","/order/").concat(e);t.commit("LOADING",!0,{root:!0}),i.a.get(n).then(function(e){t.commit("GETORDER",e.data.order),t.commit("LOADING",!1,{root:!0})})},payOrder:function(t,e){var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("johnnyli326","/pay/").concat(e);t.commit("LOADING",!0,{root:!0}),i.a.post(n).then(function(n){n.data.success&&(t.dispatch("getOrder",e),t.commit("LOADING",!1,{root:!0}),t.dispatch("alertModules/updateMessage",{message:n.data.message,status:"success"},{root:!0}))})}},mutations:{GETORDER:function(t,e){t.order=e}},getters:{order:function(t){return t.order}}};a["a"].use(m["a"]);var P=new m["a"].Store({strict:!0,state:{isLoading:!1,status:{loadingItem:""}},actions:{updateLoading:function(t,e){t.commit("LOADING",e)},updateLoadingItem:function(t,e){t.commit("LOADINGITEM",e)}},mutations:{LOADING:function(t,e){t.isLoading=e},LOADINGITEM:function(t,e){t.status.loadingItem=e}},getters:{isLoading:function(t){return t.isLoading},loadingItem:function(t){return t.status.loadingItem}},modules:{productsModules:A,cartModules:T,alertModules:w,couponModules:M,orderModules:E}}),D=(n("4989"),n("e40d"),n("a481"),n("c5f6"),function(t){var e=Number(t);return"$".concat(e.toFixed(0).replace(/./g,function(t,e,n){var a=e&&"."!==t&&(n.length-e)%3===0?", ".concat(t).replace(/\s/g,""):t;return a}))}),N=function(t){var e=Math.floor(1e3*t),n=new Date(e),a=n.getFullYear(),o=function(){var t=n.getMonth()+1;return t<10?"0".concat(t):t},c=n.getDate();return"".concat(a," / ").concat(o()," / ").concat(c)};a["a"].config.productionTip=!1,a["a"].use(d.a,i.a),a["a"].component("Loading",h.a),a["a"].use(o["a"]),a["a"].use(m["a"]),o["a"].Validator.localize("zh_TW",r.a),i.a.defaults.withCredentials=!0,a["a"].filter("currency",D),a["a"].filter("timeFormat",N),new a["a"]({router:I["a"],store:P,render:function(t){return t(C)},mounted:function(){document.dispatchEvent(new Event("render-event"))}}).$mount("#app"),I["a"].beforeEach(function(t,e,n){if(t.meta.requiresAuth){var a="".concat("https://vue-course-api.hexschool.io","/api/user/check");i.a.post(a).then(function(t){t.data.success?n():n({path:"/login"})})}else n()})},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),o=n.n(a);o.a},"5e27":function(t,e,n){},6909:function(t,e,n){"use strict";var a=n("b682"),o=n.n(a);o.a},"9d64":function(t,e,n){t.exports=n.p+"img/logo.e167d287.png"},b682:function(t,e,n){}});
//# sourceMappingURL=app.64317730.js.map