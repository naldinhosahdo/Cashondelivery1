'use strict';

// ===== PRODUCTS DATA =====
const products = [
  {
    id: 1,
    name: "Oud Royale",
    brand: "Collection Noire",
    gender: "unissex",
    desc: "Madeira de Oud imponente com âmbar dourado e especiarias orientais.",
    notes: ["Oud", "Âmbar", "Sândalo"],
    price: 349,
    oldPrice: 499,
    scheme: "gold",
    badge: "Mais Vendido",
    ml: "100ml",
  },
  {
    id: 2,
    name: "Rosa Éternelle",
    brand: "Maison Floral",
    gender: "feminino",
    desc: "Rosa turca pura com toque de jasmim, almíscar branco e baunilha.",
    notes: ["Rosa", "Jasmim", "Almíscar"],
    price: 289,
    oldPrice: 399,
    scheme: "rose",
    badge: null,
    ml: "75ml",
  },
  {
    id: 3,
    name: "Bleu Intense",
    brand: "Atelier Marine",
    gender: "masculino",
    desc: "Frescor marinho com notas de bergamota, cedro e patchouli defumado.",
    notes: ["Bergamota", "Cedro", "Marino"],
    price: 319,
    oldPrice: 449,
    scheme: "navy",
    badge: "Novo",
    ml: "100ml",
  },
  {
    id: 4,
    name: "Forêt Verte",
    brand: "Nature Luxe",
    gender: "unissex",
    desc: "Bosque verde com eucalipto, musgo e vetiver terroso e fresco.",
    notes: ["Musgo", "Vetiver", "Eucalipto"],
    price: 279,
    oldPrice: null,
    scheme: "emerald",
    badge: null,
    ml: "50ml",
  },
  {
    id: 5,
    name: "Nuit Violette",
    brand: "Parfums Secrets",
    gender: "feminino",
    desc: "Misteriosa e sedutora — íris, violeta, âmbar negro e baunilha.",
    notes: ["Íris", "Violeta", "Baunilha"],
    price: 369,
    oldPrice: 529,
    scheme: "purple",
    badge: "Premium",
    ml: "100ml",
  },
  {
    id: 6,
    name: "Noir Absolu",
    brand: "Collection Noire",
    gender: "masculino",
    desc: "Poder e elegância — couro, tabaco suave, cardamomo e ébano.",
    notes: ["Couro", "Tabaco", "Cardamomo"],
    price: 399,
    oldPrice: 569,
    scheme: "black",
    badge: "Exclusivo",
    ml: "100ml",
  },
  {
    id: 7,
    name: "Ambre Précieux",
    brand: "Orient Collection",
    gender: "unissex",
    desc: "Âmbar rico com resina de benjoim, mirra e um toque de laranja amarga.",
    notes: ["Âmbar", "Benjoim", "Laranja"],
    price: 299,
    oldPrice: 419,
    scheme: "gold",
    badge: null,
    ml: "75ml",
  },
  {
    id: 8,
    name: "Pêche Dorée",
    brand: "Maison Floral",
    gender: "feminino",
    desc: "Pêssego suculento com neroli, rosa branca e almíscar quente.",
    notes: ["Pêssego", "Neroli", "Rosa Branca"],
    price: 259,
    oldPrice: 359,
    scheme: "rose",
    badge: null,
    ml: "75ml",
  },
];

// ===== CART STATE =====
let cart = JSON.parse(localStorage.getItem('parfum_cart') || '[]');

function saveCart() {
  localStorage.setItem('parfum_cart', JSON.stringify(cart));
}

// ===== RENDER PRODUCTS =====
function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  const filtered = filter === 'all' ? products : products.filter(p => p.gender === filter);

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" id="card-${p.id}">
      <div class="product-img ${p.scheme ? 'scheme-' + p.scheme : ''}">
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
        <div class="product-bottle scheme-${p.scheme}">
          <div class="p-neck"></div>
          <div class="p-body">
            <span class="p-label-text">${p.name.split(' ')[0]}<br/>${p.ml}</span>
          </div>
          <div class="p-base"></div>
        </div>
      </div>
      <div class="product-info">
        <span class="product-tag">${p.brand} • ${p.gender === 'masculino' ? 'Masculino' : p.gender === 'feminino' ? 'Feminino' : 'Unissex'}</span>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-notes">
          ${p.notes.map(n => `<span class="note-tag">${n}</span>`).join('')}
        </div>
        <div class="product-footer">
          <div class="product-price">
            ${p.oldPrice ? `<span class="price-old">R$ ${p.oldPrice.toLocaleString('pt-BR')}</span>` : ''}
            <span class="price-new">R$ ${p.price.toLocaleString('pt-BR')}</span>
          </div>
          <button class="btn-add" onclick="addToCart(${p.id})">+ Adicionar</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== FILTER =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  });
});

// ===== CART OPERATIONS =====
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }

  saveCart();
  updateCartUI();
  openCart();

  // Animate button
  const btn = document.querySelector(`#card-${productId} .btn-add`);
  if (btn) {
    btn.textContent = '✓ Adicionado!';
    btn.style.background = 'rgba(96,192,112,.2)';
    btn.style.borderColor = '#60c070';
    btn.style.color = '#60c070';
    setTimeout(() => {
      btn.textContent = '+ Adicionar';
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.style.color = '';
    }, 1500);
  }
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(0, item.qty + delta);
  if (item.qty === 0) removeFromCart(productId);
  else { saveCart(); updateCartUI(); }
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const p = products.find(prod => prod.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function formatBRL(value) {
  return 'R$ ' + value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function updateCartUI() {
  const count = getCartCount();
  const total = getCartTotal();

  document.getElementById('cartCount').textContent = count;

  const itemsEl = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');
  const shippingEl = document.getElementById('cartShipping');

  if (cart.length === 0) {
    emptyEl.style.display = 'flex';
    footerEl.style.display = 'none';
  } else {
    emptyEl.style.display = 'none';
    footerEl.style.display = 'block';

    itemsEl.innerHTML = cart.map(item => {
      const p = products.find(prod => prod.id === item.id);
      if (!p) return '';
      return `
        <div class="cart-item">
          <div class="cart-item-img scheme-${p.scheme}">🧴</div>
          <div class="cart-item-info">
            <h4>${p.name}</h4>
            <span>${formatBRL(p.price * item.qty)}</span>
          </div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="changeQty(${p.id}, -1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${p.id}, 1)">+</button>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${p.id})" title="Remover">✕</button>
        </div>
      `;
    }).join('') + `<div id="cartEmpty" style="display:none"></div>`;
  }

  document.getElementById('cartTotal').textContent = formatBRL(total);

  const FREE_SHIPPING_THRESHOLD = 299;
  if (total >= FREE_SHIPPING_THRESHOLD) {
    shippingEl.textContent = '🎉 Frete grátis aplicado!';
    shippingEl.className = 'cart-shipping free';
  } else {
    const remaining = FREE_SHIPPING_THRESHOLD - total;
    shippingEl.textContent = `Falta ${formatBRL(remaining)} para frete grátis`;
    shippingEl.className = 'cart-shipping';
  }
}

// ===== CART OPEN/CLOSE =====
function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartSidebar').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartSidebar').classList.remove('open');
  document.body.style.overflow = '';
}

// ===== CHECKOUT =====
function openCheckout() {
  if (cart.length === 0) return;
  closeCart();
  renderOrderSummary();
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout(e) {
  if (e && e.target !== document.getElementById('modalOverlay')) return;
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeCheckoutBtn() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// Expose close for button onclick
window.closeCheckout = function(e) {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
};

function renderOrderSummary() {
  const total = getCartTotal();
  const FREE_SHIPPING = 299;
  const shipping = total >= FREE_SHIPPING ? 0 : 15;

  const summaryEl = document.getElementById('orderSummaryModal');
  summaryEl.innerHTML = `
    <div class="order-summary-title">Resumo do Pedido</div>
    ${cart.map(item => {
      const p = products.find(prod => prod.id === item.id);
      if (!p) return '';
      return `<div class="order-summary-item">
        <span>${p.name} × ${item.qty}</span>
        <span>${formatBRL(p.price * item.qty)}</span>
      </div>`;
    }).join('')}
    <div class="order-summary-item">
      <span>Frete</span>
      <span>${shipping === 0 ? 'Grátis 🎉' : formatBRL(shipping)}</span>
    </div>
    <div class="order-summary-item total">
      <span>Total a pagar na entrega</span>
      <span>${formatBRL(total + shipping)}</span>
    </div>
  `;
}

// ===== PAYMENT TOGGLE =====
document.addEventListener('change', e => {
  if (e.target.name === 'pagamento') {
    const trocoGroup = document.getElementById('trocoGroup');
    trocoGroup.style.display = e.target.value === 'dinheiro' ? 'flex' : 'none';
  }
});

// ===== ORDER SUBMIT =====
function submitOrder(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  const order = {
    id: 'PFE-' + Date.now().toString(36).toUpperCase(),
    timestamp: new Date().toISOString(),
    customer: {
      nome: data.get('nome'),
      telefone: data.get('telefone'),
      email: data.get('email'),
    },
    address: {
      rua: data.get('rua'),
      numero: data.get('numero'),
      complemento: data.get('complemento'),
      bairro: data.get('bairro'),
      cidade: data.get('cidade'),
      estado: data.get('estado'),
      cep: data.get('cep'),
    },
    payment: data.get('pagamento'),
    troco: data.get('troco') || null,
    obs: data.get('obs'),
    items: cart.map(item => {
      const p = products.find(prod => prod.id === item.id);
      return { name: p.name, qty: item.qty, price: p.price, subtotal: p.price * item.qty };
    }),
    total: getCartTotal(),
  };

  // Save order to localStorage (simulated backend)
  const orders = JSON.parse(localStorage.getItem('parfum_orders') || '[]');
  orders.push(order);
  localStorage.setItem('parfum_orders', JSON.stringify(orders));

  // Clear cart
  cart = [];
  saveCart();
  updateCartUI();

  // Close checkout modal
  document.getElementById('modalOverlay').classList.remove('open');

  // Show success
  document.getElementById('successOrderId').textContent = `Pedido: ${order.id}`;
  document.getElementById('successOverlay').style.display = 'flex';
  document.body.style.overflow = 'hidden';

  form.reset();
}

function closeSuccess() {
  document.getElementById('successOverlay').style.display = 'none';
  document.body.style.overflow = '';
}

// ===== STICKY HEADER =====
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.style.boxShadow = window.scrollY > 40 ? '0 4px 32px rgba(0,0,0,.5)' : '';
});

// ===== INIT =====
renderProducts();
updateCartUI();
