import * as firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAhCbE1deDSv3p9M35R9teRpvqN-kZXmHE",
  authDomain: "phoenix-after5.firebaseapp.com",
  databaseURL: "https://phoenix-after5.firebaseio.com",
  projectId: "phoenix-after5",
  storageBucket: "phoenix-after5.appspot.com",
  messagingSenderId: "1004996666922",
  timestampsInSnapshots: false
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: false });

export default {
  database: firebase.firestore()
};
