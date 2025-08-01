import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const auth = getAuth();

document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const emailError = document.getElementById('email-error');

  emailError.style.display = 'none';
  emailError.textContent = '';

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const uid = userCredential.user.uid;

      localStorage.setItem("userId", uid);
      window.location.href = "shop.html";
    })
    .catch(error => {
      let message = "";
      switch (error.code) {
        case 'auth/invalid-email':
          message = "Please enter a valid email address";
          break;
        case 'auth/invalid-credential':
          message = "Incorrect email or password";
          break;
        case 'auth/wrong-password':
          message = "Incorrect password";
          break;
        case 'auth/user-not-found':
          message = "No account found with this email";
          break;
        default:
          message = error.message;
      };

      emailError.textContent = message;
      emailError.style.display = 'block';
    });
});
