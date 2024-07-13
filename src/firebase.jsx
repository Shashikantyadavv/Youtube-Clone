// // Import the functions you need from the SDKs you need
// import { firebase } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration

// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBDBukNStXwK867AevdPa4TXtSGfPt7qWk",
//   authDomain: "youttube-my.firebaseapp.com",
//   projectId: "youttube-my",
//   storageBucket: "youttube-my.appspot.com",
//   messagingSenderId: "51760487776",
//   appId: "1:51760487776:web:56384344b570ff5384d205",
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export default firebase.auth;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDBukNStXwK867AevdPa4TXtSGfPt7qWk",
  authDomain: "youttube-my.firebaseapp.com",
  projectId: "youttube-my",
  storageBucket: "youttube-my.appspot.com",
  messagingSenderId: "51760487776",
  appId: "1:51760487776:web:56384344b570ff5384d205",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider };
