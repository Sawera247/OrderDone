import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const auth = getAuth();

document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const uid = userCredential.user.uid;

      localStorage.setItem("userId", uid);
      window.location.href = "shop.html";
    })
    .catch(error => {
      alert("Login failed: " + error.message);
    });
});
