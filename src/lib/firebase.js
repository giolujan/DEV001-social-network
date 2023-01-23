// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore, collection, addDoc,
  onSnapshot, deleteDoc, doc, getDoc, updateDoc,
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCbS4g2RQsfu5eeBFFQpuvxMyzgBNr4I3U',
  authDomain: 'social-network-15487.firebaseapp.com',
  projectId: 'social-network-15487',
  storageBucket: 'social-network-15487.appspot.com',
  messagingSenderId: '246873229308',
  appId: '1:246873229308:web:8238decc105ecd30c51479',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export const saveTask = (description) => addDoc(collection(db, 'tasks'), { description });
// export const getTasks = () => getDocs(collection(db, 'tasks'));
export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback);
export const deleteTask = (id) => deleteDoc(doc(db, 'tasks', id));
export const getTask = (id) => getDoc(doc(db, 'tasks', id));
export const updateTask = (id, newFields) => updateDoc(doc(db, 'tasks', id), newFields);
