import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const auth = getAuth();
const db = getDatabase();

document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const uid = userCredential.user.uid;

      // Save additional user info in Realtime Database
      set(ref(db, 'users/' + uid), {
        name: name,
        email: email
      });

      alert("Account created successfully!");
      localStorage.setItem("userId", uid);
      window.location.href = "shop.html";
    })
    .catch(error => {
      alert("Signup failed: " + error.message);
    });
});
