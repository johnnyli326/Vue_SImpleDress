(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eec6e7ea"],{"62d5":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fuild bg-light"},[a("Alert"),a("div",{staticClass:"row mr-0 ml-0 min-vh-100 align-items-center"},[a("div",{staticClass:"col-md-6 text-center rounded-circle"},[a("router-link",{attrs:{to:"/Home"}},[a("img",{staticClass:"img-fluid",attrs:{src:s("9d64"),alt:"logo"}})])],1),a("div",{staticClass:"col-md-6"},[a("form",{staticClass:"form-signin",on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[t._m(0),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputEmail"}},[t._v("E-mail")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"inputPassword"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("Sign in")]),a("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[t._v("© Simple Dress")])])])])],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-head text-center"},[s("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("管理員登入")])])}],n=(s("cadf"),s("551c"),s("f751"),s("097d"),s("f663")),i={components:{Alert:n["a"]},name:"HelloWorld",data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/admin/signin"),s=this;this.$http.post(e,s.user).then(function(e){e.data.success?(console.log(e.data),s.$router.push("/admin/products")):(console.log("fail",e.data),t.$bus.$emit("message:push",e.data.message,"danger"))})}}},o=i,l=(s("a870"),s("2877")),u=Object(l["a"])(o,a,r,!1,null,"8e005f54",null);e["default"]=u.exports},"9d5e":function(t,e,s){},a870:function(t,e,s){"use strict";var a=s("badd"),r=s.n(a);r.a},badd:function(t,e,s){},d710:function(t,e,s){"use strict";var a=s("9d5e"),r=s.n(a);r.a},f663:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"message-alert"},t._l(t.messages,function(e,a){return s("div",{key:a,staticClass:"alert alert-dismissible",class:"alert-"+e.status},[t._v("\n    "+t._s(e.message)+"\n    "),s("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.removeMessage(a)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}),0)},r=[],n=s("cebc"),i=s("2f62"),o={name:"AlertMessage",data:function(){return{}},methods:{removeMessage:function(t){var e=this;e.$store.dispatch("alertModules/removeMessage",t)},removeMessageWithTiming:function(t){var e=this;e.$store.dispatch("alertModules/removeMessageWithTiming",t)}},computed:Object(n["a"])({},Object(i["c"])("alertModules",["messages"])),created:function(){}},l=o,u=(s("d710"),s("2877")),c=Object(u["a"])(l,a,r,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-eec6e7ea.1d131cc8.js.map