import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDl_cgZytuhhywbDJ2VDJ_fka8yn9eLEo4",
  authDomain: "slack-clone-yazeed-alkhalaf.firebaseapp.com",
  projectId: "slack-clone-yazeed-alkhalaf",
  storageBucket: "slack-clone-yazeed-alkhalaf.appspot.com",
  messagingSenderId: "42795104416",
  appId: "1:42795104416:web:d9066bbe28515bf69371c5",
  measurementId: "G-DW0JHWJR7E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
