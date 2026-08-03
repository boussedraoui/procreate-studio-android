**Next step:** Paste this into the editor, then tap **"Commit changes"**:

```javascript
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('procreate-store').then((cache) => cache.addAll([
      './',
      './index.html',
      './manifest.json'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
```
