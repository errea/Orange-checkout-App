(window.webpackJsonp=window.webpackJsonp||[]).push([[3,12,13],{273:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},274:function(t,e,r){var content=r(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(103).default)("20636f21",content,!0,{sourceMap:!1})},275:function(t,e,r){var content=r(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(103).default)("5c7822d3",content,!0,{sourceMap:!1})},292:function(t,e,r){"use strict";var o=r(6),n=r(293).trim;o({target:"String",proto:!0,forced:r(294)("trim")},{trim:function(){return n(this)}})},293:function(t,e,r){var o=r(3),n=r(23),l=r(13),d=r(273),c=o("".replace),m="["+d+"]",v=RegExp("^"+m+m+"*"),f=RegExp(m+m+"*$"),x=function(t){return function(e){var r=l(n(e));return 1&t&&(r=c(r,v,"")),2&t&&(r=c(r,f,"")),r}};t.exports={start:x(1),end:x(2),trim:x(3)}},294:function(t,e,r){var o=r(74).PROPER,n=r(4),l=r(273);t.exports=function(t){return n((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||o&&l[t].name!==t}))}},295:function(t,e,r){"use strict";r(274)},296:function(t,e,r){var o=r(102)((function(i){return i[1]}));o.push([t.i,"",""]),o.locals={},t.exports=o},297:function(t,e,r){"use strict";r(275)},298:function(t,e,r){var o=r(102)((function(i){return i[1]}));o.push([t.i,"",""]),o.locals={},t.exports=o},315:function(t,e,r){var content=r(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(103).default)("df3ba694",content,!0,{sourceMap:!1})},322:function(t,e,r){"use strict";r.r(e);var o=r(323),n=r(324),l={name:"StepperComponent",components:{ShoppingCartListStepper:o.default,StepHorizontal:n.default},data:function(){return{currentstep:1,indicatorclass:!0,step:1,active:1,firststep:!0,nextStep:"",lastStep:"",laststep:!1,steps:[{id:1,title:"Start",icon_class:"fa fa-map-marker"},{id:2,title:"Middle",icon_class:"fa fa-folder-open"},{id:3,title:"End",icon_class:"fa fa-paper-plane"}]}},mounted:function(){if(sessionStorage.activeUser){var t=sessionStorage.activeUser;this.user=JSON.parse(t),this.$router.push("/user/stepper")}else this.$router.push("/")}},d=(r(408),r(50)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-5"},[r("StepHorizontal"),t._v(" "),r("div",{staticClass:"mt-8 p-4"},[r("div",[r("div",{staticClass:"font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3"}),t._v(" "),r("ShoppingCartListStepper")],1),t._v(" "),t._m(0)])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex p-2 mt-4"},[r("button",{staticClass:"text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer \n        hover:bg-gray-200  \n        bg-gray-100 \n        text-gray-700 \n        border duration-200 ease-in-out \n        border-gray-600 transition"},[t._v("Previous")]),t._v(" "),r("div",{staticClass:"flex-auto flex flex-row-reverse"},[r("button",{staticClass:"text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer \n        hover:bg-teal-600  \n        bg-teal-600 \n        text-teal-100 \n        border duration-200 ease-in-out \n        border-teal-600 transition"},[t._v("Next")]),t._v(" "),r("button",{staticClass:"text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer \n        hover:bg-teal-200  \n        bg-teal-100 \n        text-teal-700 \n        border duration-200 ease-in-out \n        border-teal-600 transition"},[t._v("Skip")])])])}],!1,null,null,null);e.default=component.exports},323:function(t,e,r){"use strict";r.r(e);r(292),r(186);var o={name:"ShoppingList",components:{},data:function(){return{user:"",itemQuantity:"",itemName:"",itemColor:"",itemCategory:"",itemsList:[{itemQuantity:3,itemName:"Apples",itemColor:"Red",itemCategory:"Laptop",inEditMode:!1},{itemQuantity:6,itemName:"Pears",itemColor:"Blue",itemCategory:"Fruit",inEditMode:!1}],inEditMode:!1}},mounted:function(){if(sessionStorage.activeUser){var t=sessionStorage.activeUser;this.user=JSON.parse(t)}},methods:{addItem:function(){var t=this.itemQuantity,e=this.itemColor,r=this.itemCategory,o=this.itemName.trim();this.itemsList.push({itemQuantity:t,itemName:o,itemColor:e,itemCategory:r,inEditMode:!1}),this.clearAll()},clearItemQuantity:function(){this.itemQuantity=""},clearItemName:function(){this.itemName=""},clearItemColor:function(){this.itemColor=""},clearItemCategory:function(){this.itemCategory=""},clearAll:function(){this.clearItemQuantity(),this.clearItemName(),this.clearItemColor(),this.clearItemCategory()},removeItem:function(t){this.itemsList.splice(t,1)},editItem:function(t){t.inEditMode=!0},editItemComplete:function(t){t.inEditMode=!1}}},n=(r(295),r(50)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{},[r("div",{staticClass:"container mx-auto mt-10"},[r("div",{staticClass:"flex shadow-md my-10"},[r("div",{staticClass:"w-full dark:bg-gray-50 px-10 py-10"},[t._m(0),t._v(" "),r("div",{staticClass:"relative overflow-x-auto shadow-md sm:rounded-lg"},[r("table",{staticClass:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},[t._m(1),t._v(" "),r("tbody",t._l(t.itemsList,(function(e,o){return r("tr",{key:o},[r("td",[r("span",{directives:[{name:"show",rawName:"v-show",value:!e.inEditMode,expression:"!item.inEditMode"}]},[t._v(t._s(e.itemName))]),t._v(" "),r("input",{directives:[{name:"show",rawName:"v-show",value:e.inEditMode,expression:"item.inEditMode"},{name:"model",rawName:"v-model",value:e.itemName,expression:"item.itemName"}],attrs:{placeholder:e.itemName},domProps:{value:e.itemName},on:{input:function(r){r.target.composing||t.$set(e,"itemName",r.target.value)}}})]),t._v(" "),r("td",[r("span",{directives:[{name:"show",rawName:"v-show",value:!e.inEditMode,expression:"!item.inEditMode"}]},[t._v(t._s(e.itemQuantity))]),t._v(" "),r("input",{directives:[{name:"show",rawName:"v-show",value:e.inEditMode,expression:"item.inEditMode"},{name:"model",rawName:"v-model",value:e.itemQuantity,expression:"item.itemQuantity"}],attrs:{type:"number",placeholder:e.quantity},domProps:{value:e.itemQuantity},on:{input:function(r){r.target.composing||t.$set(e,"itemQuantity",r.target.value)}}})]),t._v(" "),r("td",[r("span",{directives:[{name:"show",rawName:"v-show",value:!e.inEditMode,expression:"!item.inEditMode"}]},[t._v(t._s(e.itemColor))]),t._v(" "),r("input",{directives:[{name:"show",rawName:"v-show",value:e.inEditMode,expression:"item.inEditMode"},{name:"model",rawName:"v-model",value:e.itemColor,expression:"item.itemColor"}],attrs:{placeholder:e.itemColor},domProps:{value:e.itemColor},on:{input:function(r){r.target.composing||t.$set(e,"itemColor",r.target.value)}}})]),t._v(" "),r("td",[r("span",{directives:[{name:"show",rawName:"v-show",value:!e.inEditMode,expression:"!item.inEditMode"}]},[t._v(t._s(e.itemCategory))]),t._v(" "),r("input",{directives:[{name:"show",rawName:"v-show",value:e.inEditMode,expression:"item.inEditMode"},{name:"model",rawName:"v-model",value:e.itemCategory,expression:"item.itemCategory"}],attrs:{placeholder:e.itemCategory},domProps:{value:e.itemCategory},on:{input:function(r){r.target.composing||t.$set(e,"itemCategory",r.target.value)}}})]),t._v(" "),r("td",[r("button",{directives:[{name:"show",rawName:"v-show",value:e.inEditMode,expression:"item.inEditMode"}],attrs:{type:"button"},on:{click:function(r){return t.editItemComplete(e)}}},[t._v(" Save ")]),t._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:!e.inEditMode,expression:"!item.inEditMode"}],attrs:{type:"button"},on:{click:function(r){return t.editItem(e)}}},[t._v(" Edit ")]),t._v(" "),r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.removeItem(o)}}},[t._v(" Delete ")])])])})),0)])]),t._v(" "),t._m(2),t._v(" "),r("div",{staticClass:"col"},[r("div",{staticClass:"font-semibold"},[t._v("\n\t\t\t\t\t\tName\n\t\t\t\t\t\t"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.itemName,expression:"itemName"}],staticClass:"text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-1/2 px-3 py-2 border border-transparent shadow ring-1 sm:text-sm focus:border-teal-500 focus:ring-teal-500 focus:outline-none",attrs:{type:"text"},domProps:{value:t.itemName},on:{input:function(e){e.target.composing||(t.itemName=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"font-semibold mt-6"},[t._v("\n\t\t\t\t\t\tQuantity\n\t\t\t\t\t\t"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.itemQuantity,expression:"itemQuantity"}],staticClass:"text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-1/2 px-3 py-2 border border-transparent shadow ring-1 sm:text-sm focus:border-teal-500 focus:ring-teal-500 focus:outline-none",attrs:{type:"number",min:"0"},domProps:{value:t.itemQuantity},on:{input:function(e){e.target.composing||(t.itemQuantity=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"font-semibold mt-6"},[t._v("\n\t\t\t\t\t\tColor\n\t\t\t\t\t\t"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.itemColor,expression:"itemColor"}],staticClass:"text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-1/2 px-3 py-2 border border-transparent shadow ring-1 sm:text-sm focus:border-teal-500 focus:ring-teal-500 focus:outline-none",attrs:{type:"text"},domProps:{value:t.itemColor},on:{input:function(e){e.target.composing||(t.itemColor=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"font-semibold mt-6"},[t._v("\n\t\t\t\t\t\tCategory\n\t\t\t\t\t\t"),r("input",{directives:[{name:"model",rawName:"v-model",value:t.itemCategory,expression:"itemCategory"}],staticClass:"text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-1/2 px-3 py-2 border border-transparent shadow ring-1 sm:text-sm focus:border-teal-500 focus:ring-teal-500 focus:outline-none",attrs:{type:"text"},domProps:{value:t.itemCategory},on:{input:function(e){e.target.composing||(t.itemCategory=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"mt-4"},[r("button",{staticClass:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700",attrs:{type:"button"},on:{click:t.addItem}},[t._v(" Add ")])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-between border-b pb-8"},[r("h1",{staticClass:"font-semibold text-2xl"},[t._v("Shopping Cart List")]),t._v(" "),r("h2",{staticClass:"font-semibold text-2xl"},[t._v("3 Items")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[r("tr",[r("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("\n\t\t\t\t\t\t\t\t\tProduct name\n\t\t\t\t\t\t\t\t")]),t._v(" "),r("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("\n\t\t\t\t\t\t\t\t\tQuantity\n\t\t\t\t\t\t\t\t")]),t._v(" "),r("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("\n\t\t\t\t\t\t\t\t\tColor\n\t\t\t\t\t\t\t\t")]),t._v(" "),r("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("\n\t\t\t\t\t\t\t\t\tCategory\n\t\t\t\t\t\t\t\t")]),t._v(" "),r("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("\n\t\t\t\t\t\t\t\t\tActions\n\t\t\t\t\t\t\t\t")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-6 mb-4 font-semibold text-2xl"},[r("h4",[t._v("Add new item to Shopping List ")])])}],!1,null,null,null);e.default=component.exports},324:function(t,e,r){"use strict";r.r(e);var o={name:"StepperComponent",components:{},data:function(){return{currentstep:1,indicatorclass:!0,step:1,active:1,firststep:!0,nextStep:"",lastStep:"",laststep:!1,steps:[{id:1,title:"Start",icon_class:"fa fa-map-marker"},{id:2,title:"Middle",icon_class:"fa fa-folder-open"},{id:3,title:"End",icon_class:"fa fa-paper-plane"}]}},mounted:function(){if(sessionStorage.activeUser){var t=sessionStorage.activeUser;this.user=JSON.parse(t),this.$router.push("/user/stepper")}else this.$router.push("/")}},n=(r(297),r(50)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mx-4 p-4"},[r("div",{staticClass:"flex items-center"},[r("div",{staticClass:"flex items-center text-teal-600 relative cursor-pointer"},[r("div",{staticClass:"rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600"},[r("svg",{staticClass:"feather feather-bookmark ",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("path",{attrs:{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"}})])]),t._v(" "),r("div",{staticClass:"absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600"},[t._v("Personal")])]),t._v(" "),r("div",{staticClass:"flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"}),t._v(" "),r("div",{staticClass:"flex items-center text-white relative cursor-pointer"},[r("div",{staticClass:"rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600"},[r("svg",{staticClass:"feather feather-user-plus ",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("path",{attrs:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}}),t._v(" "),r("circle",{attrs:{cx:"8.5",cy:"7",r:"4"}}),t._v(" "),r("line",{attrs:{x1:"20",y1:"8",x2:"20",y2:"14"}}),t._v(" "),r("line",{attrs:{x1:"23",y1:"11",x2:"17",y2:"11"}})])]),t._v(" "),r("div",{staticClass:"absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600"},[t._v("Account")])]),t._v(" "),r("div",{staticClass:"flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"}),t._v(" "),r("div",{staticClass:"flex items-center text-gray-500 relative cursor-pointer"},[r("div",{staticClass:"rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300"},[r("svg",{staticClass:"feather feather-mail ",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("path",{attrs:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}}),t._v(" "),r("polyline",{attrs:{points:"22,6 12,13 2,6"}})])]),t._v(" "),r("div",{staticClass:"absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500"},[t._v("Message")])]),t._v(" "),r("div",{staticClass:"flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"}),t._v(" "),r("div",{staticClass:"flex items-center text-gray-500 relative cursor-pointer"},[r("div",{staticClass:"rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300"},[r("svg",{staticClass:"feather feather-database ",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("ellipse",{attrs:{cx:"12",cy:"5",rx:"9",ry:"3"}}),t._v(" "),r("path",{attrs:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"}}),t._v(" "),r("path",{attrs:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"}})])]),t._v(" "),r("div",{staticClass:"absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500"},[t._v("Confirm")])])])])}),[],!1,null,null,null);e.default=component.exports},408:function(t,e,r){"use strict";r(315)},409:function(t,e,r){var o=r(102)((function(i){return i[1]}));o.push([t.i,"",""]),o.locals={},t.exports=o}}]);