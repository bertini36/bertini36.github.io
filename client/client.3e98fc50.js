function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function l(t,e,n,r,o,s,a){const l=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(l){const o=c(e,n,r,a);t.p(o,l)}}function i(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(){return d("")}function $(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return Array.from(t.childNodes)}function y(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function x(t){return E(t," ")}function w(t,e){e=""+e,t.data!==e&&(t.data=e)}function _(t,e){t.value=null==e?"":e}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}class k{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=p(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)u(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(f)}}let L;function A(t){L=t}function R(){if(!L)throw new Error("Function called outside component initialization");return L}const P=[],N=[],q=[],j=[],C=Promise.resolve();let U=!1;function I(t){q.push(t)}let O=!1;const B=new Set;function D(){if(!O){O=!0;do{for(let t=0;t<P.length;t+=1){const e=P[t];A(e),H(e.$$)}for(P.length=0;N.length;)N.pop()();for(let t=0;t<q.length;t+=1){const e=q[t];B.has(e)||(B.add(e),e())}q.length=0}while(P.length);for(;j.length;)j.pop()();U=!1,O=!1,B.clear()}}function H(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const T=new Set;let V;function J(){V={r:0,c:[],p:V}}function M(){V.r||o(V.c),V=V.p}function F(t,e){t&&t.i&&(T.delete(t),t.i(e))}function K(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),V.c.push(()=>{T.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function z(t,e){const n=e.token={};function r(t,r,o,s){if(e.token!==n)return;e.resolved=s;let a=e.ctx;void 0!==o&&(a=a.slice(),a[o]=s);const c=t&&(e.current=t)(a);let l=!1;e.block&&(e.blocks?e.blocks.forEach((t,n)=>{n!==r&&t&&(J(),K(t,1,1,()=>{e.blocks[n]=null}),M())}):e.block.d(1),c.c(),F(c,1),c.m(e.mount(),e.anchor),l=!0),e.block=c,e.blocks&&(e.blocks[r]=c),l&&D()}if((o=t)&&"object"==typeof o&&"function"==typeof o.then){const n=R();if(t.then(t=>{A(n),r(e.then,1,e.value,t),A(null)},t=>{A(n),r(e.catch,2,e.error,t),A(null)}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}var o}function Y(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function G(t){return"object"==typeof t&&null!==t?t:{}}function W(t){t&&t.c()}function X(t,e){t&&t.l(e)}function Q(t,e,r){const{fragment:a,on_mount:c,on_destroy:l,after_update:i}=t.$$;a&&a.m(e,r),I(()=>{const e=c.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]}),i.forEach(I)}function Z(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(t,e){-1===t.$$.dirty[0]&&(P.push(t),U||(U=!0,C.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function et(e,n,s,a,c,l,i=[-1]){const u=L;A(e);const h=n.props||{},p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:i};let d=!1;if(p.ctx=s?s(e,h,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),d&&tt(e,t)),n}):[],p.update(),d=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const t=v(n.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();n.intro&&F(e.$$.fragment),Q(e,n.target,n.anchor),D()}A(u)}class nt{$destroy(){Z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const rt=[];function ot(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!rt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),rt.push(n,e)}if(t){for(let t=0;t<rt.length;t+=2)rt[t][0](rt[t+1]);rt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const l=[a,c];return o.push(l),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(l);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const st={},at=()=>({});function ct(e){let n,r,o,s,a,c,l,h,g,w,_,S,k,L,A,R,P,N,q,j,C,U,I,O,B,D;return{c(){n=p("nav"),r=p("ul"),o=p("li"),s=p("a"),a=d("Home"),l=m(),h=p("li"),g=p("a"),w=d("Blog"),S=m(),k=p("li"),L=p("a"),A=p("i"),R=m(),P=p("li"),N=p("label"),q=d("Dark mode"),j=m(),C=p("div"),U=p("input"),I=m(),O=p("label"),this.h()},l(t){n=y(t,"NAV",{class:!0});var e=v(n);r=y(e,"UL",{class:!0});var c=v(r);o=y(c,"LI",{class:!0});var i=v(o);s=y(i,"A",{class:!0,"aria-current":!0,href:!0});var u=v(s);a=E(u,"Home"),u.forEach(f),i.forEach(f),l=x(c),h=y(c,"LI",{class:!0});var p=v(h);g=y(p,"A",{class:!0,rel:!0,"aria-current":!0,href:!0});var d=v(g);w=E(d,"Blog"),d.forEach(f),p.forEach(f),S=x(c),k=y(c,"LI",{class:!0});var m=v(k);L=y(m,"A",{class:!0,href:!0,target:!0});var $=v(L);A=y($,"I",{class:!0}),v(A).forEach(f),$.forEach(f),m.forEach(f),R=x(c),P=y(c,"LI",{class:!0});var b=v(P);N=y(b,"LABEL",{for:!0,class:!0});var _=v(N);q=E(_,"Dark mode"),_.forEach(f),j=x(b),C=y(b,"DIV",{class:!0});var B=v(C);U=y(B,"INPUT",{type:!0,name:!0,id:!0,class:!0}),I=x(B),O=y(B,"LABEL",{for:!0,class:!0}),v(O).forEach(f),B.forEach(f),b.forEach(f),c.forEach(f),e.forEach(f),this.h()},h(){b(s,"class","block py-4 px-3 hover:text-red-500 dark:hover:text-red-400 svelte-i3hbql"),b(s,"aria-current",c=void 0===e[0]?"page":void 0),b(s,"href","."),b(o,"class","float-left"),b(g,"class","block no-underline py-4 px-3 hover:text-red-500 dark:hover:text-red-400 svelte-i3hbql"),b(g,"rel","prefetch"),b(g,"aria-current",_="blog"===e[0]?"page":void 0),b(g,"href","blog"),b(h,"class","float-left"),b(A,"class","fa fa-github"),b(L,"class","block no-underline py-4 px-3 hover:text-red-500 dark:hover:text-red-400"),b(L,"href",lt),b(L,"target","_blank"),b(k,"class","float-right"),b(N,"for","toggle"),b(N,"class","mr-2 text-xs"),b(U,"type","checkbox"),b(U,"name","toggle"),b(U,"id","toggle"),b(U,"class","toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer focus:outline-none svelte-i3hbql"),b(O,"for","toggle"),b(O,"class","toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer svelte-i3hbql"),b(C,"class","relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"),b(P,"class","float-right pt-4"),b(r,"class","m-0 p-0 svelte-i3hbql"),b(n,"class","border-b-2 dark:border-b-4 border-red-200 py-0 px-4 font-light")},m(t,c){u(t,n,c),i(n,r),i(r,o),i(o,s),i(s,a),i(r,l),i(r,h),i(h,g),i(g,w),i(r,S),i(r,k),i(k,L),i(L,A),i(r,R),i(r,P),i(P,N),i(N,q),i(P,j),i(P,C),i(C,U),i(C,I),i(C,O),B||(D=$(U,"change",e[1]),B=!0)},p(t,[e]){1&e&&c!==(c=void 0===t[0]?"page":void 0)&&b(s,"aria-current",c),1&e&&_!==(_="blog"===t[0]?"page":void 0)&&b(g,"aria-current",_)},i:t,o:t,d(t){t&&f(n),B=!1,D()}}}const lt="https://github.com/bertini36/bertini36.github.io";function it(t,e,n){let{segment:r}=e,o=!1,s=null;var a;return a=()=>{n(3,s=t=>{document.documentElement.style.setProperty("--color",t)})},R().$$.on_mount.push(a),t.$set=t=>{"segment"in t&&n(0,r=t.segment)},t.$$.update=()=>{12&t.$$.dirty&&s&&s(o?"#F87171":"#EF4444")},[r,function(){n(2,o=!o);let t=document.getElementsByTagName("html")[0];o?t.classList.add("dark"):t.classList.remove("dark")}]}class ut extends nt{constructor(t){super(),et(this,t,it,ct,a,{segment:0})}}function ft(t){let e,n,r;const o=new ut({props:{segment:t[0]}}),s=t[2].default,a=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(s,t,t[1],null);return{c(){W(o.$$.fragment),e=m(),n=p("main"),a&&a.c(),this.h()},l(t){X(o.$$.fragment,t),e=x(t),n=y(t,"MAIN",{class:!0});var r=v(n);a&&a.l(r),r.forEach(f),this.h()},h(){b(n,"class","svelte-6aaop8")},m(t,s){Q(o,t,s),u(t,e,s),u(t,n,s),a&&a.m(n,null),r=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),o.$set(n),a&&a.p&&2&e&&l(a,s,t,t[1],e,null,null)},i(t){r||(F(o.$$.fragment,t),F(a,t),r=!0)},o(t){K(o.$$.fragment,t),K(a,t),r=!1},d(t){Z(o,t),t&&f(e),t&&f(n),a&&a.d(t)}}}function ht(t,e,n){let{segment:r}=e,{$$slots:o={},$$scope:s}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class pt extends nt{constructor(t){super(),et(this,t,ht,ft,a,{segment:0})}}function dt(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=d(r)},l(t){e=y(t,"PRE",{});var o=v(e);n=E(o,r),o.forEach(f)},m(t,r){u(t,e,r),i(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&w(n,r)},d(t){t&&f(e)}}}function mt(e){let n,r,o,s,a,c,l,h,$,_=e[1].message+"";document.title=n=e[0];let k=e[2]&&e[1].stack&&dt(e);return{c(){r=m(),o=p("h1"),s=d(e[0]),a=m(),c=p("p"),l=d(_),h=m(),k&&k.c(),$=g(),this.h()},l(t){S('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=x(t),o=y(t,"H1",{class:!0});var n=v(o);s=E(n,e[0]),n.forEach(f),a=x(t),c=y(t,"P",{class:!0});var i=v(c);l=E(i,_),i.forEach(f),h=x(t),k&&k.l(t),$=g(),this.h()},h(){b(o,"class","svelte-8od9u6"),b(c,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,o,e),i(o,s),u(t,a,e),u(t,c,e),i(c,l),u(t,h,e),k&&k.m(t,e),u(t,$,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&w(s,t[0]),2&e&&_!==(_=t[1].message+"")&&w(l,_),t[2]&&t[1].stack?k?k.p(t,e):(k=dt(t),k.c(),k.m($.parentNode,$)):k&&(k.d(1),k=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(a),t&&f(c),t&&f(h),k&&k.d(t),t&&f($)}}}function gt(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class $t extends nt{constructor(t){super(),et(this,t,gt,mt,a,{status:0,error:1})}}function bt(t){let n,r;const o=[t[4].props];var s=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var c=new s(a());return{c(){c&&W(c.$$.fragment),n=g()},l(t){c&&X(c.$$.fragment,t),n=g()},m(t,e){c&&Q(c,t,e),u(t,n,e),r=!0},p(t,e){const r=16&e?Y(o,[G(t[4].props)]):{};if(s!==(s=t[4].component)){if(c){J();const t=c;K(t.$$.fragment,1,0,()=>{Z(t,1)}),M()}s?(W((c=new s(a())).$$.fragment),F(c.$$.fragment,1),Q(c,n.parentNode,n)):c=null}else s&&c.$set(r)},i(t){r||(c&&F(c.$$.fragment,t),r=!0)},o(t){c&&K(c.$$.fragment,t),r=!1},d(t){t&&f(n),c&&Z(c,t)}}}function vt(t){let e;const n=new $t({props:{error:t[0],status:t[1]}});return{c(){W(n.$$.fragment)},l(t){X(n.$$.fragment,t)},m(t,r){Q(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(F(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){Z(n,t)}}}function yt(t){let e,n,r,o;const s=[vt,bt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){a[e].m(t,n),u(t,r,n),o=!0},p(t,o){let l=e;e=c(t),e===l?a[e].p(t,o):(J(),K(a[l],1,1,()=>{a[l]=null}),M(),n=a[e],n||(n=a[e]=s[e](t),n.c()),F(n,1),n.m(r.parentNode,r))},i(t){o||(F(n),o=!0)},o(t){K(n),o=!1},d(t){a[e].d(t),t&&f(r)}}}function Et(t){let n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[yt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);const s=new pt({props:o});return{c(){W(s.$$.fragment)},l(t){X(s.$$.fragment,t)},m(t,e){Q(s,t,e),n=!0},p(t,[e]){const n=12&e?Y(r,[4&e&&{segment:t[2][0]},8&e&&G(t[3].props)]):{};147&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(F(s.$$.fragment,t),n=!0)},o(t){K(s.$$.fragment,t),n=!1},d(t){Z(s,t)}}}function xt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:l=null}=e,{notify:i}=e;var u,f,h;return u=i,R().$$.after_update.push(u),f=st,h=r,R().$$.context.set(f,h),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,i=t.notify)},[o,s,a,c,l,r,i]}class wt extends nt{constructor(t){super(),et(this,t,xt,Et,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const _t=[/^\/settings\.json$/,/^\/blog\.json$/,/^\/blog\/([^\/]+?)\.json$/],St=[{js:()=>import("./index.75dc202f.js"),css:[]},{js:()=>import("./index.1345e471.js"),css:[]},{js:()=>import("./[slug].a0b71aae.js"),css:[]}],kt=(Lt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/blog\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:2,params:t=>({slug:Lt(t[1])})}]}]);var Lt;const At="undefined"!=typeof __SAPPER__&&__SAPPER__;let Rt,Pt,Nt,qt=!1,jt=[],Ct="{}";const Ut={page:function(t){const e=ot(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:ot(null),session:ot(At&&At.session)};let It,Ot;Ut.session.subscribe(async t=>{if(It=t,!qt)return;Ot=!0;const e=Ft(new URL(location.href)),n=Pt={},{redirect:r,props:o,branch:s}=await Gt(e);n===Pt&&await Yt(r,s,o,e.page)});let Bt,Dt=null;let Ht,Tt=1;const Vt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Jt={};function Mt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Ft(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(At.baseUrl))return null;let e=t.pathname.slice(At.baseUrl.length);if(""===e&&(e="/"),!_t.some(t=>t.test(e)))for(let n=0;n<kt.length;n+=1){const r=kt[n],o=r.pattern.exec(e);if(o){const n=Mt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Kt(){return{x:pageXOffset,y:pageYOffset}}async function zt(t,e,n,r){if(e)Ht=e;else{const t=Kt();Jt[Ht]=t,e=Ht=++Tt,Jt[Ht]=n?t:{x:0,y:0}}Ht=e,Rt&&Ut.preloading.set(!0);const o=Dt&&Dt.href===t.href?Dt.promise:Gt(t);Dt=null;const s=Pt={},{redirect:a,props:c,branch:l}=await o;if(s===Pt&&(await Yt(a,l,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Jt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Jt[Ht]=t,t&&scrollTo(t.x,t.y)}}async function Yt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Ft(new URL(t,document.baseURI));return n?(Vt[e.replaceState?"replaceState":"pushState"]({id:Ht},"",t),zt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Ut.page.set(r),Ut.preloading.set(!1),Rt)Rt.$set(n);else{n.stores={page:{subscribe:Ut.page.subscribe},preloading:{subscribe:Ut.preloading.subscribe},session:Ut.session},n.level0={props:await Nt},n.notify=Ut.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Xt(t.nextSibling);Xt(t),Xt(e)}Rt=new wt({target:Bt,props:n,hydrate:!0})}jt=e,Ct=JSON.stringify(r.query),qt=!0,Ot=!1}async function Gt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;Nt||(Nt=At.preloaded[0]||at.call(a,{host:n.host,path:n.path,query:n.query,params:{}},It));let l=1;try{const o=JSON.stringify(n.query),i=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Ct)return!0;const o=jt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,i,o)&&(u=!0),s.segments[l]=r[c+1],!e)return{segment:f};const h=l++;if(!Ot&&!u&&jt[c]&&jt[c].part===e.i)return jt[c];u=!1;const{default:p,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Wt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(St[e.i]);let m;return m=qt||!At.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},It):{}:At.preloaded[c+1],s["level"+h]={component:p,props:m,segment:f,match:i,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function Wt(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Xt(t){t.parentNode.removeChild(t)}function Qt(t){const e=Ft(new URL(t,document.baseURI));if(e)return Dt&&t===Dt.href||function(t,e){Dt={href:t,promise:e}}(t,Gt(e)),Dt.promise}let Zt;function te(t){clearTimeout(Zt),Zt=setTimeout(()=>{ee(t)},20)}function ee(t){const e=re(t.target);e&&"prefetch"===e.rel&&Qt(e.href)}function ne(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=re(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Ft(o);if(s){zt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Vt.pushState({id:Ht},"",o.href)}}function re(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function oe(t){if(Jt[Ht]=Kt(),t.state){const e=Ft(new URL(location.href));e?zt(e,t.state.id):location.href=location.href}else Tt=Tt+1,function(t){Ht=t}(Tt),Vt.replaceState({id:Ht},"",location.href)}var se;se={target:document.querySelector("#sapper")},"scrollRestoration"in Vt&&(Vt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Vt.scrollRestoration="auto"}),addEventListener("load",()=>{Vt.scrollRestoration="manual"}),function(t){Bt=t}(se.target),addEventListener("click",ne),addEventListener("popstate",oe),addEventListener("touchstart",ee),addEventListener("mousemove",te),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Vt.replaceState({id:Tt},"",e);const n=new URL(location.href);if(At.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=At;Nt||(Nt=s&&s[0]),Yt(null,[],{error:c,status:a,session:o,level0:{props:Nt},level1:{props:{status:a,error:c},component:$t},segments:s},{host:e,path:n,query:Mt(r),params:{}})}();const r=Ft(n);return r?zt(r,Tt,!0,t):void 0});export{K as A,Z as B,k as H,nt as S,m as a,y as b,x as c,f as d,p as e,v as f,E as g,b as h,et as i,u as j,i as k,w as l,h as m,t as n,z as o,_ as p,S as q,$ as r,a as s,d as t,o as u,g as v,W as w,X as x,Q as y,F as z};