self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('site-cache').then(cache => {
      return cache.addAll([
        'gallery.html',
        'index.html',
        'style.css',
        'css.css',
        'script.js',
        'init.js',
        'service-worker.js',
        'fashluxee.jpg',
        'fashluxee-logo-transformed.png',
        'preview.jpg',
        'https://urlsml.in/carrd-db/cors/category-list.php',
        'https://urlsml.in/carrd-db/cors/media-list.php'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
