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

    productSlider.querySelectorAll("img, video").forEach(el => el.remove());

    if (ext === "mp4") {
      const video = document.createElement("video");
      video.src = file;
      video.controls = true;
      productSlider.appendChild(video);
    } else {
      const img = document.createElement("img");
      img.src = file;
      img.id = "slider-image";
      productSlider.appendChild(img);
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
  price.innerHTML = `<span>Rs</span>.${product.price.current} <span class="cut">${product.price.og}</span>`;

  if (product.color && Array.isArray(product.color)) {
    const colorContainer = document.createElement('div');
    colorContainer.classList.add('color-options');

    const colorTitle = document.createElement('p');
    colorTitle.textContent = 'Available Colors:';
    colorContainer.appendChild(colorTitle);

    product.color.forEach(clr => {
      const span = document.createElement('span');
      span.textContent = clr;
      span.classList.add('color-badge');
      colorContainer.appendChild(span);
    });

    desc.insertAdjacentElement('afterend', colorContainer);
  }

  const userId = "guest";
  const favRef = db.ref(`favourites/${userId}/${product.id}`);

  favRef.on("value", (snapshot) => {
    heartIcon.classList.toggle("fa-solid", snapshot.exists());
    heartIcon.classList.toggle("fa-regular", !snapshot.exists());
  });

  heartIcon.addEventListener("click", () => {
    favRef.once("value").then((snap) => {
      snap.exists() ? favRef.remove() : favRef.set(product);
    });
  });

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
