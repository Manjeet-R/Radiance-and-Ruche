(function () {
'use strict';

// ============================================================
//  DATA STORE
// ============================================================
const defaultProducts = [
  // ── Beauty ──
  {
    id: 1,
    name: 'BLUE HEAVEN Festive Makeup Kit Fair Tone Pac Of 8',
    price: 842,
    originalPrice: 1280,
    discount: 34,
    category: 'beauty',
    store: 'Flipkart',
    storeIcon: 'flipkart',
    rating: 4.3,
    reviews: 486,
    image: 'https://rukminim2.flixcart.com/image/1600/1600/xif0q/makeup-kit/j/s/9/festive-makeup-kit-fair-tone-pac-of-8-blue-heaven-original-imahgzvjvg5f8hyu.jpeg?q=90',
    images: [
      'https://rukminim2.flixcart.com/image/1600/1600/xif0q/makeup-kit/j/s/9/festive-makeup-kit-fair-tone-pac-of-8-blue-heaven-original-imahgzvjvg5f8hyu.jpeg?q=90',
      'https://rukminim2.flixcart.com/image/800/800/xif0q/makeup-kit/2/o/r/festive-makeup-kit-fair-tone-pac-of-8-blue-heaven-original-imahgzvjaps6g946.jpeg?q=90',
      'https://rukminim2.flixcart.com/image/800/800/xif0q/makeup-kit/v/9/i/festive-makeup-kit-fair-tone-pac-of-8-blue-heaven-original-imahgzvj9ffueqwz.jpeg?q=90',
      'https://rukminim2.flixcart.com/image/800/800/xif0q/makeup-kit/e/h/y/festive-makeup-kit-fair-tone-pac-of-8-blue-heaven-original-imahgzvjh5h9vpzv.jpeg?q=90',
      'https://rukminim2.flixcart.com/image/800/800/xif0q/makeup-kit/t/i/t/festive-makeup-kit-fair-tone-pac-of-8-blue-heaven-original-imahgzvjgqzw2bhx.jpeg?q=90'
    ],
    description: 'Complete festive makeup kit for fair skin tone — pack of 8 essential products by Blue Heaven. Perfect all-in-one kit for parties, festivals and special occasions.',
    affiliateLink: 'https://fktr.in/I9LVU25',
    colors: ['Fair Tone'],
    sizes: ['Pack of 8'],
    material: 'Makeup',
    brand: 'Blue Heaven',
    stock: 15,
    badge: 'bestseller',
    featured: true,
    trending: true,
    enabled: true
  },
  {
    id: 2,
    name: 'MARS Candylicious Coloured Lip Gloss Hydrating High Shine Non-Sticky (4 ml, 01-CANDY CRUSH)',
    price: 237,
    originalPrice: 249,
    discount: 5,
    category: 'beauty',
    store: 'Flipkart',
    storeIcon: 'flipkart',
    rating: 4.2,
    reviews: 312,
    image: 'https://rukminim2.flixcart.com/image/1475/1475/xif0q/lip-gloss/r/7/e/-original-imahhazz2bmewd5g.jpeg?q=90',
    images: [
      'https://rukminim2.flixcart.com/image/1475/1475/xif0q/lip-gloss/r/7/e/-original-imahhazz2bmewd5g.jpeg?q=90',
      'https://rukminim2.flixcart.com/image/1475/1475/xif0q/lip-gloss/x/x/n/4-candylicious-coloured-lip-gloss-hydrating-high-shine-non-original-imahgj43ezbj5yya.jpeg?q=90',
      'https://rukminim2.flixcart.com/image/1475/1475/xif0q/lip-gloss/e/b/x/4-candylicious-coloured-lip-gloss-hydrating-high-shine-non-original-imahgj43nxzbgcpn.jpeg?q=90',
      'https://rukminim2.flixcart.com/image/1475/1475/xif0q/lip-gloss/y/n/3/4-candylicious-coloured-lip-gloss-hydrating-high-shine-non-original-imahgj43kfburkhb.jpeg?q=90',
      'https://rukminim2.flixcart.com/image/1475/1475/xif0q/lip-gloss/p/b/n/4-candylicious-coloured-lip-gloss-hydrating-high-shine-non-original-imahgj43zhrhhzft.jpeg?q=90',
      'https://rukminim2.flixcart.com/image/1475/1475/xif0q/lip-gloss/i/9/q/-original-imahhazzgsrfearw.jpeg?q=90'
    ],
    description: 'MARS Candylicious Coloured Lip Gloss in shade 01-Candy Crush. Hydrating formula with high shine, non-sticky finish. 4ml travel-friendly size — perfect for daily glam.',
    affiliateLink: 'https://fktr.in/dMrrEq9',
    colors: ['01-Candy Crush'],
    sizes: ['4 ml'],
    material: 'Lip Gloss',
    brand: 'MARS',
    stock: 28,
    badge: 'new',
    featured: true,
    trending: true,
    enabled: true
  },
];

const categories = [
  { name:'Dresses', icon:'👗', slug:'dresses' }, { name:'Tops', icon:'👚', slug:'tops' },
  { name:'Sarees', icon:'🥻', slug:'sarees' }, { name:'Ethnic Wear', icon:'✨', slug:'ethnic-wear' },
  { name:'Western Wear', icon:'👖', slug:'western-wear' }, { name:'Footwear', icon:'👠', slug:'footwear' },
  { name:'Handbags', icon:'👜', slug:'handbags' }, { name:'Jewelry', icon:'💍', slug:'jewelry' },
  { name:'Beauty', icon:'💄', slug:'beauty' }, { name:'Skincare', icon:'🧴', slug:'skincare' },
  { name:'Accessories', icon:'🕶️', slug:'accessories' },
];

const collections = [
  { name:'Summer Collection', image:'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=600&q=80', desc:'Light & breezy styles', slug:'dresses' },
  { name:'Wedding Collection', image:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80', desc:'Bridal & guest wear', slug:'sarees' },
  { name:'Party Wear', image:'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80', desc:'Stand out looks', slug:'ethnic-wear' },
  { name:'Office Wear', image:'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80', desc:'Professional chic', slug:'dresses' },
];

// Live activity names & actions for social proof
const liveNames = ['Anjali','Priya','Sneha','Meera','Kavya','Riya','Divya','Nisha','Pooja','Shruti','Tara','Simran'];
const liveActions = ['just bought this','saved to wishlist','is viewing now','added to cart','just purchased'];

let products = JSON.parse(localStorage.getItem('rr_products')) || JSON.parse(JSON.stringify(defaultProducts));

// Force reset whenever the stored products don't match the current defaults
const _storedVersion = localStorage.getItem('rr_products_v');
if (_storedVersion !== '2') {
  products = JSON.parse(JSON.stringify(defaultProducts));
  localStorage.setItem('rr_products', JSON.stringify(products));
  localStorage.setItem('rr_products_v', '2');
}
let wishlist = JSON.parse(localStorage.getItem('rr_wishlist') || '[]');
let recentlyViewed = JSON.parse(localStorage.getItem('rr_recently') || '[]');
let currentUser = JSON.parse(localStorage.getItem('rr_user') || 'null');
let clickCounts = JSON.parse(localStorage.getItem('rr_clicks') || '{}');
let currentFilter = '';
let visibleCount = 2;
let stickyHidden = false;
let exitShown = false;

// ============================================================
//  UTILITIES
// ============================================================
function saveWishlist() { localStorage.setItem('rr_wishlist', JSON.stringify(wishlist)); }
function saveRecent() { localStorage.setItem('rr_recently', JSON.stringify(recentlyViewed.slice(0,20))); }
function saveClicks() { localStorage.setItem('rr_clicks', JSON.stringify(clickCounts)); }
function formatPrice(p) { return '₹' + p.toLocaleString('en-IN'); }
function getSavings(p) { return formatPrice(p.originalPrice - p.price); }

function showToast(msg, type = 'success') {
  const c = document.getElementById('toastContainer');
  const t = document.createElement('div');
  t.className = 'toast ' + type;
  t.innerHTML = msg;
  c.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity .3s'; setTimeout(() => t.remove(), 300); }, 3000);
}

function getAffiliateUrl(product) {
  clickCounts[product.id] = (clickCounts[product.id] || 0) + 1;
  saveClicks();
  // Sync to admin panel storage too
  const clickEvents = JSON.parse(localStorage.getItem('rr_click_events') || '[]');
  clickEvents.push({ productId: product.id, timestamp: Date.now(), store: product.store });
  localStorage.setItem('rr_click_events', JSON.stringify(clickEvents));
  return product.affiliateLink;
}

function starsHtml(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = '';
  for (let i = 0; i < full; i++) s += '<i class="fas fa-star"></i>';
  if (half) s += '<i class="fas fa-star-half-alt"></i>';
  for (let i = full + (half?1:0); i < 5; i++) s += '<i class="far fa-star"></i>';
  return s;
}

// ============================================================
//  RENDER CATEGORIES
// ============================================================
function renderCategories() {
  const grid = document.getElementById('categoryGrid');
  grid.innerHTML = categories.map(c => `
    <div class="category-card" onclick="window.filterByCategory('${c.slug}')" role="button" tabindex="0">
      <span class="cat-icon">${c.icon}</span>
      <span>${c.name}</span>
    </div>`).join('');
}

// ============================================================
//  PRODUCT CARD
// ============================================================
function renderProductCard(p) {
  const isLiked = wishlist.includes(p.id);
  const saves   = getSavings(p);
  const lowStock = p.stock && p.stock <= 5;

  // Badge
  let badgeHtml = '';
  if      (p.badge === 'bestseller') badgeHtml = '<span class="pc-badge pc-badge--best">🏆 Bestseller</span>';
  else if (p.badge === 'hot')        badgeHtml = '<span class="pc-badge pc-badge--hot">🔥 Hot Deal</span>';
  else if (p.badge === 'new')        badgeHtml = '<span class="pc-badge pc-badge--new">✨ New</span>';
  else                               badgeHtml = `<span class="pc-badge pc-badge--disc">-${p.discount}%</span>`;

  // Store logo icon
  const storeIcons = { amazon:'fab fa-amazon', flipkart:'fas fa-shopping-cart', myntra:'fas fa-tshirt', nykaa:'fas fa-star', ajio:'fas fa-gem' };
  const storeIcon  = storeIcons[p.store.toLowerCase()] || 'fas fa-store';

  return `
  <div class="pc" data-id="${p.id}">

    <!-- Image area -->
    <div class="pc__img-wrap" onclick="window.openProductDetail(${p.id})">
      <img src="${p.image}" alt="${p.name}" loading="lazy" class="pc__img">
      ${badgeHtml}

      <!-- Discount pill top-right -->
      <span class="pc__disc-pill">-${p.discount}%</span>

      <!-- Wishlist heart -->
      <button class="pc__heart ${isLiked ? 'liked' : ''}"
        data-id="${p.id}"
        onclick="window.toggleWishlist(${p.id},event)"
        aria-label="Save to wishlist">
        <i class="fas fa-heart"></i>
      </button>

      <!-- Quick view on hover -->
      <div class="pc__overlay">
        <button class="pc__qv-btn" onclick="window.openProductDetail(${p.id});event.stopPropagation();">
          <i class="fas fa-eye"></i> Quick View
        </button>
      </div>

      ${lowStock ? `<div class="pc__stock"><i class="fas fa-fire"></i> Only ${p.stock} left</div>` : ''}
    </div>

    <!-- Info area -->
    <div class="pc__body">

      <!-- Rating row -->
      <div class="pc__stars">
        <span class="pc__star-icons">${starsHtml(p.rating)}</span>
        <span class="pc__reviews">${p.reviews.toLocaleString()}</span>
      </div>

      <!-- Name -->
      <h4 class="pc__name" onclick="window.openProductDetail(${p.id})">${p.name}</h4>

      <!-- Price row -->
      <div class="pc__price-row">
        <span class="pc__price">${formatPrice(p.price)}</span>
        <span class="pc__old">${formatPrice(p.originalPrice)}</span>
        <span class="pc__save">Save ${saves}</span>
      </div>

      <!-- CTA button -->
      <button class="pc__cta" onclick="window.handleAffiliateClick(${p.id},event)">
        <span class="pc__cta-icon"><i class="${storeIcon}"></i></span>
        <span class="pc__cta-text">Buy on ${p.store}</span>
        <span class="pc__cta-arrow">
          <i class="fas fa-arrow-right"></i>
        </span>
        <span class="pc__cta-ripple"></span>
      </button>

    </div>
  </div>`;
}

// ============================================================
//  RENDER TRENDING
// ============================================================
function renderTrending(cat = '', count = 8) {
  const list = products.filter(p => p.enabled !== false && (!cat || p.category === cat));
  const slice = list.slice(0, count);
  const container = document.getElementById('trendingProducts');
  container.innerHTML = slice.length
    ? slice.map(renderProductCard).join('')
    : '<p style="text-align:center;grid-column:1/-1;color:var(--text-muted);padding:30px;">No products in this category yet.</p>';
  document.getElementById('loadMoreBtn').style.display = list.length > count ? 'inline-flex' : 'none';
}

function loadMoreProducts() {
  visibleCount += 4;
  renderTrending(currentFilter, visibleCount);
}

// ============================================================
//  COLLECTIONS
// ============================================================
function renderFeaturedCollections() {
  document.getElementById('featuredCollections').innerHTML = collections.map(c => `
    <div class="product-card" style="cursor:pointer;" onclick="window.filterByCategory('${c.slug}')">
      <div class="img-wrap">
        <img src="${c.image}" alt="${c.name}" loading="lazy">
        <span class="store-badge" style="background:var(--accent-burgundy);color:#fff;">Explore</span>
      </div>
      <div class="product-info" style="text-align:center;">
        <h4>${c.name}</h4>
        <p style="color:var(--text-muted);font-size:.85rem;">${c.desc}</p>
      </div>
      <button class="buy-now-strip" onclick="window.filterByCategory('${c.slug}');event.stopPropagation();">
        <i class="fas fa-arrow-right"></i> Shop Collection
      </button>
    </div>`).join('');
}

// ============================================================
//  PRODUCT DETAIL MODAL
// ============================================================
//  PRODUCT DETAIL MODAL
// ============================================================
function openProductDetail(id) {
  const p = products.find(pr => pr.id === id);
  if (!p) return;

  // track recently viewed
  recentlyViewed = [p, ...recentlyViewed.filter(r => r.id !== p.id)].slice(0, 20);
  saveRecent();
  renderRecentlyViewed();

  const isLiked  = wishlist.includes(p.id);
  const lowStock = p.stock && p.stock <= 5;
  const saves    = getSavings(p);
  const allImgs  = (p.images && p.images.length) ? p.images : [p.image];

  // Store icon
  const storeIcons = { amazon:'fab fa-amazon', flipkart:'fas fa-shopping-cart', myntra:'fas fa-tshirt', nykaa:'fas fa-star', ajio:'fas fa-gem' };
  const storeIcon  = storeIcons[p.store?.toLowerCase()] || 'fas fa-store';

  // Build thumbnail dots
  const dots = allImgs.map((_, i) => `
    <button class="pdm__dot ${i===0?'active':''}" data-idx="${i}" aria-label="Image ${i+1}"></button>
  `).join('');

  // Build thumbnail strip
  const thumbs = allImgs.map((img, i) => `
    <button class="pdm__thumb ${i===0?'active':''}" data-idx="${i}" aria-label="Image ${i+1}">
      <img src="${img}" alt="${p.name} view ${i+1}" loading="lazy">
    </button>
  `).join('');

  // Build slides
  const slides = allImgs.map((img, i) => `
    <div class="pdm__slide ${i===0?'active':''}" data-slide="${i}">
      <img src="${img}" alt="${p.name}" loading="${i===0?'eager':'lazy'}">
    </div>
  `).join('');

  // Badge
  let badge = '';
  if      (p.badge === 'bestseller') badge = '<span class="pdm__badge pdm__badge--best">🏆 Bestseller</span>';
  else if (p.badge === 'hot')        badge = '<span class="pdm__badge pdm__badge--hot">🔥 Hot Deal</span>';
  else if (p.badge === 'new')        badge = '<span class="pdm__badge pdm__badge--new">✨ New</span>';

  document.getElementById('productDetailContent').innerHTML = `
    <!-- Close -->
    <button class="pdm__close" id="closeProductModal" aria-label="Close">
      <i class="fas fa-times"></i>
    </button>

    <!-- Left: image gallery -->
    <div class="pdm__gallery">

      <!-- Main slider -->
      <div class="pdm__slider" id="pdmSlider">
        ${slides}
        <!-- Nav arrows (only if >1 image) -->
        ${allImgs.length > 1 ? `
          <button class="pdm__arrow pdm__arrow--prev" id="pdmPrev" aria-label="Previous image">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="pdm__arrow pdm__arrow--next" id="pdmNext" aria-label="Next image">
            <i class="fas fa-chevron-right"></i>
          </button>
        ` : ''}
        <!-- Dots -->
        ${allImgs.length > 1 ? `<div class="pdm__dots">${dots}</div>` : ''}
      </div>

      <!-- Thumbnail strip (only if >1 image) -->
      ${allImgs.length > 1 ? `
        <div class="pdm__thumbs" id="pdmThumbs" role="list">
          ${thumbs}
        </div>
      ` : ''}
    </div>

    <!-- Right: scrollable info -->
    <div class="pdm__info" id="pdmInfo">

      <!-- Store + badge row -->
      <div class="pdm__store-row">
        <span class="pdm__store-pill">
          <i class="${storeIcon}"></i> ${p.store}
        </span>
        ${badge}
        ${p.discount ? `<span class="pdm__disc-pill">-${p.discount}%</span>` : ''}
      </div>

      <!-- Name -->
      <h2 class="pdm__name">${p.name}</h2>

      <!-- Rating -->
      <div class="pdm__rating">
        <span class="pdm__stars">${starsHtml(p.rating)}</span>
        <span class="pdm__rating-num">${p.rating}</span>
        <span class="pdm__rating-count">(${p.reviews.toLocaleString()} reviews)</span>
      </div>

      <!-- Price -->
      <div class="pdm__price-wrap">
        <span class="pdm__price">${formatPrice(p.price)}</span>
        <span class="pdm__old">${formatPrice(p.originalPrice)}</span>
      </div>
      <div class="pdm__savings">
        🎉 You save <strong>${saves}</strong> on this product
      </div>

      ${lowStock ? `<div class="pdm__stock-warn"><i class="fas fa-exclamation-triangle"></i> Only <strong>${p.stock} left</strong> in stock — order soon!</div>` : ''}

      <!-- Divider -->
      <div class="pdm__divider"></div>

      <!-- Description -->
      <div class="pdm__section">
        <div class="pdm__section-title"><i class="fas fa-align-left"></i> Description</div>
        <p class="pdm__desc">${p.description || 'No description available.'}</p>
      </div>

      <!-- Product details grid -->
      <div class="pdm__section">
        <div class="pdm__section-title"><i class="fas fa-info-circle"></i> Product Details</div>
        <div class="pdm__details-grid">
          ${p.brand    ? `<div class="pdm__detail-item"><span class="pdm__detail-key">Brand</span><span class="pdm__detail-val">${p.brand}</span></div>` : ''}
          ${p.material ? `<div class="pdm__detail-item"><span class="pdm__detail-key">Material</span><span class="pdm__detail-val">${p.material}</span></div>` : ''}
          ${(p.sizes||[]).length ? `<div class="pdm__detail-item"><span class="pdm__detail-key">Sizes</span><span class="pdm__detail-val">${p.sizes.join(', ')}</span></div>` : ''}
          ${(p.colors||[]).length ? `<div class="pdm__detail-item"><span class="pdm__detail-key">Colors</span><span class="pdm__detail-val">${p.colors.join(', ')}</span></div>` : ''}
          <div class="pdm__detail-item"><span class="pdm__detail-key">Category</span><span class="pdm__detail-val" style="text-transform:capitalize;">${(p.category||'').replace('-',' ')}</span></div>
          <div class="pdm__detail-item"><span class="pdm__detail-key">Platform</span><span class="pdm__detail-val">${p.store}</span></div>
        </div>
      </div>

      <!-- Divider -->
      <div class="pdm__divider"></div>

      <!-- CTAs -->
      <div class="pdm__cta-group">
        <button class="pdm__buy-btn" onclick="window.handleAffiliateClick(${p.id},event,true)">
          <span class="pdm__buy-icon"><i class="${storeIcon}"></i></span>
          <span>Buy Now on ${p.store}</span>
          <span class="pdm__buy-arrow"><i class="fas fa-arrow-right"></i></span>
          <span class="pc__cta-ripple"></span>
        </button>
        <button class="pdm__wl-btn ${isLiked?'liked':''}" id="pdmWlBtn" onclick="window.toggleWishlist(${p.id},event)">
          <i class="fas fa-heart"></i>
          <span>${isLiked ? 'Saved' : 'Save'}</span>
        </button>
      </div>

      <!-- Trust row -->
      <div class="pdm__trust">
        <span><i class="fas fa-shield-alt"></i> Secure</span>
        <span><i class="fas fa-truck"></i> Fast Delivery</span>
        <span><i class="fas fa-undo"></i> Easy Returns</span>
        <span><i class="fas fa-lock"></i> Authentic</span>
      </div>

    </div><!-- end info -->
  `;

  // ── Mount slider logic ──
  let current = 0;
  const total = allImgs.length;

  function goTo(idx) {
    idx = ((idx % total) + total) % total;
    const prevSlide = document.querySelector('.pdm__slide.active');
    const nextSlide = document.querySelector(`.pdm__slide[data-slide="${idx}"]`);
    const prevThumb = document.querySelector('.pdm__thumb.active');
    const nextThumb = document.querySelector(`.pdm__thumb[data-idx="${idx}"]`);
    const prevDot   = document.querySelector('.pdm__dot.active');
    const nextDot   = document.querySelector(`.pdm__dot[data-idx="${idx}"]`);

    if (prevSlide) { prevSlide.classList.remove('active'); prevSlide.classList.add('exit'); }
    if (nextSlide) { nextSlide.classList.remove('exit'); nextSlide.classList.add('active'); }
    if (prevThumb) prevThumb.classList.remove('active');
    if (nextThumb) { nextThumb.classList.add('active'); nextThumb.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' }); }
    if (prevDot)   prevDot.classList.remove('active');
    if (nextDot)   nextDot.classList.add('active');

    setTimeout(() => { if(prevSlide) prevSlide.classList.remove('exit'); }, 400);
    current = idx;
  }

  // Arrow buttons
  document.getElementById('pdmPrev')?.addEventListener('click', e => { e.stopPropagation(); goTo(current - 1); });
  document.getElementById('pdmNext')?.addEventListener('click', e => { e.stopPropagation(); goTo(current + 1); });

  // Dot buttons
  document.querySelectorAll('.pdm__dot').forEach(d => d.addEventListener('click', () => goTo(parseInt(d.dataset.idx))));

  // Thumbnail buttons
  document.querySelectorAll('.pdm__thumb').forEach(t => t.addEventListener('click', () => goTo(parseInt(t.dataset.idx))));

  // Touch / swipe on slider
  const slider = document.getElementById('pdmSlider');
  let touchStartX = 0;
  slider?.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive:true });
  slider?.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) goTo(dx < 0 ? current + 1 : current - 1);
  });

  // Keyboard arrow keys
  function handleKey(e) {
    if (!document.getElementById('productModal').classList.contains('open')) return;
    if (e.key === 'ArrowLeft')  goTo(current - 1);
    if (e.key === 'ArrowRight') goTo(current + 1);
    if (e.key === 'Escape') closeDetail();
  }
  document.addEventListener('keydown', handleKey);

  function closeDetail() {
    document.getElementById('productModal').classList.remove('open');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleKey);
  }

  document.getElementById('closeProductModal').addEventListener('click', closeDetail);
  document.getElementById('productModal').addEventListener('click', e => { if (e.target === document.getElementById('productModal')) closeDetail(); });

  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ============================================================
//  AFFILIATE CLICK + WISHLIST
// ============================================================
function handleAffiliateClick(id, event, closeModal = false) {
  event.stopPropagation();
  const p = products.find(pr => pr.id === id);
  if (!p) return;
  const url = getAffiliateUrl(p);
  showToast(`<i class="fas fa-external-link-alt"></i> Redirecting to ${p.store}…`, 'success');
  if (closeModal) {
    document.getElementById('productModal').classList.remove('open');
    document.body.style.overflow = '';
  }
  setTimeout(() => window.open(url, '_blank', 'noopener,noreferrer'), 400);
  renderTrending(currentFilter, visibleCount);
}

function toggleWishlist(id, event) {
  event.stopPropagation();

  const idx = wishlist.indexOf(id);
  const adding = idx === -1;

  if (adding) {
    wishlist.push(id);
    const p = products.find(pr => pr.id === id);
    showToast(`<i class="fas fa-heart" style="color:#e91e8c;"></i> ${p?.name || 'Item'} saved!`, 'success');
  } else {
    wishlist.splice(idx, 1);
    showToast('Removed from wishlist', 'error');
  }

  saveWishlist();
  updateWishlistBadge();

  // Animate the heart button on product cards
  document.querySelectorAll(`.pc__heart[data-id="${id}"], .wishlist-heart[data-id="${id}"]`).forEach(btn => {
    btn.classList.toggle('liked', adding);
    if (adding) { btn.classList.add('pop'); setTimeout(() => btn.classList.remove('pop'), 400); }
  });

  renderTrending(currentFilter, visibleCount);
  renderWishlistPanel();
  if (document.getElementById('wishlistPage').classList.contains('open')) renderWishlistPage();
}

function updateWishlistBadge() {
  const badge    = document.getElementById('wishlistBadge');
  const fl       = document.getElementById('flBadge');
  const floatBtn = document.getElementById('floatingWl');
  const wlpCount = document.getElementById('wlpCount');
  const n        = wishlist.length;
  const label    = n > 99 ? '99+' : n;

  if (badge)    { badge.style.display = n > 0 ? 'block' : 'none'; badge.textContent = n > 9 ? '9+' : n; }
  if (fl)       { fl.textContent = label; }
  if (floatBtn) { floatBtn.style.display = n > 0 ? 'flex' : 'none'; }
  if (wlpCount) { wlpCount.textContent = label; }
}

// ============================================================
//  WISHLIST PANEL (sidebar)
// ============================================================
function openWishlistPanel() {
  document.getElementById('wishlistPanel').classList.add('open');
  document.getElementById('wishlistOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
  renderWishlistPanel();
}
function closeWishlistPanel() {
  document.getElementById('wishlistPanel').classList.remove('open');
  document.getElementById('wishlistOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

function getSortedWishlist() {
  const sort = document.getElementById('wlSort')?.value || 'added';
  const items = wishlist.map(id => products.find(p => p.id === id)).filter(Boolean);
  if (sort === 'price-low')  return [...items].sort((a,b) => a.price - b.price);
  if (sort === 'price-high') return [...items].sort((a,b) => b.price - a.price);
  if (sort === 'discount')   return [...items].sort((a,b) => b.discount - a.discount);
  if (sort === 'rating')     return [...items].sort((a,b) => b.rating - a.rating);
  return items; // 'added' = insertion order
}

function renderWishlistPanel() {
  const container = document.getElementById('wishlistItems');
  const footer    = document.getElementById('wlpFooter');
  const toolbar   = document.getElementById('wlpToolbar');
  if (!container) return;

  const items = getSortedWishlist();
  updateWishlistBadge();

  if (!items.length) {
    if (toolbar) toolbar.style.display = 'none';
    if (footer)  footer.style.display  = 'none';
    container.innerHTML = `
      <div class="wl-empty">
        <div class="wl-empty-icon">🛍️</div>
        <h4>Your wishlist is empty</h4>
        <p>Save your favourite styles here!</p>
        <button class="wl-empty-cta" onclick="closeWishlistPanel();document.getElementById('trending').scrollIntoView({behavior:'smooth'})">
          <i class="fas fa-heart"></i> Browse Products
        </button>
      </div>`;
    return;
  }

  if (toolbar) toolbar.style.display = 'flex';
  if (footer)  footer.style.display  = 'block';

  const totalValue = items.reduce((s, p) => s + p.price, 0);
  const totalEl = document.getElementById('wlpTotal');
  if (totalEl) totalEl.textContent = formatPrice(totalValue);

  container.innerHTML = items.map(p => `
    <div class="wl-item">
      <div class="wl-img-wrap" onclick="closeWishlistPanel();openProductDetail(${p.id})">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <span class="wl-stock-dot ${p.stock && p.stock <= 5 ? 'low' : 'ok'}"></span>
      </div>
      <div class="wl-info">
        <div class="wl-name" onclick="closeWishlistPanel();openProductDetail(${p.id})">${p.name}</div>
        <div class="wl-store-cat">${p.store} · ${p.category}</div>
        <div class="wl-price-row">
          <span class="wl-price">${formatPrice(p.price)}</span>
          <span class="wl-old">${formatPrice(p.originalPrice)}</span>
          <span class="wl-disc">-${p.discount}%</span>
        </div>
        ${p.stock && p.stock <= 5 ? `<div class="wl-low-stock"><i class="fas fa-fire"></i> Only ${p.stock} left!</div>` : ''}
        <div class="wl-actions">
          <button class="wl-btn-buy" onclick="handleAffiliateClick(${p.id},{stopPropagation:()=>{}})">
            <i class="fas fa-shopping-bag"></i> Buy on ${p.store}
          </button>
          <button class="wl-btn-remove" onclick="removeFromWishlist(${p.id})">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>`).join('');
}

function removeFromWishlist(id) {
  const idx = wishlist.indexOf(id);
  if (idx > -1) wishlist.splice(idx, 1);
  saveWishlist();
  updateWishlistBadge();
  renderWishlistPanel();
  renderTrending(currentFilter, visibleCount);
  if (document.getElementById('wishlistPage').classList.contains('open')) renderWishlistPage();
}

function clearWishlist() {
  if (!wishlist.length) return;
  if (!confirm('Remove all items from your wishlist?')) return;
  wishlist = [];
  saveWishlist();
  updateWishlistBadge();
  renderWishlistPanel();
  renderTrending(currentFilter, visibleCount);
  if (document.getElementById('wishlistPage').classList.contains('open')) renderWishlistPage();
  showToast('Wishlist cleared.', 'error');
}

function buyAllWishlist() {
  const items = getSortedWishlist();
  if (!items.length) return;
  showToast(`Opening ${items.length} items on their stores…`, 'info');
  items.forEach((p, i) => {
    setTimeout(() => {
      getAffiliateUrl(p);
      window.open(p.affiliateLink, '_blank', 'noopener,noreferrer');
    }, i * 600);
  });
}

// ============================================================
//  WISHLIST FULL-PAGE
// ============================================================
function openWishlistPage() {
  closeWishlistPanel();
  renderWishlistPage();
  document.getElementById('wishlistPage').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeWishlistPage() {
  document.getElementById('wishlistPage').classList.remove('open');
  document.body.style.overflow = '';
}

function renderWishlistPage() {
  const grid    = document.getElementById('wlpageGrid');
  const empty   = document.getElementById('wlpageEmpty');
  const countEl = document.getElementById('wlpageCount');
  const items   = getSortedWishlist();

  if (countEl) countEl.textContent = `${items.length} item${items.length !== 1 ? 's' : ''} saved`;

  if (!items.length) {
    if (grid)  grid.style.display  = 'none';
    if (empty) empty.style.display = 'flex';
    return;
  }
  if (grid)  grid.style.display  = 'grid';
  if (empty) empty.style.display = 'none';

  grid.innerHTML = items.map(p => `
    <div class="wlpage-card">
      <div class="wlpc-img-wrap" onclick="closeWishlistPage();setTimeout(()=>openProductDetail(${p.id}),80)">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <button class="wlpc-remove" onclick="event.stopPropagation();removeFromWishlist(${p.id})" aria-label="Remove">
          <i class="fas fa-times"></i>
        </button>
        ${p.badge === 'bestseller' ? '<span class="discount-badge badge-bestseller" style="position:absolute;top:10px;left:10px;">🏆 Bestseller</span>' :
          p.badge === 'hot'        ? '<span class="discount-badge" style="position:absolute;top:10px;left:10px;background:var(--accent-burgundy);">🔥 Hot</span>' :
          p.badge === 'new'        ? '<span class="discount-badge badge-new" style="position:absolute;top:10px;left:10px;">✨ New</span>' : ''}
      </div>
      <div class="wlpc-body">
        <div class="wlpc-name" onclick="closeWishlistPage();setTimeout(()=>openProductDetail(${p.id}),80)">${p.name}</div>
        <div class="wlpc-price-row">
          <span class="wlpc-price">${formatPrice(p.price)}</span>
          <span class="wlpc-old">${formatPrice(p.originalPrice)}</span>
          <span class="wlpc-disc">-${p.discount}%</span>
        </div>
        ${p.stock && p.stock <= 5 ? `<div class="wl-low-stock" style="margin-bottom:8px;"><i class="fas fa-fire"></i> Only ${p.stock} left!</div>` : ''}
        <button class="wlpc-buy" onclick="handleAffiliateClick(${p.id},{stopPropagation:()=>{}})">
          <i class="fas fa-shopping-bag"></i> Buy on ${p.store}
        </button>
      </div>
    </div>`).join('');
}

// ============================================================
//  SHARE WISHLIST
// ============================================================
function shareWishlist() {
  const ids    = wishlist.join(',');
  const url    = `${location.href.split('?')[0]}?wl=${btoa(ids)}`;
  const modal  = document.getElementById('shareWlModal');
  const input  = document.getElementById('shareWlLink');
  if (input) input.value = url;
  if (modal) modal.classList.add('open');
}

function copyShareLink() {
  const input = document.getElementById('shareWlLink');
  if (!input) return;
  navigator.clipboard?.writeText(input.value).then(() => {
    showToast('🔗 Wishlist link copied!', 'success');
  }).catch(() => {
    input.select(); document.execCommand('copy');
    showToast('🔗 Link copied!', 'success');
  });
  document.getElementById('shareWlModal').classList.remove('open');
}
window.copyShareLink = copyShareLink;

function shareVia(platform) {
  const input = document.getElementById('shareWlLink');
  const url   = input?.value || location.href;
  const text  = `Check out my wishlist on Radiance & Ruche! 💕`;
  if (platform === 'whatsapp') window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank', 'noopener');
  if (platform === 'copy')     copyShareLink();
  if (platform === 'instagram') { copyShareLink(); showToast('Link copied — paste in Instagram story!', 'success'); }
  document.getElementById('shareWlModal').classList.remove('open');
}
window.shareVia = shareVia;

// Load shared wishlist from URL
function loadSharedWishlist() {
  const params = new URLSearchParams(location.search);
  const wl = params.get('wl');
  if (!wl) return;
  try {
    const ids = atob(wl).split(',').map(Number).filter(Boolean);
    if (!ids.length) return;
    const merged = [...new Set([...wishlist, ...ids])];
    wishlist = merged;
    saveWishlist();
    updateWishlistBadge();
    showToast(`💕 ${ids.length} shared item${ids.length>1?'s':''} added to your wishlist!`, 'success');
  } catch(e) {}
}

// Expose all public functions
window.openWishlistPanel  = openWishlistPanel;
window.closeWishlistPanel = closeWishlistPanel;
window.openWishlistPage   = openWishlistPage;
window.closeWishlistPage  = closeWishlistPage;
window.removeFromWishlist = removeFromWishlist;
window.clearWishlist      = clearWishlist;
window.buyAllWishlist     = buyAllWishlist;
window.shareWishlist      = shareWishlist;

// ============================================================
//  RECENTLY VIEWED
// ============================================================
function renderRecentlyViewed() {
  const section = document.getElementById('recentlyViewedSection');
  const grid = document.getElementById('recentlyViewedGrid');
  if (!section || !grid) return;
  if (!recentlyViewed.length) { section.style.display = 'none'; return; }
  section.style.display = 'block';
  grid.innerHTML = recentlyViewed.slice(0, 10).map(p => `
    <div class="rv-card" onclick="openProductDetail(${p.id})">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <p>${p.name}</p>
      <strong>${formatPrice(p.price)}</strong>
    </div>`).join('');
}

// ============================================================
//  FILTER TABS
// ============================================================
function initFilterTabs() {
  document.querySelectorAll('.btn-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.cat;
      visibleCount = 8;
      renderTrending(currentFilter, visibleCount);
    });
  });
}

// ============================================================
//  CATEGORY / STORE FILTERS
// ============================================================
window.filterByCategory = function (slug) {
  currentFilter = slug;
  visibleCount = 8;
  document.querySelectorAll('.btn-filter').forEach(b => b.classList.toggle('active', b.dataset.cat === slug));
  renderTrending(slug, visibleCount);
  document.getElementById('trending').scrollIntoView({ behavior: 'smooth' });
  showToast(`Showing: ${slug.replace('-', ' ')}`, 'success');
};

window.filterByStore = function (store) {
  const filtered = products.filter(p => p.enabled !== false && p.store === store);
  document.getElementById('trendingProducts').innerHTML = filtered.length
    ? filtered.map(renderProductCard).join('')
    : `<p style="text-align:center;grid-column:1/-1;color:var(--text-muted);padding:30px;">No products from ${store} yet.</p>`;
  document.getElementById('trending').scrollIntoView({ behavior: 'smooth' });
  showToast(`Showing products from ${store}`, 'success');
};

// Expose
window.openProductDetail = openProductDetail;
window.handleAffiliateClick = handleAffiliateClick;
window.toggleWishlist = toggleWishlist;
window.openWishlistPanel = openWishlistPanel;
window.closeWishlistPanel = closeWishlistPanel;

// ============================================================
//  HERO SLIDER
// ============================================================
function initSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dotsContainer = document.getElementById('sliderDots');
  let current = 0;
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goTo(i);
    dotsContainer.appendChild(dot);
  });
  const dots = dotsContainer.querySelectorAll('.slider-dot');
  function goTo(i) {
    slides[current].classList.remove('active'); dots[current].classList.remove('active');
    current = (i + slides.length) % slides.length;
    slides[current].classList.add('active'); dots[current].classList.add('active');
  }
  document.getElementById('sliderPrev').onclick = () => goTo(current - 1);
  document.getElementById('sliderNext').onclick = () => goTo(current + 1);
  let interval = setInterval(() => goTo(current + 1), 5000);
  const slider = document.getElementById('heroSlider');
  slider.addEventListener('mouseenter', () => clearInterval(interval));
  slider.addEventListener('mouseleave', () => { clearInterval(interval); interval = setInterval(() => goTo(current + 1), 5000); });
}

// ============================================================
//  DEAL TIMER (blocks style)
// ============================================================
function initDealTimer() {
  const end = new Date(Date.now() + (4 * 3600 + 32 * 60 + 18) * 1000);
  function update() {
    const diff = end - Date.now();
    if (diff <= 0) { document.getElementById('dealH').textContent = document.getElementById('dealM').textContent = document.getElementById('dealS').textContent = '00'; return; }
    document.getElementById('dealH').textContent = String(Math.floor(diff / 3600000)).padStart(2, '0');
    document.getElementById('dealM').textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
    document.getElementById('dealS').textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
    // sticky CTA timer mirror
    const sEl = document.getElementById('stickyTimer');
    if (sEl) { const h=Math.floor(diff/3600000),m=Math.floor((diff%3600000)/60000); sEl.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`; }
  }
  update(); setInterval(update, 1000);
}

// ============================================================
//  STICKY CTA BAR
// ============================================================
function initStickyCta() {
  const bar = document.getElementById('stickyCta');
  const observer = new IntersectionObserver(entries => {
    if (!stickyHidden) bar.style.display = entries[0].isIntersecting ? 'none' : 'flex';
  }, { threshold: 0 });
  const heroEl = document.getElementById('heroSlider');
  if (heroEl) observer.observe(heroEl);
}
function hideStickyOnce() {
  stickyHidden = true;
  document.getElementById('stickyCta').style.display = 'none';
  setTimeout(() => { stickyHidden = false; }, 30000);
}
window.hideStickyOnce = hideStickyOnce;

// ============================================================
//  EXIT INTENT
// ============================================================
function initExitIntent() {
  document.addEventListener('mouseleave', e => {
    if (e.clientY < 10 && !exitShown && !sessionStorage.getItem('exit_shown')) {
      exitShown = true;
      sessionStorage.setItem('exit_shown', '1');
      setTimeout(() => document.getElementById('exitModal').classList.add('show'), 500);
    }
  });
}
window.copyExitCode = function (el) {
  navigator.clipboard?.writeText('RUCHE10');
  el.textContent = '✅ Copied!';
  showToast('Coupon code RUCHE10 copied!', 'success');
  setTimeout(() => { el.innerHTML = 'RUCHE10 <i class="fas fa-copy" style="font-size:.75rem;"></i>'; }, 2000);
};

// ============================================================
//  LIVE ACTIVITY POPUPS
// ============================================================
function initLiveActivity() {
  function show() {
    const p = products[Math.floor(Math.random() * products.length)];
    const name = liveNames[Math.floor(Math.random() * liveNames.length)];
    const action = liveActions[Math.floor(Math.random() * liveActions.length)];
    const el = document.getElementById('liveActivity');
    document.getElementById('laText').innerHTML = `<strong>${name}</strong> ${action}: <em style="color:var(--accent-gold);">${p.name}</em>`;
    el.style.display = 'block';
    setTimeout(() => { el.style.opacity = '0'; el.style.transition = 'opacity .5s'; setTimeout(() => { el.style.display = 'none'; el.style.opacity = '1'; el.style.transition = ''; }, 500); }, 4500);
  }
  setTimeout(show, 6000);
  setInterval(show, 18000);
}

// ============================================================
//  FLUCTUATING VIEWER COUNT
// ============================================================
function initViewerCounts() {
  let viewers = 2841;
  let watchers = 143;
  setInterval(() => {
    viewers += Math.floor(Math.random() * 10) - 4;
    viewers = Math.max(2600, Math.min(3200, viewers));
    watchers += Math.floor(Math.random() * 6) - 2;
    watchers = Math.max(80, Math.min(220, watchers));
    const hv = document.getElementById('heroViewers');
    if (hv) hv.textContent = viewers.toLocaleString('en-IN');
    const dw = document.getElementById('dealWatchers');
    if (dw) dw.textContent = watchers;
  }, 5000);
}

// ============================================================
//  SOCIAL PROOF TICKER
// ============================================================
function initProofTicker() {
  const items = [
    '🎉 Priya from Mumbai just bought Blue Heaven Festive Makeup Kit',
    '⭐ 4.3 average rating across 800+ reviews',
    '🛍️ Anjali saved MARS Lip Gloss to wishlist',
    '🔥 143 people viewing deals right now',
    '✅ Trusted by 50,000+ happy shoppers',
    '💄 Sneha from Delhi just ordered the Festive Makeup Kit',
    '🏆 Bestseller: Blue Heaven Makeup Kit — 486 reviews',
    '⚡ Flash Sale ends today — Up to 34% off!',
    '🚚 Free delivery on all orders above ₹999',
    '💋 Kavya just bought MARS Candy Crush Lip Gloss from Flipkart',
  ];
  const track = document.getElementById('proofTrack');
  if (!track) return;
  const doubled = [...items, ...items];
  track.innerHTML = doubled.map(i => `<span class="proof-item"><i class="fas fa-circle" style="font-size:.4rem;"></i>${i}</span>`).join('');
}

// ============================================================
//  SEARCH
// ============================================================
// ============================================================
//  ADVANCED SEARCH
// ============================================================
function initSearch() {
  /* ── DOM refs ── */
  const overlay  = document.getElementById('searchModal');
  const input    = document.getElementById('searchInput');
  const body     = document.getElementById('srchResults');
  const clearBtn = document.getElementById('srchClear');
  const closeBtn = document.getElementById('closeSearchModal');

  /* ── State ── */
  const POPULAR = ['Silk Saree','Maxi Dress','Gold Bangles','Lehenga','Lipstick','Pearl Necklace','Block Heels','Kurta Set','Handbag','Serum'];
  const CAT_MAP  = [
    { slug:'dresses',     label:'Dresses',    icon:'👗' },
    { slug:'sarees',      label:'Sarees',     icon:'🥻' },
    { slug:'ethnic-wear', label:'Ethnic Wear',icon:'✨' },
    { slug:'jewelry',     label:'Jewelry',    icon:'💍' },
    { slug:'handbags',    label:'Handbags',   icon:'👜' },
    { slug:'skincare',    label:'Skincare',   icon:'🧴' },
    { slug:'beauty',      label:'Beauty',     icon:'💄' },
    { slug:'footwear',    label:'Footwear',   icon:'👠' },
    { slug:'tops',        label:'Tops',       icon:'👚' },
    { slug:'accessories', label:'Accessories',icon:'🕶️' },
  ];

  let recentSearches = JSON.parse(localStorage.getItem('rr_searches') || '[]');
  let focusedIdx     = -1;
  let focusableItems = [];
  let debounceTimer  = null;
  let lastQuery      = '';

  function saveRecents() { localStorage.setItem('rr_searches', JSON.stringify(recentSearches.slice(0,8))); }

  /* ── Open / close ── */
  function openSearch() {
    overlay.classList.add('open');
    input.setAttribute('aria-expanded','true');
    document.body.style.overflow = 'hidden';
    setTimeout(() => input.focus(), 50);
    showDefault();
  }
  function closeSearch() {
    overlay.classList.remove('open');
    input.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
    input.value = '';
    clearBtn.style.display = 'none';
    lastQuery = '';
  }

  document.getElementById('searchToggle').onclick = openSearch;
  closeBtn.onclick = closeSearch;
  overlay.addEventListener('click', e => { if (e.target === overlay) closeSearch(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearch(); });

  /* ── Helpers ── */
  function highlight(text, q) {
    if (!q) return text;
    const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi');
    return text.replace(re, '<mark>$1</mark>');
  }
  function starsHtmlS(r) {
    let s = '';
    const f = Math.floor(r);
    for (let i=0;i<f;i++) s+='★';
    if (r%1>=.5) s+='½';
    return s;
  }

  /* ── Skeleton loader ── */
  function showSkeleton() {
    body.innerHTML = [1,2,3].map(() => `
      <div class="srch-skeleton">
        <div class="srch-skel-img"></div>
        <div class="srch-skel-lines">
          <div class="srch-skel-line"></div>
          <div class="srch-skel-line short"></div>
        </div>
      </div>`).join('');
  }

  /* ── Default state (no query) ── */
  function showDefault() {
    const hasRecents = recentSearches.length > 0;
    let html = '';

    if (hasRecents) {
      html += `<div class="srch-section">Recent Searches <button onclick="clearRecents()">Clear all</button></div>`;
      html += `<div class="srch-chips">` +
        recentSearches.map((q,i) => `
          <span class="srch-chip" tabindex="0" role="option"
            onclick="applySearch('${q.replace(/'/g,"\\'")}')">
            <i class="fas fa-history"></i>${q}
            <button class="srch-chip-del" onclick="removeRecent(event,${i})" aria-label="Remove">×</button>
          </span>`).join('') +
        `</div>`;
    }

    html += `<div class="srch-section">Popular Searches</div>`;
    html += `<div class="srch-chips">` +
      POPULAR.map(q => `
        <span class="srch-chip" tabindex="0" role="option"
          onclick="applySearch('${q}')">
          <i class="fas fa-fire" style="color:var(--accent-burgundy);"></i>${q}
        </span>`).join('') +
      `</div>`;

    html += `<div class="srch-section">Browse Categories</div>`;
    html += `<div class="srch-cat-row">` +
      CAT_MAP.map(c => `
        <span class="srch-cat-pill" tabindex="0" role="option"
          onclick="searchByCategory('${c.slug}')">
          <span>${c.icon}</span>${c.label}
        </span>`).join('') +
      `</div>`;

    html += renderFooter(null);
    body.innerHTML = html;
    buildFocusable();
  }

  /* ── Product results ── */
  function showResults(q) {
    const ql = q.toLowerCase().trim();
    if (!ql) { showDefault(); return; }

    const matched = products.filter(p =>
      p.enabled !== false && (
        p.name.toLowerCase().includes(ql) ||
        p.category.toLowerCase().includes(ql) ||
        p.store.toLowerCase().includes(ql) ||
        (p.material||'').toLowerCase().includes(ql) ||
        (p.colors||[]).some(c => c.toLowerCase().includes(ql))
      )
    );

    // Category suggestions
    const matchedCats = CAT_MAP.filter(c =>
      c.label.toLowerCase().includes(ql) || c.slug.toLowerCase().includes(ql)
    );

    let html = '';

    if (matchedCats.length) {
      html += `<div class="srch-section">Category Results</div>`;
      html += `<div class="srch-cat-row">` +
        matchedCats.map(c => `
          <span class="srch-cat-pill" tabindex="0" role="option"
            onclick="searchByCategory('${c.slug}')">
            <span>${c.icon}</span>${c.label}
          </span>`).join('') +
        `</div>`;
    }

    if (matched.length) {
      html += `<div class="srch-section">Products <span style="color:var(--accent-gold);font-weight:700;">${matched.length} found</span></div>`;
      html += matched.slice(0,8).map(p => `
        <div class="srch-result-item" tabindex="0" role="option"
          onclick="handleSearchSelect(${p.id})"
          onkeydown="if(event.key==='Enter')handleSearchSelect(${p.id})">
          <img class="srch-result-img" src="${p.image}" alt="${p.name}" loading="lazy">
          <div class="srch-result-info">
            <div class="srch-result-name">${highlight(p.name, q)}</div>
            <div class="srch-result-meta">
              <span class="srch-result-price">${formatPrice(p.price)}</span>
              <span class="srch-result-old">${formatPrice(p.originalPrice)}</span>
              <span class="srch-result-badge">-${p.discount}%</span>
              <span class="srch-result-stars">${starsHtmlS(p.rating)}</span>
              <span class="srch-result-store">${p.store}</span>
            </div>
          </div>
          <button class="srch-result-buy"
            onclick="event.stopPropagation();handleAffiliateClick(${p.id},event)">
            Buy →
          </button>
        </div>`).join('');
    }

    if (!matched.length && !matchedCats.length) {
      html += `<div class="srch-empty">
        <i class="fas fa-search-minus"></i>
        <p>No results for "<strong>${q}</strong>"</p>
        <small>Try a different keyword or browse categories below</small>
        <div class="srch-cat-row" style="justify-content:center;margin-top:16px;">` +
        CAT_MAP.slice(0,5).map(c => `
          <span class="srch-cat-pill" tabindex="0" onclick="searchByCategory('${c.slug}')">
            <span>${c.icon}</span>${c.label}
          </span>`).join('') +
        `</div></div>`;
    }

    html += renderFooter(matched.length > 8 ? matched.length : null, q);
    body.innerHTML = html;
    buildFocusable();
  }

  function renderFooter(extra, q) {
    return `<div class="srch-footer">
      <span class="srch-kbd">
        <kbd>↑</kbd><kbd>↓</kbd> navigate &nbsp;
        <kbd>Enter</kbd> select &nbsp;
        <kbd>Esc</kbd> close
      </span>
      ${extra ? `<button class="srch-view-all" onclick="viewAll('${(q||'').replace(/'/g,"\\'")}')">
        View all ${extra} results →
      </button>` : ''}
    </div>`;
  }

  /* ── Build keyboard-focusable list ── */
  function buildFocusable() {
    focusableItems = Array.from(
      body.querySelectorAll('.srch-result-item, .srch-chip, .srch-cat-pill')
    );
    focusedIdx = -1;
  }

  function moveFocus(dir) {
    if (!focusableItems.length) return;
    focusableItems[focusedIdx]?.classList.remove('focused');
    focusedIdx = (focusedIdx + dir + focusableItems.length) % focusableItems.length;
    const el = focusableItems[focusedIdx];
    el.classList.add('focused');
    el.scrollIntoView({ block:'nearest' });
  }

  /* ── Keyboard navigation ── */
  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown')  { e.preventDefault(); moveFocus(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); moveFocus(-1); }
    else if (e.key === 'Enter') {
      if (focusedIdx >= 0 && focusableItems[focusedIdx]) {
        focusableItems[focusedIdx].click();
      } else {
        const q = input.value.trim();
        if (q) viewAll(q);
      }
    }
  });

  /* ── Debounced input handler ── */
  input.addEventListener('input', () => {
    const q = input.value.trim();
    clearBtn.style.display = q ? 'block' : 'none';
    if (q === lastQuery) return;
    lastQuery = q;
    clearTimeout(debounceTimer);

    if (!q) { showDefault(); return; }

    showSkeleton();
    debounceTimer = setTimeout(() => showResults(q), 220);
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    clearBtn.style.display = 'none';
    lastQuery = '';
    showDefault();
    input.focus();
  });

  /* ── Global handlers ── */
  window.applySearch = function(q) {
    input.value = q;
    clearBtn.style.display = 'block';
    lastQuery = q;
    addToRecent(q);
    showResults(q);
    input.focus();
  };

  window.searchByCategory = function(slug) {
    window.filterByCategory(slug);
    closeSearch();
  };

  window.handleSearchSelect = function(id) {
    const p = products.find(pr => pr.id === id);
    if (!p) return;
    addToRecent(p.name);
    closeSearch();
    setTimeout(() => openProductDetail(id), 80);
  };

  window.viewAll = function(q) {
    if (q) {
      currentFilter = '';
      visibleCount  = 999;
      const ql = q.toLowerCase();
      const matched = products.filter(p =>
        p.name.toLowerCase().includes(ql) ||
        p.category.toLowerCase().includes(ql)
      );
      document.getElementById('trendingProducts').innerHTML =
        matched.map(renderProductCard).join('');
      document.getElementById('loadMoreBtn').style.display = 'none';
      addToRecent(q);
    }
    closeSearch();
    setTimeout(() => document.getElementById('trending').scrollIntoView({ behavior:'smooth' }), 80);
  };

  window.clearRecents = function() {
    recentSearches = [];
    saveRecents();
    showDefault();
  };

  window.removeRecent = function(e, idx) {
    e.stopPropagation();
    recentSearches.splice(idx, 1);
    saveRecents();
    showDefault();
  };

  function addToRecent(q) {
    q = q.trim();
    if (!q) return;
    recentSearches = [q, ...recentSearches.filter(r => r.toLowerCase() !== q.toLowerCase())].slice(0,8);
    saveRecents();
  }
}

// ============================================================
//  THEME
// ============================================================
function initTheme() {
  const saved = localStorage.getItem('rr_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  const btn = document.getElementById('themeToggle');
  btn.innerHTML = saved === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  btn.onclick = () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('rr_theme', next);
    btn.innerHTML = next === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    showToast(`${next === 'dark' ? '🌙 Dark' : '☀️ Light'} mode`, 'success');
  };
}

// ============================================================
//  USER
// ============================================================
function initUser() {
  const modal = document.getElementById('userModal');
  document.getElementById('userBtn').onclick = () => { renderUserModal(); modal.classList.add('open'); };
  document.getElementById('closeUserModal').onclick = () => modal.classList.remove('open');
  modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });
}

function renderUserModal() {
  const c = document.getElementById('userModalContent');
  if (currentUser) {
    c.innerHTML = `
      <div style="text-align:center;padding-bottom:16px;">
        <img src="${currentUser.avatar}" style="width:68px;height:68px;border-radius:50%;border:3px solid var(--accent-gold);margin-bottom:10px;">
        <h3>${currentUser.name}</h3>
        <p style="color:var(--text-muted);font-size:.85rem;">${currentUser.email}</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <button class="btn-outline" style="justify-content:center;" onclick="openWishlistPanel();document.getElementById('userModal').classList.remove('open')">❤️ Wishlist (${wishlist.length} items)</button>
        <button class="btn-outline" style="justify-content:center;" onclick="renderRecentlyViewed();document.getElementById('userModal').classList.remove('open');document.getElementById('recentlyViewedSection').scrollIntoView({behavior:'smooth'})">🕐 Recently Viewed</button>
        <button class="btn-burgundy" style="width:100%;justify-content:center;margin-top:6px;" id="signOutBtn">Sign Out</button>
      </div>`;
    document.getElementById('signOutBtn').onclick = () => {
      currentUser = null; localStorage.removeItem('rr_user');
      renderUserModal(); showToast('Signed out', 'error');
    };
  } else {
    c.innerHTML = `
      <h3 style="margin-bottom:8px;">Welcome Back!</h3>
      <p style="color:var(--text-muted);margin-bottom:20px;font-size:.88rem;">Sign in to save favourites, track deals &amp; get personalised picks.</p>
      <button class="btn-gold" id="googleSignInBtn" style="width:100%;justify-content:center;font-size:.95rem;">
        <i class="fab fa-google"></i> Continue with Google
      </button>
      <p style="text-align:center;font-size:.72rem;color:var(--text-muted);margin-top:14px;"><i class="fas fa-lock"></i> Your data is safe with us</p>`;
    document.getElementById('googleSignInBtn').onclick = () => {
      currentUser = { name: 'Priya Sharma', email: 'priya@example.com', avatar: 'https://i.pravatar.cc/150?img=47' };
      localStorage.setItem('rr_user', JSON.stringify(currentUser));
      renderUserModal();
      showToast('🎉 Signed in successfully!', 'success');
    };
  }
}

// ============================================================
//  NEWSLETTER
// ============================================================
function initNewsletter() {
  const emailInput = document.getElementById('newsletterEmail');
  const btn        = document.getElementById('newsletterBtn');
  const errorEl    = document.getElementById('nlError');
  const checkEl    = document.getElementById('nlCheck');
  const wrapEl     = document.getElementById('nlEmailWrap');
  const gdpr       = document.getElementById('nlGdpr');

  function validateEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      const v = emailInput.value.trim();
      if (!v) { wrapEl?.classList.remove('valid','error'); if(checkEl) checkEl.style.display='none'; if(errorEl) errorEl.textContent=''; return; }
      if (validateEmail(v)) {
        wrapEl?.classList.add('valid'); wrapEl?.classList.remove('error');
        if (checkEl) checkEl.style.display = 'flex';
        if (errorEl) errorEl.textContent = '';
      } else {
        wrapEl?.classList.remove('valid'); wrapEl?.classList.add('error');
        if (checkEl) checkEl.style.display = 'none';
        if (errorEl) { errorEl.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please enter a valid email address.'; }
      }
    });
  }

  if (btn) btn.onclick = () => {
    const email = emailInput?.value.trim() || '';
    if (!validateEmail(email)) {
      wrapEl?.classList.add('error');
      if (errorEl) errorEl.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please enter a valid email address.';
      emailInput?.focus(); return;
    }
    if (!gdpr?.checked) {
      if (errorEl) errorEl.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please accept the privacy policy.';
      return;
    }
    // Success flow
    showNlSuccess(email);
    // Save to localStorage
    const subs = JSON.parse(localStorage.getItem('rr_subscribers') || '[]');
    if (!subs.includes(email)) { subs.push(email); localStorage.setItem('rr_subscribers', JSON.stringify(subs)); }
    // Show welcome popup after 1.5s
    setTimeout(showWelcomeDiscount, 1500);
  };
}

function showNlSuccess(email) {
  const formState = document.getElementById('nlFormState');
  const successState = document.getElementById('nlSuccessState');
  if (formState)   formState.style.display = 'none';
  if (successState) { successState.style.display = 'block'; launchConfetti(); }
}

function launchConfetti() {
  const container = document.getElementById('nlConfetti');
  if (!container) return;
  const colors = ['#D4AF37','#F8D7DA','#C2185B','#fff','#F06292','#F0D060'];
  for (let i = 0; i < 40; i++) {
    const piece = document.createElement('div');
    piece.className = 'nl-confetti-piece';
    piece.style.cssText = `left:${Math.random()*100}%;top:${-Math.random()*20}px;background:${colors[Math.floor(Math.random()*colors.length)]};animation-delay:${Math.random()*.8}s;animation-duration:${.8+Math.random()*.8}s;width:${6+Math.random()*6}px;height:${6+Math.random()*6}px;border-radius:${Math.random()>.5?'50%':'2px'}`;
    container.appendChild(piece);
  }
  setTimeout(() => { if(container) container.innerHTML = ''; }, 2500);
}

function showWelcomeDiscount() {
  const popup = document.getElementById('welcomeDiscountPopup');
  if (popup && !sessionStorage.getItem('wdp_shown')) {
    popup.style.display = 'flex';
    sessionStorage.setItem('wdp_shown','1');
  }
}

window.copyNlCoupon = function(el) {
  navigator.clipboard?.writeText('WELCOME10');
  const hint = el.querySelector('.nl-coupon-hint');
  if (hint) { hint.innerHTML = '<i class="fas fa-check"></i> Copied!'; setTimeout(() => { hint.innerHTML = '<i class="fas fa-copy"></i> Click to copy'; }, 2000); }
  showToast('🎉 Coupon code WELCOME10 copied!', 'success');
};
window.copyWdpCode = function(el) {
  navigator.clipboard?.writeText('WELCOME10');
  el.textContent = '✅ Copied!';
  setTimeout(() => { el.innerHTML = 'WELCOME10 <i class="fas fa-copy"></i>'; }, 2000);
  showToast('🎉 Coupon copied!', 'success');
};

// ============================================================
//  MOBILE MENU
// ============================================================
function initMobileMenu() {
  const toggle = document.getElementById('mobileMenuToggle');
  const closeBtn = document.getElementById('mobileMenuClose');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('mobileDrawerOverlay');

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  window.closeMobileDrawer = closeDrawer;
  window.openMobileDrawer = openDrawer;

  if (toggle) toggle.onclick = openDrawer;
  if (closeBtn) closeBtn.onclick = closeDrawer;

  // Close on any drawer link click
  document.querySelectorAll('.drawer-link').forEach(a => a.addEventListener('click', closeDrawer));

  // Theme toggle inside drawer
  const drawerTheme = document.getElementById('drawerThemeBtn');
  if (drawerTheme) {
    drawerTheme.onclick = () => {
      const cur = document.documentElement.getAttribute('data-theme');
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('rr_theme', next);
      const mainBtn = document.getElementById('themeToggle');
      if (mainBtn) mainBtn.innerHTML = next === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
      drawerTheme.innerHTML = `<i class="fas fa-${next === 'dark' ? 'sun' : 'moon'}"></i> Toggle Theme`;
    };
  }

  // Close with Escape key
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
}

// ============================================================
//  MODALS CLOSE
// ============================================================
function initModals() {
  // Product modal close is now handled inside openProductDetail()
  // Exit modal close
  document.getElementById('exitModal').addEventListener('click', e => {
    if (e.target === document.getElementById('exitModal')) document.getElementById('exitModal').classList.remove('show');
  });
  // Share wishlist modal close
  document.getElementById('shareWlModal')?.addEventListener('click', e => {
    if (e.target === document.getElementById('shareWlModal')) document.getElementById('shareWlModal').classList.remove('open');
  });
  // Wishlist page — Escape closes it
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.getElementById('wishlistPage').classList.contains('open')) closeWishlistPage();
  });
}

// ============================================================
//  FILTER BUTTON STYLES
// ============================================================
function injectFilterStyles() {
  const s = document.createElement('style');
  s.textContent = `.btn-filter{padding:8px 18px;border-radius:50px;border:1.5px solid var(--border-card);background:var(--bg-card);color:var(--text-secondary);font-size:.8rem;font-weight:500;cursor:pointer;transition:all .25s;}.btn-filter.active,.btn-filter:hover{background:var(--accent-gold);color:#1a1a1a;border-color:var(--accent-gold);font-weight:700;}`;
  document.head.appendChild(s);
}

// Pre-define drawer controls so inline onclick attrs work before init()
window.closeMobileDrawer = function() {
  const d = document.getElementById('mobileDrawer');
  const o = document.getElementById('mobileDrawerOverlay');
  if (d) d.classList.remove('open');
  if (o) o.classList.remove('open');
  document.body.style.overflow = '';
};

// Footer newsletter
window.footerSubscribe = function(e) {
  e.preventDefault();
  const email = document.getElementById('footerEmail')?.value.trim();
  if (email && email.includes('@')) {
    showToast('💌 Welcome to the Radiance Club! Check your inbox.', 'success');
    document.getElementById('footerEmail').value = '';
  } else {
    showToast('Please enter a valid email address.', 'error');
  }
};

// ============================================================
//  INIT
// ============================================================
function init() {
  injectFilterStyles();
  initTheme();
  renderCategories();
  renderTrending('', visibleCount);
  setTimeout(() => {
    const trendingEl = document.getElementById('trending');
    if (trendingEl) trendingEl.scrollIntoView({ behavior: 'smooth' });
  }, 100);
  renderFeaturedCollections();
  renderRecentlyViewed();
  updateWishlistBadge();
  renderWishlistPanel();
  initSlider();
  initDealTimer();
  initStickyCta();
  initExitIntent();
  initSearch();
  initUser();
  initNewsletter();
  initMobileMenu();
  initModals();
  initFilterTabs();
  initLiveActivity();
  initProofTicker();
  initViewerCounts();

  window.addEventListener('scroll', () => {
    document.getElementById('topNav').classList.toggle('scrolled', window.scrollY > 50);
    // Back to top button
    const btt = document.getElementById('backToTop');
    if (btt) btt.classList.toggle('visible', window.scrollY > 400);
  });

  loadSharedWishlist();

  // CTA ripple effect for product cards
  document.addEventListener('click', e => {
    const cta = e.target.closest('.pc__cta');
    if (!cta) return;
    const ripple = cta.querySelector('.pc__cta-ripple');
    if (!ripple) return;
    const rect = cta.getBoundingClientRect();
    ripple.style.left = (e.clientX - rect.left) + 'px';
    ripple.style.top  = (e.clientY - rect.top)  + 'px';
    cta.classList.remove('rippling');
    void cta.offsetWidth;
    cta.classList.add('rippling');
  });

  setTimeout(() => { document.getElementById('loadingScreen').classList.add('hidden'); }, 700);

  console.log('✨ Radiance & Ruche — CTR-optimised fashion affiliate site');
  console.log('📊 Products:', products.length, '| Wishlist:', wishlist.length);
}

document.addEventListener('DOMContentLoaded', init);

})();
