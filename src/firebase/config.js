import  firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyAW2pFfrFtQhzZFpU9u4nfhXqY8Mdh357o",
    authDomain: "olx-clone-54824.firebaseapp.com",
    projectId: "olx-clone-54824",
    storageBucket: "olx-clone-54824.appspot.com",
    messagingSenderId: "502266676938",
    appId: "1:502266676938:web:b66df728e7005406ef9633",
    measurementId: "G-6H02WFQH49"
  };


  export default firebase.initializeApp(firebaseConfig);