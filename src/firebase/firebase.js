import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDgeeI658n3dawk4Yc5uGRFOCdS-Yod1Zw",
    authDomain: "tiendajot.firebaseapp.com",
    projectId: "tiendajot",
    storageBucket: "tiendajot.appspot.com",
    messagingSenderId: "109262336744",
    appId: "1:109262336744:web:57bff802d637302fa04f5d",
    measurementId: "G-K442F8HS7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);