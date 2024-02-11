
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_bEK4lTAVaMyvxGQYQWExr3wtV2Y9alY",
  authDomain: "nextjs-auth-app-184d5.firebaseapp.com",
  projectId: "nextjs-auth-app-184d5",
  storageBucket: "nextjs-auth-app-184d5.appspot.com",
  messagingSenderId: "175214255239",
  appId: "1:175214255239:web:1e7aa90a48262f09c42c22"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;