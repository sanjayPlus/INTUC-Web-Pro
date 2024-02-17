(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9392],{92160:function(e,t,r){Promise.resolve().then(r.bind(r,75160))},75160:function(e,t,r){"use strict";r.r(t);var s=r(3827),n=r(1017),l=r(4205),o=r(7908),c=r(47907),a=r(64090),i=r(18009),u=r(71399),f=r(70784);t.default=function(){let e=(0,c.useRouter)(),[t,r]=(0,a.useState)(""),[m,d]=(0,a.useState)(0);return(0,a.useEffect)(()=>{localStorage.getItem("token")||e.push("/login"),o.Z.get(l.Z+"/user/protected",{headers:{"x-access-token":localStorage.getItem("token")}}).then(t=>{200!==t.status&&e.push("/login")}).catch(t=>{e.push("/login"),localStorage.removeItem("token")})},[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(n.Z,{children:(0,s.jsxs)("div",{className:"disclaimer w-full min-h-screen flex flex-col justify-start items-center relative",style:{backgroundImage:"url('./images/bg-1.png')",backgroundSize:"cover"},children:[(0,s.jsx)(f.lrP,{className:"text-2xl cursor-pointer absolute top-5 left-5 top-text",onClick:()=>e.back()}),(0,s.jsx)("h1",{className:"text-2xl font-bold text-center mt-14 mb-5 top-text",children:"Disclaimer"}),(0,s.jsxs)("div",{className:"disclaimer-container w-auto flex flex-col justify-center items-center gap-2 bg-white shadow-lg p-3 rounded-xl m-4 ",children:[(0,s.jsx)("p",{className:"text-base font-semibold mt-2",children:"Share Your Feedback"}),(0,s.jsx)("img",{src:"./images/feedback.jpg",className:"w-full rounded-xl",alt:""}),(0,s.jsx)("p",{className:"text-base font-semibold mt-2",children:"Your Feedback Helps Us To Improve"}),(0,s.jsxs)("div",{className:"feedback-star-container w-full flex justify-start items-center py-3 pl-5 gap-2",children:[(0,s.jsx)(u.QJe,{size:25,className:m>=1?"cursor-pointer text-yellow-500":"cursor-pointer text-gray-300",onClick:()=>d(1)}),(0,s.jsx)(u.QJe,{size:25,className:m>=2?"cursor-pointer text-yellow-500":"cursor-pointer text-gray-300",onClick:()=>d(2)}),(0,s.jsx)(u.QJe,{size:25,className:m>=3?"cursor-pointer text-yellow-500":"cursor-pointer text-gray-300",onClick:()=>d(3)}),(0,s.jsx)(u.QJe,{size:25,className:m>=4?"cursor-pointer text-yellow-500":"cursor-pointer text-gray-300",onClick:()=>d(4)}),(0,s.jsx)(u.QJe,{size:25,className:m>=5?"cursor-pointer text-yellow-500":"cursor-pointer text-gray-300",onClick:()=>d(5)})]}),(0,s.jsxs)("div",{className:"w-full flex flex-col justify-start items-start mt-2",children:[(0,s.jsx)("p",{className:" font-semibold text-sm",children:"Please Leave Your Feedback"}),(0,s.jsx)("textarea",{className:"w-full p-4 rounded-lg bg-gray-100 shadow-sm my-4",placeholder:"Write Your Feedback",value:t,onChange:e=>r(e.target.value)})]}),(0,s.jsx)("div",{className:"w-full flex justify-center items-center",children:(0,s.jsx)("button",{onClick:()=>{if(!t){i.ZP.error("Please enter your feedback");return}try{o.Z.post(l.Z+"/user/feedback",{feedback:t,star:m},{headers:{"x-access-token":localStorage.getItem("token")}}).then(e=>{200===e.status&&i.ZP.success("Feedback submitted successfully")})}catch(e){console.log(e),i.ZP.error("Error submitting feedback")}},className:"bg-amber-500 text-white w-32  text-xl py-2 rounded-xl font-semibold",children:"Submit"})})]})]})})})}},1017:function(e,t,r){"use strict";var s=r(3827);r(64090);var n=r(18009);t.Z=function(e){let{children:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"w-screen h-screen flex justify-center items-center overflow-x-hidden",children:(0,s.jsx)("div",{className:"md:w-[30%] w-full h-screen shadow-lg",children:t})}),(0,s.jsx)(n.x7,{})]})}},4205:function(e,t){"use strict";t.Z="https://backend.intucthrissur.com/api"},70158:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var s=r(64090),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=s.createContext&&s.createContext(n),o=["attr","size","title"];function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){var s,n;s=t,n=r[t],(s=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(s))in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>s.createElement(f,c({attr:i({},e.attr)},t),function e(t){return t&&t.map((t,r)=>s.createElement(t.tag,i({key:r},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var r,{attr:n,size:l,title:a}=e,u=function(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},l=Object.keys(e);for(s=0;s<l.length;s++)r=l[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)r=l[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,o),f=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),s.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,u,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),a&&s.createElement("title",null,a),e.children)};return void 0!==l?s.createElement(l.Consumer,null,e=>t(e)):t(n)}}},function(e){e.O(0,[6051,7699,1296,7908,2971,9362,560],function(){return e(e.s=92160)}),_N_E=e.O()}]);