self.addEventListener('periodicsync', event => {
  if (event.tag === 'check-for-updates') {
    console.log('Periodic Background Sync triggered!');
    event.waitUntil(checkForWebsiteUpdates());
  }
});

async function checkForWebsiteUpdates() {
  console.log('Service checkForWebsiteUpdates');
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage({ type: 'NEW_VERSION_AVAILABLE' });
    });
  });
}


self.addEventListener('install', event => {
  console.log('Service Worker installing.');
  event.waitUntil(async () => {
    await self.clients.claim(); // Ensure the SW controls clients immediately
    await registerPeriodicSync();
  });
});

self.addEventListener('activate', event => {
  console.log('Service Worker activating.');
  return self.clients.claim();
});

self.addEventListener('message', event => {
  console.log('Service Worker received message:', event.data);
  if (event.data === 'registration-successful') {
    registerPeriodicSync();
  }
});

async function registerPeriodicSync() {
  console.log('Service registerPeriodicSync');
  if ('periodicSync' in self.registration) {
    try {
      await self.registration.periodicSync.register('check-for-updates', {
        minInterval: 12 * 60 * 60 * 1000,
        networkState: 'online'
      });
      console.log('Periodic Background Sync registered from Service Worker!');
    } catch (error) {
      console.error('Periodic Background Sync registration failed in Service Worker:', error);
    }
  } else {
    console.log('Periodic Background Sync API not available.');
  }
}

self.addEventListener('activate', event => {
  console.log('Service Worker activating.');
  event.waitUntil(async () => {
    await self.clients.claim(); // Ensure the SW controls clients immediately
    await registerPeriodicSync();
  });
});