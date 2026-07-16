// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-storage.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDm86r4WjoqqjMF-6XTrmReHghCZpAu_7s",
  authDomain: "rare-nexus-tcg.firebaseapp.com",
  projectId: "rare-nexus-tcg",
  storageBucket: "rare-nexus-tcg.firebasestorage.app",
  messagingSenderId: "377726481910",
  appId: "1:377726481910:web:7b2954616d792f859203d7",
  measurementId: "G-0B3E6ZK0FB"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Authentication
const auth = getAuth(app);

import { getStorage } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-storage.js";

// Inicializar Storage
const storage = getStorage(app);

// Exportar
export { app, auth, storage };
