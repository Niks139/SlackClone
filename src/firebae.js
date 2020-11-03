import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfaJHjAlBESogzF6q5mHmYyQxs2TEZelI",
    authDomain: "slack-clone-3fb98.firebaseapp.com",
    databaseURL: "https://slack-clone-3fb98.firebaseio.com",
    projectId: "slack-clone-3fb98",
    storageBucket: "slack-clone-3fb98.appspot.com",
    messagingSenderId: "95188149190",
    appId: "1:95188149190:web:34400dc2561db6329688c7",
    measurementId: "G-1BZ5C1T8DC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;