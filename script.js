  (function() {
            // ==================== DATA STORE ====================
            const products = [
                { id: 1, name: 'Floral Print Maxi Dress', price: 2499, originalPrice: 4999, discount: 50, category: 'dresses',
                    store: 'Amazon', storeIcon: 'amazon', rating: 4.5, reviews: 234, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80',
                    images: ['https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80',
                        'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80',
                        'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80'
                    ], description: 'Beautiful floral print maxi dress perfect for summer outings.',
                    affiliateLink: 'https://www.amazon.in/dp/example1?tag=affiliate', colors: ['Red', 'Blue', 'White'],
                    sizes: ['S', 'M', 'L', 'XL'], material: 'Cotton Blend' },
                { id: 2, name: 'Elegant Silk Saree', price: 3999, originalPrice: 8999, discount: 55, category: 'sarees',
                    store: 'Flipkart', storeIcon: 'flipkart', rating: 4.7, reviews: 512, image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80',
                    images: ['https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80',
                        'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80'
                    ], description: 'Stunning silk saree with intricate zari work.',
                    affiliateLink: 'https://www.flipkart.com/example2?affid=affiliate', colors: ['Gold', 'Red', 'Green'],
                    sizes: ['Free Size'], material: 'Silk' },
                { id: 3, name: 'Classic Pearl Necklace Set', price: 1299, originalPrice: 2999, discount: 57, category: 'jewelry',
                    store: 'Myntra', storeIcon: 'myntra', rating: 4.4, reviews: 189, image: 'https://images.unsplash.com/photo-1599643478518-a784e8e3f5f7?w=600&q=80',
                    images: ['https://images.unsplash.com/photo-1599643478518-a784e8e3f5f7?w=600&q=80'], description: 'Timeless pearl necklace set for elegant occasions.',
                    affiliateLink: 'https://www.myntra.com/example3', colors: ['White', 'Cream'], sizes: ['One Size'],
                    material: 'Freshwater Pearls' },
                { id: 4, name: 'Premium Leather Handbag', price: 3499, originalPrice: 6999, discount: 50, category: 'handbags',
                    store: 'Amazon', storeIcon: 'amazon', rating: 4.6, reviews: 345, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80',
                    images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80',
                        'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80'
                    ], description: 'Genuine leather handbag with gold-tone hardware.',
                    affiliateLink: 'https://www.amazon.in/dp/example4?tag=affiliate', colors: ['Black', 'Brown', 'Tan'],
                    sizes: ['Medium', 'Large'], material: 'Leather' },
                { id: 5, name: 'Vitamin C Brightening Serum', price: 799, originalPrice: 1599, discount: 50, category: 'skincare',
                    store: 'Nykaa', storeIcon: 'nykaa', rating: 4.3, reviews: 678, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80',
                    images: ['https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80'], description: 'Advanced Vitamin C serum for radiant skin.',
                    affiliateLink: 'https://www.nykaa.com/example5', colors: ['N/A'], sizes: ['30ml', '50ml'],
                    material: 'Serum' },
                { id: 6, name: 'Ankle Strap Block Heels', price: 1899, originalPrice: 3799, discount: 50, category: 'footwear',
                    store: 'Ajio', storeIcon: 'ajio', rating: 4.2, reviews: 156, image: 'https://images.unsplash.com/photo-1543163521-1bf539c16dd2?w=600&q=80',
                    images: ['https://images.unsplash.com/photo-1543163521-1bf539c16dd2?w=600&q=80'], description: 'Chic block heels with ankle strap detailing.',
                    affiliateLink: 'https://www.ajio.com/example6', colors: ['Nude', 'Black', 'Red'], sizes: ['36', '37',
                        '38', '39', '40'
                    ], material: 'Suede' },
                { id: 7, name: 'Embroidered Kurta Set', price: 2199, originalPrice: 4399, discount: 50, category: 'ethnic-wear',
                    store: 'Flipkart', storeIcon: 'flipkart', rating: 4.5, reviews: 290, image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80',
                    images: ['https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80'], description: 'Beautiful embroidered kurta with palazzo pants.',
                    affiliateLink: 'https://www.flipkart.com/example7?affid=affiliate', colors: ['Blue', 'Pink', 'Green'],
                    sizes: ['S', 'M', 'L', 'XL', 'XXL'], material: 'Cotton Silk' },
                { id: 8, name: 'Gold Plated Bangles Set', price: 899, originalPrice: 1999, discount: 55, category: 'jewelry',
                    store: 'Amazon', storeIcon: 'amazon', rating: 4.6, reviews: 423, image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&q=80',
                    images: ['https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&q=80'], description: 'Elegant gold-plated bangles for everyday glam.',
                    affiliateLink: 'https://www.amazon.in/dp/example8?tag=affiliate', colors: ['Gold', 'Rose Gold'],
                    sizes: ['2.4', '2.6', '2.8'], material: 'Gold Plated Brass' },
            ];

            const categories = [
                { name: 'Dresses', icon: '👗', slug: 'dresses' }, { name: 'Tops', icon: '👚', slug: 'tops' },
                { name: 'Sarees', icon: '🥻', slug: 'sarees' }, { name: 'Ethnic Wear', icon: '✨', slug: 'ethnic-wear' },
                { name: 'Western Wear', icon: '👖', slug: 'western-wear' }, { name: 'Footwear', icon: '👠',
                slug: 'footwear' },
                { name: 'Handbags', icon: '👜', slug: 'handbags' }, { name: 'Jewelry', icon: '💍', slug: 'jewelry' },
                { name: 'Beauty', icon: '💄', slug: 'beauty' }, { name: 'Skincare', icon: '🧴', slug: 'skincare' },
                { name: 'Accessories', icon: '🕶️', slug: 'accessories' },
            ];

            const collections = [
                { name: 'Summer Collection', image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=600&q=80',
                    desc: 'Light & breezy styles' },
                { name: 'Wedding Collection', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80',
                    desc: 'Bridal & guest wear' },
                { name: 'Party Wear', image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80',
                    desc: 'Stand out looks' },
                { name: 'Office Wear', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80',
                    desc: 'Professional chic' },
            ];

            let wishlist = JSON.parse(localStorage.getItem('rr_wishlist') || '[]');
            let recentlyViewed = JSON.parse(localStorage.getItem('rr_recently') || '[]');
            let currentUser = JSON.parse(localStorage.getItem('rr_user') || 'null');
            let clickCounts = JSON.parse(localStorage.getItem('rr_clicks') || '{}');

            // ==================== UTILITY FUNCTIONS ====================
            function saveWishlist() { localStorage.setItem('rr_wishlist', JSON.stringify(wishlist)); }

            function saveRecentlyViewed() { localStorage.setItem('rr_recently', JSON.stringify(recentlyViewed.slice(0,
                    20))); }

            function saveClicks() { localStorage.setItem('rr_clicks', JSON.stringify(clickCounts)); }

            function showToast(msg, type = 'success') {
                const container = document.getElementById('toastContainer');
                const toast = document.createElement('div');
                toast.className = `toast ${type}`;
                toast.textContent = msg;
                container.appendChild(toast);
                setTimeout(() => { toast.style.opacity = '0';
                    toast.style.transition = 'opacity 0.3s';
                    setTimeout(() => toast.remove(), 300); }, 3000);
            }

            function formatPrice(p) { return '₹' + p.toLocaleString('en-IN'); }

            function getAffiliateUrl(product) {
                clickCounts[product.id] = (clickCounts[product.id] || 0) + 1;
                saveClicks();
                console.log(`🔗 Affiliate click tracked: Product #${product.id} → ${product.store} (Total clicks: ${clickCounts[product.id]})`);
                return product.affiliateLink;
            }

            // ==================== RENDER FUNCTIONS ====================
            function renderCategories() {
                const grid = document.getElementById('categoryGrid');
                grid.innerHTML = categories.map(c => `
                <div class="category-card" onclick="window.filterByCategory('${c.slug}')">
                  <span class="cat-icon">${c.icon}</span>
                  <span>${c.name}</span>
                </div>
              `).join('');
            }

            function renderProductCard(p) {
                const isLiked = wishlist.includes(p.id);
                return `
                <div class="product-card" data-id="${p.id}">
                  <div class="img-wrap" onclick="window.openProductDetail(${p.id})">
                    <img src="${p.image}" alt="${p.name}" loading="lazy">
                    <span class="discount-badge">-${p.discount}%</span>
                    <span class="store-badge">${p.store}</span>
                  </div>
                  <button class="wishlist-heart ${isLiked?'liked':''}" onclick="window.toggleWishlist(${p.id}, event)" aria-label="Wishlist">
                    <i class="fas fa-heart"></i>
                  </button>
                  <div class="product-info" onclick="window.openProductDetail(${p.id})">
                    <h4>${p.name}</h4>
                    <div class="price-row">
                      <span class="price-current">${formatPrice(p.price)}</span>
                      <span class="price-original">${formatPrice(p.originalPrice)}</span>
                    </div>
                    <button class="btn-affiliate-sm" onclick="window.handleAffiliateClick(${p.id}, event)">
                      <i class="fas fa-shopping-bag"></i> Buy on ${p.store}
                    </button>
                  </div>
                </div>
              `;
            }

            function renderTrending() {
                document.getElementById('trendingProducts').innerHTML = products.slice(0, 6).map(renderProductCard).join('');
            }

            function renderFeaturedCollections() {
                document.getElementById('featuredCollections').innerHTML = collections.map(c => `
                <div class="product-card" style="cursor:pointer;">
                  <div class="img-wrap">
                    <img src="${c.image}" alt="${c.name}" loading="lazy">
                  </div>
                  <div class="product-info" style="text-align:center;">
                    <h4>${c.name}</h4>
                    <p style="color:var(--text-muted);font-size:0.85rem;">${c.desc}</p>
                  </div>
                </div>
              `).join('');
            }

            function openProductDetail(id) {
                const p = products.find(pr => pr.id === id);
                if (!p) return;
                recentlyViewed = [p, ...recentlyViewed.filter(r => r.id !== p.id)].slice(0, 20);
                saveRecentlyViewed();
                const modal = document.getElementById('productModal');
                const content = document.getElementById('productDetailContent');
                content.innerHTML = `
                <div style="position:relative;">
                  <div style="display:flex;overflow-x:auto;gap:4px;scroll-snap-type:x mandatory;">
                    ${p.images.map(img=>`<img src="${img}" alt="${p.name}" style="width:100%;flex-shrink:0;scroll-snap-align:start;max-height:400px;object-fit:cover;">`).join('')}
                  </div>
                </div>
                <div style="padding:20px;">
                  <span style="color:var(--accent-gold);font-weight:600;font-size:0.8rem;">${p.store}</span>
                  <h2 style="font-family:'Playfair Display',serif;margin:6px 0;">${p.name}</h2>
                  <div style="display:flex;align-items:center;gap:10px;margin:8px 0;">
                    <span style="font-size:1.4rem;font-weight:700;color:var(--accent-gold);">${formatPrice(p.price)}</span>
                    <span style="text-decoration:line-through;color:var(--text-muted);">${formatPrice(p.originalPrice)}</span>
                    <span style="background:var(--accent-burgundy);color:#fff;padding:3px 10px;border-radius:50px;font-size:0.75rem;">-${p.discount}%</span>
                  </div>
                  <p style="color:var(--text-muted);margin:10px 0;">${p.description}</p>
                  <p><strong>Material:</strong> ${p.material}</p>
                  <p><strong>Sizes:</strong> ${p.sizes.join(', ')}</p>
                  <p><strong>Colors:</strong> ${p.colors.join(', ')}</p>
                  <p>⭐ ${p.rating} (${p.reviews} reviews)</p>
                  <button class="btn-gold" style="width:100%;justify-content:center;margin-top:16px;font-size:1rem;" onclick="window.handleAffiliateClick(${p.id}, event, true)">
                    <i class="fas fa-external-link-alt"></i> View on ${p.store}
                  </button>
                </div>
              `;
                modal.classList.add('open');
                document.body.style.overflow = 'hidden';
            }

            function handleAffiliateClick(id, event, closeModal = false) {
                event.stopPropagation();
                const p = products.find(pr => pr.id === id);
                if (!p) return;
                const url = getAffiliateUrl(p);
                showToast(`🔗 Redirecting to ${p.store}...`, 'success');
                if (closeModal) {
                    document.getElementById('productModal').classList.remove('open');
                    document.body.style.overflow = '';
                }
                setTimeout(() => window.open(url, '_blank', 'noopener'), 400);
            }

            function toggleWishlist(id, event) {
                event.stopPropagation();
                // Require login for wishlist (as per spec)
                if (!currentUser) {
                    showToast('Please sign in to save favorites 🔐', 'error');
                    document.getElementById('userModal').classList.add('open');
                    return;
                }
                const idx = wishlist.indexOf(id);
                if (idx > -1) { wishlist.splice(idx, 1);
                    showToast('Removed from wishlist', 'error'); } else { wishlist.push(id);
                    showToast('Added to wishlist! ❤️', 'success'); }
                saveWishlist();
                updateWishlistBadge();
                renderTrending();
                renderFeaturedCollections();
            }

            function updateWishlistBadge() {
                const badge = document.getElementById('wishlistBadge');
                if (wishlist.length > 0) { badge.style.display = 'block';
                    badge.textContent = wishlist.length > 9 ? '9+' : wishlist.length; } else { badge.style.display =
                    'none'; }
            }

            function filterByCategory(slug) {
                const filtered = products.filter(p => p.category === slug);
                document.getElementById('trendingProducts').innerHTML = filtered.length > 0 ?
                    filtered.map(renderProductCard).join('') :
                    '<p style="text-align:center;grid-column:1/-1;color:var(--text-muted);">No products found in this category.</p>';
                document.getElementById('trending').scrollIntoView({ behavior: 'smooth' });
                showToast(`Showing: ${slug.replace('-',' ')}`, 'success');
            }

            // Expose functions to global scope for inline handlers
            window.openProductDetail = openProductDetail;
            window.handleAffiliateClick = handleAffiliateClick;
            window.toggleWishlist = toggleWishlist;
            window.filterByCategory = filterByCategory;

            // ==================== HERO SLIDER ====================
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
                    slides[current].classList.remove('active');
                    dots[current].classList.remove('active');
                    current = i;
                    slides[current].classList.add('active');
                    dots[current].classList.add('active');
                }
                document.getElementById('sliderPrev').onclick = () => goTo((current - 1 + slides.length) % slides.length);
                document.getElementById('sliderNext').onclick = () => goTo((current + 1) % slides.length);
                let interval = setInterval(() => goTo((current + 1) % slides.length), 5000);
                document.getElementById('heroSlider').addEventListener('mouseenter', () => clearInterval(interval));
                document.getElementById('heroSlider').addEventListener('mouseleave', () => { clearInterval(interval);
                    interval = setInterval(() => goTo((current + 1) % slides.length), 5000); });
            }

            // ==================== DEAL TIMER ====================
            function initDealTimer() {
                const endTime = new Date();
                endTime.setHours(endTime.getHours() + 4);
                endTime.setMinutes(endTime.getMinutes() + 32);
                endTime.setSeconds(endTime.getSeconds() + 18);

                function update() {
                    const now = new Date();
                    const diff = endTime - now;
                    if (diff <= 0) { document.getElementById('dealTimer').textContent = '00:00:00'; return; }
                    const h = Math.floor(diff / 3600000);
                    const m = Math.floor((diff % 3600000) / 60000);
                    const s = Math.floor((diff % 60000) / 1000);
                    document.getElementById('dealTimer').textContent =
                        `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
                }
                update();
                setInterval(update, 1000);
            }

            // ==================== SEARCH ====================
            function initSearch() {
                const searchModal = document.getElementById('searchModal');
                const searchInput = document.getElementById('searchInput');
                const searchResults = document.getElementById('searchResults');
                document.getElementById('searchToggle').onclick = () => { searchModal.classList.add('open');
                    searchInput.focus(); };
                document.getElementById('closeSearchModal').onclick = () => searchModal.classList.remove('open');
                searchInput.addEventListener('input', () => {
                    const q = searchInput.value.toLowerCase().trim();
                    if (!q) { searchResults.innerHTML = ''; return; }
                    const results = products.filter(p => p.name.toLowerCase().includes(q) || p.category
                        .toLowerCase().includes(q));
                    searchResults.innerHTML = results.length > 0 ? results.map(p => `
                  <div class="glass-card" style="padding:12px;margin-bottom:8px;cursor:pointer;display:flex;gap:12px;align-items:center;" onclick="openProductDetail(${p.id});searchModal.classList.remove('open');">
                    <img src="${p.image}" alt="${p.name}" style="width:60px;height:60px;object-fit:cover;border-radius:8px;">
                    <div>
                      <p style="font-weight:600;">${p.name}</p>
                      <p style="color:var(--accent-gold);font-size:0.85rem;">${formatPrice(p.price)} <span style="color:var(--text-muted);text-decoration:line-through;">${formatPrice(p.originalPrice)}</span></p>
                    </div>
                  </div>
                `).join('') : '<p style="color:var(--text-muted);text-align:center;">No results found</p>';
                });
                searchModal.addEventListener('click', (e) => { if (e.target === searchModal) searchModal.classList.remove(
                        'open'); });
            }

            // ==================== THEME TOGGLE ====================
            function initTheme() {
                const saved = localStorage.getItem('rr_theme') || 'dark';
                document.documentElement.setAttribute('data-theme', saved);
                const btn = document.getElementById('themeToggle');
                btn.innerHTML = saved === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
                btn.onclick = () => {
                    const current = document.documentElement.getAttribute('data-theme');
                    const next = current === 'dark' ? 'light' : 'dark';
                    document.documentElement.setAttribute('data-theme', next);
                    localStorage.setItem('rr_theme', next);
                    btn.innerHTML = next === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
                    showToast(`${next==='dark'?'🌙 Dark':'☀️ Light'} mode activated`, 'success');
                };
            }

            // ==================== USER / GOOGLE AUTH MOCK ====================
            function initUser() {
                const userModal = document.getElementById('userModal');
                const userBtn = document.getElementById('userBtn');
                const closeBtn = document.getElementById('closeUserModal');
                userBtn.onclick = () => { updateUserModal();
                    userModal.classList.add('open'); };
                closeBtn.onclick = () => userModal.classList.remove('open');
                userModal.addEventListener('click', (e) => { if (e.target === userModal) userModal.classList.remove(
                    'open'); });

                function updateUserModal() {
                    const content = document.getElementById('userModalContent');
                    if (currentUser) {
                        content.innerHTML = `
                    <div style="text-align:center;">
                      <img src="${currentUser.avatar}" alt="avatar" style="width:70px;height:70px;border-radius:50%;margin-bottom:12px;border:3px solid var(--accent-gold);">
                      <h3>${currentUser.name}</h3>
                      <p style="color:var(--text-muted);">${currentUser.email}</p>
                    </div>
                    <div style="margin-top:20px;">
                      <div style="display:flex;flex-direction:column;gap:8px;">
                        <button class="btn-outline" style="text-align:center;" onclick="showToast('Wishlist: ${wishlist.length} items')">❤️ Wishlist (${wishlist.length})</button>
                        <button class="btn-outline" style="text-align:center;" onclick="showToast('Recently viewed: ${recentlyViewed.length} products')">🕐 Recently Viewed</button>
                        <button class="btn-outline" style="text-align:center;">⚙️ Notification Preferences</button>
                        <button class="btn-burgundy" style="width:100%;justify-content:center;margin-top:8px;" id="signOutBtn">Sign Out</button>
                      </div>
                    </div>
                  `;
                        document.getElementById('signOutBtn').onclick = () => {
                            currentUser = null;
                            localStorage.removeItem('rr_user');
                            updateUserModal();
                            showToast('Signed out', 'error');
                        };
                    } else {
                        content.innerHTML = `
                    <h3 style="margin-bottom:16px;">Welcome</h3>
                    <p style="color:var(--text-muted);margin-bottom:20px;">Sign in to save favorites & get deal alerts.</p>
                    <button class="btn-gold" id="googleSignInBtn" style="width:100%;justify-content:center;">
                      <i class="fab fa-google"></i> Sign in with Google
                    </button>
                  `;
                        document.getElementById('googleSignInBtn').onclick = () => {
                            currentUser = { name: 'Priya Sharma', email: 'priya@example.com', avatar: 'https://i.pravatar.cc/150?img=47' };
                            localStorage.setItem('rr_user', JSON.stringify(currentUser));
                            updateUserModal();
                            showToast('Signed in with Google! 🎉', 'success');
                        };
                    }
                }
                // Initial render
                updateUserModal();
            }

            // ==================== NEWSLETTER ====================
            function initNewsletter() {
                document.getElementById('newsletterBtn').onclick = () => {
                    const email = document.getElementById('newsletterEmail').value.trim();
                    if (email && email.includes('@')) {
                        showToast('Subscribed successfully! 💌', 'success');
                        document.getElementById('newsletterEmail').value = '';
                    } else {
                        showToast('Please enter a valid email.', 'error');
                    }
                };
            }

            // ==================== MOBILE MENU ====================
            function initMobileMenu() {
                const toggle = document.getElementById('mobileMenuToggle');
                const navLinks = document.getElementById('navLinks');
                toggle.onclick = () => navLinks.classList.toggle('mobile-open');
                navLinks.querySelectorAll('a').forEach(a => a.onclick = () => navLinks.classList.remove('mobile-open'));
            }

            // ==================== PRODUCT MODAL CLOSE ====================
            function initProductModal() {
                const modal = document.getElementById('productModal');
                document.getElementById('closeProductModal').onclick = () => { modal.classList.remove('open');
                    document.body.style.overflow = ''; };
                modal.addEventListener('click', (e) => { if (e.target === modal) { modal.classList.remove('open');
                        document.body.style.overflow = ''; } });
            }

            // ==================== INIT ====================
            function init() {
                renderCategories();
                renderTrending();
                renderFeaturedCollections();
                updateWishlistBadge();
                initSlider();
                initDealTimer();
                initSearch();
                initTheme();
                initUser();
                initNewsletter();
                initMobileMenu();
                initProductModal();

                window.addEventListener('scroll', () => {
                    document.getElementById('topNav').classList.toggle('scrolled', window.scrollY > 50);
                });

                setTimeout(() => {
                    document.getElementById('loadingScreen').classList.add('hidden');
                }, 800);

                console.log('✨ Radiance & Ruche - Premium Fashion Affiliate Website');
                console.log('📊 Products loaded:', products.length);
                console.log('👗 Categories:', categories.length);
                console.log('🔐 Admin panel: /admin-secure-dashboard-radiance-ruche');
                console.log('💡 All affiliate clicks are tracked in localStorage.');
            }

            document.addEventListener('DOMContentLoaded', init);
        })();
