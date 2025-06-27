const firebaseConfig = {
    apiKey: "AIzaSyASvCqI1dH33dldwfgEn7yhpZuRcVeb0VY",
    authDomain: "order-done.firebaseapp.com",
    projectId: "order-done",
    storageBucket: "order-done.appspot.com",
    messagingSenderId: "755267904234",
    appId: "1:755267904234:web:1eae20d2cec74317d62d93"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
window.db = db;