import { app, db } from './firebase.js';
import {
  ref,
  get,
  update,
  remove,
  onValue 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Dummy user (until login is added)
const userId = localStorage.getItem("userId") || "guest";

// NAVBAR MENU
let menuBtn = document.querySelector('.menu-btn');
let navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu');
});

// CART 
const cartItemsDiv = document.getElementById('cart-items');
const totalItemsText = document.getElementById('total-items');
const subtotalText = document.getElementById('subtotal');
const finalTotalText = document.getElementById('final-total');
const nextBtn = document.getElementById('next-btn');
const orderForm = document.querySelector('.order-form');

function renderCart() {
  const userId = localStorage.getItem("userId") || "guest";
  const cartRef = ref(db, "cart/" + userId);

  cartItemsDiv.innerHTML = '';

  onValue(cartRef, (snapshot) => {
    const data = snapshot.val();
    if (!data) {
      cartItemsDiv.innerHTML = `<p class="empty-msg">Your cart is empty.</p>`;
      document.getElementById('cart-summary').style.display = 'none';
      return;
    }

    document.getElementById('cart-summary').style.display = 'block';

    let subtotal = 0;
    let itemCount = 0;

    Object.keys(data).forEach((key) => {
      const item = data[key];
      const quantity = item.quantity || 1;
      const price = typeof item.price === "object" ? (item.price.current || 0) : 0;
      const totalPrice = price * quantity;
      subtotal += totalPrice;
      itemCount += quantity;

      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${Array.isArray(item.img) ? item.img[0] : item.img}" class="item-img" />
        <div class="line">
          <p class="desc">${item.description}</p>
          <div class="more">
            <p class="prc"><span>Rs. </span>${price}</p>
            <button onclick="updateQty('${key}', -1)" class="pm"><i class="fa-solid fa-minus"></i></button>
            <span>${quantity}</span>
            <button onclick="updateQty('${key}', 1)" class="pm"><i class="fa-solid fa-plus"></i></button>
          </div>
        </div>
        <button onclick="removeItem('${key}')" id="trash"><i class="fa-solid fa-trash"></i></button>
      `;
      cartItemsDiv.appendChild(card);
    });

    totalItemsText.textContent = itemCount;
    subtotalText.textContent = subtotal;
    finalTotalText.textContent = subtotal + 250;
  });
}

function updateQty(key, change) {
  get(ref(db, `cart/${userId}/${key}`)).then((snapshot) => {
    const item = snapshot.val();
    if (!item) return;
    const newQty = (item.quantity || 1) + change;
    if (newQty < 1) {
      removeItem(key);
    } else {
      update(ref(db, `cart/${userId}/${key}`), { quantity: newQty });
    }
  });
}

function removeItem(key) {
  remove(ref(db, `cart/${userId}/${key}`))
}

nextBtn.addEventListener('click', () => {
  orderForm.style.display = 'block';
  document.getElementById('cart-summary').style.display = 'none';
  cartItemsDiv.style.display = 'none';
});

orderForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const gmail = document.getElementById('gmail').value;
  const number = document.getElementById('number').value;
  const cityInput = document.getElementById('city');
  const city = cityInput.value.toLowerCase();
  const address = document.getElementById('address').value;
  const block = document.getElementById('block').value;
  const zip = document.getElementById('zip').value;

  const errorP = document.getElementById('any-error');
  errorP.style.display = 'none';
  errorP.textContent = '';
  errorP.style.color = 'red';

  if (!name || !gmail || !number || !city || !address || !block || !zip) {
    errorP.textContent = "All fields are required.";
    errorP.style.display = 'block';
    return;
  }

  if (!/^[a-zA-Z\s]+$/.test(name)) {
    errorP.textContent = "Name should only contain letters.";
    errorP.style.display = 'block';
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(gmail)) {
    errorP.textContent = "Invalid email format.";
    errorP.style.display = 'block';
    return;
  }

  if (!/^03\d{9}$/.test(number)) {
    errorP.textContent = "Enter a valid 11-digit Pakistani number (e.g., 03XXXXXXXXX)";
    errorP.style.display = 'block';
    return;
  }

  if (city !== "karachi") {
    errorP.textContent = "Sorry, we currently only deliver in Karachi.";
    errorP.style.display = 'block';
    return;
  }

  get(ref(db, `cart/${userId}`)).then((snapshot) => {
    const cart = snapshot.val();
    if (!cart) return;

    let message = `Order Details%0A`;
    let subtotal = 0;
    let totalItems = 0;

    Object.values(cart).forEach((item, i) => {
      const qty = item.quantity || 1;
      const price = item.price?.current || 0;
      subtotal += price * qty;
      totalItems += qty;
      message += `${i + 1}. ${item.description} - Rs.${price} x ${qty}%0A`;
    });

    const finalTotal = subtotal + 250;

    message += `%0ATotal Items: ${totalItems}`;
    message += `%0ASubtotal: Rs.${subtotal}`;
    message += `%0ADelivery Charges: Rs.250`;
    message += `%0AFinal Total: Rs.${finalTotal}`;
    message += `%0A-----------------------%0A`;
    message += `Name: ${name}%0AGmail: ${gmail}%0APhone: ${number}%0ACity: ${city}%0AAddress: ${address}%0ABlock / House No: ${block}%0AZip: ${zip}%0APayment: Cash on Delivery`;

    window.open(`https://wa.me/923142273233?text=${message}`, "_blank");

    // Optional: Clear the cart after placing order
    remove(ref(db, `cart/${userId}`)).then(() => {
      alert("Order placed! Your cart has been cleared.");
      window.location.reload();
    });
  });
});

renderCart();
window.updateQty = updateQty;
window.removeItem = removeItem;
