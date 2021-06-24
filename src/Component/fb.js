import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDuI0VxVbLMYanu9J0lG9If4OxTNzJxWmw",
  authDomain: "slack-clone-8a5df.firebaseapp.com",
  projectId: "slack-clone-8a5df",
  storageBucket: "slack-clone-8a5df.appspot.com",
  messagingSenderId: "940309599451",
  appId: "1:940309599451:web:f106b49400a6d81ad3a8fe",
  measurementId: "G-442X9DV53X",
};

const firbaseApp = firebase.initializeApp(firebaseConfig);
const db = firbaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
