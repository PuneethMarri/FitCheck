importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

// Your firebase config (same as in App.js but in this file too)
const firebaseConfig = {
  apiKey: "AIzaSyBxs8SCxgfZ3xHcT-ChLAGi6rXpvRQcNPM",
  authDomain: "daily-chicklist.firebaseapp.com",
  projectId: "daily-chicklist",
  storageBucket: "daily-chicklist.firebasestorage.app",
  messagingSenderId: "801237738540",
  appId: "1:801237738540:web:3193882c3dd67911cc5d89",
  measurementId: "G-795B4PSGC7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo192.png' // your app icon in public folder
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
