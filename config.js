import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCQeECrRHaEmm26RYxUVTWRXm5utrl1Wfs",
  authDomain: "new-book-santa-app-8d355.firebaseapp.com",
  projectId: "new-book-santa-app-8d355",
  storageBucket: "new-book-santa-app-8d355.appspot.com",
  messagingSenderId: "692372389004",
  appId: "1:692372389004:web:5626f0ed0cf78ac96d0fa9"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    let app = firebase.initializeApp(firebaseConfig);
  }

  export default firebase.firestore();
