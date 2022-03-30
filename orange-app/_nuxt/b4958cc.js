(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{260:function(t,e,r){var content=r(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(103).default)("1674ecbc",content,!0,{sourceMap:!1})},271:function(t,e,r){"use strict";r(260)},272:function(t,e,r){var o=r(102)((function(i){return i[1]}));o.push([t.i,"",""]),o.locals={},t.exports=o},277:function(t,e,r){"use strict";r.r(e);r(39),r(32),r(40),r(11),r(59),r(34),r(60);var o=r(31),l=(r(261),r(262)),n=r.n(l),c=function(data){var t={},e=data.firstName,r=data.lastName,o=data.email,l=data.password,c=data.passwordChck;if(localStorage.users){var d=localStorage.users;(d=JSON.parse(d)).findIndex((function(t){return t.email===o}))>-1&&(t.email="email already exists!")}return n.a.isEmpty(e)&&(t.firstName="First Name field is required."),n.a.isEmpty(r)&&(t.lastName="Last Name field is required."),n.a.isEmail(o)||(t.email="Please enter a valid email address."),n.a.isEmpty(o)&&(t.email="Email field is required."),n.a.isEmpty(l)&&(t.password="Password field is required."),n.a.equals(l,c)||(t.passwordChck="Password should match!"),n.a.isEmpty(c)&&(t.passwordChck="Confirm Password field is required."),{isInvalid:Object.keys(t).length>0,errors:t}};function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"SignUpForm",data:function(){return{firstName:"",lastName:"",email:"",password:"",passwordChck:"",terms:!1,errors:{},users:[]}},mounted:function(){if(sessionStorage.activeUser){var t=sessionStorage.activeUser;this.user=JSON.parse(t),this.$router.push("/user/home")}},methods:{onSubmit:function(){var t=Object.assign({},this.user);this.resetUser(),this.$emit("signup-form",{type:"signup",data:t})},registerUserSubmitForm:function(){var t={firstName:this.firstName,lastName:this.lastName,email:this.email,password:this.password},e=c(m(m({},t),{},{passwordChck:this.passwordChck})),r=e.isInvalid,o=e.errors;if(r)this.errors=o;else{if(this.errors={},localStorage.users){var l=localStorage.users;this.users=JSON.parse(l)}this.users.push(t),localStorage.setItem("users",JSON.stringify(this.users)),this.firstName="",this.lastName="",this.email="",this.password="",this.passwordChck="",this.$router.push("/user/login")}}},template:"#registerTemplate"},v=(r(271),r(50)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0 dark:bg-gray-800"},[r("div",{staticClass:"justify-center top-2"},[r("form",{staticClass:"w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mt-12",on:{submit:function(e){return e.preventDefault(),t.registerUserSubmitForm()}}},[t._m(0),t._v(" "),r("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[r("div",{staticClass:"w-full md:w-1/2 px-3 mb-6 md:mb-0"},[r("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-first-name"}},[t._v("\n\t\t\t\t\t\tFirst Name\n\t\t\t\t\t")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",class:"form-control "+(t.errors.firstName?"is-invalid":""),attrs:{id:"grid-first-name",type:"text",placeholder:"Jane"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}}),t._v(" "),r("div",{staticClass:"text-red-600 text-xs italic"},[t._v(t._s(t.errors.firstName))])]),t._v(" "),r("div",{staticClass:"w-full md:w-1/2 px-3"},[r("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-last-name"}},[t._v("\n\t\t\t\t\t\tLast Name\n\t\t\t\t\t")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",class:"form-control "+(t.errors.userName?"is-invalid":""),attrs:{id:"grid-last-name",type:"text",placeholder:"Doe"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}}),t._v(" "),r("div",{staticClass:"text-red-600 text-xs italic"},[t._v(t._s(t.errors.lastName))])])]),t._v(" "),r("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[r("div",{staticClass:"w-full px-3"},[r("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-email"}},[t._v("\n\t\t\t\t\t\tEmail\n\t\t\t\t\t")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",class:"form-control "+(t.errors.email?"is-invalid":""),attrs:{id:"grid-email",type:"email",placeholder:"erreakezy@gmail.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),r("div",{staticClass:"text-red-600 text-xs italic"},[t._v(t._s(t.errors.email))])])]),t._v(" "),r("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[r("div",{staticClass:"w-full px-3"},[r("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-password"}},[t._v("\n\t\t\t\t\t\tPassword\n\t\t\t\t\t")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",class:"form-control "+(t.errors.password?"is-invalid":""),attrs:{id:"grid-password",type:"password",placeholder:"******************"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),r("div",{staticClass:"text-red-600 text-xs italic"},[t._v(t._s(t.errors.password))])])]),t._v(" "),r("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[r("div",{staticClass:"w-full px-3"},[r("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-password"}},[t._v("\n\t\t\t\t\t\tConfirm Password\n\t\t\t\t\t")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordChck,expression:"passwordChck"}],staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",class:"form-control "+(t.errors.passwordChck?"is-invalid":""),attrs:{id:"grid-passwordChck",autocomplete:"on",type:"password",placeholder:"******************"},domProps:{value:t.passwordChck},on:{input:function(e){e.target.composing||(t.passwordChck=e.target.value)}}}),t._v(" "),r("div",{staticClass:"text-red-600 text-xs italic"},[t._v(t._s(t.errors.passwordChck))])])]),t._v(" "),r("div",{staticClass:"w-full mb-6"},[r("label",{staticClass:"w-full flex text-gray-500 font-bold"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.terms,expression:"terms"}],staticClass:"mr-2 mt-1 leading-tight cursor-pointer",attrs:{name:"terms",value:"1",type:"checkbox",required:""},domProps:{checked:Array.isArray(t.terms)?t._i(t.terms,"1")>-1:t.terms},on:{change:function(e){var r=t.terms,o=e.target,l=!!o.checked;if(Array.isArray(r)){var n=t._i(r,"1");o.checked?n<0&&(t.terms=r.concat(["1"])):n>-1&&(t.terms=r.slice(0,n).concat(r.slice(n+1)))}else t.terms=l}}}),t._v(" "),t._m(1)])]),t._v(" "),t._m(2)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-6"},[r("p",{staticClass:"flex justify-center font-bold text-4xl"},[t._v("\n\t\t\t\t\tRegister\n\t\t\t\t")]),t._v(" "),r("span",{staticClass:"mb-6 font-medium"},[t._v("Create your account, it is free and only takes Minutes")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"text-sm"},[t._v("\n\t\t\t\t\t\tBy clicking on the Sign Up button, you agree to our "),r("span",{staticClass:"text-blue-400 hover:text-sky-400 cursor-pointer"},[t._v(" Terms & Conditions of use ")]),t._v(" and "),r("span",{staticClass:"text-blue-400 hover:text-sky-400 cursor-pointer "},[t._v(" Privacy Policy ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-center"},[r("button",{staticClass:"w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"},[t._v("\n\t\t\t\t\tRegister\n\t\t\t\t")])])}],!1,null,null,null);e.default=component.exports}}]);