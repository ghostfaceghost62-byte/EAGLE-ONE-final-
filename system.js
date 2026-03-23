// ==================== GLOBAL STATE ====================
let products = JSON.parse(localStorage.getItem('eagle_products')) || [];
let cart = JSON.parse(localStorage.getItem('eagle_cart')) || [];
let users = JSON.parse(localStorage.getItem('eagle_users')) || [];
let orders = JSON.parse(localStorage.getItem('eagle_orders')) || [];

// ==================== PRELOADED PRODUCTS ====================
const DEFAULT_PRODUCTS = [
    {
        id: 1001,
        name: "HyperX Carbon Helmet",
        price: 4800,
        stock: 12,
        image: "https://nexx-helmets.com.au/cdn/shop/files/XLIFECOUNTRY_TERRA_GREY_RED_34-768x768.png?v=1754617488&width=416"
    },
    {
        id: 1002,
        name: "Torque Racing Gloves",
        price: 1450,
        stock: 30,
        image: "https://scontent.fmnl40-1.fna.fbcdn.net/v/t1.6435-9/94377511_2707875332668894_1898783828718125056_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeGvoINHmVBA-B9rEs6NuT6u12pU_J7vNz7XalT8nu83PvIHuZ3XS7zgmtQ0z5nyxQ1KN-a9y3r2fgIUAjw-CikU&_nc_ohc=3FjkJMcmZpMQ7kNvwFo-wmh&_nc_oc=Ado9K9FDAIisi16_esBJhTu0FaTh9y9jR2CfABE93j1_TKoFcLESKTJodEbsTJUQEQw&_nc_zt=23&_nc_ht=scontent.fmnl40-1.fna&_nc_gid=f96uDAGztxi2Oxdk86fjcg&_nc_ss=7a32e&oh=00_Afy2V8k_uc4fY5vdrU0ERldOkUqBIyCASPiU3d9PakUVew&oe=69E8E85E"
    },
    {
        id: 1003,
        name: "Nitro Exhaust System",
        price: 9200,
        stock: 6,
        image: "https://images.amainhobbies.com/cdn-cgi/image/f=auto,width=400/images/large/ptk/ptk-2135.jpg"
    },
    {
        id: 1004,
        name: "Velo Speed Jacket",
        price: 5500,
        stock: 14,
        image: "https://media.johnlewiscontent.com/i/JohnLewis/001587545"
    },
    {
        id: 1005,
        name: "TrailMaster Offroad Tires",
        price: 16500,
        stock: 8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt0ZcM4XwGNk5UsvpFdul7Oib_TET5QC28bA&s=0&h=500&w=500"
    },
    {
        id: 1006,
        name: "Apex Knee Guards",
        price: 2200,
        stock: 20,
        image: "https://innebandy24.com/cdn/shop/files/Promask_2_fbd38c5f-fd55-450b-9a5e-3de395739dfc.jpg?crop=center&height=2048&v=1758009171&width=2048"
    },
    {
        id: 1007,
        name: "Carbon Fiber Footpegs",
        price: 3100,
        stock: 18,
        image: "https://s.alicdn.com/@sc04/kf/Hb98be073f0394349872580f51b14ad24f/AKOSO-S1000R-Accessories-3K-Full-Carbon-Fiber-Motorcycle-Rear-Rearset-Adjustable-Foot-Pegs-Heel-Guards-for-BMW-S1000R-2021-2024.jpg"
    },
    {
        id: 1008,
        name: "Pro Racing Boots",
        price: 7800,
        stock: 10,
        image: "https://down-ph.img.susercontent.com/file/ph-11134207-81zti-mhsii9ebl53aab"
    },
    {
        id: 1009,
        name: "Grip-X Handlebar Tape",
        price: 680,
        stock: 50,
        image: "https://m.media-amazon.com/images/I/71o4uvEbIOL._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 1010,
        name: "Easton Stealth Chest Protector",
        price: 3600,
        stock: 16,
        image: "https://u-mercari-images.mercdn.net/photos/m77305977699_1.jpg?1698823266"
    },
    // --- NEW PRODUCTS ADDED BELOW ---
    {   
        id: 1012,
        name: "Blade Cycling Half Finger Gloves (Pair) Assorted Colors",
        price: 175,
        stock: 59,
        image: "https://www.spocampsports.com/cdn/shop/products/product-image-1439769645_grande.jpg?v=1596611398",
    },
    {   
        id: 1013,
        name: "Bosny Spray Paint #4 Flat Black 300g",
        price: 239,
        stock: 6,
        image: "https://media.pickaroo.com/media/thumb/variant_photos/2021/11/15/jQJJRiY76Ny8aU28oGyeRG_watermark_400.jpg",
    },
    {   
        id: 1014,
        name: "Repsol Racing Motorcycle Oil 4T 10W-40 Fully Synthetic 1 Liter",
        price: 619,
        stock: 136,
        image: "https://blade.ph/cdn/shop/files/ssph.zone-1723777904-MOTORCYCLE_OIL_4T_10W-40__1_LITERS_-2_800x.jpg?v=1723778136",
    },
    {   
        id: 1015,
        name: "Alpha Tech Ridelock Motorcycle / Bike Phone Holder AT-RL1",
        price: 949,
        stock: 10,
        image: "https://alphatechhub.com/cdn/shop/files/rl1Artboard1.jpg?v=1772504806&width=533",
    },
    {   
        id: 1016,
        name: "Aeropak CVT/FI Cleaner 500ml for Motorcycle and Scooter",
        price: 139,
        stock: 26,
        image: "https://ph-test-11.slatic.net/p/f28166d7c233fb35bc89f9d7aa90ac11.jpg",
    },
    {   
        id: 1017,
        name: "HP Motorcycle Camera m500 Dual Channel 1080P Full HD",
        price: 9899,
        stock: 5,
        image: "https://ph-test-11.slatic.net/p/85a615aa62fec5f0f75330dbb622ccdc.png",
    },
    {   
        id: 1018,
        name: "Type S Waterproof Motorcycle Cover (Large)",
        price: 1599,
        stock: 5,
        image: "https://blade.ph/cdn/shop/products/ssph.zone-1694403268-Type_S_Waterproof_Motorcycle_Cover__Large__AC58113-3_800x.jpg?v=1694417819",
    },
    {   
        id: 1019,
        name: "HIRO Helmet OF (XL) HD-585 Matte Black Elite Red Color",
        price: 1999,
        stock: 1,
        image: "https://blade.ph/cdn/shop/products/ssph.zone-1683796817-HIRO_Helmet_HD-585_Matte_Black_Elite_Red_3_1024x.jpg?v=1683797247",
        },
    {   
        id: 1020,
        name: "Blade Decorative LED Lamps T10-10LED 12V (Blue)",
        price: 299,
        stock: 7,
        image: "https://blade.ph/cdn/shop/products/BLADEDECORATIVELAMPT107LEDBLUE_1024x.jpg?v=1651710773",
    },   
    {   
        id: 1021,
        name: "SHEILD High Capacity Motorcycle Tail Bag)",
        price: 2499,
        stock: 7,
        image: "https://down-ph.img.susercontent.com/file/ph-11134207-7rasb-m8d229idh6se6e",
    }
];

// Initialize products if empty
const VERSION = "v9"; // change this when you update products

const storedVersion = localStorage.getItem('eagle_products_version');

if (!storedVersion || storedVersion !== VERSION) {
    products = DEFAULT_PRODUCTS;
    localStorage.setItem('eagle_products', JSON.stringify(products));
    localStorage.setItem('eagle_products_version', VERSION);
}

// ==================== SAVE STATE ====================
function saveAll() {
    localStorage.setItem('eagle_products', JSON.stringify(products));
    localStorage.setItem('eagle_cart', JSON.stringify(cart));
    localStorage.setItem('eagle_users', JSON.stringify(users));
    localStorage.setItem('eagle_orders', JSON.stringify(orders));
}

// ==================== AUTH ====================
function logout() {
    localStorage.removeItem('eagle_active_user');
    window.location.replace('index.html');
}

function getActiveUser() {
    try {
        return JSON.parse(localStorage.getItem('eagle_active_user'));
    } catch { return null; }
}

// ==================== TOAST ====================
function showToast(message, type = 'default') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }
    const icons = { default: '⚡', success: '✅', error: '❌' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${icons[type] || icons.default}</span> ${message}`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'toastOut 0.35s forwards';
        setTimeout(() => toast.remove(), 350);
    }, 3000);
}

// ==================== STORE ====================
function renderStore(filter = "") {
    const grid = document.getElementById('store-grid');
    if (!grid) return;

    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(filter.toLowerCase())
    );

    if (filtered.length === 0) {
        grid.innerHTML = `
        <div class="empty-state">
            <span class="empty-icon">🔍</span>
            <p>NO GEAR MATCHING "${filter.toUpperCase()}"</p>
        </div>`;
        return;
    }

    grid.innerHTML = filtered.map(p => {
        const oos = p.stock <= 0;
        const stockPercent = Math.min((p.stock / 30) * 100, 100);
        const stockClass = p.stock > 15 ? 'stock-high' : p.stock > 5 ? 'stock-med' : 'stock-low';

        return `
        <div class="product-card ${oos ? 'out-of-stock' : ''}" onclick="event.target.tagName !== 'BUTTON' && openProductModal(${p.id})">
            <div class="product-img-wrap">
                <img src="${p.image || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'}"
                     class="product-img" alt="${p.name}"
                     onerror="this.src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'">
                <span class="product-badge ${oos ? 'oos' : ''}">${oos ? 'OUT OF STOCK' : 'IN STOCK'}</span>
            </div>
            <div class="product-info">
                <h3>${p.name}</h3>
                <span class="price">₱${p.price.toLocaleString()}</span>
                <div class="stock-bar">
                    <div class="stock-bar-fill ${stockClass}" style="width:${oos ? 0 : stockPercent}%"></div>
                </div>
                <p class="stock-info">${oos ? '— OUT OF STOCK —' : `${p.stock} units available`}</p>
                <button class="${oos ? 'btn-outline' : 'btn-primary'} add-btn"
                    onclick="event.stopPropagation(); addToCart(${p.id})" ${oos ? "disabled" : ""}>
                    ${oos ? "OUT OF STOCK" : "ADD TO GEAR"}
                </button>
            </div>
        </div>`;
    }).join('');
}

function filterStore() {
    const q = document.getElementById('product-search');
    if (q) renderStore(q.value);
}

// Product modal
function openProductModal(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    const existing = document.getElementById('product-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'product-modal';
    modal.style.cssText = `
        position:fixed; inset:0; z-index:3000; display:flex;
        align-items:center; justify-content:center;
        background:rgba(0,0,0,0.8); backdrop-filter:blur(8px); padding:20px;
    `;
    modal.innerHTML = `
    <div style="background:var(--bg-card); border:1px solid var(--border-accent); border-radius:20px;
                max-width:500px; width:100%; overflow:hidden; position:relative;">
        <button onclick="document.getElementById('product-modal').remove()"
            style="position:absolute; top:14px; right:14px; background:rgba(255,255,255,0.05);
                   border:1px solid var(--border); padding:5px 10px; font-size:0.8rem; z-index:1;">✕</button>
        <img src="${p.image || ''}" style="width:100%; height:260px; object-fit:cover;"
             onerror="this.style.display='none'">
        <div style="padding:1.8rem;">
            <p style="font-family:'Space Mono',monospace; font-size:0.65rem; letter-spacing:3px; color:var(--text-muted); margin-bottom:8px;">EAGLE ONE GEAR</p>
            <h2 style="font-family:'Syne',sans-serif; font-size:1.4rem; margin-bottom:12px;">${p.name}</h2>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
                <span style="font-size:2rem; font-family:'Rajdhani',sans-serif; font-weight:800; color:var(--accent);">₱${p.price.toLocaleString()}</span>
                <span style="font-family:'Space Mono',monospace; font-size:0.75rem; color:var(--text-muted);">${p.stock} in stock</span>
            </div>
            <button class="btn-primary btn-full" onclick="addToCart(${p.id}); document.getElementById('product-modal').remove();"
                ${p.stock <= 0 ? 'disabled' : ''}>
                ${p.stock <= 0 ? 'OUT OF STOCK' : 'ADD TO GEAR'}
            </button>
        </div>
    </div>`;
    modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
    document.body.appendChild(modal);
}

// ==================== CART ====================
function toggleCart() {
    const cart = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    if (cart && overlay) {
        cart.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

function addToCart(id) {
    const p = products.find(p => p.id === id);
    if (!p || p.stock <= 0) return;
    const item = cart.find(i => i.id === id);

    if (item) {
        if (item.qty >= p.stock) {
            showToast('Maximum stock reached!', 'error');
            return;
        }
        item.qty++;
    } else {
        cart.push({ ...p, qty: 1 });
    }

    updateCart();
    showToast(`${p.name} added to cart`, 'success');

    const sidebar = document.getElementById('cart-sidebar');
    if (sidebar && !sidebar.classList.contains('active')) toggleCart();
}

function updateCart() {
    const itemsEl = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    const countEl = document.getElementById('cart-count');

    if (!itemsEl || !totalEl || !countEl) return;

    let total = 0;
    let html = '';

    cart.forEach((item, idx) => {
        total += item.price * item.qty;
        html += `
        <div class="cart-item">
            <div class="item-details">
                <strong>${item.name}</strong>
                <span>₱${(item.price * item.qty).toLocaleString()}</span>
            </div>
            <div class="item-controls">
                <button class="btn-qty" onclick="changeQty(${idx}, -1)">−</button>
                <span class="qty-display">${item.qty}</span>
                <button class="btn-qty" onclick="changeQty(${idx}, 1)">+</button>
            </div>
        </div>`;
    });

    itemsEl.innerHTML = html || `
        <div style="text-align:center; padding:3rem 1rem;">
            <div style="font-size:2.5rem; margin-bottom:1rem;">🛒</div>
            <p style="color:var(--text-muted); font-family:'Space Mono',monospace; font-size:0.75rem; letter-spacing:2px;">GEAR BAG IS EMPTY</p>
        </div>`;

    totalEl.innerText = '₱' + total.toLocaleString();
    countEl.innerText = cart.reduce((a, b) => a + b.qty, 0);
    saveAll();
}

function changeQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) cart.splice(index, 1);
    updateCart();
}

function goCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }
    window.location.href = 'checkout.html';
}

// ==================== CHECKOUT ====================
function placeOrder() {
    if (!cart.length) return showToast('Cart is empty!', 'error');

    const name = document.getElementById('chk-name')?.value.trim();
    const address = document.getElementById('chk-address')?.value.trim();
    const contact = document.getElementById('chk-contact')?.value.trim();

    if (!name || !address || !contact) {
        showToast('Please fill all fields.', 'error');
        return;
    }

    // Deduct stock
    cart.forEach(c => {
        const p = products.find(prod => prod.id === c.id);
        if (p) p.stock = Math.max(0, p.stock - c.qty);
    });

    const total = cart.reduce((a, b) => a + (b.price * b.qty), 0);

    orders.push({
        id: Date.now(),
        customer: name,
        address,
        contact,
        items: [...cart],
        total,
        date: new Date().toLocaleDateString('en-PH'),
        status: 'Confirmed'
    });

    cart = [];
    saveAll();

    showToast('Order confirmed! 🎉', 'success');
    setTimeout(() => window.location.replace('shop.html'), 1500);
}

// ==================== ADMIN ====================
function renderAdmin() {
    if (document.getElementById('product-table-body')) renderProducts();
    if (document.getElementById('user-table')) renderUsers();
    if (document.getElementById('orders-list')) renderOrders();
    if (document.getElementById('admin-stats')) renderStats();
}

function renderStats() {
    const el = document.getElementById('admin-stats');
    if (!el) return;
    const totalRevenue = orders.reduce((a, b) => a + b.total, 0);
    const totalProducts = products.length;
    const totalUsers = users.filter(u => u.role === 'user').length;
    const totalOrders = orders.length;

    el.innerHTML = `
    <div class="stat-card">
        <span class="stat-icon">💰</span>
        <div class="stat-label">Total Revenue</div>
        <div class="stat-value accent-text">₱${totalRevenue.toLocaleString()}</div>
    </div>
    <div class="stat-card">
        <span class="stat-icon">📦</span>
        <div class="stat-label">Products</div>
        <div class="stat-value">${totalProducts}</div>
    </div>
    <div class="stat-card">
        <span class="stat-icon">📑</span>
        <div class="stat-label">Orders</div>
        <div class="stat-value">${totalOrders}</div>
    </div>
    <div class="stat-card">
        <span class="stat-icon">👥</span>
        <div class="stat-label">Operators</div>
        <div class="stat-value">${totalUsers}</div>
    </div>`;
}

function renderProducts() {
    const tb = document.getElementById('product-table-body');
    if (!tb) return;

    tb.innerHTML = products.length === 0
        ? `<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:2rem;">No products in inventory</td></tr>`
        : products.map(p => `
        <tr>
            <td><img src="${p.image || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100'}"
                     width="48" height="48"
                     style="border-radius:8px; object-fit:cover;"
                     onerror="this.src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100'"></td>
            <td><strong>${p.name}</strong></td>
            <td><span style="color:var(--accent); font-family:'Rajdhani',sans-serif; font-weight:700;">₱${p.price.toLocaleString()}</span></td>
            <td>
                <span style="font-family:'Space Mono',monospace; font-size:0.8rem; color:${p.stock <= 0 ? 'var(--danger)' : p.stock <= 5 ? '#f59e0b' : 'var(--success)'}">
                    ${p.stock}
                </span>
            </td>
            <td>
                <div class="action-btns">
                    <button class="btn-outline btn-sm" onclick="editProduct(${p.id})">Edit</button>
                    <button class="btn-danger btn-sm" onclick="deleteProduct(${p.id})">Delete</button>
                </div>
            </td>
        </tr>`).join('');
}

function saveProduct() {
    const name = document.getElementById('p-name')?.value.trim();
    const price = parseFloat(document.getElementById('p-price')?.value);
    const stock = parseInt(document.getElementById('p-stock')?.value);
    const img = document.getElementById('p-img')?.value.trim();
    const id = document.getElementById('p-id')?.value;

    if (!name || isNaN(price) || isNaN(stock)) {
        showToast('Please fill all required fields.', 'error');
        return;
    }
    if (price < 0 || stock < 0) {
        showToast('Price and stock must be positive.', 'error');
        return;
    }

    if (id) {
        const idx = products.findIndex(p => p.id == id);
        if (idx > -1) products[idx] = { id: parseInt(id), name, price, stock, image: img };
        showToast('Product updated!', 'success');
    } else {
        products.push({ id: Date.now(), name, price, stock, image: img });
        showToast('Product added!', 'success');
    }

    document.getElementById('admin-product-form')?.reset();
    document.getElementById('p-id').value = '';
    document.getElementById('form-submit-btn').innerText = 'ADD PRODUCT';

    saveAll();
    renderProducts();
    renderStats();
}

function editProduct(id) {
    const p = products.find(p => p.id === id);
    if (!p) return;
    document.getElementById('p-id').value = p.id;
    document.getElementById('p-name').value = p.name;
    document.getElementById('p-price').value = p.price;
    document.getElementById('p-stock').value = p.stock;
    document.getElementById('p-img').value = p.image || '';
    const btn = document.getElementById('form-submit-btn');
    if (btn) btn.innerText = 'UPDATE PRODUCT';
    document.getElementById('p-name')?.focus();
    document.getElementById('p-name')?.scrollIntoView({ behavior: 'smooth' });
}

function cancelEdit() {
    document.getElementById('admin-product-form')?.reset();
    document.getElementById('p-id').value = '';
    const btn = document.getElementById('form-submit-btn');
    if (btn) btn.innerText = 'ADD PRODUCT';
}

function deleteProduct(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    if (confirm(`Delete "${p.name}"?`)) {
        products = products.filter(x => x.id !== id);
        saveAll();
        renderProducts();
        renderStats();
        showToast('Product deleted.', 'default');
    }
}

function renderUsers() {
    const tb = document.getElementById('user-table');
    if (!tb) return;

    tb.innerHTML = users.length === 0
        ? `<tr><td colspan="3" style="text-align:center; color:var(--text-muted); padding:2rem;">No operators registered</td></tr>`
        : users.map((u, i) => `
        <tr>
            <td>
                <div style="display:flex; align-items:center; gap:10px;">
                    <div style="width:32px; height:32px; border-radius:50%; background:linear-gradient(135deg,var(--accent),#ff6b35);
                                display:flex; align-items:center; justify-content:center; font-size:0.75rem; font-weight:700; flex-shrink:0;">
                        ${u.username.charAt(0).toUpperCase()}
                    </div>
                    <strong>${u.username}</strong>
                </div>
            </td>
            <td><span class="badge ${u.role}">${u.role.toUpperCase()}</span></td>
            <td>
                ${u.role !== 'admin'
                    ? `<button class="btn-danger btn-sm" onclick="deleteUser(${i})">Revoke</button>`
                    : `<span style="color:var(--text-muted); font-size:0.8rem; font-family:'Space Mono',monospace;">PROTECTED</span>`}
            </td>
        </tr>`).join('');
}

function deleteUser(i) {
    if (confirm(`Revoke access for "${users[i].username}"?`)) {
        users.splice(i, 1);
        saveAll();
        renderUsers();
        renderStats();
        showToast('Operator access revoked.', 'default');
    }
}

function renderOrders() {
    const div = document.getElementById('orders-list');
    if (!div) return;

    if (orders.length === 0) {
        div.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; padding:3rem; color:var(--text-muted);">
            <div style="font-size:2.5rem; margin-bottom:1rem;">📋</div>
            <p style="font-family:'Space Mono',monospace; font-size:0.75rem; letter-spacing:2px;">NO ORDERS YET</p>
        </div>`;
        return;
    }

    div.innerHTML = orders.slice().reverse().map(o => `
    <div class="order-card">
        <div class="order-date">${o.date || '—'}</div>
        <div class="order-id">ORDER #${String(o.id).slice(-6)}</div>
        <div class="order-customer">${o.customer}</div>
        <div class="order-total">₱${o.total.toLocaleString()}</div>
        <div class="order-status">✓ CONFIRMED</div>
        <div class="order-items">${o.items.map(i => `${i.name} ×${i.qty}`).join('<br>')}</div>
    </div>`).join('');
}

function switchAdminTab(e, tab) {
    document.querySelectorAll('.main-content section').forEach(s => s.classList.add('hidden'));
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

    const section = document.getElementById('view-' + tab);
    if (section) section.classList.remove('hidden');
    if (e) e.currentTarget.classList.add('active');

    if (tab === 'collections') renderCollections();
    if (tab === 'faq') renderFAQAdmin();
    if (tab === 'blog') renderBlogAdmin();
    if (tab === 'support') renderSupportTickets();
}

// Collections
function renderCollections() {
    const div = document.getElementById('collections-display');
    if (!div) return;
    const cols = JSON.parse(localStorage.getItem('eagle_collections')) || { offers: [], newArrivals: [], bestSellers: [] };

    const labels = { offers: 'Offers', newArrivals: 'New Arrivals', bestSellers: 'Best Sellers' };

    div.innerHTML = Object.entries(cols).map(([key, arr]) => `
    <div class="admin-card">
        <h3>${labels[key] || key}</h3>
        ${arr.length === 0
            ? `<p style="color:var(--text-muted); font-size:0.85rem;">No items assigned.</p>`
            : `<ul style="list-style:none; display:flex; flex-direction:column; gap:8px; margin-top:1rem;">
                ${arr.map((item, i) => `
                <li style="display:flex; justify-content:space-between; align-items:center; padding:8px 12px;
                           background:rgba(255,255,255,0.02); border:1px solid var(--border); border-radius:8px; font-size:0.85rem;">
                    <span>${item}</span>
                    <button class="btn-danger btn-sm" onclick="removeFromCollection('${key}',${i})">Remove</button>
                </li>`).join('')}
               </ul>`}
    </div>`).join('');
}

function addToCollection() {
    const name = document.getElementById('col-name')?.value.trim();
    const type = document.getElementById('col-type')?.value;
    if (!name) return showToast('Enter item name', 'error');

    const key = type === 'new-arrivals' ? 'newArrivals' : type === 'best-sellers' ? 'bestSellers' : 'offers';
    const cols = JSON.parse(localStorage.getItem('eagle_collections')) || { offers: [], newArrivals: [], bestSellers: [] };
    cols[key].push(name);
    localStorage.setItem('eagle_collections', JSON.stringify(cols));
    document.getElementById('col-name').value = '';
    renderCollections();
    showToast('Item added to collection!', 'success');
}

function removeFromCollection(key, index) {
    const cols = JSON.parse(localStorage.getItem('eagle_collections')) || { offers: [], newArrivals: [], bestSellers: [] };
    cols[key].splice(index, 1);
    localStorage.setItem('eagle_collections', JSON.stringify(cols));
    renderCollections();
    showToast('Item removed.', 'default');
}

// FAQ Admin
function saveFAQ() {
    const q = document.getElementById('faq-question')?.value.trim();
    const a = document.getElementById('faq-answer')?.value.trim();
    if (!q || !a) return showToast('Fill all fields', 'error');

    const faq = JSON.parse(localStorage.getItem('eagle_faq')) || [];
    faq.push({ id: Date.now(), question: q, answer: a });
    localStorage.setItem('eagle_faq', JSON.stringify(faq));
    document.getElementById('faq-question').value = '';
    document.getElementById('faq-answer').value = '';
    renderFAQAdmin();
    showToast('FAQ entry saved!', 'success');
}

function renderFAQAdmin() {
    const tb = document.getElementById('faq-table-body');
    if (!tb) return;
    const faq = JSON.parse(localStorage.getItem('eagle_faq')) || [];
    tb.innerHTML = faq.length === 0
        ? `<tr><td colspan="3" style="text-align:center; color:var(--text-muted); padding:2rem;">No FAQ entries yet.</td></tr>`
        : faq.map((f, i) => `
        <tr>
            <td style="font-size:0.85rem;">${f.question}</td>
            <td style="font-size:0.85rem; color:var(--text-muted);">${f.answer}</td>
            <td><button class="btn-danger btn-sm" onclick="deleteFAQ(${i})">Delete</button></td>
        </tr>`).join('');
}

function deleteFAQ(i) {
    const faq = JSON.parse(localStorage.getItem('eagle_faq')) || [];
    faq.splice(i, 1);
    localStorage.setItem('eagle_faq', JSON.stringify(faq));
    renderFAQAdmin();
    showToast('FAQ entry deleted.', 'default');
}

// Blog Admin
function saveBlogPost() {
    const title = document.getElementById('blog-title')?.value.trim();
    const content = document.getElementById('blog-content')?.value.trim();
    if (!title || !content) return showToast('Fill all fields', 'error');

    const blog = JSON.parse(localStorage.getItem('eagle_blog')) || [];
    blog.push({ id: Date.now(), title, content, date: new Date().toLocaleDateString('en-PH') });
    localStorage.setItem('eagle_blog', JSON.stringify(blog));
    document.getElementById('blog-title').value = '';
    document.getElementById('blog-content').value = '';
    renderBlogAdmin();
    showToast('Report published!', 'success');
}

function renderBlogAdmin() {
    const div = document.getElementById('blog-admin-list');
    if (!div) return;
    const blog = JSON.parse(localStorage.getItem('eagle_blog')) || [];
    div.innerHTML = blog.length === 0
        ? `<div style="text-align:center; color:var(--text-muted); padding:2rem; font-size:0.85rem;">No reports published yet.</div>`
        : blog.slice().reverse().map((b, i) => `
        <div class="blog-card">
            <div class="blog-card-header">
                <h3>${b.title}</h3>
                <div class="blog-card-date">${b.date}</div>
            </div>
            <div class="blog-card-body">
                ${b.content.substring(0, 200)}${b.content.length > 200 ? '...' : ''}
            </div>
            <div style="padding:0.8rem 1.5rem; border-top:1px solid var(--border);">
                <button class="btn-danger btn-sm" onclick="deleteBlogPost(${b.id})">Delete</button>
            </div>
        </div>`).join('');
}

function deleteBlogPost(id) {
    let blog = JSON.parse(localStorage.getItem('eagle_blog')) || [];
    blog = blog.filter(b => b.id !== id);
    localStorage.setItem('eagle_blog', JSON.stringify(blog));
    renderBlogAdmin();
    showToast('Post deleted.', 'default');
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('store-grid')) renderStore();
    updateCart();
    renderAdmin();
});

function goBackAdmin() {
    window.location.href = 'admin.html';
}

// Show button only if came from admin
(function () {
    const params = new URLSearchParams(window.location.search);
    const isFromAdmin = params.get('from') === 'admin';

    const user = JSON.parse(localStorage.getItem('eagle_active_user') || '{}');

    if (isFromAdmin && user?.role === 'admin') {
        const btn = document.getElementById('admin-back-btn');
        if (btn) btn.style.display = 'inline-block';
    }
})();

if (_user?.role === 'admin') {
    document.getElementById('admin-back-btn').style.display = 'inline-block';
}

function renderSupportTickets() {
    const div = document.getElementById('support-tickets');
    if (!div) return;

    const tickets = JSON.parse(localStorage.getItem('eagle_tickets')) || [];

    if (tickets.length === 0) {
        div.innerHTML = `<p class="text-muted tech-font" style="font-size:0.85rem; opacity:0.5;">> NO TICKETS FOUND...</p>`;
        return;
    }

    div.innerHTML = tickets.slice().reverse().map(t => `
        <div style="border:1px solid var(--border); padding:12px; margin-bottom:10px; border-radius:8px;">
            <strong>${t.subject}</strong>
            <p style="font-size:0.8rem; color:var(--text-muted); margin:4px 0;">
                From: ${t.user} | ${t.date}
            </p>
            <p style="font-size:0.85rem;">${t.message}</p>
            <span style="font-size:0.7rem; color:var(--accent);">Status: ${t.status}</span>
        </div>
    `).join('');
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        document.body.classList.add('mobile');
    } else {
        document.body.classList.remove('mobile');
    }
});