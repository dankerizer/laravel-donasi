import{Z as i,a4 as d}from"./app-DG_quuA_.js";function u(o,n){window.dispatchEvent(new CustomEvent(o,{detail:n}))}function m(o){function n(a){const e=Object.keys(a).reduce((t,l)=>(t[`${o}:${l}`]=r=>a[l](r.detail),t),{});i(()=>(Object.keys(e).forEach(t=>{window.removeEventListener(t,e[t]),window.addEventListener(t,e[t])}),()=>Object.keys(e).forEach(t=>{window.removeEventListener(t,e[t])})),[e])}function c(a){return(...e)=>u(`${o}:${String(a)}`,e[0])}return[n,c]}const[h,s]=m("mantine-modals"),E=o=>{const n=o.modalId||d();return s("openModal")({...o,modalId:n}),n},M=o=>{const n=o.modalId||d();return s("openConfirmModal")({...o,modalId:n}),n},p=o=>{const n=o.modalId||d();return s("openContextModal")({...o,modalId:n}),n},f=s("closeModal"),w=s("closeAllModals"),I=o=>s("updateModal")(o),v=o=>s("updateContextModal")(o),x={open:E,close:f,closeAll:w,openConfirmModal:M,openContextModal:p,updateModal:I,updateContextModal:v};export{f as a,p as b,w as c,E as d,v as e,I as f,x as m,M as o,h as u};