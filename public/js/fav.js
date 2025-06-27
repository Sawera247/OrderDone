// ✅ NAVBAR MENU
let menuBtn = document.querySelector('.menu-btn');
let navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu');
});

// ✅ FAVOURITES LOAD FROM FIREBASE
const favContainer = document.querySelector('.fav-best');
favContainer.innerHTML = '';

db.ref('favourites').on('value', snapshot => {
  const favs = snapshot.val();
  favContainer.innerHTML = ''; // Clear before reload

  if (!favs || Object.keys(favs).length === 0) {
    favContainer.innerHTML = `<p class="empty">You’ve got no favourite items yet</p>`;
    return;
  }

  Object.entries(favs).forEach(([key, product]) => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${product.img}" alt="" class="img">
      <p class="heart" data-key="${key}"><i class="fa-solid fa-heart"></i></p>
      <p class="description">${product.description}</p>
      <div class="inline">
        <p class="price">
          <span>Rs</span>.${product.price.current}
          <span class="cut">${product.price.og}</span>
          <span>🔥</span>
        </p>
        <button class="add"><i class="fa-solid fa-cart-shopping"></i></button>
      </div>
    `;

    favContainer.appendChild(card);

    // ✅ ADD TO CART
    const addBtn = card.querySelector('.add');
    addBtn.addEventListener('click', () => {
      const productToAdd = {
        img: product.img,
        description: product.description,
        price: product.price,
        quantity: 1
      };
      db.ref('cart').push(productToAdd, err => {
        if (!err) updateCartBar();
      });
    });

    // ✅ UNLIKE FROM FAV
    const heartBtn = card.querySelector('.heart');
    heartBtn.addEventListener('click', () => {
      const key = heartBtn.getAttribute('data-key');
      db.ref('favourites/' + key).remove();
    });
  });
});

// ✅ DESCRIPTION TOGGLE
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('description') || e.target.classList.contains('img')) {
    const card = e.target.closest('.card');
    const desc = card.querySelector('.description');
    desc.classList.toggle('full');
  }
});

// ✅ SEARCH BAR FOR FAVOURITES
let searchBar = document.getElementById('search');
let searchBtn = document.getElementById('btn');

function searchProduct(searchText) {
  let cards = document.querySelectorAll('.fav-best .card');
  if (searchText.trim() === '') {
    cards.forEach(card => card.style.display = '');
    return;
  }

  cards.forEach(card => {
    let desc = card.querySelector('.description').textContent.toLowerCase();
    if (desc.includes(searchText)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
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

// ✅ CART BAR UPDATE
function updateCartBar() {
  db.ref('cart').once('value', snapshot => {
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
      totalPriceEl.textContent = totalPrice;
      bar.style.display = totalItems > 0 ? 'flex' : 'none';
    }
  });
}

// ✅ INIT
updateCartBar();
