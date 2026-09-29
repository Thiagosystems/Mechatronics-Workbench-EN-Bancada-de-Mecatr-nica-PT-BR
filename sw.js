const V='bancada-v6',A=['./','index.html','manifest.webmanifest','icon.svg','three.min.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(V).then(c=>Promise.all(A.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url),own=u.origin===location.origin;
 if(!own&&!u.hostname.endsWith('cdnjs.cloudflare.com'))return;
 const salva=res=>{if(res&&(res.ok||res.type==='opaque')){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp))}return res};
 e.respondWith(own?fetch(r).then(salva).catch(()=>caches.match(r).then(h=>h||caches.match('index.html'))):caches.match(r).then(h=>h||fetch(r).then(salva)))});
