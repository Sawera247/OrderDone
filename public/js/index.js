import { db } from "./firebase.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const auth = getAuth();

document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const emailError = document.getElementById('email-error');

  emailError.style.display = 'none';
  emailError.textContent = '';

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const uid = userCredential.user.uid;

      set(ref(db, 'users/' + uid), {
        name: name,
        email: email
      });
      
      localStorage.setItem("userId", uid);
      window.location.href = "shop.html";
    })
    .catch(error => {
      let message = "";
      switch (error.code) {
        case 'auth/email-already-in-use':
          message = "Email already in use";
          break;
        case 'auth/invalid-email':
          message = "Please enter a valid email address";
          break;
        case 'auth/weak-password':
          message = "Password should be at least 6 characters";
          break;
        default:
          message = error.message;
      };

      emailError.textContent = message;
      emailError.style.display = 'block';
    });
});
