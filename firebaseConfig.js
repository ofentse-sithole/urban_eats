import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
    apiKey: "AIzaSyAg2P9n7Sl30E1a4boLrNUFYnLHyWT3awM",
    authDomain: "urban-eats-8f42d.firebaseapp.com",
    projectId: "urban-eats-8f42d",
    storageBucket: "urban-eats-8f42d.firebasestorage.app",
    messagingSenderId: "17600927906",
    appId: "1:17600927906:web:f98695e534f24978cbdffb",
    measurementId: "G-2NTX7ZSMH2"
};

// Initialize Firebase first
const app = initializeApp(firebaseConfig);

// Then initialize auth with persistence
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Initialize database
const database = getDatabase(app);

export { database, auth };