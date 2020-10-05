// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAqCZu5Gs_T6Cz91Y_jWcdm8gKHPLtopw4",
  authDomain: "todo-app-dg.firebaseapp.com",
  databaseURL: "https://todo-app-dg.firebaseio.com",
  projectId: "todo-app-dg",
  storageBucket: "todo-app-dg.appspot.com",
  messagingSenderId: "256892419604",
  appId: "1:256892419604:web:ecff082386cd1c6051f101",
  measurementId: "G-WD2VGF5243",
});

const db = firebaseApp.firestore();

export default db;
