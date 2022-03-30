(window.webpackJsonp=window.webpackJsonp||[]).push([[19,14],{259:function(t,e,r){var content=r(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(103).default)("90812a3c",content,!0,{sourceMap:!1})},269:function(t,e,r){"use strict";r(259)},270:function(t,e,r){var n=r(102)((function(i){return i[1]}));n.push([t.i,"",""]),n.locals={},t.exports=n},276:function(t,e,r){"use strict";r.r(e);r(261),r(185),r(11),r(39);var n=r(262),l=r.n(n),o=function(data){var t={},e=data.email,r=data.password;return l.a.isEmpty(e)&&(t.email="Email field is required."),l.a.isEmpty(r)&&(t.password="Password field is required."),{isInvalid:Object.keys(t).length>0,errors:t}},c={name:"SignInForm",data:function(){return{email:"",password:"",remember:!1,errors:{},user:""}},mounted:function(){if(sessionStorage.activeUser){var t=sessionStorage.activeUser;this.user=JSON.parse(t),this.$router.push("/user/home")}},methods:{handleForm:function(){var t=Object.assign({},this.user);this.resetFormValues(),this.$emit("signin-form",{type:"signin",data:t})},loginUserSubmitForm:function(){var t={email:this.email,password:this.password},e=o(t),r=e.isInvalid,n=e.errors;if(r)this.errors=n;else{this.errors={};var l=localStorage.users;if((l=JSON.parse(l)).findIndex((function(e){return e.email===t.email}))>-1)if(l.findIndex((function(e){return e.password===t.password}))>-1){var c=l.find((function(e){return e.email===t.email}));sessionStorage.setItem("activeUser",JSON.stringify(c)),this.$router.push("/user/home")}else this.errors.password="Incorrect Login";else this.errors.email="Email Address does not exist!"}}},template:"#signinTemplate"},m=(r(269),r(50)),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0 dark:bg-gray-800"},[r("div",{staticClass:"justify-center top-2"},[r("form",{staticClass:"w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mt-12",attrs:{novalidate:""},on:{submit:function(e){return e.preventDefault(),t.loginUserSubmitForm.apply(null,arguments)}}},[t._m(0),t._v(" "),r("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[r("div",{staticClass:"w-full px-3"},[r("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-email"}},[t._v("\n\t\t\t\t\t\tEmail\n\t\t\t\t\t")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",class:"form-control "+(t.errors.email?"is-invalid":""),attrs:{id:"grid-email",type:"email",placeholder:"erreakezy@gmail.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),r("div",{staticClass:"text-red-600 text-xs italic"},[t._v(t._s(t.errors.email))])])]),t._v(" "),r("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[r("div",{staticClass:"w-full px-3"},[r("label",{staticClass:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",attrs:{for:"grid-password"}},[t._v("\n\t\t\t\t\t\tPassword\n\t\t\t\t\t")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",class:"form-control "+(t.errors.password?"is-invalid":""),attrs:{id:"grid-password",type:"password",placeholder:"******************"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),r("div",{staticClass:"text-red-600 text-xs italic"},[t._v(t._s(t.errors.password))])])]),t._v(" "),r("div",{staticClass:"w-full mb-6"},[r("label",{staticClass:"w-full flex text-gray-500 font-bold"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.remember,expression:"remember"}],staticClass:"mr-2 mt-1 leading-tight",attrs:{type:"checkbox",required:""},domProps:{checked:Array.isArray(t.remember)?t._i(t.remember,null)>-1:t.remember},on:{change:function(e){var r=t.remember,n=e.target,l=!!n.checked;if(Array.isArray(r)){var o=t._i(r,null);n.checked?o<0&&(t.remember=r.concat([null])):o>-1&&(t.remember=r.slice(0,o).concat(r.slice(o+1)))}else t.remember=l}}}),t._v(" "),r("p",{staticClass:"text-sm text-sky-400"},[t._v("\n\t\t\t\t\t\tRemember me\n\t\t\t\t\t")])])]),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"flex items-center gap-6 justify-between mt-6"},[r("NuxtLink",{staticClass:"inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800",attrs:{to:"/user/reg"}},[t._v("\n\t\t\t\t\tClick here to Sign Up\n\t\t\t\t")]),t._v(" "),r("NuxtLink",{staticClass:"inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800",attrs:{to:"/user/forgot"}},[t._v("\n\t\t\t\t\tForgot Password?\n\t\t\t\t")])],1)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-6"},[r("p",{staticClass:"flex justify-center font-bold text-4xl"},[t._v("\n\t\t\t\t\tSign In\n\t\t\t\t")]),t._v(" "),r("span",{staticClass:"mt-6 font-medium"},[t._v("Your account has been created successfully, now sign in with your details created")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-center"},[r("button",{staticClass:"w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"},[t._v("\n\t\t\t\t\tLogin\n\t\t\t\t")])])}],!1,null,null,null);e.default=component.exports},416:function(t,e,r){"use strict";r.r(e);var n={name:"LoginPage",components:{SignInForm:r(276).default}},l=r(50),component=Object(l.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("SignInForm")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SignInForm:r(276).default})}}]);