!function(){"use strict";const e=["client/index.f8a51961.js","client/[slug].6be8682c.js","client/client.a68a3c41.js","client/index.f944c15d.js"].concat(["service-worker-index.html","CNAME","automatic-differentiation/backward_AD.png","automatic-differentiation/derivative_deffinition.png","automatic-differentiation/derivative_strategies.png","automatic-differentiation/forward_AD.png","automatic-differentiation/linear_regression.png","automatic-differentiation/linear_regression_ag_results.png","automatic-differentiation/linear_regression_tf_results.png","black_logo.png","distributed-matrix-product/distributed_matrix_product.png","distributed-matrix-product/main.jpg","distributed-matrix-product/marenostrum.jpg","distributed-matrix-product/matrix_product.png","loader.gif","logo.png","manifest.json","profile.jpg","profiling-on-social-networks/profiler1.png","profiling-on-social-networks/profiler2.png","styles.css","tailwind.css","variational-inference-1/bayes_rule.png","variational-inference-1/box_loop.png","variational-inference-1/entropy.png","variational-inference-1/global_local_variables.png","variational-inference-1/graphical_model.png","variational-inference-1/joint_dist.png","variational-inference-1/joint_dist2.png","variational-inference-1/kl1.png","variational-inference-1/kl_rule.png","variational-inference-1/kullback-leibler1.png","variational-inference-1/kullback-leibler2.png","variational-inference-1/mean_field.png","variational-inference-1/online_learning.png","variational-inference-1/plate.png","variational-inference-1/schema_situation.png","variational-inference-1/variational_inference.jpg","variational-inference-2/CAVI.png","variational-inference-2/ELBO_MeanField.png","variational-inference-2/ELBO_derivation.png","variational-inference-2/ELBO_explanation.png","variational-inference-2/ELBO_reescritura.png","variational-inference-2/ELBO_terminos.png","variational-inference-2/GAVI.png","variational-inference-2/VI.png","variational-inference-2/exponential_family.png","variational-inference-2/generic_derivation.png","variational-inference-2/gradient.png","variational-inference-2/kullback_leibler.png","variational-inference-2/natural_gradient.png","variational-inference-2/natural_gradient2.png","variational-inference-3/bbvi.png","variational-inference-3/elbo2.png","variational-inference-3/elbo3.png","variational-inference-3/montecarlo.png","variational-inference-3/robins.png","variational-inference-3/saddle-point.png","variational-inference-3/svi-algorithm.png","variational-inference-3/svi.png"]),n=new Set(e);self.addEventListener("install",n=>{n.waitUntil(caches.open("cache1606118297580").then(n=>n.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const n of e)"cache1606118297580"!==n&&await caches.delete(n);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const i=new URL(e.request.url);i.protocol.startsWith("http")&&(i.hostname===self.location.hostname&&i.port!==self.location.port||(i.host===self.location.host&&n.has(i.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1606118297580").then(async n=>{try{const i=await fetch(e.request);return n.put(e.request,i.clone()),i}catch(i){const a=await n.match(e.request);if(a)return a;throw i}}))))})}();
