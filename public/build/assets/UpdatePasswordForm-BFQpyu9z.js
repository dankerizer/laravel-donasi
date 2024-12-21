import{r as d,j as s,n as u}from"./app-DG_quuA_.js";import{u as l,C as c}from"./use-request-BbhbXGLq.js";import{P as e}from"./PasswordInput-zrYCU3Sv.js";import{B as m}from"./Button-CtqclE1W.js";import{z as w}from"./transition-D9QrI5Hn.js";import"./Paper-DYlBl8P3.js";import"./ActionIcon-jh8LysN7.js";function k(){const t=d.useRef(null),a=d.useRef(null),r=l({initialValues:{current_password:"",password:"",password_confirmation:""}}),p=()=>{r.put(route("password.update"),{preserveScroll:!0,onSuccess:()=>{u.show({title:"Update password berhasil",message:"Simpan dan ingat password Anda untuk login berikutnya"}),r.reset()},onError:o=>{var n,i;o.password&&(r.setFieldError("password","Kredential tidak cocok, coba kembali"),r.setFieldError("password_confirmation","Kredential tidak cocok, coba kembali"),(n=t.current)==null||n.focus()),o.current_password&&(r.setFieldValue("current_password",""),r.setFieldError("current_password","Kredential tidak cocok, coba kembali"),(i=a.current)==null||i.focus())}})};return s.jsx(s.Fragment,{children:s.jsxs(c,{withBorder:!0,children:[s.jsxs(c.Section,{className:"px-6 py-4 sm:py-8 lg:px-8",withBorder:!0,children:[s.jsx("h2",{className:"text-lg font-medium",children:"Update Password"}),s.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Ensure your account is using a long, random password to stay secure."})]}),s.jsx("div",{className:"px-6 py-4 sm:py-8 lg:px-8",children:s.jsxs("form",{onSubmit:r.onSubmit(p),className:"mt-6 space-y-6",children:[s.jsx(e,{...r.getInputProps("current_password"),label:"Current password",required:!0,ref:a}),s.jsx(e,{...r.getInputProps("password"),label:"New password",required:!0,ref:t}),s.jsx(e,{...r.getInputProps("password_confirmation"),label:"Confirm Password",required:!0}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(m,{loading:r.processing,type:"submit",children:"Save"}),s.jsx(w,{show:r.recentlySuccessful,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:s.jsx("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})})]})})}export{k as default};