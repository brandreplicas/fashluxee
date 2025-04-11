let cache_key = 'fashluxee-catalog';
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cache_key).then(cache => {
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
        'preview.jpg'
      ]);
    })
  );
  event.waitUntil(checkForWebsiteUpdates());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});

self.addEventListener('periodicsync', event => {
  if (event.tag === 'check-for-updates') {
    console.log('Periodic Background Sync triggered!');
    event.waitUntil(checkForWebsiteUpdates());
  }
});

async function checkForWebsiteUpdates() {
  try {
    const response = await fetch('/manifest.json?v=' + Date.now(), {
      method: 'HEAD'
    });

    if (!response.ok) {
      console.error('Failed to check for updates:', response.status);
      return;
    }

    const currentVersion = localStorage.getItem('websiteVersion');
    const newVersion = response.headers.get('ETag') || response.headers.get('Last-Modified');

    if (newVersion && newVersion !== currentVersion) {
      console.log('New website version detected:', newVersion);
      localStorage.setItem('websiteVersion', newVersion);
    } else {
      console.log('No new website updates.');
    }

  } catch (error) {
    console.error('Error checking for updates:', error);
  }
}

// Example: Listen for the 'activate' event to inform the user on the next visit
self.addEventListener('activate', event => {
  event.waitUntil(
    self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        client.postMessage({ type: 'NEW_VERSION_AVAILABLE' });
      });
    });
  );
});
