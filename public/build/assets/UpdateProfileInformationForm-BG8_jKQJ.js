import{V as c,j as e,U as d,n as a}from"./app-BUxkjKGP.js";import{u,C as r}from"./use-request-BZVJs3yD.js";import{T as n}from"./TextInput-JqgoZw82.js";import{B as p}from"./Button-Dbs9TnWX.js";import{z as x}from"./transition-AlZ0OMry.js";import"./Paper-C0H4_VJZ.js";import"./create-safe-context-jcT3M2lv.js";function b({mustVerifyEmail:o,status:l}){const i=c().props.auth.user,t=u({initialValues:{name:i.name,email:i.email},validate:{name:s=>s.length<2?"Name must have at least 3 letters":null,email:s=>/^\S+@\S+$/.test(s)?null:"Invalid email"}}),m=s=>{s.preventDefault(),t.patch(route("profile.update"),{onSuccess:()=>a.show({title:"Update berhasil",message:"",color:"green"}),onError:()=>a.show({title:"Update gagal",message:"",color:"red"})})};return e.jsx(e.Fragment,{children:e.jsxs(r,{withBorder:!0,children:[e.jsxs(r.Section,{className:"px-6 py-4 sm:py-8 lg:px-8",withBorder:!0,children:[e.jsx("h2",{className:"text-lg font-bold",children:"Danger zone"}),e.jsx("p",{className:"mt-1 text-sm",children:"Be Careful. Account deletion cannot be undone."})]}),e.jsxs("div",{className:"px-6 py-4 sm:py-8 lg:px-8",children:[" ",e.jsxs("form",{onSubmit:m,className:"mt-0 space-y-6",children:[e.jsx(n,{required:!0,...t.getInputProps("name"),label:"Name",size:"md"}),e.jsx(n,{required:!0,disabled:!0,...t.getInputProps("email"),label:"Email",size:"md"}),o&&i.email_verified_at===null&&e.jsxs("div",{children:[e.jsxs("p",{className:"mt-2 text-sm text-gray-800",children:["Your email address is unverified.",e.jsx(d,{href:route("verification.send"),method:"post",as:"button",className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"Click here to re-send the verification email."})]}),l==="verification-link-sent"&&e.jsx("div",{className:"mt-2 text-sm font-medium text-green-600",children:"A new verification link has been sent to your email address."})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(p,{loading:t.processing,type:"submit",children:"Save"}),e.jsx(x,{show:t.recentlySuccessful,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})]})})}export{b as default};
