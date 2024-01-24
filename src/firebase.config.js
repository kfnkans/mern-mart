
import { initializeApp } from "firebase/app"; 
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'; 
import {getStorage} from 'firebase/storage'; 

const firebaseConfig = {
  apiKey: "AIzaSyBWJvrd9OrHlJD5tYvFCcsaSrwXGoFefXg",
  authDomain: "mernmart-4d83b.firebaseapp.com",
  projectId: "mernmart-4d83b",
  storageBucket: "mernmart-4d83b.appspot.com",
  messagingSenderId: "976192433709",
  appId: "1:976192433709:web:6ec5dfc0bb6fdbfb7852a4"
};

const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
export const db = getFirestore(app); 
export const storage = getStorage(app);
export default app;