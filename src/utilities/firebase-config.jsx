import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB3cdXTS5cZIZuIH0eanwvnpT1t2RRftKQ",
  authDomain: "yt-project-cfa0e.firebaseapp.com",
  databaseURL: "https://yt-project-cfa0e-default-rtdb.firebaseio.com",
  projectId: "yt-project-cfa0e",
  storageBucket: "yt-project-cfa0e.appspot.com",
  messagingSenderId: "177949383692",
  appId: "1:177949383692:web:77ccf55df93eb72d362229",
  measurementId: "G-0NVBVV74D0"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

export const auth =getAuth(app);
export default db