'use strict';

// ===== PRODUCTS DATA =====
// Categorias: "arabe" | "aliexpress" | "nacional"
const products = [

  // ── ÁRABES EM ALTA ───────────────────────────────────────────────────────
  {
    id: 1,
    name: "Khamrah",
    brand: "Lattafa",
    category: "arabe",
    gender: "unissex",
    desc: "O mais viral da Lattafa — gourmand oriental de caramelo, baunilha e oud. Referência mundial do Baccarat Rouge 540.",
    notes: ["Caramelo", "Baunilha", "Oud"],
    price: 189,
    oldPrice: 269,
    scheme: "gold",
    badge: "🔥 Viral",
    ml: "100ml",
  },
  {
    id: 2,
    name: "Asad",
    brand: "Lattafa",
    category: "arabe",
    gender: "masculino",
    desc: "Oud defumado, couro, cravo e patchouli — intenso e marcante. Referência do Sauvage Elixir a um preço justo.",
    notes: ["Oud", "Couro", "Patchouli"],
    price: 179,
    oldPrice: 249,
    scheme: "black",
    badge: "Mais Vendido",
    ml: "100ml",
  },
  {
    id: 3,
    name: "Club de Nuit Intense",
    brand: "Armaf",
    category: "arabe",
    gender: "masculino",
    desc: "O clone mais famoso do mundo. Qualidade premium inspirado no Creed Aventus — notas frescas de abacaxi, bétula e âmbar.",
    notes: ["Abacaxi", "Bétula", "Almíscar"],
    price: 229,
    oldPrice: 349,
    scheme: "navy",
    badge: "🏆 Top #1",
    ml: "105ml",
  },
  {
    id: 4,
    name: "Amber Oud Gold Edition",
    brand: "Al Haramain",
    category: "arabe",
    gender: "unissex",
    desc: "Oud nobre com âmbar dourado, rosa árabe e sândalo. Referência absoluta na perfumaria do Oriente Médio.",
    notes: ["Oud", "Âmbar", "Rosa Árabe"],
    price: 209,
    oldPrice: 299,
    scheme: "gold",
    badge: null,
    ml: "60ml",
  },
  {
    id: 5,
    name: "Badee Al Oud Amethyst",
    brand: "Lattafa",
    category: "arabe",
    gender: "feminino",
    desc: "Feminino icônico com rosa turca, framboesa e oud suave. Um dos perfumes árabes mais vendidos para mulheres.",
    notes: ["Rosa", "Framboesa", "Oud"],
    price: 169,
    oldPrice: 239,
    scheme: "purple",
    badge: "Favorito Fem.",
    ml: "100ml",
  },
  {
    id: 6,
    name: "La Yuqawam Homme",
    brand: "Rasasi",
    category: "arabe",
    gender: "masculino",
    desc: "Elegante e versátil — bergamota italiana, lavanda e oud cremoso. Perfeito para trabalho e eventos sociais.",
    notes: ["Bergamota", "Lavanda", "Oud Cremoso"],
    price: 199,
    oldPrice: 289,
    scheme: "emerald",
    badge: null,
    ml: "75ml",
  },
  {
    id: 7,
    name: "Shamoos",
    brand: "Lattafa",
    category: "arabe",
    gender: "unissex",
    desc: "Floral oriental com rosa, açafrão e âmbar quente. Alta projeção e fixação que dura o dia inteiro.",
    notes: ["Açafrão", "Rosa", "Âmbar"],
    price: 179,
    oldPrice: 249,
    scheme: "rose",
    badge: "Alto Fixador",
    ml: "100ml",
  },

  // ── ALIEXPRESS — MARGEM ALTA ≤ R$250 ────────────────────────────────────
  {
    id: 8,
    name: "Pendora #78",
    brand: "Paris Corner",
    category: "aliexpress",
    gender: "feminino",
    desc: "Inspirado no Black Opium YSL — café noir, baunilha negra e jasmim. Entregue sem imposto de importação.",
    notes: ["Café", "Baunilha Negra", "Jasmim"],
    price: 199,
    oldPrice: null,
    scheme: "purple",
    badge: "⚡ Ali Top",
    ml: "100ml",
  },
  {
    id: 9,
    name: "Club de Nuit Sillage",
    brand: "Armaf",
    category: "aliexpress",
    gender: "masculino",
    desc: "Versão ainda mais intensa e amadeirada do Club de Nuit — oud, patchouli e almíscar com projeção poderosa.",
    notes: ["Oud", "Patchouli", "Almíscar"],
    price: 239,
    oldPrice: null,
    scheme: "black",
    badge: "⚡ Ali Top",
    ml: "100ml",
  },
  {
    id: 10,
    name: "Galloway",
    brand: "Fragrance World",
    category: "aliexpress",
    gender: "masculino",
    desc: "Frescor aquático com bergamota, gengibre e cedro — inspirado no Bleu de Chanel a custo de importação zero.",
    notes: ["Bergamota", "Cedro", "Gengibre"],
    price: 189,
    oldPrice: null,
    scheme: "navy",
    badge: "⚡ Ali Top",
    ml: "100ml",
  },
  {
    id: 11,
    name: "Shaghaf Oud Aswad",
    brand: "Swiss Arabian",
    category: "aliexpress",
    gender: "unissex",
    desc: "Oud negro intenso com âmbar, rosa e especiarias orientais. Qualidade árabe real a preço acessível.",
    notes: ["Oud Negro", "Âmbar", "Especiarias"],
    price: 219,
    oldPrice: 319,
    scheme: "black",
    badge: "Margem Top",
    ml: "75ml",
  },
  {
    id: 12,
    name: "Signature Rose Gold",
    brand: "Armaf",
    category: "aliexpress",
    gender: "feminino",
    desc: "Floral frutal irresistível — pêssego, rosa e almíscar quente. Fixação longa e projeção suave, ideal para uso diário.",
    notes: ["Pêssego", "Rosa", "Almíscar"],
    price: 199,
    oldPrice: null,
    scheme: "rose",
    badge: "⚡ Ali Top",
    ml: "100ml",
  },

  // ── NACIONAIS — MAIS VENDIDOS DO BRASIL ──────────────────────────────────
  {
    id: 13,
    name: "Malbec Gold",
    brand: "O Boticário",
    category: "nacional",
    gender: "masculino",
    desc: "O perfume masculino mais vendido do Brasil há mais de uma década — amadeirado intenso e duradouro.",
    notes: ["Bergamota", "Vetiver", "Cedro"],
    price: 149,
    oldPrice: 199,
    scheme: "gold",
    badge: "🇧🇷 BR #1 Masc.",
    ml: "100ml",
  },
  {
    id: 14,
    name: "Floratta Rose Gold",
    brand: "O Boticário",
    category: "nacional",
    gender: "feminino",
    desc: "Rosa fresca com pêssego e almíscar — o preferido das brasileiras. Leve, feminino e com ótima durabilidade.",
    notes: ["Rosa", "Pêssego", "Almíscar"],
    price: 139,
    oldPrice: 189,
    scheme: "rose",
    badge: "🇧🇷 BR #1 Fem.",
    ml: "75ml",
  },
  {
    id: 15,
    name: "Essencial Exclusivo",
    brand: "Natura",
    category: "nacional",
    gender: "unissex",
    desc: "Sofisticação brasileira — madeiras raras, patchouli e baunilha com fixação excepcional. Clássico que nunca sai de moda.",
    notes: ["Madeira", "Patchouli", "Baunilha"],
    price: 159,
    oldPrice: 219,
    scheme: "emerald",
    badge: null,
    ml: "100ml",
  },
];

// ===== CART STATE =====
let cart = JSON.parse(localStorage.getItem('parfum_cart') || '[]');

function saveCart() {
  localStorage.setItem('parfum_cart', JSON.stringify(cart));
}

// ===== RENDER PRODUCTS =====
const categoryLabel = { arabe: '🔥 Árabe', aliexpress: '⚡ AliExpress', nacional: '🇧🇷 Nacional' };
const genderLabel   = { masculino: 'Masculino', feminino: 'Feminino', unissex: 'Unissex' };

function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  const filtered = filter === 'all'
    ? products
    : products.filter(p => p.category === filter || p.gender === filter);

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:40px;grid-column:1/-1">Nenhum produto nesta categoria.</p>';
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" id="card-${p.id}" data-category="${p.category}">
      <div class="product-img scheme-${p.scheme}">
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
        <span class="product-tag">${p.brand} • ${categoryLabel[p.category] || ''} • ${genderLabel[p.gender] || p.gender}</span>
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
