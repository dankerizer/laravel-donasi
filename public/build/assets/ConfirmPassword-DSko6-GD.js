import{a as d,j as s,M as l}from"./app-DG_quuA_.js";import{T as p,I as c}from"./TextInput-DSs6K3or.js";import{I as u}from"./InputLabel-BeG3gSKH.js";import{G as f,P as x}from"./GuestLayout-D1FWbaKt.js";function g(){const{data:r,setData:e,post:t,processing:o,errors:i,reset:m}=d({password:""}),n=a=>{a.preventDefault(),t(route("password.confirm"),{onFinish:()=>m("password")})};return s.jsxs(f,{children:[s.jsx(l,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(u,{htmlFor:"password",value:"Password"}),s.jsx(p,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",isFocused:!0,onChange:a=>e("password",a.target.value)}),s.jsx(c,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"mt-4 flex items-center justify-end",children:s.jsx(x,{className:"ms-4",disabled:o,children:"Confirm"})})]})]})}export{g as default};