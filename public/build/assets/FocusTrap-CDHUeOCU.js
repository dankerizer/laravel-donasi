import{r as a,v as g,f as w,u as x,b as A,j as m,B as I,w as F}from"./app-CGQQ-ZlW.js";import{i as R}from"./is-element-qvA2NJ6b.js";function V({opened:e,shouldReturnFocus:n=!0}){const t=a.useRef(null),o=()=>{var r;t.current&&"focus"in t.current&&typeof t.current.focus=="function"&&((r=t.current)==null||r.focus({preventScroll:!0}))};return g(()=>{let r=-1;const s=u=>{u.key==="Tab"&&window.clearTimeout(r)};return document.addEventListener("keydown",s),e?t.current=document.activeElement:n&&(r=window.setTimeout(o,10)),()=>{window.clearTimeout(r),document.removeEventListener("keydown",s)}},[e,n]),o}const h=/input|select|textarea|button|object/,p="a, input, select, textarea, button, object, [tabindex]";function L(e){return e.style.display==="none"}function S(e){if(e.getAttribute("aria-hidden")||e.getAttribute("hidden")||e.getAttribute("type")==="hidden")return!1;let t=e;for(;t&&!(t===document.body||t.nodeType===11);){if(L(t))return!1;t=t.parentNode}return!0}function y(e){let n=e.getAttribute("tabindex");return n===null&&(n=void 0),parseInt(n,10)}function l(e){const n=e.nodeName.toLowerCase(),t=!Number.isNaN(y(e));return(h.test(n)&&!e.disabled||e instanceof HTMLAnchorElement&&e.href||t)&&S(e)}function E(e){const n=y(e);return(Number.isNaN(n)||n>=0)&&l(e)}function k(e){return Array.from(e.querySelectorAll(p)).filter(E)}function H(e,n){const t=k(e);if(!t.length){n.preventDefault();return}const o=t[n.shiftKey?0:t.length-1],r=e.getRootNode();let s=o===r.activeElement||e===r.activeElement;const u=r.activeElement;if(u.tagName==="INPUT"&&u.getAttribute("type")==="radio"&&(s=t.filter(i=>i.getAttribute("type")==="radio"&&i.getAttribute("name")===u.getAttribute("name")).includes(o)),!s)return;n.preventDefault();const c=t[n.shiftKey?t.length-1:0];c&&c.focus()}function j(e=!0){const n=a.useRef(null),t=r=>{let s=r.querySelector("[data-autofocus]");if(!s){const u=Array.from(r.querySelectorAll(p));s=u.find(E)||u.find(l)||null,!s&&l(r)&&(s=r)}s&&s.focus({preventScroll:!0})},o=a.useCallback(r=>{e&&r!==null&&n.current!==r&&(r?(setTimeout(()=>{r.getRootNode()&&t(r)}),n.current=r):n.current=null)},[e]);return a.useEffect(()=>{if(!e)return;n.current&&setTimeout(()=>t(n.current));const r=s=>{s.key==="Tab"&&n.current&&H(n.current,s)};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[e]),o}function q(e,n,t){a.useEffect(()=>(window.addEventListener(e,n,t),()=>window.removeEventListener(e,n,t)),[e,n])}var N={root:"m_515a97f8"};const D={},f=w((e,n)=>{const t=x("VisuallyHidden",D,e),{classNames:o,className:r,style:s,styles:u,unstyled:d,vars:c,...b}=t,i=A({name:"VisuallyHidden",classes:N,props:t,className:r,style:s,classNames:o,styles:u,unstyled:d});return m.jsx(I,{component:"span",ref:n,...i("root"),...b})});f.classes=N;f.displayName="@mantine/core/VisuallyHidden";function T({children:e,active:n=!0,refProp:t="ref",innerRef:o}){const r=j(n),s=F(r,o);return R(e)?a.cloneElement(e,{[t]:s}):e}function v(e){return m.jsx(f,{tabIndex:-1,"data-autofocus":!0,...e})}T.displayName="@mantine/core/FocusTrap";v.displayName="@mantine/core/FocusTrapInitialFocus";T.InitialFocus=v;export{T as F,V as a,q as u};