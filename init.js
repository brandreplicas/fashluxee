if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js?_=1.0.1').then(registration => {
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
  let urlToOpen = 'https://brandreplicas.github.io/carrd/gallery.html';
  if (Notification.permission === 'granted') {
    const notification = new Notification(title, {
      body: body,
      icon: 'fashluxee-logo-transformed.png'
    });

    notification.onclick = function(event) {
      event.preventDefault();
      window.focus(); // Bring the browser window to the front (optional)
      window.location.href = urlToOpen; // Open in the same tab
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