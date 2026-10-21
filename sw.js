const CACHE='forest-nights-v9-13';
const CORE=['./','./config.js','./index.html','./manifest.json','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!==CACHE).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
// network-first: ពេលមានអ៊ីនធឺណិត ទទួលកំណែថ្មីភ្លាម · គ្មានអ៊ីនធឺណិត ប្រើកំណែក្នុងឧបករណ៍
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
  e.respondWith(fetch(e.request).then(r=>{
    if(r&&(r.ok||r.type==='opaque')){const cp=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cp))}
    return r;
  }).catch(()=>caches.match(e.request)));
});
