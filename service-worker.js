self.addEventListener('install', event => {
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
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage({ type: 'NEW_VERSION_AVAILABLE' });
    });
  });
}

// Example: Listen for the 'activate' event to inform the user on the next visit
self.addEventListener('activate', event => {
  event.waitUntil(checkForWebsiteUpdates());
});
