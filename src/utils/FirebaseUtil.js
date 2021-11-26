import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"


export function firebaseConfig() {
  const config = {

    // Iniciamos la app con los datos en diccionario
    apiKey: "AIzaSyAdUOC5TG-QP0TC-XKYnBR6kATHTRGZLQg",
    authDomain: "webreact-11cd7.firebaseapp.com",
    projectId: "webreact-11cd7",
    storageBucket: "webreact-11cd7.appspot.com",
    messagingSenderId: "22579012522",
    appId: "1:22579012522:web:f711e8c42a81f24b39c1d3",
    measurementId: "G-SPFJCP54CV"
  };

  const app = initializeApp(config);
  const analytics = getAnalytics(app);

}
export function firebaseRegistrarUsuario(email, password) {
  createUserWithEmailAndPassword(getAuth(), email, password).then(credenciales => {
    alert(credenciales);
  });
}