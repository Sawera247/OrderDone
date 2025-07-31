import { products } from './product.js';
import { db } from './firebase.js';
import {
  ref,
  get,
  set,
  update,
  onValue,
  remove
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

document.addEventListener("DOMContentLoaded", () => {
  const userId = "guest";

  // Back Arrow Logic
  const backArrow = document.querySelector(".fa-arrow-left");
  backArrow.addEventListener("click", () => window.history.back());

  // Product Setup
  const productId = localStorage.getItem("selectedProductId");
  const product = products.find((p) => p.id === productId);

  if (!product) {
    alert("Product not found.");
    return;
  }

  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const desc = document.getElementById("prod-descrip");
  const price = document.getElementById("prod-price");
  const addToCartBtn = document.querySelector(".prod-addToCard");
  const bestDiv = document.querySelector(".best");
  const productSlider = document.querySelector(".slider-container");

  let currentIndex = 0;
  const media = product.img;

  function showMedia(index) {
    const file = media[index];
    const ext = file.split('.').pop().toLowerCase();

    const mediaHolder = productSlider.querySelector(".media-holder");
    mediaHolder.innerHTML = "";

    if (ext === "mp4") {
      const video = document.createElement("video");
      video.src = file;
      video.controls = true;
      mediaHolder.appendChild(video);
    } else {
      const img = document.createElement("img");
      img.src = file;
      img.id = "slider-image";
      mediaHolder.appendChild(img);
    }
  }

  if (media.length <= 1) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + media.length) % media.length;
    showMedia(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % media.length;
    showMedia(currentIndex);
  });

  showMedia(currentIndex);

  desc.textContent = product.description;
  price.innerHTML = `<span>Rs</span>.${product.price.current} <span class="cut">${product.price.og}</span>🔥`;

  // Add color selection if available
  if (product.color && Array.isArray(product.color)) {
    const colorContainer = document.createElement('div');
    colorContainer.classList.add('color-options');

    product.color.forEach((clr, index) => {
      const span = document.createElement('span');
      span.textContent = clr;
      span.classList.add('color-badge');

      span.addEventListener("click", () => {
        document.querySelectorAll('.color-badge').forEach(b => b.classList.remove('active'));
        span.classList.add('active');
        currentIndex = index;
        showMedia(currentIndex);
      });

      colorContainer.appendChild(span);
    });

    desc.insertAdjacentElement('afterend', colorContainer);
  }

  // Add to Cart
  addToCartBtn.addEventListener("click", () => {
  const cartItemRef = ref(db, `cart/${userId}/${product.id}`);
  get(cartItemRef).then((snapshot) => {
    if (snapshot.exists()) {
      const item = snapshot.val();
      update(cartItemRef, { quantity: item.quantity + 1 });
    } else {
      set(cartItemRef, {
        ...product,
        quantity: 1
      });
    }
  });
});

  // Similar Products
  products.forEach((p) => {
    if (p.id === product.id) return;

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.img[0]}" class="img" />
      <p class="heart"><i class="fa-regular fa-heart"></i></p>
      <p class="description">${p.description}</p>
      <div class="inline">
        <p class="price"><span>Rs</span>.${p.price.current} <span class="cut">${p.price.og}</span>🔥</p>
        <button class="add"><i class="fa-solid fa-cart-shopping"></i></button>
      </div>
    `;

    const heart = card.querySelector(".fa-heart");
    const favRef = ref(db, `favourites/${userId}/${p.id}`);

    onValue(favRef, (snap) => {
      heart.classList.toggle("fa-solid", snap.exists());
      heart.classList.toggle("fa-regular", !snap.exists());
    });

    heart.addEventListener("click", () => {
      get(favRef).then((snap) => {
        if (snap.exists()) {
          remove(favRef);
        } else {
          set(favRef, p);
        }
      });
    });

    card.querySelector(".add").addEventListener("click", () => {
      const thisCartRef = ref(db, `cart/${userId}/${p.id}`);
      get(thisCartRef).then((snap) => {
        if (snap.exists()) {
          const item = snap.val();
          set(thisCartRef, { ...item, quantity: item.quantity + 1 });
        } else {
          set(thisCartRef, { ...p, quantity: 1 });
        }
      });
    });

    card.querySelector(".img").addEventListener("click", () => {
      localStorage.setItem("selectedProductId", p.id);
      location.reload();
    });

    bestDiv.appendChild(card);
  });

  updateCartBar();
});

// Cart Bar
function updateCartBar() {
  const userId = "guest";
  const cartRef = ref(db, `cart/${userId}`);

  onValue(cartRef, (snapshot) => {
    const data = snapshot.val() || {};
    let totalItems = 0;
    let totalPrice = 0;

    Object.values(data).forEach(item => {
      const quantity = item.quantity || 1;
      totalItems += quantity;
      totalPrice += item.price.current * quantity;
    });

    const itemCount = document.getElementById('item-count');
    const totalPriceEl = document.getElementById('total-price');
    const bar = document.getElementById('cart-bar');

    if (itemCount && totalPriceEl && bar) {
      itemCount.textContent = totalItems;
      totalPriceEl.textContent = `Rs.${totalPrice}`;
      bar.style.display = totalItems > 0 ? 'flex' : 'none';
    }
  });
}
