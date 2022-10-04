import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCdBrvBypz5US82jsq8PjIicueSMR0PrYc",
  authDomain: "restaurant-app-b4b86.firebaseapp.com",
  databaseURL: "https://restaurant-app-b4b86-default-rtdb.firebaseio.com",
  projectId: "restaurant-app-b4b86",
  storageBucket: "restaurant-app-b4b86.appspot.com",
  messagingSenderId: "421485684107",
  appId: "1:421485684107:web:9fc2d1d1e5a5257533fb8e",
  measurementId: "G-SNJ8W21TWR",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };