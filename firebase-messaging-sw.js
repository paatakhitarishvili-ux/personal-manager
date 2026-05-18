importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC_uSFyLyEfT2211wHSYbabM1tNbLuX_ow",
  authDomain: "personal-manager-15511.firebaseapp.com",
  projectId: "personal-manager-15511",
  storageBucket: "personal-manager-15511.firebasestorage.app",
  messagingSenderId: "376893272929",
  appId: "1:376893272929:web:cefe1532c333f30aaf4b20"
});

const messaging = firebase.messaging();

// Background message handler
messaging.onBackgroundMessage(function(payload) {
  console.log('Background message:', payload);
  const title = payload.notification?.title || 'Personal Manager';
  const options = {
    body: payload.notification?.body || '',
    icon: '/personal-manager/icon-192.png',
    badge: '/personal-manager/icon-192.png',
    data: payload.data
  };
  return self.registration.showNotification(title, options);
});

// Notification click handler
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://paatakhitarishvili-ux.github.io/personal-manager/')
  );
});
