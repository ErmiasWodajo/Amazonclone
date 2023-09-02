import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAOjPlEhuWT9ArUvWr-ERINSDSUvPLYC_g",
	authDomain: "e-clone-ded23.firebaseapp.com",
	projectId: "e-clone-ded23",
	storageBucket: "e-clone-ded23.appspot.com",
	messagingSenderId: "1056251190400",
	appId: "1:1056251190400:web:e35f8115c358d2571bda65",
	measurementId: "G-197ZRF95RX",
};

// initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const db = app.firestore();

export { auth, db };



// //! Updated method

// // import { initializeApp } from "firebase/app";
// // import { getAuth } from "firebase/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
// 	apiKey: "AIzaSyAOjPlEhuWT9ArUvWr-ERINSDSUvPLYC_g",
// 	authDomain: "e-clone-ded23.firebaseapp.com",
// 	projectId: "e-clone-ded23",
// 	storageBucket: "e-clone-ded23.appspot.com",
// 	messagingSenderId: "1056251190400",
// 	appId: "1:1056251190400:web:e35f8115c358d2571bda65",
// 	measurementId: "G-197ZRF95RX",
// };

// // Initialize Firebase

// // !updated method
// // const app = initializeApp(firebaseConfig);
// // const auth = getAuth(app);

// // export { auth };



// // npm install firebase
// // npm install -g firebase-tools
