import {initializeApp} from 'firebase/app';



export function firebaseConfig() {

  // Iniciamos la app con los datos en diccionario
  initializeApp({
      apiKey: "AIzaSyDBCQmU9UQ_kvDBETqCRJeKe_lAmMzLlZg",
      authDomain: "sistema-fa054.firebaseapp.com",
      projectId: "sistema-fa054",
      storageBucket: "sistema-fa054.appspot.com",
      messagingSenderId: "769887160696",
      appId: "1:769887160696:web:38eea942e7de3c49a8e08d",
      measurementId: "G-1ZNT5BXFKM"
  });
}