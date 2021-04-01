import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACEankBJPthTmBFbKEYoQxT7jvDLOcXjk",
  authDomain: "ecommerce-react-4bdbf.firebaseapp.com",
  projectId: "ecommerce-react-4bdbf",
  storageBucket: "ecommerce-react-4bdbf.appspot.com",
  messagingSenderId: "372003108769",
  appId: "1:372003108769:web:a6b087bea071c27a177de0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
