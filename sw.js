const CACHE='diana-v1';
const FILES=[
  '/diana-connect/',
  '/diana-connect/index.html',
  '/diana-connect/manifest.json'
];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));
});

self.addEventListener('fetch',e=>{
  e.respondWith(
    caches.match(e.request).then(r=>r||fetch(e.request))
  );
});
