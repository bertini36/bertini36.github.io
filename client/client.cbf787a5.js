function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function l(t,e,n,r,o,s,a){const l=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(l){const o=c(e,n,r,a);t.p(o,l)}}function i(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(){return d("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):h(e)}function v(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function x(t){return v(t," ")}function E(t,e){e=""+e,t.data!==e&&(t.data=e)}function _(t,e=document.body){return Array.from(e.querySelectorAll(t))}let S;function w(t){S=t}function A(){if(!S)throw new Error("Function called outside component initialization");return S}const R=[],L=[],P=[],j=[],C=Promise.resolve();let N=!1;function k(t){P.push(t)}let q=!1;const U=new Set;function O(){if(!q){q=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];w(e),I(e.$$)}for(R.length=0;L.length;)L.pop()();for(let t=0;t<P.length;t+=1){const e=P[t];U.has(e)||(U.add(e),e())}P.length=0}while(R.length);for(;j.length;)j.pop()();N=!1,q=!1,U.clear()}}function I(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const B=new Set;let H;function D(){H={r:0,c:[],p:H}}function T(){H.r||o(H.c),H=H.p}function J(t,e){t&&t.i&&(B.delete(t),t.i(e))}function V(t,e,n,r){if(t&&t.o){if(B.has(t))return;B.add(t),H.c.push(()=>{B.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function K(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function M(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function z(t,e){t&&t.l(e)}function F(t,e,r){const{fragment:a,on_mount:c,on_destroy:l,after_update:i}=t.$$;a&&a.m(e,r),k(()=>{const e=c.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]}),i.forEach(k)}function G(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){-1===t.$$.dirty[0]&&(R.push(t),N||(N=!0,C.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,n,s,a,c,l,i=[-1]){const u=S;w(e);const p=n.props||{},h=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:i};let d=!1;if(h.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=o)&&(h.bound[t]&&h.bound[t](o),d&&W(e,t)),n}):[],h.update(),d=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=y(n.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();n.intro&&J(e.$$.fragment),F(e,n.target,n.anchor),O()}w(u)}class Q{$destroy(){G(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const Z=[];function tt(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!Z.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),Z.push(n,e)}if(t){for(let t=0;t<Z.length;t+=2)Z[t][0](Z[t+1]);Z.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const l=[a,c];return o.push(l),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(l);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const et={},nt=()=>({});function rt(e){let n,r,o,s,a,c,l,p,g,E,_,S,w,A,R;return{c(){n=h("nav"),r=h("ul"),o=h("li"),s=h("a"),a=d("Home"),l=m(),p=h("li"),g=h("a"),E=d("Blog"),S=m(),w=h("li"),A=h("a"),R=h("i"),this.h()},l(t){n=b(t,"NAV",{class:!0});var e=y(n);r=b(e,"UL",{class:!0});var c=y(r);o=b(c,"LI",{class:!0});var i=y(o);s=b(i,"A",{class:!0,"aria-current":!0,href:!0});var u=y(s);a=v(u,"Home"),u.forEach(f),i.forEach(f),l=x(c),p=b(c,"LI",{class:!0});var h=y(p);g=b(h,"A",{class:!0,rel:!0,"aria-current":!0,href:!0});var d=y(g);E=v(d,"Blog"),d.forEach(f),h.forEach(f),S=x(c),w=b(c,"LI",{class:!0});var m=y(w);A=b(m,"A",{class:!0,href:!0,target:!0});var $=y(A);R=b($,"I",{class:!0}),y(R).forEach(f),$.forEach(f),m.forEach(f),c.forEach(f),e.forEach(f),this.h()},h(){$(s,"class","block no-underline py-4 px-3 hover:text-red-500 svelte-71l2nh"),$(s,"aria-current",c=void 0===e[0]?"page":void 0),$(s,"href","."),$(o,"class","float-left"),$(g,"class","block no-underline py-4 px-3 hover:text-red-500 svelte-71l2nh"),$(g,"rel","prefetch"),$(g,"aria-current",_="blog"===e[0]?"page":void 0),$(g,"href","blog"),$(p,"class","float-left"),$(R,"class","fa fa-github"),$(A,"class","block no-underline py-4 px-3 text-black hover:text-red-500"),$(A,"href",ot),$(A,"target","_blank"),$(w,"class","float-right"),$(r,"class","m-0 p-0 svelte-71l2nh"),$(n,"class","border-b-2 font-light py-0 px-4 svelte-71l2nh")},m(t,e){u(t,n,e),i(n,r),i(r,o),i(o,s),i(s,a),i(r,l),i(r,p),i(p,g),i(g,E),i(r,S),i(r,w),i(w,A),i(A,R)},p(t,[e]){1&e&&c!==(c=void 0===t[0]?"page":void 0)&&$(s,"aria-current",c),1&e&&_!==(_="blog"===t[0]?"page":void 0)&&$(g,"aria-current",_)},i:t,o:t,d(t){t&&f(n)}}}const ot="https://github.com/bertini36/blog";function st(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class at extends Q{constructor(t){super(),X(this,t,st,rt,a,{segment:0})}}function ct(t){let e,n,r;const o=new at({props:{segment:t[0]}}),s=t[2].default,a=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(s,t,t[1],null);return{c(){Y(o.$$.fragment),e=m(),n=h("main"),a&&a.c(),this.h()},l(t){z(o.$$.fragment,t),e=x(t),n=b(t,"MAIN",{class:!0});var r=y(n);a&&a.l(r),r.forEach(f),this.h()},h(){$(n,"class","svelte-1uhnsl8")},m(t,s){F(o,t,s),u(t,e,s),u(t,n,s),a&&a.m(n,null),r=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),o.$set(n),a&&a.p&&2&e&&l(a,s,t,t[1],e,null,null)},i(t){r||(J(o.$$.fragment,t),J(a,t),r=!0)},o(t){V(o.$$.fragment,t),V(a,t),r=!1},d(t){G(o,t),t&&f(e),t&&f(n),a&&a.d(t)}}}function lt(t,e,n){let{segment:r}=e,{$$slots:o={},$$scope:s}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class it extends Q{constructor(t){super(),X(this,t,lt,ct,a,{segment:0})}}function ut(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=d(r)},l(t){e=b(t,"PRE",{});var o=y(e);n=v(o,r),o.forEach(f)},m(t,r){u(t,e,r),i(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&f(e)}}}function ft(e){let n,r,o,s,a,c,l,p,S,w=e[1].message+"";document.title=n=e[0];let A=e[2]&&e[1].stack&&ut(e);return{c(){r=m(),o=h("h1"),s=d(e[0]),a=m(),c=h("p"),l=d(w),p=m(),A&&A.c(),S=g(),this.h()},l(t){_('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=x(t),o=b(t,"H1",{class:!0});var n=y(o);s=v(n,e[0]),n.forEach(f),a=x(t),c=b(t,"P",{class:!0});var i=y(c);l=v(i,w),i.forEach(f),p=x(t),A&&A.l(t),S=g(),this.h()},h(){$(o,"class","svelte-8od9u6"),$(c,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,o,e),i(o,s),u(t,a,e),u(t,c,e),i(c,l),u(t,p,e),A&&A.m(t,e),u(t,S,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&E(s,t[0]),2&e&&w!==(w=t[1].message+"")&&E(l,w),t[2]&&t[1].stack?A?A.p(t,e):(A=ut(t),A.c(),A.m(S.parentNode,S)):A&&(A.d(1),A=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(a),t&&f(c),t&&f(p),A&&A.d(t),t&&f(S)}}}function pt(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class ht extends Q{constructor(t){super(),X(this,t,pt,ft,a,{status:0,error:1})}}function dt(t){let n,r;const o=[t[4].props];var s=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var c=new s(a());return{c(){c&&Y(c.$$.fragment),n=g()},l(t){c&&z(c.$$.fragment,t),n=g()},m(t,e){c&&F(c,t,e),u(t,n,e),r=!0},p(t,e){const r=16&e?K(o,[M(t[4].props)]):{};if(s!==(s=t[4].component)){if(c){D();const t=c;V(t.$$.fragment,1,0,()=>{G(t,1)}),T()}s?(Y((c=new s(a())).$$.fragment),J(c.$$.fragment,1),F(c,n.parentNode,n)):c=null}else s&&c.$set(r)},i(t){r||(c&&J(c.$$.fragment,t),r=!0)},o(t){c&&V(c.$$.fragment,t),r=!1},d(t){t&&f(n),c&&G(c,t)}}}function mt(t){let e;const n=new ht({props:{error:t[0],status:t[1]}});return{c(){Y(n.$$.fragment)},l(t){z(n.$$.fragment,t)},m(t,r){F(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){V(n.$$.fragment,t),e=!1},d(t){G(n,t)}}}function gt(t){let e,n,r,o;const s=[mt,dt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){a[e].m(t,n),u(t,r,n),o=!0},p(t,o){let l=e;e=c(t),e===l?a[e].p(t,o):(D(),V(a[l],1,1,()=>{a[l]=null}),T(),n=a[e],n||(n=a[e]=s[e](t),n.c()),J(n,1),n.m(r.parentNode,r))},i(t){o||(J(n),o=!0)},o(t){V(n),o=!1},d(t){a[e].d(t),t&&f(r)}}}function $t(t){let n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[gt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);const s=new it({props:o});return{c(){Y(s.$$.fragment)},l(t){z(s.$$.fragment,t)},m(t,e){F(s,t,e),n=!0},p(t,[e]){const n=12&e?K(r,[4&e&&{segment:t[2][0]},8&e&&M(t[3].props)]):{};147&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(J(s.$$.fragment,t),n=!0)},o(t){V(s.$$.fragment,t),n=!1},d(t){G(s,t)}}}function yt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:l=null}=e,{notify:i}=e;var u,f,p;return u=i,A().$$.after_update.push(u),f=et,p=r,A().$$.context.set(f,p),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,i=t.notify)},[o,s,a,c,l,r,i]}class bt extends Q{constructor(t){super(),X(this,t,yt,$t,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const vt=[/^\/blog\.json$/,/^\/blog\/([^\/]+?)\.json$/],xt=[{js:()=>import("./index.38977b14.js"),css:[]},{js:()=>import("./index.98ada5ad.js"),css:[]},{js:()=>import("./[slug].bed8bc62.js"),css:[]}],Et=(_t=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/blog\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:2,params:t=>({slug:_t(t[1])})}]}]);var _t;const St="undefined"!=typeof __SAPPER__&&__SAPPER__;let wt,At,Rt,Lt=!1,Pt=[],jt="{}";const Ct={page:function(t){const e=tt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:tt(null),session:tt(St&&St.session)};let Nt,kt;Ct.session.subscribe(async t=>{if(Nt=t,!Lt)return;kt=!0;const e=Tt(new URL(location.href)),n=At={},{redirect:r,props:o,branch:s}=await Mt(e);n===At&&await Kt(r,s,o,e.page)});let qt,Ut=null;let Ot,It=1;const Bt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Ht={};function Dt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Tt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(St.baseUrl))return null;let e=t.pathname.slice(St.baseUrl.length);if(""===e&&(e="/"),!vt.some(t=>t.test(e)))for(let n=0;n<Et.length;n+=1){const r=Et[n],o=r.pattern.exec(e);if(o){const n=Dt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Jt(){return{x:pageXOffset,y:pageYOffset}}async function Vt(t,e,n,r){if(e)Ot=e;else{const t=Jt();Ht[Ot]=t,e=Ot=++It,Ht[Ot]=n?t:{x:0,y:0}}Ot=e,wt&&Ct.preloading.set(!0);const o=Ut&&Ut.href===t.href?Ut.promise:Mt(t);Ut=null;const s=At={},{redirect:a,props:c,branch:l}=await o;if(s===At&&(await Kt(a,l,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Ht[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Ht[Ot]=t,t&&scrollTo(t.x,t.y)}}async function Kt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Tt(new URL(t,document.baseURI));return n?(Bt[e.replaceState?"replaceState":"pushState"]({id:Ot},"",t),Vt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Ct.page.set(r),Ct.preloading.set(!1),wt)wt.$set(n);else{n.stores={page:{subscribe:Ct.page.subscribe},preloading:{subscribe:Ct.preloading.subscribe},session:Ct.session},n.level0={props:await Rt},n.notify=Ct.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)zt(t.nextSibling);zt(t),zt(e)}wt=new bt({target:qt,props:n,hydrate:!0})}Pt=e,jt=JSON.stringify(r.query),Lt=!0,kt=!1}async function Mt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;Rt||(Rt=St.preloaded[0]||nt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Nt));let l=1;try{const o=JSON.stringify(n.query),i=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==jt)return!0;const o=Pt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,i,o)&&(u=!0),s.segments[l]=r[c+1],!e)return{segment:f};const p=l++;if(!kt&&!u&&Pt[c]&&Pt[c].part===e.i)return Pt[c];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Yt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(xt[e.i]);let m;return m=Lt||!St.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Nt):{}:St.preloaded[c+1],s["level"+p]={component:h,props:m,segment:f,match:i,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function Yt(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function zt(t){t.parentNode.removeChild(t)}function Ft(t){const e=Tt(new URL(t,document.baseURI));if(e)return Ut&&t===Ut.href||function(t,e){Ut={href:t,promise:e}}(t,Mt(e)),Ut.promise}let Gt;function Wt(t){clearTimeout(Gt),Gt=setTimeout(()=>{Xt(t)},20)}function Xt(t){const e=Zt(t.target);e&&"prefetch"===e.rel&&Ft(e.href)}function Qt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Zt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Tt(o);if(s){Vt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Bt.pushState({id:Ot},"",o.href)}}function Zt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function te(t){if(Ht[Ot]=Jt(),t.state){const e=Tt(new URL(location.href));e?Vt(e,t.state.id):location.href=location.href}else It=It+1,function(t){Ot=t}(It),Bt.replaceState({id:Ot},"",location.href)}var ee;ee={target:document.querySelector("#sapper")},"scrollRestoration"in Bt&&(Bt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Bt.scrollRestoration="auto"}),addEventListener("load",()=>{Bt.scrollRestoration="manual"}),function(t){qt=t}(ee.target),addEventListener("click",Qt),addEventListener("popstate",te),addEventListener("touchstart",Xt),addEventListener("mousemove",Wt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Bt.replaceState({id:It},"",e);const n=new URL(location.href);if(St.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=St;Rt||(Rt=s&&s[0]),Kt(null,[],{error:c,status:a,session:o,level0:{props:Rt},level1:{props:{status:a,error:c},component:ht},segments:s},{host:e,path:n,query:Dt(r),params:{}})}();const r=Tt(n);return r?Vt(r,It,!0,t):void 0});export{Q as S,m as a,b,x as c,f as d,h as e,y as f,v as g,$ as h,X as i,u as j,i as k,E as l,p as m,t as n,_ as q,a as s,d as t};
