webpackJsonp([2],{o2ba:function(e,a){},oZQC:function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={render:function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",[r("h1",[e._v("Create Account")]),e._v(" "),r("h3",[e._v("Glad to see you here!")]),e._v(" "),r("div",{staticClass:"form-main"},[r("div",[r("div",{staticClass:"group"},[r("label",[e._v("Account")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"},{name:"validate",rawName:"v-validate",value:{required:!0,email:!0},expression:"{ required: true, email: true }"}],attrs:{name:"account",placeholder:"example@email.com"},domProps:{value:e.account},on:{input:function(a){a.target.composing||(e.account=a.target.value)}}}),e._v(" "),r("span",{staticClass:"msg-error"},[e._v(e._s(e.errors.first("account")))])]),e._v(" "),r("div",{staticClass:"group"},[r("label",[e._v("Password")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"},{name:"validate",rawName:"v-validate",value:{required:!0,confirmed:"passwordRef"},expression:"{ required: true, confirmed: 'passwordRef',  }"}],attrs:{name:"password",type:"password",placeholder:"********"},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}}),e._v(" "),r("span",{staticClass:"msg-error"},[e._v(e._s(e.errors.first("password")))])]),e._v(" "),r("div",{staticClass:"group"},[r("label",[e._v("Confirm Password")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmPassword,expression:"confirmPassword"},{name:"validate",rawName:"v-validate",value:{required:!0},expression:"{ required: true }"}],ref:"passwordRef",attrs:{name:"confirmPassword",type:"password",placeholder:"********"},domProps:{value:e.confirmPassword},on:{input:function(a){a.target.composing||(e.confirmPassword=a.target.value)}}}),e._v(" "),r("span",{staticClass:"msg-error"},[e._v(e._s(e.errors.first("confirmPassword")))])]),e._v(" "),r("div",{staticClass:"group"},[r("button",{on:{click:e.nextStep}},[e._v("\n          SUBMIT & NEXT\n        ")])])])])])},staticRenderFns:[]};var t=r("VU/8")({name:"CreateAccount",data:function(){return{account:"",password:"",confirmPassword:""}},methods:{nextStep:function(){this.$store.dispatch("updateStep",2),this.$router.push({name:"GeneralInfomation"})}}},s,!1,function(e){r("o2ba")},"data-v-c17d5846",null);a.default=t.exports}});
//# sourceMappingURL=2.70e5fb81993d36999270.js.map