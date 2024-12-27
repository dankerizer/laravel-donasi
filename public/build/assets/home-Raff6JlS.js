import{r as I,N as We,f as _e,e as Fe,j as f,b as Re,t as Ze,D as Ye,x as me,l as be,E as we,I as Je,u as Xe,G as Qe,h as he,i as en,U as ge,af as nn,z as tn,S as rn,M as an}from"./app-CognApPA.js";import{g as Ie,c as on,A as ze}from"./AccordionChevron-BajmH3gc.js";import{g as sn,u as cn,S as ln}from"./search-D-02NshD.js";import{T as De}from"./Text-Bxw7UPqg.js";import"./createLucideIcon-DlenjaRw.js";function un(e,n,t,r,i){return r+(i-r)*((e-n)/(t-n))}function Ee(e){return typeof e=="number"}function Te(e){return typeof e=="string"}function je(e){return Object.prototype.toString.call(e)==="[object Object]"}function dn(e){return Array.isArray(e)}function Oe(e){return je(e)||dn(e)}function H(e){return Math.abs(e)}function Ne(e){return e?e/H(e):0}function le(e,n){return H(e-n)}function fn(e,n){if(e===0||n===0||H(e)<=H(n))return 0;var t=le(H(e),H(n));return H(t/e)}function vn(e){var n=Math.pow(10,e);return function(t){return Math.round(t*n)/n}}function ue(e){return ie(e).map(Number)}function re(e){return e[Se(e)]}function Se(e){return Math.max(0,e.length-1)}function ie(e){return Object.keys(e)}function qe(e,n){return[e,n].reduce(function(t,r){return ie(r).forEach(function(i){var s=t[i],o=r[i],u=je(s)&&je(o);t[i]=u?qe(s,o):o}),t},{})}function Ge(e,n){var t=ie(e),r=ie(n);return t.length!==r.length?!1:t.every(function(i){var s=e[i],o=n[i];return typeof s=="function"?"".concat(s)==="".concat(o):!Oe(s)||!Oe(o)?s===o:Ge(s,o)})}function pn(e,n){var t={start:r,center:i,end:s};function r(){return 0}function i(l){return s(l)/2}function s(l){return n-l}function o(){return n*Number(e)}function u(l){return Ee(e)?o():t[e](l)}var d={measure:u};return d}function mn(e){var n=0;function t(o,u){return function(){o===!!n&&u()}}function r(){n=window.requestAnimationFrame(e)}function i(){window.cancelAnimationFrame(n),n=0}var s={proceed:t(!0,r),start:t(!1,r),stop:t(!0,i)};return s}function hn(e,n){var t=e==="y"?"y":"x",r=e==="y"?"x":"y",i=u(),s=d();function o(c){var a=c.width,p=c.height;return t==="x"?a:p}function u(){return t==="y"?"top":n==="rtl"?"right":"left"}function d(){return t==="y"?"bottom":n==="rtl"?"left":"right"}var l={scroll:t,cross:r,startEdge:i,endEdge:s,measureSize:o};return l}function se(e,n){var t=H(e-n);function r(l){return l<e}function i(l){return l>n}function s(l){return r(l)||i(l)}function o(l){return s(l)?r(l)?e:n:l}function u(l){return t?l-t*Math.ceil((l-n)/t):l}var d={length:t,max:n,min:e,constrain:o,reachedAny:s,reachedMax:i,reachedMin:r,removeOffset:u};return d}function Ue(e,n,t){var r=se(0,e),i=r.min,s=r.constrain,o=e+1,u=d(n);function d(v){return t?H((o+v)%o):s(v)}function l(){return u}function c(v){return u=d(v),m}function a(v){return c(l()+v)}function p(){return Ue(e,l(),t)}var m={add:a,clone:p,get:l,set:c,min:i,max:e};return m}function gn(e){var n=e==="rtl"?-1:1;function t(i){return i*n}var r={apply:t};return r}function xe(){var e=[];function n(i,s,o,u){return u===void 0&&(u={passive:!0}),i.addEventListener(s,o,u),e.push(function(){return i.removeEventListener(s,o,u)}),r}function t(){return e=e.filter(function(i){return i()}),r}var r={add:n,removeAll:t};return r}function ae(e){var n=e;function t(){return n}function r(a){return n=l(a),c}function i(a){return n+=l(a),c}function s(a){return n-=l(a),c}function o(a){return n*=a,c}function u(a){return n/=a,c}function d(){return n!==0&&u(n),c}function l(a){return Ee(a)?a:a.get()}var c={add:i,divide:u,get:t,multiply:o,normalize:d,set:r,subtract:s};return c}function xn(e,n,t,r,i,s,o,u,d,l,c,a,p,m,v,h){var x=e.cross,y=["INPUT","SELECT","TEXTAREA"],S={passive:!1},E=ae(0),g=xe(),b=xe(),N=p.measure(20),C={mouse:300,touch:400},L={mouse:500,touch:600},T=v?5:16,q=1,_=0,W=0,Z=!1,k=!1,O=!1,z=!1;function Y(){var w=t;g.add(w,"dragstart",function(B){return B.preventDefault()},S).add(w,"touchmove",function(){},S).add(w,"touchend",function(){}).add(w,"touchstart",J).add(w,"mousedown",J).add(w,"touchcancel",P).add(w,"contextmenu",P).add(w,"click",U,!0)}function V(){var w=z?document:t;b.add(w,"touchmove",ee,S).add(w,"touchend",P).add(w,"mousemove",ee,S).add(w,"mouseup",P)}function F(){g.removeAll(),b.removeAll()}function G(w){var B=w.nodeName||"";return y.indexOf(B)>-1}function X(){var w=v?L:C,B=z?"mouse":"touch";return w[B]}function Q(w,B){var $=c.clone().add(Ne(w)*-1),D=$.get()===c.min||$.get()===c.max,K=l.byDistance(w,!v).distance;return v||H(w)<N?K:!m&&D?K*.4:h&&B?K*.5:l.byIndex($.get(),0).distance}function J(w){if(z=!i.isTouchEvent(w),!(z&&w.button!==0)&&!G(w.target)){var B=le(r.get(),s.get())>=2,$=z||!B;Z=!0,i.pointerDown(w),E.set(r),r.set(s),d.useBaseMass().useSpeed(80),V(),_=i.readPoint(w),W=i.readPoint(w,x),a.emit("pointerDown"),$&&(O=!1)}}function ee(w){if(!k&&!z){if(!w.cancelable)return P(w);var B=i.readPoint(w),$=i.readPoint(w,x),D=le(B,_),K=le($,W);if(k=D>K,!k&&!O)return P(w)}var ne=i.pointerMove(w);!O&&ne&&(O=!0),o.start(),r.add(n.apply(ne)),w.preventDefault()}function P(w){var B=l.byDistance(0,!1),$=B.index!==c.get(),D=i.pointerUp(w)*X(),K=Q(n.apply(D),$),ne=fn(D,K),fe=le(r.get(),E.get())>=.5,ce=$&&ne>.75,ye=H(D)<N,ve=ce?10:T,pe=ce?q+2.5*ne:q;fe&&!z&&(O=!0),k=!1,Z=!1,b.removeAll(),d.useSpeed(ye?9:ve).useMass(pe),u.distance(K,!v),z=!1,a.emit("pointerUp")}function U(w){O&&(w.stopPropagation(),w.preventDefault())}function M(){return!O}function A(){return Z}var j={addActivationEvents:Y,clickAllowed:M,pointerDown:A,removeAllEvents:F};return j}function Sn(e){var n=170,t,r;function i(a){return typeof TouchEvent<"u"&&a instanceof TouchEvent}function s(a){return a.timeStamp}function o(a,p){var m=p||e.scroll,v="client".concat(m==="x"?"X":"Y");return(i(a)?a.touches[0]:a)[v]}function u(a){return t=a,r=a,o(a)}function d(a){var p=o(a)-o(r),m=s(a)-s(t)>n;return r=a,m&&(t=a),p}function l(a){if(!t||!r)return 0;var p=o(r)-o(t),m=s(a)-s(t),v=s(a)-s(r)>n,h=p/m,x=m&&!v&&H(h)>.1;return x?h:0}var c={isTouchEvent:i,pointerDown:u,pointerMove:d,pointerUp:l,readPoint:o};return c}function yn(e){function n(r){return e*(r/100)}var t={measure:n};return t}function wn(e,n,t){var r=vn(2),i=ae(0),s=ae(0),o=ae(0),u=0,d=n,l=t;function c(){i.add(s),e.add(i),s.multiply(0)}function a(g){g.divide(l),s.add(g)}function p(g){o.set(g).subtract(e);var b=un(o.get(),0,100,0,d);return u=Ne(o.get()),o.normalize().multiply(b).subtract(i),a(o),E}function m(g){var b=g.get()-e.get(),N=!r(b);return N&&e.set(g),N}function v(){return u}function h(){return y(n)}function x(){return S(t)}function y(g){return d=g,E}function S(g){return l=g,E}var E={direction:v,seek:p,settle:m,update:c,useBaseMass:x,useBaseSpeed:h,useMass:S,useSpeed:y};return E}function bn(e,n,t,r,i){var s=i.measure(10),o=i.measure(50),u=.85,d=!1;function l(){return!(d||!e.reachedAny(t.get())||!e.reachedAny(n.get()))}function c(m){if(l()){var v=e.reachedMin(n.get())?"min":"max",h=H(e[v]-n.get()),x=t.get()-n.get(),y=Math.min(h/o,u);t.subtract(x*y),!m&&H(x)<s&&(t.set(e.constrain(t.get())),r.useSpeed(10).useMass(3))}}function a(m){d=!m}var p={constrain:c,toggleActive:a};return p}function jn(e,n,t,r){var i=se(-n+e,t[0]),s=t.map(i.constrain),o=d();function u(){var c=s[0],a=re(s),p=s.lastIndexOf(c),m=s.indexOf(a)+1;return se(p,m)}function d(){if(n<=e)return[i.max];if(r==="keepSnaps")return s;var c=u(),a=c.min,p=c.max;return s.slice(a,p)}var l={snapsContained:o};return l}function En(e,n,t){var r=i();function i(){var o=n[0],u=re(n),d=t?o-e:u,l=o;return se(d,l)}var s={limit:r};return s}function Nn(e,n,t,r){var i=.1,s=n.min+i,o=n.max+i,u=se(s,o),d=u.reachedMin,l=u.reachedMax;function c(m){return m===1?l(t.get()):m===-1?d(t.get()):!1}function a(m){if(c(m)){var v=e*(m*-1);r.forEach(function(h){return h.add(v)})}}var p={loop:a};return p}function Mn(e){var n=e.max,t=e.length;function r(s){var o=s-n;return o/-t}var i={get:r};return i}function Cn(e,n,t,r,i,s,o){var u=e.startEdge,d=e.endEdge,l=s.groupSlides,c=m().map(n.measure),a=v(),p=h();function m(){return l(r).map(function(y){return re(y)[d]-y[0][u]}).map(H)}function v(){return r.map(function(y){return t[u]-y[u]}).map(function(y){return-H(y)})}function h(){var y=0,S=re(a)-re(i);return l(a).map(function(E){return E[0]}).map(function(E,g,b){var N=!g,C=g===Se(b);return o&&N?y:o&&C?S:E+c[g]})}var x={snaps:a,snapsAligned:p};return x}function kn(e,n,t,r,i){var s=r.reachedAny,o=r.removeOffset,u=r.constrain;function d(v){return v.concat().sort(function(h,x){return H(h)-H(x)})[0]}function l(v){var h=e?o(v):u(v),x=n.map(function(S){return S-h}).map(function(S){return c(S,0)}).map(function(S,E){return{diff:S,index:E}}).sort(function(S,E){return H(S.diff)-H(E.diff)}),y=x[0].index;return{index:y,distance:h}}function c(v,h){var x=[v,v+t,v-t];if(!e)return x[0];if(!h)return d(x);var y=x.filter(function(S){return Ne(S)===h});return d(y)}function a(v,h){var x=n[v]-i.get(),y=c(x,h);return{index:v,distance:y}}function p(v,h){var x=i.get()+v,y=l(x),S=y.index,E=y.distance,g=!e&&s(x);if(!h||g)return{index:S,distance:v};var b=n[S]-E,N=v+c(b,0);return{index:S,distance:N}}var m={byDistance:p,byIndex:a,shortcut:c};return m}function An(e,n,t,r,i,s){function o(c){var a=c.distance,p=c.index!==n.get();a&&(e.start(),i.add(a)),p&&(t.set(n.get()),n.set(c.index),s.emit("select"))}function u(c,a){var p=r.byDistance(c,a);o(p)}function d(c,a){var p=n.clone().set(c),m=r.byIndex(p.get(),a);o(m)}var l={distance:u,index:d};return l}function Ke(e,n,t){var r=e.scroll==="x"?o:u,i=t.style,s=!1;function o(p){return"translate3d(".concat(p,"px,0px,0px)")}function u(p){return"translate3d(0px,".concat(p,"px,0px)")}function d(p){s||(i.transform=r(n.apply(p.get())))}function l(p){s=!p}function c(){s||(i.transform="",t.getAttribute("style")||t.removeAttribute("style"))}var a={clear:c,to:d,toggleActive:l};return a}function Ln(e,n,t,r,i,s,o,u,d){var l=ue(i),c=ue(i).reverse(),a=h().concat(x());function p(b,N){return b.reduce(function(C,L){return C-i[L]},N)}function m(b,N){return b.reduce(function(C,L){var T=p(C,N);return T>0?C.concat([L]):C},[])}function v(b,N){var C=N==="start",L=C?-r:r,T=o.findSlideBounds([L]);return b.map(function(q){var _=C?0:-r,W=C?r:0,Z=T.filter(function(F){return F.index===q})[0],k=Z[C?"end":"start"],O=ae(-1),z=ae(-1),Y=Ke(e,n,d[q]),V=function(){return O.set(u.get()>k?_:W)};return{index:q,location:z,translate:Y,target:V}})}function h(){var b=s[0]-1,N=m(c,b);return v(N,"end")}function x(){var b=t-s[0]-1,N=m(l,b);return v(N,"start")}function y(){return a.every(function(b){var N=b.index,C=l.filter(function(L){return L!==N});return p(C,t)<=.1})}function S(){a.forEach(function(b){var N=b.target,C=b.translate,L=b.location,T=N();T.get()!==L.get()&&(T.get()===0?C.clear():C.to(T),L.set(T))})}function E(){a.forEach(function(b){return b.translate.clear()})}var g={canLoop:y,clear:E,loop:S,loopPoints:a};return g}function In(e,n,t,r,i,s,o){var u=i.removeOffset,d=i.constrain,l=.5,c=s?[0,n,-n]:[0],a=m(c,o);function p(x){var y=x||0;return t.map(function(S){var E=se(l,S-l);return E.constrain(S*y)})}function m(x,y){var S=x||c,E=p(y);return S.reduce(function(g,b){var N=r.map(function(C,L){return{start:C-t[L]+E[L]+b,end:C+e-E[L]+b,index:L}});return g.concat(N)},[])}function v(x,y){var S=s?u(x):d(x),E=y||a;return E.reduce(function(g,b){var N=b.index,C=b.start,L=b.end,T=g.indexOf(N)!==-1,q=C<S&&L>S;return!T&&q?g.concat([N]):g},[])}var h={check:v,findSlideBounds:m};return h}function zn(e,n,t,r,i){var s=e.measureSize,o=e.startEdge,u=e.endEdge,d=t[0]&&i,l=m(),c=v(),a=t.map(s),p=h();function m(){if(!d)return 0;var y=t[0];return H(n[o]-y[o])}function v(){if(!d)return 0;var y=window.getComputedStyle(re(r));return parseFloat(y.getPropertyValue("margin-".concat(u)))}function h(){return t.map(function(y,S,E){var g=!S,b=S===Se(E);return g?a[S]+l:b?a[S]+c:E[S+1][o]-y[o]}).map(H)}var x={slideSizes:a,slideSizesWithGaps:p};return x}function Dn(e,n,t){var r=Ee(t);function i(d,l){return ue(d).filter(function(c){return c%l===0}).map(function(c){return d.slice(c,c+l)})}function s(d){return ue(d).reduce(function(l,c){var a=n.slice(re(l),c+1),p=a.reduce(function(m,v){return m+v},0);return!c||p>e?l.concat(c):l},[]).map(function(l,c,a){return d.slice(l,a[c+1])})}function o(d){return r?i(d,t):s(d)}var u={groupSlides:o};return u}function Tn(e,n,t,r,i){var s=r.align,o=r.axis,u=r.direction,d=r.startIndex,l=r.inViewThreshold,c=r.loop,a=r.speed,p=r.dragFree,m=r.slidesToScroll,v=r.skipSnaps,h=r.containScroll,x=n.getBoundingClientRect(),y=t.map(function(K){return K.getBoundingClientRect()}),S=gn(u),E=hn(o,u),g=E.measureSize(x),b=yn(g),N=pn(s,g),C=!c&&h!=="",L=c||h!=="",T=zn(E,x,y,t,L),q=T.slideSizes,_=T.slideSizesWithGaps,W=Dn(g,_,m),Z=Cn(E,N,x,y,_,W,C),k=Z.snaps,O=Z.snapsAligned,z=-re(k)+re(_),Y=jn(g,z,O,h).snapsContained,V=C?Y:O,F=En(z,V,c).limit,G=Ue(Se(V),d,c),X=G.clone(),Q=ue(t),J=function(){c||D.scrollBounds.constrain(D.dragHandler.pointerDown()),D.scrollBody.seek(M).update();var K=D.scrollBody.settle(M);K&&!D.dragHandler.pointerDown()&&(D.animation.stop(),i.emit("settle")),K||i.emit("scroll"),c&&(D.scrollLooper.loop(D.scrollBody.direction()),D.slideLooper.loop()),D.translate.to(U),D.animation.proceed()},ee=mn(J),P=V[G.get()],U=ae(P),M=ae(P),A=wn(U,a,1),j=kn(c,V,z,F,M),w=An(ee,G,X,j,M,i),B=In(g,z,q,k,F,c,l),$=xn(E,S,e,M,Sn(E),U,ee,w,A,j,G,i,b,c,p,v),D={containerRect:x,slideRects:y,animation:ee,axis:E,direction:S,dragHandler:$,eventStore:xe(),percentOfView:b,index:G,indexPrevious:X,limit:F,location:U,options:r,scrollBody:A,scrollBounds:bn(F,U,M,A,b),scrollLooper:Nn(z,F,U,[U,M]),scrollProgress:Mn(F),scrollSnaps:V,scrollTarget:j,scrollTo:w,slideLooper:Ln(E,S,g,z,_,V,B,U,t),slidesToScroll:W,slidesInView:B,slideIndexes:Q,target:M,translate:Ke(E,S,n)};return D}function On(){var e={};function n(o){return e[o]||[]}function t(o){return n(o).forEach(function(u){return u(o)}),s}function r(o,u){return e[o]=n(o).concat([u]),s}function i(o,u){return e[o]=n(o).filter(function(d){return d!==u}),s}var s={emit:t,off:i,on:r};return s}var Bn={align:"center",axis:"x",container:null,slides:null,containScroll:"",direction:"ltr",slidesToScroll:1,breakpoints:{},dragFree:!1,draggable:!0,inViewThreshold:0,loop:!1,skipSnaps:!1,speed:10,startIndex:0,active:!0};function Me(){function e(i,s){return qe(i,s||{})}function n(i,s){var o=JSON.stringify(ie(i.breakpoints||{})),u=JSON.stringify(ie(s.breakpoints||{}));return o!==u?!1:Ge(i,s)}function t(i){var s=i.breakpoints||{},o=ie(s).filter(function(u){return window.matchMedia(u).matches}).map(function(u){return s[u]}).reduce(function(u,d){return e(u,d)},{});return e(i,o)}var r={merge:e,areEqual:n,atMedia:t};return r}function Hn(){var e=Me(),n=e.atMedia,t=e.areEqual,r=[],i=[];function s(){return i.some(function(c){return c()})}function o(c){var a=n(c.options);return function(){return!t(a,n(c.options))}}function u(c,a){return i=c.map(o),r=c.filter(function(p){return n(p.options).active}),r.forEach(function(p){return p.init(a)}),c.reduce(function(p,m){var v;return Object.assign(p,(v={},v[m.name]=m,v))},{})}function d(){r=r.filter(function(c){return c.destroy()})}var l={init:u,destroy:d,haveChanged:s};return l}function oe(e,n,t){var r=xe(),i=Me(),s=Hn(),o=On(),u=o.on,d=o.off,l=b,c=!1,a,p=i.merge(Bn,oe.globalOptions),m=i.merge(p),v=[],h,x=0,y,S;function E(){var M=m.container,A=m.slides,j=Te(M)?e.querySelector(M):M;y=j||e.children[0];var w=Te(A)?y.querySelectorAll(A):A;S=[].slice.call(w||y.children)}function g(M,A){if(!c){if(p=i.merge(p,M),m=i.atMedia(p),E(),a=Tn(e,y,S,m,o),x=a.axis.measureSize(e.getBoundingClientRect()),!m.active)return N();if(a.translate.to(a.location),v=A||v,h=s.init(v,U),m.loop){if(!a.slideLooper.canLoop()){N(),g({loop:!1},A),p=i.merge(p,{loop:!0});return}a.slideLooper.loop()}m.draggable&&y.offsetParent&&S.length&&a.dragHandler.addActivationEvents()}}function b(M,A){var j=V();N(),g(i.merge({startIndex:j},M),A),o.emit("reInit")}function N(){a.dragHandler.removeAllEvents(),a.animation.stop(),a.eventStore.removeAll(),a.translate.clear(),a.slideLooper.clear(),s.destroy()}function C(){c||(c=!0,r.removeAll(),N(),o.emit("destroy"))}function L(){var M=i.atMedia(p),A=!i.areEqual(M,m),j=a.axis.measureSize(e.getBoundingClientRect()),w=x!==j,B=s.haveChanged();(w||A||B)&&b(),o.emit("resize")}function T(M){var A=a[M?"target":"location"].get(),j=m.loop?"removeOffset":"constrain";return a.slidesInView.check(a.limit[j](A))}function q(M){var A=T(M);return a.slideIndexes.filter(function(j){return A.indexOf(j)===-1})}function _(M,A,j){!m.active||c||(a.scrollBody.useBaseMass().useSpeed(A?100:m.speed),a.scrollTo.index(M,j||0))}function W(M){var A=a.index.clone().add(1);_(A.get(),M===!0,-1)}function Z(M){var A=a.index.clone().add(-1);_(A.get(),M===!0,1)}function k(){var M=a.index.clone().add(1);return M.get()!==V()}function O(){var M=a.index.clone().add(-1);return M.get()!==V()}function z(){return a.scrollSnaps.map(a.scrollProgress.get)}function Y(){return a.scrollProgress.get(a.location.get())}function V(){return a.index.get()}function F(){return a.indexPrevious.get()}function G(){return a.dragHandler.clickAllowed()}function X(){return h}function Q(){return a}function J(){return e}function ee(){return y}function P(){return S}var U={canScrollNext:k,canScrollPrev:O,clickAllowed:G,containerNode:ee,internalEngine:Q,destroy:C,off:d,on:u,plugins:X,previousScrollSnap:F,reInit:l,rootNode:J,scrollNext:W,scrollPrev:Z,scrollProgress:Y,scrollSnapList:z,scrollTo:_,selectedScrollSnap:V,slideNodes:P,slidesInView:T,slidesNotInView:q};return g(n,t),r.add(window,"resize",L),setTimeout(function(){return o.emit("init")},0),U}oe.globalOptions=void 0;oe.optionsHandler=Me;function Pn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Be(e){return e.concat().sort(function(n,t){return n.name>t.name?1:-1}).map(function(n){return n.options})}function Vn(e,n){if(e.length!==n.length)return!1;var t=oe.optionsHandler().areEqual,r=Be(e),i=Be(n);return r.every(function(s,o){var u=i[o];return t(s,u)})}function Ce(e,n){e===void 0&&(e={}),n===void 0&&(n=[]);var t=I.useRef(oe.optionsHandler()),r=I.useRef(e),i=I.useRef(n),s=I.useState(),o=s[0],u=s[1],d=I.useState(),l=d[0],c=d[1],a=I.useCallback(function(){o&&o.reInit(r.current,i.current)},[o]);return I.useEffect(function(){if(Pn()&&l){oe.globalOptions=Ce.globalOptions;var p=oe(l,r.current,i.current);return u(p),function(){return p.destroy()}}else u(void 0)},[l,u]),I.useEffect(function(){t.current.areEqual(r.current,e)||(r.current=e,a())},[e,a]),I.useEffect(function(){Vn(i.current,n)||(i.current=n,a())},[n,a]),[c,o]}Ce.globalOptions=void 0;const[_n,Fn]=We("Carousel component was not found in tree");var ke={root:"m_17884d0f",viewport:"m_a2dae653",container:"m_fcd81474",controls:"m_39bc3463",control:"m_64f58e10",indicators:"m_71ea3ab1",indicator:"m_eae68602",slide:"m_d98df724"};const Rn={},Ae=_e((e,n)=>{const{classNames:t,className:r,style:i,styles:s,vars:o,mod:u,...d}=Fe("CarouselSlide",Rn,e),l=Fn();return f.jsx(Re,{ref:n,mod:[{orientation:l.orientation},u],...l.getStyles("slide",{className:r,style:i,classNames:t,styles:s}),...d})});Ae.classes=ke;Ae.displayName="@mantine/carousel/CarouselSlide";function qn({slideGap:e,slideSize:n,selector:t}){const r=Ze(),i=Ye({"--carousel-slide-gap":me(Ie(e)),"--carousel-slide-size":be(Ie(n))}),s=we(r.breakpoints).reduce((d,l)=>(d[l]||(d[l]={}),typeof e=="object"&&e[l]!==void 0&&(d[l]["--carousel-slide-gap"]=me(e[l])),typeof n=="object"&&n[l]!==void 0&&(d[l]["--carousel-slide-size"]=me(n[l])),d),{}),u=sn(we(s),r.breakpoints).filter(d=>we(s[d.value]).length>0).map(d=>({query:`(min-width: ${r.breakpoints[d.value]})`,styles:s[d.value]}));return f.jsx(Je,{styles:i,media:u,selector:t})}function He({dir:e,orientation:n,direction:t}){return t==="previous"?n==="horizontal"?90*(e==="ltr"?1:-1):-180:n==="horizontal"?90*(e==="ltr"?-1:1):0}const Gn={controlSize:26,controlsOffset:"sm",slideSize:"100%",slideGap:0,orientation:"horizontal",align:"center",slidesToScroll:1,includeGapInSize:!0,draggable:!0,dragFree:!1,loop:!1,speed:10,initialSlide:0,inViewThreshold:0,withControls:!0,withIndicators:!1,skipSnaps:!1,containScroll:"",withKeyboardEvents:!0},Un=en((e,{height:n,controlSize:t,controlsOffset:r})=>({root:{"--carousel-height":be(n),"--carousel-control-size":be(t),"--carousel-controls-offset":me(r)}})),de=_e((e,n)=>{const t=Fe("Carousel",Gn,e),{classNames:r,className:i,style:s,styles:o,unstyled:u,vars:d,children:l,getEmblaApi:c,onNextSlide:a,onPreviousSlide:p,onSlideChange:m,nextControlProps:v,previousControlProps:h,controlSize:x,controlsOffset:y,slideSize:S,slideGap:E,orientation:g,height:b,align:N,slidesToScroll:C,includeGapInSize:L,draggable:T,dragFree:q,loop:_,speed:W,initialSlide:Z,inViewThreshold:k,withControls:O,withIndicators:z,plugins:Y,nextControlIcon:V,previousControlIcon:F,skipSnaps:G,containScroll:X,withKeyboardEvents:Q,mod:J,...ee}=t,P=Xe({name:"Carousel",classes:ke,props:t,className:i,style:s,classNames:r,styles:o,unstyled:u,vars:d,varsResolver:Un}),U=Qe(),{dir:M}=cn(),[A,j]=Ce({axis:g==="horizontal"?"x":"y",direction:g==="horizontal"?M:void 0,startIndex:Z,loop:_,align:N,slidesToScroll:C,draggable:T,dragFree:q,speed:W,inViewThreshold:k,skipSnaps:G,containScroll:X},Y),[w,B]=I.useState(0),[$,D]=I.useState(0),K=I.useCallback(R=>j&&j.scrollTo(R),[j]),ne=I.useCallback(()=>{if(!j)return;const R=j.selectedScrollSnap();B(R),R!==w&&(m==null||m(R))},[j,B,m,w]),fe=I.useCallback(()=>{j==null||j.scrollPrev(),p==null||p()},[j]),ce=I.useCallback(()=>{j==null||j.scrollNext(),a==null||a()},[j]),ye=I.useCallback(R=>{Q&&(R.key==="ArrowRight"&&(R.preventDefault(),ce()),R.key==="ArrowLeft"&&(R.preventDefault(),fe()))},[j]);I.useEffect(()=>{if(j)return c==null||c(j),ne(),D(j.scrollSnapList().length),j.on("select",ne),()=>{j.off("select",ne)}},[j,C,ne]),I.useEffect(()=>{j&&(j.reInit(),D(j.scrollSnapList().length),B(R=>on(R,0,I.Children.toArray(l).length-1)))},[I.Children.toArray(l).length,C]);const ve=(j==null?void 0:j.canScrollPrev())||!1,pe=(j==null?void 0:j.canScrollNext())||!1,$e=Array($).fill(0).map((R,te)=>I.createElement(he,{...P("indicator"),key:te,"data-active":te===w||void 0,"aria-hidden":!0,tabIndex:-1,onClick:()=>K(te),"data-orientation":g}));return f.jsxs(_n,{value:{getStyles:P,orientation:g},children:[f.jsx(qn,{...t,selector:`.${U}`}),f.jsxs(Re,{ref:n,...P("root",{className:U}),...ee,mod:[{orientation:g,"include-gap-in-size":L},J],onKeyDownCapture:ye,children:[f.jsx("div",{...P("viewport"),ref:A,children:f.jsx("div",{...P("container"),"data-orientation":g,children:l})}),z&&f.jsx("div",{...P("indicators"),"data-orientation":g,children:$e}),O&&f.jsxs("div",{...P("controls"),"data-orientation":g,children:[f.jsx(he,{...h,...P("control",{className:h==null?void 0:h.className,style:h==null?void 0:h.style}),onClick:R=>{var te;fe(),(te=h==null?void 0:h.onClick)==null||te.call(h,R)},"data-inactive":!ve||void 0,tabIndex:ve?0:-1,children:typeof F<"u"?F:f.jsx(ze,{style:{transform:`rotate(${He({dir:M,orientation:g,direction:"previous"})}deg)`}})}),f.jsx(he,{...P("control",{className:v==null?void 0:v.className,style:v==null?void 0:v.style}),...v,onClick:R=>{var te;ce(),(te=v==null?void 0:v.onClick)==null||te.call(v,R)},"data-inactive":!pe||void 0,tabIndex:pe?0:-1,children:typeof V<"u"?V:f.jsx(ze,{style:{transform:`rotate(${He({dir:M,orientation:g,direction:"next"})}deg)`}})})]})]})]})});de.classes=ke;de.displayName="@mantine/carousel/Carousel";de.Slide=Ae;const Kn={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function $n(e,n){const t=e.scrollSnapList();return typeof n=="number"?t.map(()=>n):n(t,e)}function Wn(e,n){const t=e.rootNode();return n&&n(t)||t}function Le(e={}){let n,t,r,i,s=null,o=0,u=!1,d=!1,l=!1,c=!1;function a(k,O){t=k;const{mergeOptions:z,optionsAtMedia:Y}=O,V=z(Kn,Le.globalOptions),F=z(V,e);if(n=Y(F),t.scrollSnapList().length<=1)return;c=n.jump,r=!1,i=$n(t,n.delay);const{eventStore:G,ownerDocument:X}=t.internalEngine(),Q=!!t.internalEngine().options.watchDrag,J=Wn(t,n.rootNode);G.add(X,"visibilitychange",y),Q&&t.on("pointerDown",E),Q&&!n.stopOnInteraction&&t.on("pointerUp",g),n.stopOnMouseEnter&&G.add(J,"mouseenter",b),n.stopOnMouseEnter&&!n.stopOnInteraction&&G.add(J,"mouseleave",N),n.stopOnFocusIn&&t.on("slideFocusStart",x),n.stopOnFocusIn&&!n.stopOnInteraction&&G.add(t.containerNode(),"focusout",h),n.playOnInit&&!S()&&h()}function p(){t.off("pointerDown",E).off("pointerUp",g).off("slideFocusStart",x),x(),r=!0,u=!1}function m(){const{ownerWindow:k}=t.internalEngine();k.clearTimeout(o),o=k.setTimeout(_,i[t.selectedScrollSnap()]),s=new Date().getTime(),t.emit("autoplay:timerset")}function v(){const{ownerWindow:k}=t.internalEngine();k.clearTimeout(o),o=0,s=null,t.emit("autoplay:timerstopped")}function h(){r||(u||t.emit("autoplay:play"),m(),u=!0)}function x(){r||(u&&t.emit("autoplay:stop"),v(),u=!1)}function y(){if(S())return l=u,x();l&&h()}function S(){const{ownerDocument:k}=t.internalEngine();return k.visibilityState==="hidden"}function E(){d||x()}function g(){d||h()}function b(){d=!0,x()}function N(){d=!1,h()}function C(k){typeof k<"u"&&(c=k),h()}function L(){u&&x()}function T(){u&&h()}function q(){return u}function _(){const{index:k}=t.internalEngine(),O=k.clone().add(1).get(),z=t.scrollSnapList().length-1,Y=n.stopOnLastSnap&&O===z;if(t.canScrollNext()?t.scrollNext(c):t.scrollTo(0,c),t.emit("autoplay:select"),Y)return x();h()}function W(){if(!s)return null;const k=i[t.selectedScrollSnap()],O=new Date().getTime()-s;return k-O}return{name:"autoplay",options:e,init:a,destroy:p,play:C,stop:L,reset:T,isPlaying:q,timeUntilNext:W}}Le.globalOptions=void 0;const Zn=I.memo(function({item:n}){var t;return f.jsx(de.Slide,{className:"h-full w-full",children:f.jsx(ge,{href:route("campaign.show",{slug:n.slug}),className:"relative h-full w-full",children:f.jsx("img",{src:(t=n.featured_image)==null?void 0:t.url,alt:n.title,className:"h-auto w-full"})})},n.slug)}),Yn=I.memo(function(){const n=nn().props,t=I.useMemo(()=>Jn(n.campaigns,3),[n.campaigns]),r=I.useRef(Le({delay:2e3}));return f.jsx(de,{withIndicators:!0,loop:!0,dragFree:!0,plugins:[r.current],onMouseEnter:r.current.stop,onMouseLeave:r.current.reset,children:t==null?void 0:t.map(i=>f.jsx(Zn,{item:i},i.slug))})});function Jn(e,n){if(n>e.length)throw new Error("Count cannot be greater than the length of the array.");const t=e.slice();for(let r=t.length-1;r>0;r--){const i=Math.floor(Math.random()*(r+1));[t[r],t[i]]=[t[i],t[r]]}return t.slice(0,n)}const Pe={logo:e=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",fillRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2,clipRule:"evenodd",viewBox:"0 0 1125 894",...e,children:[f.jsx("path",{fill:"none",d:"M0 0h1125v893.75H0z"}),f.jsx("clipPath",{id:"a",children:f.jsx("path",{d:"M0 0h1125v893.75H0z"})}),f.jsx("g",{clipPath:"url(#a)",children:f.jsx("path",{fill:"#0b4e9d",d:"M605.564 551.075c-21.388 35.14-60.92 61.682-105.888 75.545-43.02 13.257-90.814 13.947-129.134 1.552-38.308-12.395-61.163-33.979-71.622-59.452-9.942-24.311-7.669-52.542 8.556-79.916 40.045 8.378 83.374 17.431 130.231 27.213 51.024 10.653 106.763 22.307 167.857 35.058Zm528.643-271.164-423.642 623.25-689.38-192.763-11.978-32.573L437.368 9.538l584.329 55.671 5.893 22.632-9.442 24.649-18.335 47.151 115.248 11.686-67.796 99.77 86.942 8.814Zm-797.45-74.151c29.589-21.372 96.703-65.503 127.488-50.09 40.129 20.047 75.705 118.526 231.199 133.588 111.071 10.749 196.298-28.747 235.941-52.182l-246.661 596L47.689 671.934a5234981.977 5234981.977 0 0 1 281.773-457.96c2.358-3.826 3.679-5.602 7.295-8.214"})})]}),twitter:e=>f.jsx("svg",{...e,height:"23",viewBox:"0 0 1200 1227",width:"23",xmlns:"http://www.w3.org/2000/svg",children:f.jsx("path",{d:"M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"})}),gitHub:e=>f.jsx("svg",{viewBox:"0 0 438.549 438.549",...e,children:f.jsx("path",{fill:"currentColor",d:"M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"})}),react:e=>f.jsx("svg",{viewBox:"0 0 24 24",...e,children:f.jsx("path",{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z",fill:"currentColor"})}),tailwind:e=>f.jsx("svg",{viewBox:"0 0 24 24",...e,children:f.jsx("path",{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",fill:"currentColor"})}),paypal:e=>f.jsx("svg",{role:"img",viewBox:"0 0 24 24",...e,children:f.jsx("path",{d:"M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z",fill:"currentColor"})}),spinner:e=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:f.jsx("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),whatsapp:e=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",...e,children:f.jsx("path",{fill:"currentColor",d:"M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"})}),facebook:e=>f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e,children:f.jsx("path",{fill:"currentColor",d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"})}),instagram:e=>f.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e,children:[f.jsx("circle",{cx:17,cy:7,r:1.5,fill:"currentColor",fillOpacity:0,children:f.jsx("animate",{fill:"freeze",attributeName:"fill-opacity",begin:"1.3s",dur:"0.15s",values:"0;1"})}),f.jsxs("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,children:[f.jsx("path",{strokeDasharray:72,strokeDashoffset:72,d:"M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z",children:f.jsx("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"0.6s",values:"72;0"})}),f.jsx("path",{strokeDasharray:28,strokeDashoffset:28,d:"M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4",children:f.jsx("animate",{fill:"freeze",attributeName:"stroke-dashoffset",begin:"0.7s",dur:"0.6s",values:"28;0"})})]})]})},Xn="_root_1atp3_1",Qn="_shortcut_1atp3_25",Ve={root:Xn,shortcut:Qn};function et({className:e,...n}){return f.jsx(he,{...n,className:tn(Ve.root,e),children:f.jsxs(rn,{gap:"xs",children:[f.jsx(ln,{className:"size-5"}),f.jsx(De,{fz:"sm",c:"dimmed",pr:80,children:"Search"}),f.jsx(De,{fw:700,className:Ve.shortcut,children:"Ctrl + K"})]})})}function nt(){return f.jsx("div",{className:"fixed left-0 right-0 top-0 z-50 w-full bg-white p-4 text-blue-800",children:f.jsx("div",{className:"container mx-auto max-w-screen-sm rounded-md bg-white",children:f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs(ge,{href:route("home"),className:"flex items-center gap-2",children:[f.jsx("img",{src:"/image/icon-barkasmal.png",className:"size-10",alt:"Yayasan Barkasmal Nusantara"}),f.jsx("span",{className:"hidden text-xl font-bold md:block",children:"Barkasmal"})]}),f.jsxs("div",{className:"flex items-center justify-end gap-2",children:[f.jsx(et,{}),f.jsxs("div",{className:"flex items-center",children:[f.jsx(ge,{href:"https://www.instagram.com/barkasmal",target:"_blank",children:f.jsx(Pe.instagram,{className:"size-8"})}),f.jsx(ge,{href:"https://www.facebook.com/Barkasmal",target:"_blank",children:f.jsx(Pe.facebook,{className:"size-8"})})]})]})]})})})}function tt({children:e,title:n}){return f.jsxs("div",{className:"min-h-screen bg-blue-200/25 text-black/50 dark:bg-black dark:text-white/50",children:[f.jsx(nt,{}),f.jsx(an,{title:`${n??"Beranda"} | Yayasan Barkasmal Nusantara`}),f.jsx("div",{className:"container mx-auto max-w-screen-sm rounded-md bg-white",children:e})]})}const rt=I.memo(Yn),lt=I.memo(function(){return f.jsx(tt,{children:f.jsxs("div",{className:"flex flex-col gap-10 pt-16",children:[f.jsx(rt,{}),f.jsxs("div",{className:"flex flex-col gap-4 px-6",children:[f.jsx("h1",{className:"text-2xl font-bold",children:"Pilih Kategori Favoritmu"}),f.jsx("p",{children:"ini adalah kontainer"})]})]})})});export{lt as default};
