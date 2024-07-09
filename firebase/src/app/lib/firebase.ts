import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB5webFDt8Rr5xa7OvntzFEkbzJ5LXQQuE",
    authDomain: "fir-9b2fd.firebaseapp.com",
    projectId: "fir-9b2fd",
    storageBucket: "fir-9b2fd.appspot.com",
    messagingSenderId: "632230104551",
    appId: "1:632230104551:web:929022ca3e3c77df71c142",
    measurementId: "G-L3LZV3SKSY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };