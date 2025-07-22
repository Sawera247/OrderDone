document.addEventListener("DOMContentLoaded", () => {
  // Back Arrow Logic
  const backArrow = document.querySelector(".fa-arrow-left");
  backArrow.addEventListener("click", () => {
    window.history.back();
  });

  // Product Detail Logic
  const productId = localStorage.getItem("selectedProductId");
  const product = products.find((p) => p.id === productId);

  if (!product) {
    alert("Product not found.");
    return;
  }

  const sliderImage = document.getElementById("slider-image");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const desc = document.getElementById("prod-descrip");
  const price = document.getElementById("prod-price");
  const heartIcon = document.querySelector(".fa-heart");
  const addToCartBtn = document.querySelector(".prod-addToCard");
  const bestDiv = document.querySelector(".best");
  const productSlider = document.querySelector(".slider-container");

  let currentIndex = 0;
  const media = product.img;

  if (media.length <= 1) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  }

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

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % media.length;
    showMedia(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + media.length) % media.length;
    showMedia(currentIndex);
  });

  showMedia(currentIndex);

  desc.textContent = product.description;
  price.innerHTML = `<span>Rs</span>.${product.price.current} <span class="cut">${product.price.og}</span>🔥`;

  if (product.color && Array.isArray(product.color)) {
  const colorContainer = document.createElement('div');
  colorContainer.classList.add('color-options');

  product.color.forEach((clr, index) => {
    const span = document.createElement('span');
    span.textContent = clr;
    span.classList.add('color-badge');
    
    span.addEventListener("click", () => {
      document.querySelectorAll('.color-badge').forEach(badge => {
        badge.classList.remove('active');
      });

      span.classList.add('active');

      currentIndex = index; 
      showMedia(currentIndex);

      selectedColor = clr;

      document.querySelectorAll('.color-badge').forEach(b => b.classList.remove('selected-color'));
      span.classList.add('selected-color');
    });

    colorContainer.appendChild(span);
  });

  desc.insertAdjacentElement('afterend', colorContainer);
}

  const userId = "guest";
  const favRef = db.ref(`favourites/${userId}/${product.id}`);

  const cartRef = db.ref(`cart/${userId}/${product.id}`);

  addToCartBtn.textContent = "Add to Cart";
  addToCartBtn.addEventListener("click", () => {
    cartRef.once("value").then((snapshot) => {
      if (snapshot.exists()) {
        let item = snapshot.val();
        item.quantity = item.quantity + 1;
        cartRef.set(item);
      } else {
        cartRef.set({ ...product, quantity: 1 });
      }
    });
  });

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
    const thisFavRef = db.ref(`favourites/${userId}/${p.id}`);

    thisFavRef.on("value", (snap) => {
      heart.classList.toggle("fa-solid", snap.exists());
      heart.classList.toggle("fa-regular", !snap.exists());
    });

    heart.addEventListener("click", () => {
      thisFavRef.once("value").then((snap) => {
        snap.exists() ? thisFavRef.remove() : thisFavRef.set(p);
      });
    });

    card.querySelector(".add").addEventListener("click", () => {
      const thisCartRef = db.ref(`cart/${userId}/${p.id}`);
      thisCartRef.once("value").then((snap) => {
        if (snap.exists()) {
          let item = snap.val();
          item.quantity++;
          thisCartRef.set(item);
        } else {
          thisCartRef.set({ ...p, quantity: 1 });
        }
      });
    });

    card.querySelector(".img").addEventListener("click", () => {
      localStorage.setItem("selectedProductId", p.id);
      location.reload();
    });

    bestDiv.appendChild(card);
  });
});


// CART BAR 
function updateCartBar() {
  const userId = "guest"; // Same as above
  const cartRef = db.ref(`cart/${userId}`);

  cartRef.on("value", (snapshot) => {
    const cart = snapshot.val() || {};
    let totalItems = 0;
    let totalPrice = 0;

    Object.values(cart).forEach(item => {
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

updateCartBar();
