function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e,n,r,o,s,a){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=c(e,n,r,a);t.p(o,i)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(){return d("")}function $(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){return Array.from(t.childNodes)}function y(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):h(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function x(t){return E(t," ")}function _(t,e){e=""+e,t.data!==e&&(t.data=e)}function w(t,e){t.value=null==e?"":e}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}class A{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=h(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)u(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(f)}}let k;function L(t){k=t}function R(){if(!k)throw new Error("Function called outside component initialization");return k}const P=[],N=[],j=[],C=[],q=Promise.resolve();let U=!1;function O(t){j.push(t)}let I=!1;const H=new Set;function B(){if(!I){I=!0;do{for(let t=0;t<P.length;t+=1){const e=P[t];L(e),T(e.$$)}for(P.length=0;N.length;)N.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];H.has(e)||(H.add(e),e())}j.length=0}while(P.length);for(;C.length;)C.pop()();U=!1,I=!1,H.clear()}}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const D=new Set;let J;function M(){J={r:0,c:[],p:J}}function V(){J.r||o(J.c),J=J.p}function K(t,e){t&&t.i&&(D.delete(t),t.i(e))}function z(t,e,n,r){if(t&&t.o){if(D.has(t))return;D.add(t),J.c.push(()=>{D.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Y(t,e){const n=e.token={};function r(t,r,o,s){if(e.token!==n)return;e.resolved=s;let a=e.ctx;void 0!==o&&(a=a.slice(),a[o]=s);const c=t&&(e.current=t)(a);let i=!1;e.block&&(e.blocks?e.blocks.forEach((t,n)=>{n!==r&&t&&(M(),z(t,1,1,()=>{e.blocks[n]=null}),V())}):e.block.d(1),c.c(),K(c,1),c.m(e.mount(),e.anchor),i=!0),e.block=c,e.blocks&&(e.blocks[r]=c),i&&B()}if((o=t)&&"object"==typeof o&&"function"==typeof o.then){const n=R();if(t.then(t=>{L(n),r(e.then,1,e.value,t),L(null)},t=>{L(n),r(e.catch,2,e.error,t),L(null)}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}var o}function F(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function G(t){return"object"==typeof t&&null!==t?t:{}}function W(t){t&&t.c()}function X(t,e){t&&t.l(e)}function Q(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),O(()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(O)}function Z(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(t,e){-1===t.$$.dirty[0]&&(P.push(t),U||(U=!0,q.then(B)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function et(e,n,s,a,c,i,l=[-1]){const u=k;L(e);const p=n.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let d=!1;if(h.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=o)&&(h.bound[t]&&h.bound[t](o),d&&tt(e,t)),n}):[],h.update(),d=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=b(n.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();n.intro&&K(e.$$.fragment),Q(e,n.target,n.anchor),B()}L(u)}class nt{$destroy(){Z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const rt=[];function ot(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!rt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),rt.push(n,e)}if(t){for(let t=0;t<rt.length;t+=2)rt[t][0](rt[t+1]);rt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const st={},at=()=>({});function ct(e){let n,r,o,s,a,c,i,p,g,$,_,w,S,A,k;return{c(){n=h("nav"),r=h("ul"),o=h("li"),s=h("a"),a=d("Home"),i=m(),p=h("li"),g=h("a"),$=d("Blog"),w=m(),S=h("li"),A=h("a"),k=h("i"),this.h()},l(t){n=y(t,"NAV",{class:!0});var e=b(n);r=y(e,"UL",{class:!0});var c=b(r);o=y(c,"LI",{class:!0});var l=b(o);s=y(l,"A",{class:!0,"aria-current":!0,href:!0});var u=b(s);a=E(u,"Home"),u.forEach(f),l.forEach(f),i=x(c),p=y(c,"LI",{class:!0});var h=b(p);g=y(h,"A",{class:!0,rel:!0,"aria-current":!0,href:!0});var d=b(g);$=E(d,"Blog"),d.forEach(f),h.forEach(f),w=x(c),S=y(c,"LI",{class:!0});var m=b(S);A=y(m,"A",{class:!0,href:!0,target:!0});var v=b(A);k=y(v,"I",{class:!0}),b(k).forEach(f),v.forEach(f),m.forEach(f),c.forEach(f),e.forEach(f),this.h()},h(){v(s,"class","block no-underline py-4 px-3 hover:text-red-500 svelte-71l2nh"),v(s,"aria-current",c=void 0===e[0]?"page":void 0),v(s,"href","."),v(o,"class","float-left"),v(g,"class","block no-underline py-4 px-3 hover:text-red-500 svelte-71l2nh"),v(g,"rel","prefetch"),v(g,"aria-current",_="blog"===e[0]?"page":void 0),v(g,"href","blog"),v(p,"class","float-left"),v(k,"class","fa fa-github"),v(A,"class","block no-underline py-4 px-3 text-black hover:text-red-500"),v(A,"href",it),v(A,"target","_blank"),v(S,"class","float-right"),v(r,"class","m-0 p-0 svelte-71l2nh"),v(n,"class","border-b-2 font-light py-0 px-4 svelte-71l2nh")},m(t,e){u(t,n,e),l(n,r),l(r,o),l(o,s),l(s,a),l(r,i),l(r,p),l(p,g),l(g,$),l(r,w),l(r,S),l(S,A),l(A,k)},p(t,[e]){1&e&&c!==(c=void 0===t[0]?"page":void 0)&&v(s,"aria-current",c),1&e&&_!==(_="blog"===t[0]?"page":void 0)&&v(g,"aria-current",_)},i:t,o:t,d(t){t&&f(n)}}}const it="https://github.com/bertini36/blogv2";function lt(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class ut extends nt{constructor(t){super(),et(this,t,lt,ct,a,{segment:0})}}function ft(t){let e,n,r;const o=new ut({props:{segment:t[0]}}),s=t[2].default,a=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(s,t,t[1],null);return{c(){W(o.$$.fragment),e=m(),n=h("main"),a&&a.c(),this.h()},l(t){X(o.$$.fragment,t),e=x(t),n=y(t,"MAIN",{class:!0});var r=b(n);a&&a.l(r),r.forEach(f),this.h()},h(){v(n,"class","svelte-1uhnsl8")},m(t,s){Q(o,t,s),u(t,e,s),u(t,n,s),a&&a.m(n,null),r=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),o.$set(n),a&&a.p&&2&e&&i(a,s,t,t[1],e,null,null)},i(t){r||(K(o.$$.fragment,t),K(a,t),r=!0)},o(t){z(o.$$.fragment,t),z(a,t),r=!1},d(t){Z(o,t),t&&f(e),t&&f(n),a&&a.d(t)}}}function pt(t,e,n){let{segment:r}=e,{$$slots:o={},$$scope:s}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class ht extends nt{constructor(t){super(),et(this,t,pt,ft,a,{segment:0})}}function dt(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=d(r)},l(t){e=y(t,"PRE",{});var o=b(e);n=E(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&_(n,r)},d(t){t&&f(e)}}}function mt(e){let n,r,o,s,a,c,i,p,$,w=e[1].message+"";document.title=n=e[0];let A=e[2]&&e[1].stack&&dt(e);return{c(){r=m(),o=h("h1"),s=d(e[0]),a=m(),c=h("p"),i=d(w),p=m(),A&&A.c(),$=g(),this.h()},l(t){S('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=x(t),o=y(t,"H1",{class:!0});var n=b(o);s=E(n,e[0]),n.forEach(f),a=x(t),c=y(t,"P",{class:!0});var l=b(c);i=E(l,w),l.forEach(f),p=x(t),A&&A.l(t),$=g(),this.h()},h(){v(o,"class","svelte-8od9u6"),v(c,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,a,e),u(t,c,e),l(c,i),u(t,p,e),A&&A.m(t,e),u(t,$,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&_(s,t[0]),2&e&&w!==(w=t[1].message+"")&&_(i,w),t[2]&&t[1].stack?A?A.p(t,e):(A=dt(t),A.c(),A.m($.parentNode,$)):A&&(A.d(1),A=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(a),t&&f(c),t&&f(p),A&&A.d(t),t&&f($)}}}function gt(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class $t extends nt{constructor(t){super(),et(this,t,gt,mt,a,{status:0,error:1})}}function vt(t){let n,r;const o=[t[4].props];var s=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var c=new s(a());return{c(){c&&W(c.$$.fragment),n=g()},l(t){c&&X(c.$$.fragment,t),n=g()},m(t,e){c&&Q(c,t,e),u(t,n,e),r=!0},p(t,e){const r=16&e?F(o,[G(t[4].props)]):{};if(s!==(s=t[4].component)){if(c){M();const t=c;z(t.$$.fragment,1,0,()=>{Z(t,1)}),V()}s?(W((c=new s(a())).$$.fragment),K(c.$$.fragment,1),Q(c,n.parentNode,n)):c=null}else s&&c.$set(r)},i(t){r||(c&&K(c.$$.fragment,t),r=!0)},o(t){c&&z(c.$$.fragment,t),r=!1},d(t){t&&f(n),c&&Z(c,t)}}}function bt(t){let e;const n=new $t({props:{error:t[0],status:t[1]}});return{c(){W(n.$$.fragment)},l(t){X(n.$$.fragment,t)},m(t,r){Q(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(K(n.$$.fragment,t),e=!0)},o(t){z(n.$$.fragment,t),e=!1},d(t){Z(n,t)}}}function yt(t){let e,n,r,o;const s=[bt,vt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){a[e].m(t,n),u(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(M(),z(a[i],1,1,()=>{a[i]=null}),V(),n=a[e],n||(n=a[e]=s[e](t),n.c()),K(n,1),n.m(r.parentNode,r))},i(t){o||(K(n),o=!0)},o(t){z(n),o=!1},d(t){a[e].d(t),t&&f(r)}}}function Et(t){let n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[yt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);const s=new ht({props:o});return{c(){W(s.$$.fragment)},l(t){X(s.$$.fragment,t)},m(t,e){Q(s,t,e),n=!0},p(t,[e]){const n=12&e?F(r,[4&e&&{segment:t[2][0]},8&e&&G(t[3].props)]):{};147&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(K(s.$$.fragment,t),n=!0)},o(t){z(s.$$.fragment,t),n=!1},d(t){Z(s,t)}}}function xt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,R().$$.after_update.push(u),f=st,p=r,R().$$.context.set(f,p),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,a,c,i,r,l]}class _t extends nt{constructor(t){super(),et(this,t,xt,Et,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const wt=[/^\/blog\.json$/,/^\/blog\/([^\/]+?)\.json$/],St=[{js:()=>import("./index.2d6f5734.js"),css:[]},{js:()=>import("./index.f64d842d.js"),css:[]},{js:()=>import("./[slug].91a30ab1.js"),css:[]}],At=(kt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/blog\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:2,params:t=>({slug:kt(t[1])})}]}]);var kt;const Lt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Rt,Pt,Nt,jt=!1,Ct=[],qt="{}";const Ut={page:function(t){const e=ot(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:ot(null),session:ot(Lt&&Lt.session)};let Ot,It;Ut.session.subscribe(async t=>{if(Ot=t,!jt)return;It=!0;const e=Kt(new URL(location.href)),n=Pt={},{redirect:r,props:o,branch:s}=await Gt(e);n===Pt&&await Ft(r,s,o,e.page)});let Ht,Bt=null;let Tt,Dt=1;const Jt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Mt={};function Vt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Kt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Lt.baseUrl))return null;let e=t.pathname.slice(Lt.baseUrl.length);if(""===e&&(e="/"),!wt.some(t=>t.test(e)))for(let n=0;n<At.length;n+=1){const r=At[n],o=r.pattern.exec(e);if(o){const n=Vt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function zt(){return{x:pageXOffset,y:pageYOffset}}async function Yt(t,e,n,r){if(e)Tt=e;else{const t=zt();Mt[Tt]=t,e=Tt=++Dt,Mt[Tt]=n?t:{x:0,y:0}}Tt=e,Rt&&Ut.preloading.set(!0);const o=Bt&&Bt.href===t.href?Bt.promise:Gt(t);Bt=null;const s=Pt={},{redirect:a,props:c,branch:i}=await o;if(s===Pt&&(await Ft(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Mt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Mt[Tt]=t,t&&scrollTo(t.x,t.y)}}async function Ft(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Kt(new URL(t,document.baseURI));return n?(Jt[e.replaceState?"replaceState":"pushState"]({id:Tt},"",t),Yt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Ut.page.set(r),Ut.preloading.set(!1),Rt)Rt.$set(n);else{n.stores={page:{subscribe:Ut.page.subscribe},preloading:{subscribe:Ut.preloading.subscribe},session:Ut.session},n.level0={props:await Nt},n.notify=Ut.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Xt(t.nextSibling);Xt(t),Xt(e)}Rt=new _t({target:Ht,props:n,hydrate:!0})}Ct=e,qt=JSON.stringify(r.query),jt=!0,It=!1}async function Gt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;Nt||(Nt=Lt.preloaded[0]||at.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ot));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==qt)return!0;const o=Ct[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!It&&!u&&Ct[c]&&Ct[c].part===e.i)return Ct[c];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Wt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(St[e.i]);let m;return m=jt||!Lt.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ot):{}:Lt.preloaded[c+1],s["level"+p]={component:h,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function Wt(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Xt(t){t.parentNode.removeChild(t)}function Qt(t){const e=Kt(new URL(t,document.baseURI));if(e)return Bt&&t===Bt.href||function(t,e){Bt={href:t,promise:e}}(t,Gt(e)),Bt.promise}let Zt;function te(t){clearTimeout(Zt),Zt=setTimeout(()=>{ee(t)},20)}function ee(t){const e=re(t.target);e&&"prefetch"===e.rel&&Qt(e.href)}function ne(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=re(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Kt(o);if(s){Yt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Jt.pushState({id:Tt},"",o.href)}}function re(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function oe(t){if(Mt[Tt]=zt(),t.state){const e=Kt(new URL(location.href));e?Yt(e,t.state.id):location.href=location.href}else Dt=Dt+1,function(t){Tt=t}(Dt),Jt.replaceState({id:Tt},"",location.href)}var se;se={target:document.querySelector("#sapper")},"scrollRestoration"in Jt&&(Jt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Jt.scrollRestoration="auto"}),addEventListener("load",()=>{Jt.scrollRestoration="manual"}),function(t){Ht=t}(se.target),addEventListener("click",ne),addEventListener("popstate",oe),addEventListener("touchstart",ee),addEventListener("mousemove",te),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Jt.replaceState({id:Dt},"",e);const n=new URL(location.href);if(Lt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=Lt;Nt||(Nt=s&&s[0]),Ft(null,[],{error:c,status:a,session:o,level0:{props:Nt},level1:{props:{status:a,error:c},component:$t},segments:s},{host:e,path:n,query:Vt(r),params:{}})}();const r=Kt(n);return r?Yt(r,Dt,!0,t):void 0});export{z as A,Z as B,A as H,nt as S,m as a,y as b,x as c,f as d,h as e,b as f,E as g,v as h,et as i,u as j,l as k,_ as l,p as m,t as n,Y as o,w as p,S as q,$ as r,a as s,d as t,o as u,g as v,W as w,X as x,Q as y,K as z};