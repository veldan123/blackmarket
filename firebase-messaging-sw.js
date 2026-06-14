importScripts("https://www.gstatic.com/firebasejs/11.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.0.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey:            "AIzaSyDfgiph_O4UlnvH-Xpfxa-IzeyUkIJUYiY",
  authDomain:        "black-market-a0d1f.firebaseapp.com",
  databaseURL:       "https://black-market-a0d1f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:         "black-market-a0d1f",
  storageBucket:     "black-market-a0d1f.firebasestorage.app",
  messagingSenderId: "358168391161",
  appId:             "1:358168391161:web:9053d40a859e9bacdae128",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon:    "/icon.png",
    tag:     "bm-attack",
    vibrate: [300, 100, 300, 100, 600],
    requireInteraction: true,
  });
});
