!function(){"use strict";const e=["client/[slug].fbc9f41e.js","client/index.2871974c.js","client/client.0e317701.js","client/index.2357a792.js"].concat(["service-worker-index.html","automatic-differentiation/backward_AD.png","automatic-differentiation/derivative_deffinition.png","automatic-differentiation/derivative_strategies.png","automatic-differentiation/forward_AD.png","automatic-differentiation/linear_regression.png","automatic-differentiation/linear_regression_ag_results.png","automatic-differentiation/linear_regression_tf_results.png","black_logo.png","global.css","logo.png","manifest.json","profile.jpg","profiling-on-social-networks/profiler1.png","profiling-on-social-networks/profiler2.png","tailwind.css"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1591635495975").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1591635495975"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1591635495975").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const i=await t.match(e.request);if(i)return i;throw n}}))))})}();
