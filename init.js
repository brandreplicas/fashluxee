if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').then(registration => {
    console.log('Service Worker registered with scope:', registration.scope);
          // Request periodic background sync
          registration.periodicSync.register('check-for-updates', {
            minInterval: 12 * 60 * 60 * 1000,
            networkState: 'online'
          }).then(() => console.log('Periodic Background Sync registered!'))
            .catch(error => console.error('Periodic Background Sync registration failed:', error));
  }).catch(error => {
    console.error('Service Worker registration failed:', error);
  });
}
// Request notification permission from the user
if ('Notification' in window) {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
    } else {
      console.log('Notification permission denied.');
    }
  });
}
// Function to send a notification
function sendNotification(title, body) {
  let urlToOpen = 'https://brandreplicas.github.io/carrd/gallery.html';
  if (Notification.permission === 'granted') {
    const notification = new Notification(title, {
      body: body,
      icon: 'fashluxee-logo-transformed.png'
    });

    notification.onclick = function(event) {
      event.preventDefault();

      // Check if a tab with the URL is already open
      window.chrome.tabs.query({ url: urlToOpen }, function(tabs) {
        if (tabs && tabs.length > 0) {
          // If a tab is found, focus on it
          window.chrome.tabs.update(tabs[0].id, { active: true });
        } else {
          // If no tab is found, open a new one
          window.open(urlToOpen, '_blank');
        }
      });
      notification.close(); // Optionally close the notification
    };

    return notification;
  } else {
    console.error('Notification permission not granted.');
    return null;
  }
}

navigator.serviceWorker.addEventListener('message', event => {
   if (event.data && event.data.type === 'NEW_VERSION_AVAILABLE') {
     sendNotification('Luxury Update!', 'Handpicked luxury only for you');
   }
});