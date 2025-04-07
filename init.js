if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').then(registration => {
    console.log('Service Worker registered with scope:', registration.scope);
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
  if (Notification.permission === 'granted') {
    new Notification(title, {
      body: body,
      icon: 'fashluxee-logo-transformed.png',
      tag: 'stock-update',
    });
  } else {
    console.error('Notification permission not granted.');
  }
}

// sendNotification('Luxury Update!', 'Handpicked luxury only for you');
