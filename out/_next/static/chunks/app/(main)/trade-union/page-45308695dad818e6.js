(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2851],{35667:function(e,t,r){Promise.resolve().then(r.bind(r,61615))},61615:function(e,t,r){"use strict";r.r(t);var n=r(3827),c=r(1017),o=r(4205),i=r(72658),l=r(7908),s=r(47907),a=r(64090),u=r(70784);t.default=function(){let e=(0,s.useRouter)();return(0,a.useEffect)(()=>{localStorage.getItem("token")||e.push("/login"),l.Z.get(o.Z+"/user/protected",{headers:{"x-access-token":localStorage.getItem("token")}}).catch(t=>{e.push("/login"),localStorage.removeItem("token")})},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.Z,{children:(0,n.jsxs)("div",{className:"galler-container w-full  flex flex-col justify-start items-center relative",style:{backgroundImage:"url('/images/bg-1.png')",backgroundSize:"cover"},children:[(0,n.jsx)(u.lrP,{className:"text-xl cursor-pointer absolute top-5 left-5 top-text",onClick:()=>e.back()}),(0,n.jsx)("h1",{className:"text-black text-2xl font-bold text-center my-7 top-text",children:"Trade Union"}),(0,n.jsx)("div",{className:"w-80 flex flex-col justify-center items-center pt-1 rounded-md  pb-16",children:i.W.map((e,t)=>(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"union-card w-fit flex gap-2 justify-center items-center bg-white shadow-lg p-3 rounded-xl mx-10 my-2",children:[(0,n.jsx)("img",{src:"/images/Logo.png",alt:"",className:"w-10 h-10"}),(0,n.jsx)("p",{className:"text-sm font-semibold my-2",children:e})]},t)}))})]})})})}},1017:function(e,t,r){"use strict";var n=r(3827);r(64090);var c=r(18009);t.Z=function(e){let{children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"w-screen h-screen flex justify-center items-center overflow-x-hidden",children:(0,n.jsx)("div",{className:"md:w-[30%] w-full h-screen shadow-lg",children:t})}),(0,n.jsx)(c.x7,{})]})}},4205:function(e,t){"use strict";t.Z="https://backend.intucthrissur.com/api"},72658:function(e,t,r){"use strict";r.d(t,{W:function(){return n}});let n=["ദേശീയ ചുമട്ടു തൊഴിലാളി യൂണിയൻ (INTUC)","കേരള മത്സ്യ വ്യവസായ തൊഴിലാളി കോൺഗ്രസ് (INTUC)","ഓൾ കേരള തയ്യൽ തൊഴിലാളി യൂണിയൻ (INTUC)","തൃശൂർ ജില്ലാ ഗ്രാമീണ തൊഴിലുറപ്പ് തൊഴിലാളി യൂണിയൻ (INTUC)","തൃശൂർ ജില്ലാ ഓട്ടോ ഡ്രൈവേഴ്സ് യൂണിയൻ","കേരള ലക്ഷ്മി മിൽ ലേബർ കോൺഗ്രസ്","കേരള സ്റ്റേറ്റ് തഴപ്പായ തൊഴിലാളി യൂണിയൻ","ഓൾ കേരള ഓട്ടോ കൺസൾറ്റൻറ്സ് ഓർഗനൈസേഷൻ","കേരള അംഗൻവാടി ആൻഡ് ക്രഷ് വർക്കേഴ്സ് യൂണിയൻ","കേരള പ്രദേശ് ആശാ വർക്കേഴ്സ് കോൺഗ്രസ്","കേരള സ്റ്റേറ്റ് ആഭരണ തൊഴിലാളി യൂണിയൻ","തൃശൂർ ജില്ലാ കൺസ്ട്രക്ഷൻ വർക്കേഴ്സ് യൂണിയൻ","അപ്പോളോ ടയർസ് സ്റ്റാഫ് ആൻഡ് വർക്കേഴ്സ് യൂണിയൻ"]},70158:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(64090),c={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(c),i=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){var n,c;n=t,c=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[n]=c}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(f,l({attr:a({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,a({key:r},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var r,{attr:c,size:o,title:s}=e,u=function(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}(e,i),f=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,c,u,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==o?n.createElement(o.Consumer,null,e=>t(e)):t(c)}}},function(e){e.O(0,[6051,1296,7908,2971,9362,560],function(){return e(e.s=35667)}),_N_E=e.O()}]);