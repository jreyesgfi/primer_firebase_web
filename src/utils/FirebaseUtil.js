import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { doc, collection, getDocs, setDoc, getFirestore, deleteDoc} from 'firebase/firestore';

import {uuid} from 'uuidv4';

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

export async function firebaseIniciarSesion(email, password) {
  try{
    let credenciales = await signInWithEmailAndPassword(getAuth(),email,password);
    //credenciales.user
    return true;
  }catch(e) {
    return false;
  }

  // signInWithEmailAndPassword(getAuth(), email, password)

  // //  Nos registramos en firebase y esperamos la respuesta
  //   .then((credenciales) => {

  //     // Registro correcto
  //     const user = credenciales.user;
  //     return true;
      
  //   })
  //     // Si no conseguimos iniciar sesión...
  //   .catch((error) => {
  //     return false;
  //   });
}

export async function firebaseBuscar(coleccionABuscar){

  // Creamos la lista de usuarios
  let listado = [];

  // Preparamos la consulta
  let consulta = collection(getFirestore(), coleccionABuscar);

  // Ejetumos la consulta
  let resultado = await getDocs(consulta);

  // Cambiamos el formato del resultado
  resultado.forEach(documento => {
    let objeto = documento.data()
    objeto.id = documento.id;
    listado.push(objeto)
  })

  return listado
}

export function firebaseGuardar(coleccion, objeto) {

  // Generamos el id que vamos a usar
  objeto.id = uuid();

  // Creamos la referencia que deseamos guardar
  let referencia = doc(getFirestore(),coleccion,objeto.id);

  // Lo rellenamos y guardamos
  setDoc(referencia, objeto);
}

export async function firebaseEliminar(coleccion,id) {
  console.log("se ha eliminado el usuario", id)
  await deleteDoc(doc(getFirestore(), coleccion,id)).catch((e)=>{
    console.log(e);
  });
}