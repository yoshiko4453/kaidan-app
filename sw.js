const CACHE = 'kaidan-v1';
const FILES = ['/kaidan-app/', '/kaidan-app/index.html', '/kaidan-app/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
