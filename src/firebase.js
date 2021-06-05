import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAMSgnVT4QIHD_FkQebCQciPHy4Larnkto",
    authDomain: "disney-hotstar-clone-5426d.firebaseapp.com",
    projectId: "disney-hotstar-clone-5426d",
    storageBucket: "disney-hotstar-clone-5426d.appspot.com",
    messagingSenderId: "359990545903",
    appId: "1:359990545903:web:4ddc42af7bd0ce23ccfa1a"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;