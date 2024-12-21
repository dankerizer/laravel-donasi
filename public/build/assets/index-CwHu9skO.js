import{s as D,u as j,b as I,j as e,B as Y,d as A,g as m,m as F,o as _,M as B,U as H,K as R}from"./app-DG_quuA_.js";import{w as f,A as S,M as t}from"./app-layout-BjFVCOca.js";import{N as L,I as T,b as u,T as z}from"./date-format-DaTSjDN-.js";import{A as E}from"./ActionIcon-jh8LysN7.js";import{m as P}from"./events-CBmrCxgV.js";import"./Group-CeJplS76.js";import"./Button-CtqclE1W.js";import"./FocusTrap-CbdYIe9M.js";var v={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};const V={},G=A((s,{radius:l,color:a,gradient:d,variant:r,size:o,autoContrast:n})=>{const i=s.variantColorResolver({color:a||s.primaryColor,theme:s,gradient:d,variant:r||"filled",autoContrast:n});return{root:{"--badge-height":m(o,"badge-height"),"--badge-padding-x":m(o,"badge-padding-x"),"--badge-fz":m(o,"badge-fz"),"--badge-radius":l===void 0?void 0:F(l),"--badge-bg":a||r?i.background:void 0,"--badge-color":a||r?i.color:void 0,"--badge-bd":a||r?i.border:void 0,"--badge-dot-color":r==="dot"?_(a,s):void 0}}}),b=D((s,l)=>{const a=j("Badge",V,s),{classNames:d,className:r,style:o,styles:n,unstyled:i,vars:k,radius:q,color:J,gradient:O,leftSection:x,rightSection:p,children:y,variant:g,fullWidth:N,autoContrast:Q,circle:C,mod:M,...w}=a,c=I({name:"Badge",props:a,classes:v,className:r,style:o,classNames:d,styles:n,unstyled:i,vars:k,varsResolver:G});return e.jsxs(Y,{variant:g,mod:[{block:N,circle:C,"with-right-section":!!p,"with-left-section":!!x},M],...c("root",{variant:g}),ref:l,...w,children:[x&&e.jsx("span",{...c("section"),"data-position":"left",children:x}),e.jsx("span",{...c("label"),children:y}),p&&e.jsx("span",{...c("section"),"data-position":"right",children:p})]})});b.classes=v;b.displayName="@mantine/core/Badge";const K={};function h(s){const l=j("NumberFormatter",K,s),{value:a,defaultValue:d,...r}=l;return a===void 0?null:e.jsx(L,{displayType:"text",value:a,...r})}const U=s=>s;h.extend=U;h.displayName="@mantine/core/NumberFormatter";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=f("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=f("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);function de({data:s}){const l=s==null?void 0:s.data;return e.jsxs(S,{children:[e.jsx(B,{title:"List Campaign Donasi"}),e.jsxs("div",{className:"table w-full",children:[e.jsx("div",{className:"mb-11 table-header-group",children:e.jsxs("div",{className:"table-row",children:[e.jsx("div",{className:"table-cell border-b py-2 text-left",children:"Campaign"}),e.jsx("div",{className:"table-cell border-b text-left",children:"Goal"}),e.jsx("div",{className:"table-cell border-b text-left",children:"Waktu Campaign"}),e.jsx("div",{className:"table-cell border-b text-left"})]})}),e.jsx("div",{className:"table-row-group",children:l==null?void 0:l.map(a=>{var d;return e.jsxs("div",{className:"table-row hover:bg-slate-100",children:[e.jsx("div",{className:"table-cell border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(T,{src:(d=a.featured_image)==null?void 0:d.url,w:120,alt:a.title,radius:"md"}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("h3",{className:"font-bold",children:a.title}),e.jsx(b,{children:"Kategori"})]})]})}),e.jsx("div",{className:"table-cell border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400",children:e.jsx(h,{value:a.goal,thousandSeparator:!0,prefix:"Rp. "})}),e.jsx("div",{className:"table-cell border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx(W,{className:"size-6 text-gray-400"}),e.jsxs("div",{className:"flex flex-col text-xs text-gray-500",children:[e.jsx("span",{children:u(a==null?void 0:a.start_date,"DD MMM YYYY HH:mm")}),e.jsx("span",{children:u(a==null?void 0:a.finish_date,"DD MMM YYYY HH:mm")})]})]})}),e.jsx("div",{className:"table-cell border-b border-slate-100 p-4 pl-8 text-slate-500 dark:border-slate-700 dark:text-slate-400",children:e.jsxs(t,{shadow:"md",width:200,children:[e.jsx(t.Target,{children:e.jsx(E,{variant:"subtle",children:e.jsx($,{})})}),e.jsxs(t.Dropdown,{children:[e.jsx(t.Label,{children:"Aksi"}),e.jsx(t.Item,{component:H,href:route("admin.campaign.edit",{id:a.id}),children:"Edit"}),e.jsx(t.Item,{onClick:()=>P.openConfirmModal({title:"Yakin....?",children:e.jsxs(z,{children:["Apakah anda yakin akan menduplikasi campaign ",e.jsx("strong",{children:a.title}),"ini?"]}),labels:{confirm:"In syaa Allah",cancel:"Gak jadi"},onConfirm:()=>R.post(route("admin.campaign.duplicate",{id:a.id}))}),children:"Duplikat"}),e.jsx(t.Item,{children:"Lihat Campaign"}),e.jsx(t.Divider,{}),e.jsx(t.Item,{children:"Hapus"})]})]})})]},`campaign-${a.id}`)})})]})]})}export{de as default};
