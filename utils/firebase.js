import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const auth = getAuth();

export { storage, auth };
