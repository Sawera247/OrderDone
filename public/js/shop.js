import { products } from './product.js';
import { db } from './firebase.js';import {
  ref,
  push,
  onValue,
  remove
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// NAVBAR MENU
let menuBtn = document.querySelector('.menu-btn');
let navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu');
});

// CARD RENDERING
const bestContainer = document.querySelector('.best');
bestContainer.innerHTML = '';

let shuffledProducts = [...products].sort(() => Math.random() - 0.5);

shuffledProducts.forEach(product => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.addEventListener('click', (e) => {
    if (e.target.classList.contains('img')) {
      localStorage.setItem("selectedProductId", product.id);
      window.location.href = "product-detail.html";
    }
  });


  card.innerHTML = `
    <img src="${product.img[0]}" alt="" class="img">
    <p class="heart"><i class="fa-regular fa-heart"></i></p>
    <p class="description">${product.description}</p>
    <div class="inline">
      <p class="price">
        <span>Rs</span>.${product.price.current}
        <span class="cut">${product.price.og}</span>
        <span>🔥</span>
      </p>
      <button class="add" type="button"><i class="fa-solid fa-cart-shopping"></i></button>
    </div>
  `;

  bestContainer.appendChild(card);

  const addBtn = card.querySelector('.add');
  addBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    const productToAdd = {
      img: product.img,
      description: product.description,
      price: typeof product.price === "object"
        ? product.price
        : { current: parseInt(product.price.replace(/[^0-9]/g, '')) },
      quantity: 1
    };
    const userId = localStorage.getItem("userId") || "guest";
    push(ref(db, `cart/${userId}`), productToAdd);
    updateCartBar();
  });
});

// HEART AND DESC TOGGLE
document.addEventListener('click', function (e) {
  if (e.target.closest('.heart')) {
    const icon = e.target.closest('.heart').querySelector('i');
    const card = e.target.closest('.card');

    const img = card.querySelector('.img').src;
    const description = card.querySelector('.description').textContent;
    const priceText = card.querySelector('.price').innerText;
    const currentPrice = parseInt(priceText.match(/Rs\.(\d+)/)[1]);
    const originalPrice = parseInt(card.querySelector('.cut').textContent);

    const product = {
      img,
      description,
      price: { current: currentPrice, og: originalPrice }
    };

    if (icon.classList.contains('fa-regular')) {
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid');

      const userId = localStorage.getItem("userId") || "guest";
      const favRef = ref(db, `favourites/${userId}`);
      push(favRef, product);
    }else {
      icon.classList.remove('fa-solid');
      icon.classList.add('fa-regular');

      const userId = localStorage.getItem("userId") || "guest";
      const favRef = ref(db, `favourites/${userId}`);
      onValue(favRef, snapshot => {
        snapshot.forEach(child => {
          if (child.val().description === product.description) {
            remove(ref(db, `favourites/${userId}/${child.key}`));
          }
        });
      }, { onlyOnce: true });
    }
  }

  if (e.target.classList.contains('description') || e.target.classList.contains('img')) {
    const card = e.target.closest('.card');
    const desc = card.querySelector('.description');
    desc.classList.toggle('full');
  }
});

// SEARCH
let searchBar = document.getElementById('search');
let searchBtn = document.getElementById('btn');

function searchProduct(searchText) {
  let cards = document.querySelectorAll('.best .card');
  if (searchText.trim() === '') {
    cards.forEach(product => product.style.display = '');
    return;
  }

  cards.forEach(function (product) {
    let desc = product.querySelector('.description').textContent.toLowerCase();
    if (desc.includes(searchText)) {
      product.style.display = "";
    } else {
      product.style.display = 'none';
    }
  });
}

searchBar?.addEventListener('keyup', () => {
  let text = searchBar.value.toLowerCase();
  searchProduct(text);
});

searchBtn?.addEventListener('click', () => {
  let text = searchBar.value.toLowerCase();
  searchProduct(text);
  searchBar.value = '';
});

// CART BAR 
function updateCartBar() {
  const userId = localStorage.getItem("userId") || "guest";
  const cartRef = ref(db, `cart/${userId}`);
  onValue(cartRef, (snapshot) => {
    const data = snapshot.val() || {};
    let totalItems = 0;
    let totalPrice = 0;

    Object.values(data).forEach(item => {
    const quantity = item.quantity || 1;

    if (!item.price || typeof item.price.current !== 'number') return;

      totalItems += quantity;
      totalPrice += item.price.current * quantity;
    });

    const itemCount = document.getElementById('item-count');
    const totalPriceEl = document.getElementById('total-price');
    const bar = document.getElementById('cart-bar');

    if (itemCount && totalPriceEl && bar) {
      itemCount.textContent = totalItems;
      totalPriceEl.textContent = totalPrice;
      bar.style.display = totalItems > 0 ? 'flex' : 'none';
    }
  }, { onlyOnce: true });
}

// INIT
updateCartBar();
