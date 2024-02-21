(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2927],{73787:function(e,t,r){Promise.resolve().then(r.bind(r,82496))},82496:function(e,t,r){"use strict";r.r(t);var s=r(3827),n=r(1017),l=r(4205),o=r(7908),i=r(47907),a=r(64090),c=r(18009),u=r(52840),d=r(70784);t.default=function(){let[e,t]=(0,a.useState)(""),[r,f]=(0,a.useState)(""),[m,h]=(0,a.useState)(!1),[p,g]=(0,a.useState)(!1),x=(0,i.useRouter)();(0,a.useEffect)(()=>{localStorage.getItem("token")||x.push("/login"),o.Z.get(l.Z+"/user/protected",{headers:{"x-access-token":localStorage.getItem("token")}}).then(e=>{200!==e.status&&x.push("/login")}).catch(e=>{x.push("/login"),localStorage.removeItem("token")})},[]);let b=()=>{h(!m)},v=()=>{g(!p)};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.Z,{children:(0,s.jsxs)("div",{className:"w-full h-full flex flex-col relative ",style:{backgroundImage:"url('/images/bg-1.png')",backgroundSize:"cover"},children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-50 backdrop-blur-none -z-0"}),(0,s.jsx)("div",{className:"w-full h-16 flex justify-center items-center  mb-1 relative z-10",children:(0,s.jsx)(d.lrP,{className:"text-xl cursor-pointer absolute top-5 left-5 top-text",onClick:()=>x.back()})}),(0,s.jsx)("div",{className:"w-full h-auto flex justify-center relative mt-4",children:(0,s.jsx)("img",{src:"/images/logo.png",alt:"",className:"w-24"})}),(0,s.jsxs)("div",{className:"flex-1 justify-center items-center bg-slate-900 rounded-3xl mx-10 my-11 relative z-10 ",children:[(0,s.jsxs)("div",{className:"input-container pt-10 pb-1 flex flex-col w-full justify-center items-center",children:[(0,s.jsx)("p",{className:"font-medium text-white mb-3",children:"Change Your Password "}),(0,s.jsxs)("div",{style:{width:"80%",height:"50px"},className:"my-2 rounded-lg flex justify-start items-center border border-white pl-5 relative",children:[(0,s.jsx)(u.Q6l,{size:18,color:"white"}),(0,s.jsx)("input",{type:m?"text":"password",placeholder:"Password",value:e,onChange:e=>t(e.target.value),className:"bg-transparent border-none outline-none text-white pl-2 w-full"}),(0,s.jsx)("div",{className:"absolute right-3 top-1/2 transform -translate-y-1/2",children:m?(0,s.jsx)(u.hKY,{size:18,color:"white",onClick:b}):(0,s.jsx)(u.rWO,{size:18,color:"white",onClick:b})})]}),(0,s.jsxs)("div",{style:{width:"80%",height:"50px"},className:"mb-5 rounded-lg flex justify-start items-center border border-white pl-5 relative",children:[(0,s.jsx)(u.Q6l,{size:18,color:"white"}),(0,s.jsx)("input",{type:p?"text":"password",placeholder:"Confirm Password",value:r,onChange:e=>f(e.target.value),className:"bg-transparent border-none outline-none text-white pl-2 w-full"}),(0,s.jsx)("div",{className:"absolute right-3 top-1/2 transform -translate-y-1/2",children:p?(0,s.jsx)(u.hKY,{size:18,color:"white",onClick:v}):(0,s.jsx)(u.rWO,{size:18,color:"white",onClick:v})})]})]}),(0,s.jsx)("div",{className:"w-full flex justify-center items-center ",children:(0,s.jsx)("button",{className:"bg-amber-500 text-white w-60 text-xl py-2  rounded-xl font-semibold",onClick:()=>{if(!e){c.ZP.error("Please enter your password");return}if(!r){c.ZP.error("Please confirm your password");return}if(e!==r){c.ZP.error("Passwords do not match");return}try{o.Z.post(l.Z+"/user/resetPassword",{password:e},{headers:{"x-access-token":localStorage.getItem("token")}}).then(e=>{200===e.status&&(c.ZP.success("Password changed successfully"),localStorage.removeItem("token"),x.push("/login"))})}catch(e){console.log(e),c.ZP.error("Error changing password")}},children:"Submit"})}),(0,s.jsx)("div",{className:"w-full flex justify-start items-start mt-3",children:(0,s.jsx)("p",{className:"text-sky-500 text-sm pl-10 cursor-pointer",onClick:()=>x.push("/home"),children:"Skip"})})]})]})})})}},1017:function(e,t,r){"use strict";var s=r(3827);r(64090);var n=r(18009);t.Z=function(e){let{children:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"w-screen h-screen flex justify-center items-center overflow-x-hidden",children:(0,s.jsx)("div",{className:"md:w-[30%] w-full h-screen shadow-lg",children:t})}),(0,s.jsx)(n.x7,{})]})}},4205:function(e,t){"use strict";t.Z="https://backend.intucthrissur.com/api"},70158:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var s=r(64090),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=s.createContext&&s.createContext(n),o=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){var s,n;s=t,n=r[t],(s=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(s))in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>s.createElement(d,i({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>s.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:n,size:l,title:a}=e,u=function(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},l=Object.keys(e);for(s=0;s<l.length;s++)r=l[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)r=l[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,o),d=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),s.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),a&&s.createElement("title",null,a),e.children)};return void 0!==l?s.createElement(l.Consumer,null,e=>t(e)):t(n)}}},function(e){e.O(0,[6051,5706,1296,7908,2971,9362,560],function(){return e(e.s=73787)}),_N_E=e.O()}]);