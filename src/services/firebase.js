// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJD7hBK9f2Z7xBZzoUvtQn1e9CfwardgA",
  authDomain: "reactdashboardapp.firebaseapp.com",
  projectId: "reactdashboardapp",
  storageBucket: "reactdashboardapp.appspot.com",
  messagingSenderId: "841363058221",
  appId: "1:841363058221:web:e49f9487db0f6861a152a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;
