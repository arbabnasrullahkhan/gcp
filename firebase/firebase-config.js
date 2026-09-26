import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";

// GCP Desk Firebase Configuration (Multiple Identifiers Supported)
const firebaseConfig = {
  apiKey: "AIzaSyA96woK4KuQtIHWWGGF8b556ea20XPZ76w",
  authDomain: "roz-e-hisab.firebaseapp.com",
  projectId: "roz-e-hisab",
  storageBucket: "roz-e-hisab.firebasestorage.app",
  messagingSenderId: "776423119730",
  appId: "1:776423119730:web:19c78561f4826224771beb",
  measurementId: "G-17Q9D41WNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
let analytics;
try {
    analytics = getAnalytics(app);
} catch (e) {
    console.warn("Analytics not initialized in this environment.");
}

export { app, auth, db, storage, analytics };
