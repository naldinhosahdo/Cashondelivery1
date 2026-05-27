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
    cost: 95, price: 189, oldPrice: 269,
    image: null,
    scheme: "gold", bottle: "square", badge: "🔥 Viral", ml: "100ml",
  },
  {
    id: 2,
    name: "Asad",
    brand: "Lattafa",
    category: "arabe",
    gender: "masculino",
    desc: "Oud defumado, couro, cravo e patchouli — intenso e marcante. Referência do Sauvage Elixir a um preço justo.",
    notes: ["Oud", "Couro", "Patchouli"],
    cost: 90, price: 179, oldPrice: 249,
    image: null,
    scheme: "black", bottle: "tall", badge: "Mais Vendido", ml: "100ml",
  },
  {
    id: 3,
    name: "Club de Nuit Intense",
    brand: "Armaf",
    category: "arabe",
    gender: "masculino",
    desc: "O clone mais famoso do mundo. Qualidade premium inspirado no Creed Aventus — notas frescas de abacaxi, bétula e âmbar.",
    notes: ["Abacaxi", "Bétula", "Almíscar"],
    cost: 110, price: 229, oldPrice: 349,
    image: null,
    scheme: "navy", bottle: "classic", badge: "🏆 Top #1", ml: "105ml",
  },
  {
    id: 4,
    name: "Amber Oud Gold Edition",
    brand: "Al Haramain",
    category: "arabe",
    gender: "unissex",
    desc: "Oud nobre com âmbar dourado, rosa árabe e sândalo. Referência absoluta na perfumaria do Oriente Médio.",
    notes: ["Oud", "Âmbar", "Rosa Árabe"],
    cost: 105, price: 209, oldPrice: 299,
    image: null,
    scheme: "gold", bottle: "ornate", badge: null, ml: "60ml",
  },
  {
    id: 5,
    name: "Badee Al Oud Amethyst",
    brand: "Lattafa",
    category: "arabe",
    gender: "feminino",
    desc: "Feminino icônico com rosa turca, framboesa e oud suave. Um dos perfumes árabes mais vendidos para mulheres.",
    notes: ["Rosa", "Framboesa", "Oud"],
    cost: 85, price: 169, oldPrice: 239,
    image: null,
    scheme: "purple", bottle: "diamond", badge: "Favorito Fem.", ml: "100ml",
  },
  {
    id: 6,
    name: "La Yuqawam Homme",
    brand: "Rasasi",
    category: "arabe",
    gender: "masculino",
    desc: "Elegante e versátil — bergamota italiana, lavanda e oud cremoso. Perfeito para trabalho e eventos sociais.",
    notes: ["Bergamota", "Lavanda", "Oud Cremoso"],
    cost: 100, price: 199, oldPrice: 289,
    image: null,
    scheme: "emerald", bottle: "tall", badge: null, ml: "75ml",
  },
  {
    id: 7,
    name: "Shamoos",
    brand: "Lattafa",
    category: "arabe",
    gender: "unissex",
    desc: "Floral oriental com rosa, açafrão e âmbar quente. Alta projeção e fixação que dura o dia inteiro.",
    notes: ["Açafrão", "Rosa", "Âmbar"],
    cost: 90, price: 179, oldPrice: 249,
    image: null,
    scheme: "rose", bottle: "ornate", badge: "Alto Fixador", ml: "100ml",
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
    cost: 55, price: 199, oldPrice: null,
    image: null,
    scheme: "purple", bottle: "classic", badge: "⚡ Ali Top", ml: "100ml",
  },
  {
    id: 9,
    name: "Club de Nuit Sillage",
    brand: "Armaf",
    category: "aliexpress",
    gender: "masculino",
    desc: "Versão ainda mais intensa e amadeirada do Club de Nuit — oud, patchouli e almíscar com projeção poderosa.",
    notes: ["Oud", "Patchouli", "Almíscar"],
    cost: 75, price: 239, oldPrice: null,
    image: null,
    scheme: "black", bottle: "classic", badge: "⚡ Ali Top", ml: "100ml",
  },
  {
    id: 10,
    name: "Galloway",
    brand: "Fragrance World",
    category: "aliexpress",
    gender: "masculino",
    desc: "Frescor aquático com bergamota, gengibre e cedro — inspirado no Bleu de Chanel a custo de importação zero.",
    notes: ["Bergamota", "Cedro", "Gengibre"],
    cost: 50, price: 189, oldPrice: null,
    image: null,
    scheme: "navy", bottle: "tall", badge: "⚡ Ali Top", ml: "100ml",
  },
  {
    id: 11,
    name: "Shaghaf Oud Aswad",
    brand: "Swiss Arabian",
    category: "aliexpress",
    gender: "unissex",
    desc: "Oud negro intenso com âmbar, rosa e especiarias orientais. Qualidade árabe real a preço acessível.",
    notes: ["Oud Negro", "Âmbar", "Especiarias"],
    cost: 70, price: 219, oldPrice: 319,
    image: null,
    scheme: "black", bottle: "ornate", badge: "Margem Top", ml: "75ml",
  },
  {
    id: 12,
    name: "Signature Rose Gold",
    brand: "Armaf",
    category: "aliexpress",
    gender: "feminino",
    desc: "Floral frutal irresistível — pêssego, rosa e almíscar quente. Fixação longa e projeção suave, ideal para uso diário.",
    notes: ["Pêssego", "Rosa", "Almíscar"],
    cost: 60, price: 199, oldPrice: null,
    image: null,
    scheme: "rose", bottle: "diamond", badge: "⚡ Ali Top", ml: "100ml",
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
    cost: 95, price: 149, oldPrice: 199,
    image: null,
    scheme: "gold", bottle: "classic", badge: "🇧🇷 BR #1 Masc.", ml: "100ml",
  },
  {
    id: 14,
    name: "Floratta Rose Gold",
    brand: "O Boticário",
    category: "nacional",
    gender: "feminino",
    desc: "Rosa fresca com pêssego e almíscar — o preferido das brasileiras. Leve, feminino e com ótima durabilidade.",
    notes: ["Rosa", "Pêssego", "Almíscar"],
    cost: 85, price: 139, oldPrice: 189,
    image: null,
    scheme: "rose", bottle: "diamond", badge: "🇧🇷 BR #1 Fem.", ml: "75ml",
  },
  {
    id: 15,
    name: "Essencial Exclusivo",
    brand: "Natura",
    category: "nacional",
    gender: "unissex",
    desc: "Sofisticação brasileira — madeiras raras, patchouli e baunilha com fixação excepcional. Clássico que nunca sai de moda.",
    notes: ["Madeira", "Patchouli", "Baunilha"],
    cost: 105, price: 159, oldPrice: 219,
    image: null,
    scheme: "emerald", bottle: "tall", badge: null, ml: "100ml",
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

// Paleta por scheme: [líquido topo, líquido base, vidro, tampa topo, tampa base, label]
const palette = {
  gold:    { liq1: '#f4d678', liq2: '#a8771f', glass: '#fff4d4', cap1: '#3b2a14', cap2: '#1a1108', label: '#f8e9c4' },
  rose:    { liq1: '#f8b8c4', liq2: '#a83a52', glass: '#ffe4ea', cap1: '#3a1820', cap2: '#1a0b10', label: '#fde6ea' },
  navy:    { liq1: '#7da6e8', liq2: '#1d3b78', glass: '#dfeaff', cap1: '#0d1a35', cap2: '#050b1c', label: '#dde9ff' },
  emerald: { liq1: '#86d4a8', liq2: '#1a6a48', glass: '#dff5e8', cap1: '#0c2a1c', cap2: '#06180f', label: '#dff5e8' },
  purple:  { liq1: '#c89cea', liq2: '#552a8c', glass: '#ecdcff', cap1: '#1f0e36', cap2: '#0e0420', label: '#ecdcff' },
  black:   { liq1: '#5a5a5a', liq2: '#0a0a0a', glass: '#bfbfbf', cap1: '#1a1a1a', cap2: '#000000', label: '#d0d0d0' },
};

// Templates de frasco SVG — cada categoria de bottle tem um shape único
function bottleSVG(p) {
  const c = palette[p.scheme] || palette.gold;
  const id = `g${p.id}`;
  const liq = `<linearGradient id="${id}-liq" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${c.liq1}" stop-opacity=".95"/>
      <stop offset="100%" stop-color="${c.liq2}" stop-opacity=".98"/>
    </linearGradient>
    <linearGradient id="${id}-glass" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c.glass}" stop-opacity=".22"/>
      <stop offset="55%" stop-color="${c.glass}" stop-opacity="0"/>
      <stop offset="100%" stop-color="${c.glass}" stop-opacity=".10"/>
    </linearGradient>
    <linearGradient id="${id}-cap" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${c.cap1}"/>
      <stop offset="100%" stop-color="${c.cap2}"/>
    </linearGradient>
    <linearGradient id="${id}-capH" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#c9a96e"/>
      <stop offset="100%" stop-color="#7a5a30"/>
    </linearGradient>
    <radialGradient id="${id}-shine" cx="30%" cy="35%" r="40%">
      <stop offset="0%" stop-color="#fff" stop-opacity=".55"/>
      <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>`;

  // Sombras
  const shadow = `<ellipse cx="100" cy="245" rx="60" ry="6" fill="#000" opacity=".35"/>`;

  // Texto da etiqueta (nome curto + marca)
  const labelText = (txt, x, y, size=8, opacity=.9) =>
    `<text x="${x}" y="${y}" text-anchor="middle" fill="${c.label}" opacity="${opacity}"
       font-family="Playfair Display, serif" font-size="${size}" font-weight="600" letter-spacing="1">${txt}</text>`;

  let body;

  if (p.bottle === 'tall') {
    // Frasco alto e cilíndrico (Armaf, Asad)
    body = `
      <rect x="68" y="48" width="64" height="12" rx="2" fill="url(#${id}-capH)"/>
      <rect x="74" y="20" width="52" height="32" rx="3" fill="url(#${id}-cap)"/>
      <rect x="74" y="22" width="52" height="3" fill="#fff" opacity=".15"/>
      <path d="M50 65 Q50 60 56 60 L144 60 Q150 60 150 65 L150 235 Q150 245 140 245 L60 245 Q50 245 50 235 Z"
            fill="url(#${id}-liq)"/>
      <path d="M50 65 Q50 60 56 60 L144 60 Q150 60 150 65 L150 235 Q150 245 140 245 L60 245 Q50 245 50 235 Z"
            fill="url(#${id}-glass)"/>
      <ellipse cx="68" cy="100" rx="6" ry="40" fill="#fff" opacity=".25"/>
      <rect x="70" y="135" width="60" height="56" rx="2" fill="#000" opacity=".18"/>
      ${labelText(p.brand.toUpperCase(), 100, 153, 7, .65)}
      ${labelText(p.name.split(' ')[0], 100, 170, 11, .95)}
      ${labelText(p.ml, 100, 184, 7, .7)}
    `;
  } else if (p.bottle === 'square') {
    // Frasco quadrado clássico (Khamrah, gourmand)
    body = `
      <rect x="78" y="45" width="44" height="15" rx="3" fill="url(#${id}-capH)"/>
      <rect x="82" y="18" width="36" height="30" rx="4" fill="url(#${id}-cap)"/>
      <ellipse cx="100" cy="22" rx="14" ry="3" fill="#fff" opacity=".25"/>
      <path d="M45 70 L155 70 L155 240 Q155 248 147 248 L53 248 Q45 248 45 240 Z" fill="url(#${id}-liq)"/>
      <path d="M45 70 L155 70 L155 240 Q155 248 147 248 L53 248 Q45 248 45 240 Z" fill="url(#${id}-glass)"/>
      <rect x="58" y="80" width="8" height="50" fill="#fff" opacity=".25" rx="2"/>
      <rect x="62" y="130" width="76" height="66" rx="3" fill="#000" opacity=".22"/>
      ${labelText(p.brand.toUpperCase(), 100, 150, 8, .7)}
      ${labelText(p.name.split(' ')[0], 100, 170, 13, .95)}
      ${labelText('· ' + p.ml + ' ·', 100, 188, 7, .7)}
    `;
  } else if (p.bottle === 'diamond') {
    // Frasco diamante/ornado (feminino, Badee Al Oud)
    body = `
      <rect x="80" y="48" width="40" height="14" rx="2" fill="url(#${id}-capH)"/>
      <path d="M76 22 L124 22 L128 48 L72 48 Z" fill="url(#${id}-cap)"/>
      <circle cx="100" cy="32" r="3" fill="#c9a96e"/>
      <path d="M55 72 L145 72 L160 130 L150 240 Q150 248 142 248 L58 248 Q50 248 50 240 L40 130 Z"
            fill="url(#${id}-liq)"/>
      <path d="M55 72 L145 72 L160 130 L150 240 Q150 248 142 248 L58 248 Q50 248 50 240 L40 130 Z"
            fill="url(#${id}-glass)"/>
      <path d="M60 90 L70 90 L65 140 Z" fill="#fff" opacity=".22"/>
      <ellipse cx="100" cy="170" rx="44" ry="38" fill="#000" opacity=".22"/>
      ${labelText(p.brand.toUpperCase(), 100, 155, 7, .7)}
      ${labelText(p.name.split(' ')[0], 100, 172, 12, .95)}
      <line x1="80" y1="180" x2="120" y2="180" stroke="${c.label}" stroke-width=".7" opacity=".55"/>
      ${labelText(p.ml, 100, 195, 7, .75)}
    `;
  } else if (p.bottle === 'ornate') {
    // Frasco árabe ornado (Al Haramain, Shamoos)
    body = `
      <path d="M85 35 Q100 25 115 35 L115 55 L85 55 Z" fill="url(#${id}-capH)"/>
      <ellipse cx="100" cy="35" rx="15" ry="5" fill="#c9a96e"/>
      <rect x="78" y="55" width="44" height="14" rx="2" fill="url(#${id}-cap)"/>
      <path d="M62 75 Q62 70 67 70 L133 70 Q138 70 138 75 L155 130 Q155 230 130 245 L70 245 Q45 230 45 130 Z"
            fill="url(#${id}-liq)"/>
      <path d="M62 75 Q62 70 67 70 L133 70 Q138 70 138 75 L155 130 Q155 230 130 245 L70 245 Q45 230 45 130 Z"
            fill="url(#${id}-glass)"/>
      <path d="M55 95 Q52 130 60 170" stroke="#fff" stroke-width="3" fill="none" opacity=".3"/>
      <!-- Detalhes ornados árabes -->
      <circle cx="100" cy="200" r="2" fill="#c9a96e" opacity=".7"/>
      <circle cx="90" cy="200" r="1.4" fill="#c9a96e" opacity=".5"/>
      <circle cx="110" cy="200" r="1.4" fill="#c9a96e" opacity=".5"/>
      <ellipse cx="100" cy="155" rx="42" ry="26" fill="#000" opacity=".22"/>
      ${labelText(p.brand.toUpperCase(), 100, 145, 7, .75)}
      ${labelText(p.name.split(' ')[0], 100, 162, 11, .95)}
      <path d="M85 168 L115 168" stroke="${c.label}" stroke-width=".6" opacity=".5"/>
      ${labelText('۞ ' + p.ml + ' ۞', 100, 180, 7, .7)}
    `;
  } else {
    // 'classic' — Bleu de Chanel style
    body = `
      <rect x="76" y="50" width="48" height="14" rx="2" fill="url(#${id}-capH)"/>
      <rect x="80" y="20" width="40" height="32" rx="3" fill="url(#${id}-cap)"/>
      <rect x="80" y="22" width="40" height="3" fill="#fff" opacity=".18"/>
      <rect x="55" y="68" width="90" height="180" rx="8" fill="url(#${id}-liq)"/>
      <rect x="55" y="68" width="90" height="180" rx="8" fill="url(#${id}-glass)"/>
      <ellipse cx="68" cy="110" rx="5" ry="42" fill="#fff" opacity=".28"/>
      <rect x="62" y="135" width="76" height="58" rx="2" fill="#000" opacity=".2"/>
      ${labelText(p.brand.toUpperCase(), 100, 152, 7, .7)}
      ${labelText(p.name.split(' ')[0], 100, 170, 12, .95)}
      <line x1="78" y1="178" x2="122" y2="178" stroke="${c.label}" stroke-width=".6" opacity=".5"/>
      ${labelText(p.ml + ' · EDP', 100, 188, 7, .7)}
    `;
  }

  return `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" class="bottle-svg">
    <defs>${liq}</defs>
    ${shadow}
    ${body}
    <ellipse cx="80" cy="90" rx="22" ry="30" fill="url(#${id}-shine)"/>
  </svg>`;
}

function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  const filtered = filter === 'all'
    ? products
    : products.filter(p => p.category === filter || p.gender === filter);

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:40px;grid-column:1/-1">Nenhum produto nesta categoria.</p>';
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
    const visual = p.image
      ? `<img src="${p.image}" alt="${p.name}" loading="lazy" class="product-photo"/>`
      : bottleSVG(p);
    return `
    <div class="product-card reveal" id="card-${p.id}" data-category="${p.category}" data-scheme="${p.scheme}">
      <div class="product-img">
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
        ${discount > 0 ? `<div class="product-discount">-${discount}%</div>` : ''}
        <div class="product-visual">${visual}</div>
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
            <span class="price-info">ou 3x de R$ ${(p.price/3).toFixed(2).replace('.', ',')} sem juros</span>
          </div>
          <button class="btn-add" onclick="addToCart(${p.id})" aria-label="Adicionar ${p.name} ao carrinho">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;
  }).join('');
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
      const mini = p.image
        ? `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:contain"/>`
        : bottleSVG(p);
      return `
        <div class="cart-item">
          <div class="cart-item-img">${mini}</div>
          <div class="cart-item-info">
            <h4>${p.name}</h4>
            <span>${formatBRL(p.price * item.qty)}</span>
          </div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="changeQty(${p.id}, -1)" aria-label="Diminuir">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${p.id}, 1)" aria-label="Aumentar">+</button>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${p.id})" title="Remover" aria-label="Remover">✕</button>
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
  document.getElementById('header').classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// ===== REVEAL ON SCROLL =====
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

function applyReveal() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}

// ===== ESCAPE FECHA MODAIS =====
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeCart();
    closeCheckout();
  }
});

// ===== INIT =====
renderProducts();
updateCartUI();
applyReveal();

// Re-aplica reveal sempre que filtros mudarem (novos cards entram no DOM)
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => setTimeout(applyReveal, 50));
});
