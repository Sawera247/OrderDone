// ✅ NAVBAR MENU
let menuBtn = document.querySelector('.menu-btn');
let navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu');
});

// ✅ CART
const cartItemsDiv = document.getElementById('cart-items');
const totalItemsText = document.getElementById('total-items');
const subtotalText = document.getElementById('subtotal');
const finalTotalText = document.getElementById('final-total');
const nextBtn = document.getElementById('next-btn');
const orderForm = document.querySelector('.order-form');

function renderCart() {
  db.ref('cart').once('value', (snapshot) => {
    const data = snapshot.val();
    cartItemsDiv.innerHTML = '';

    if (!data) {
      cartItemsDiv.innerHTML = `<p class="empty-msg">Your cart is empty.</p>`;
      document.getElementById('cart-summary').style.display = 'none';
      return;
    }

    document.getElementById('cart-summary').style.display = 'block';

    let subtotal = 0;
    let itemCount = 0;
    const keys = Object.keys(data);

    keys.forEach((key, index) => {
      const item = data[key];
      const quantity = item.quantity || 1;
      const totalPrice = item.price.current * quantity;
      subtotal += totalPrice;
      itemCount += quantity;

      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${item.img}" class="item-img" />
        <div class="line">
          <p class="desc">${item.description}</p>
          <div class="more">
            <p class="prc"><span>Rs. </span>${item.price.current}</p>
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
  db.ref(`cart/${key}`).once('value', (snapshot) => {
    const item = snapshot.val();
    if (!item) return;
    const newQty = (item.quantity || 1) + change;
    if (newQty < 1) {
      removeItem(key);
    } else {
      db.ref(`cart/${key}`).update({ quantity: newQty });
      renderCart();
    }
  });
}

function removeItem(key) {
  db.ref(`cart/${key}`).remove();
  renderCart();
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

  if (city !== "karachi") {
    alert("Sorry, we currently only deliver in Karachi.");
    cityInput.value = '';
    return;
  }

  const address = document.getElementById('address').value;
  const block = document.getElementById('block').value;
  const zip = document.getElementById('zip').value;

  db.ref('cart').once('value', (snapshot) => {
    const cart = snapshot.val();
    if (!cart) return;

    let message = `Order Details%0A`;
    let subtotal = 0;
    let totalItems = 0;

    Object.values(cart).forEach((item, i) => {
      const qty = item.quantity || 1;
      subtotal += item.price.current * qty;
      totalItems += qty;
      message += `${i + 1}. ${item.description} - Rs.${item.price.current} x ${qty}%0A`;
    });

    const finalTotal = subtotal + 250;

    message += `%0ATotal Items: ${totalItems}`;
    message += `%0ASubtotal: Rs.${subtotal}`;
    message += `%0ADelivery Charges: Rs.250`;
    message += `%0AFinal Total: Rs.${finalTotal}`;
    message += `%0A-----------------------%0A`;
    message += `Name: ${name}%0AGmail: ${gmail}%0APhone: ${number}%0ACity: ${city}%0AAddress: ${address}%0ABlock / House No: ${block}%0AZip: ${zip}%0APayment: Cash on Delivery`;

    window.open(`https://wa.me/923142273233?text=${message}`, "_blank");
  });
});

renderCart();
