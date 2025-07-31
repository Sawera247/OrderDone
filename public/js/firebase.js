import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyASvCqI1dH33dldwfgEn7yhpZuRcVeb0VY",
  authDomain: "order-done.firebaseapp.com",
  databaseURL: "https://order-done-default-rtdb.firebaseio.com",
  projectId: "order-done",
  storageBucket: "order-done.appspot.com",
  messagingSenderId: "755267904234",
  appId: "1:755267904234:web:1eae20d2cec74317d62d93"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { app, db };
