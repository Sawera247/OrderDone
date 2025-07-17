// NAVBAR MENU
let menuBtn = document.querySelector('.menu-btn');
let navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu');
});

// FORM
document.querySelector('.order-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const gmail = document.getElementById('gmail').value.trim();
  const msg = document.getElementById('msg').value.trim();

  if (!name || !gmail || !msg) {
    alert('Please fill out all fields before submitting.');
    return;
  }

  // Save to Firebase
  db.ref('contactMessages').push({
    name: name,
    gmail: gmail,
    message: msg,
    time: new Date().toLocaleString()
  });

  // WhatsApp redirect
  const message = `New Message from Contact Form%0AName: ${name}%0AGmail: ${gmail}%0AMessage: ${msg}`;
  window.open(`https://wa.me/923142273233?text=${message}`, "_blank");
});
