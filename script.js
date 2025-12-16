/* Data Structure */
const storeData = [
    {
        category: "OTC Medicines",
        icon: "💊",
        id: "otc",
        products: [
            {
                name: "Paracetamol 500mg",
                image: "💊", // Using emoji as placeholder if no image
                prescription: false,
                composition: "Paracetamol IP 500mg",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 20,
                discount: 10,
                price: 18,
                desc: "Effective for fever and mild pain relief.",
                uses: "Fever, Headache, body pain",
                storage: "Store in a cool, dry place"
            },
            {
                name: "Vicks VapoRub",
                image: "🧴",
                prescription: false,
                composition: "Menthol, Camphor, Eucalyptus Oil",
                unit: "Bottle",
                quantity: "50g",
                mrp: 145,
                discount: 5,
                price: 138,
                desc: "Relief from cough and cold symptoms.",
                uses: "Blocked nose, cough, cold",
                storage: "Store below 30°C"
            },
            {
                name: "Digene Gel",
                image: "🧪",
                prescription: false,
                composition: "Magnesium Hydroxide, Simethicone",
                unit: "Bottle",
                quantity: "200ml",
                mrp: 180,
                discount: 0,
                price: 180,
                desc: "Antacid for relief from acidity and gas.",
                uses: "Acidity, Indigestion, Gas",
                storage: "Keep bottle tightly closed"
            }
        ]
    },
    {
        category: "Prescription Medicines",
        icon: "🩺",
        id: "rx",
        products: [
            {
                name: "Augmentin 625 Duo",
                image: "💊",
                prescription: true,
                composition: "Amoxicillin(500mg) + Clavulanic Acid(125mg)",
                unit: "Strip of 10",
                quantity: "1 Strip",
                mrp: 223,
                discount: 15,
                price: 190,
                desc: "Antibiotic used to treat bacterial infections.",
                uses: "Bacterial infections",
                storage: "Store below 25°C"
            },
            {
                name: "Telma 40",
                image: "💊",
                prescription: true,
                composition: "Telmisartan (40mg)",
                unit: "Strip of 15",
                quantity: "1 Strip",
                mrp: 130,
                discount: 10,
                price: 117,
                desc: "Used for high blood pressure & heart failure.",
                uses: "Hypertension, Heart failure",
                storage: "Store at room temperature"
            }
        ]
    },
    {
        category: "Cold, Cough & Fever",
        icon: "🤧",
        id: "cold",
        products: [
            {
                name: "Benadryl Cough Syrup",
                image: "🧴",
                prescription: false,
                composition: "Diphenhydramine (14.08mg)",
                unit: "Bottle",
                quantity: "150ml",
                mrp: 128,
                discount: 5,
                price: 122,
                desc: "For relief from cough and throat irritation.",
                uses: "Dry Cough, Sore throat",
                storage: "Store away from sunlight"
            }
        ]
    },
    {
        category: "Diabetes & BP Care",
        icon: "💉",
        id: "diabetes",
        products: [
            {
                name: "Accu-Chek Active Strips",
                image: "📏",
                prescription: false,
                composition: "Test Strips",
                unit: "Box",
                quantity: "50 Strips",
                mrp: 975,
                discount: 12,
                price: 858,
                desc: "Sugar testing strips for Accu-Chek Active glucometer.",
                uses: "Blood Glucose Monitoring",
                storage: "Store cap closed tightly"
            }
        ]
    },
    {
        category: "Skin & Cosmetic Care",
        icon: "🧴",
        id: "skin",
        products: [
            {
                name: "Nivea Soft Cream",
                image: "🥥",
                prescription: false,
                composition: "Vitamin E, Jojoba Oil",
                unit: "Jar",
                quantity: "200ml",
                mrp: 350,
                discount: 20,
                price: 280,
                desc: "Light moisturizer for face, body, and hands.",
                uses: "Dry Skin, Daily moisturization",
                storage: "Store in a cool place"
            }
        ]
    },
    {
        category: "Ayurvedic Products",
        icon: "🌿",
        id: "ayurveda",
        products: [
            {
                name: "Dabur Chyawanprash",
                image: "🍯",
                prescription: false,
                composition: "Amla, Herbs, Honey",
                unit: "Jar",
                quantity: "1kg",
                mrp: 395,
                discount: 10,
                price: 355,
                desc: "Immunity booster for all ages.",
                uses: "Immunity, Strength",
                storage: "Store in a dry place"
            }
        ]
    },
    {
        category: "Surgical & Medical Items",
        icon: "🧪",
        id: "surgical",
        products: [
            {
                name: "Dettol Antiseptic Liquid",
                image: "🧼",
                prescription: false,
                composition: "Chloroxylenol, Terpineol",
                unit: "Bottle",
                quantity: "550ml",
                mrp: 216,
                discount: 5,
                price: 205,
                desc: "Disinfectant liquid for first aid.",
                uses: "Cuts, Scratches, Disinfection",
                storage: "Keep out of reach of children"
            }
        ]
    },
    {
        category: "Baby Care Products",
        icon: "👶",
        id: "baby",
        products: [
            {
                name: "Pampers Active Baby (L)",
                image: "🧸",
                prescription: false,
                composition: "Cotton soft material",
                unit: "Pack",
                quantity: "44 Pants",
                mrp: 799,
                discount: 15,
                price: 679,
                desc: "Diapers for babies (9-14kg).",
                uses: "Baby hygiene",
                storage: "Store in a dry place"
            }
        ]
    },
    {
        category: "Health Supplements",
        icon: "❤️",
        id: "health",
        products: [
            {
                name: "Revital H",
                image: "⚡",
                prescription: false,
                composition: "Vitamins, Minerals, Ginseng",
                unit: "Bottle",
                quantity: "30 Capsules",
                mrp: 330,
                discount: 8,
                price: 304,
                desc: "Daily health supplement for energy.",
                uses: "Energy, Stamina",
                storage: "Store below 25°C"
            }
        ]
    }
];

// Cart State
let cart = [];

// Configuration
const WHATSAPP_NUMBER = "919028670610";

// Render Logic
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');

    // Render Categories & Products
    storeData.forEach(category => {
        const section = document.createElement('section');
        section.classList.add('category-section');
        section.id = category.id;

        // Header
        const header = document.createElement('div');
        header.classList.add('category-header');
        header.innerHTML = `
            <span class="category-icon">${category.icon}</span>
            <h3 class="category-title">${category.category}</h3>
        `;
        section.appendChild(header);

        // Product Grid
        const grid = document.createElement('div');
        grid.classList.add('product-grid');

        category.products.forEach(product => {
            const card = createProductCard(product);
            grid.appendChild(card);
        });

        section.appendChild(grid);
        mainContent.appendChild(section);
    });

    // Cart Modal Logic
    setupCartListeners();

    // Search Listener
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    searchInput.addEventListener('input', (e) => filterProducts(e.target.value));
    searchBtn.addEventListener('click', () => filterProducts(searchInput.value));

    // Mobile Menu
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    menuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        if (mobileNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when link clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            menuBtn.querySelector('i').classList.remove('fa-times');
            menuBtn.querySelector('i').classList.add('fa-bars');
        });
    });
});

function filterProducts(query) {
    const term = query.toLowerCase().trim();
    const productCards = document.querySelectorAll('.product-card');
    let found = false;

    productCards.forEach(card => {
        const name = card.querySelector('.product-name').innerText.toLowerCase();
        // Can add more fields to search like composition
        if (name.includes(term)) {
            card.style.display = 'flex';
            found = true;
        } else {
            card.style.display = 'none';
        }
    });

    // Optional: Hide empty sections?
    document.querySelectorAll('.category-section').forEach(section => {
        const visibleProducts = section.querySelectorAll('.product-card[style="display: flex;"]');
        // If we want to hide sections with no results, we need access to the initial state or count visible children
        // Simpler approach: check if any child is visible. 
        // Note: product-card default display is flex in CSS, but style.display might be empty string initially.
        // Let's rely on the grid layout, hidden items just won't show.
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    // Create unique ID for product if not present (simple hash or name)
    const productId = product.name.replace(/\s+/g, '-').toLowerCase();

    // Zoom logic for overlay
    card.innerHTML = `
        <div class="card-image-wrapper">
            <div class="card-image">${product.image}</div>
            <div class="product-overlay">
                <div class="overlay-text">
                    <h4>About Product</h4>
                    <p>${product.desc}</p>
                    <p><strong>Uses:</strong> ${product.uses}</p>
                    <p><strong>Storage:</strong> ${product.storage}</p>
                </div>
            </div>
        </div>
        
        <div class="card-content">
            <h3 class="product-name">${product.name}</h3>
            ${product.prescription ? '<div class="prescription-tag">Rx Prescription Required</div>' : ''}
            <div class="product-meta">
                <p><strong>Comp:</strong> ${product.composition}</p>
                <p>${product.unit} | ${product.quantity}</p>
            </div>
            
            <div class="product-price-section">
                <div>
                    <div>
                        <span class="mrp">₹${product.mrp}</span>
                        <span class="discount-badge">${product.discount}% OFF</span>
                    </div>
                    <div class="final-price">₹${product.price}</div>
                </div>
            </div>
            
            <button class="order-btn add-to-cart-btn" data-id="${productId}">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    `;

    // Attach event listener to the button
    const btn = card.querySelector('.add-to-cart-btn');
    btn.addEventListener('click', () => addToCart(product, productId));

    return card;
}

function addToCart(product, id) {
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({
            id: id,
            name: product.name,
            price: product.price,
            image: product.image,
            qty: 1,
            unit: product.unit
        });
    }

    updateCartUI();
    toggleCartModal(true); // Open cart when item added
}

function updateCartUI() {
    // Update Badge
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cart-count').innerText = totalQty;

    // Render Cart Items
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Your cart is empty</div>';
        cartTotalPrice.innerText = '₹0';
        return;
    }

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.qty;

        const itemEl = document.createElement('div');
        itemEl.classList.add('cart-item');
        itemEl.innerHTML = `
            <div class="cart-item-image">${item.image}</div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">₹${item.price}</div>
                <div class="cart-item-controls">
                    <button class="qty-btn minus" data-id="${item.id}">-</button>
                    <span class="cart-item-quantity">${item.qty}</span>
                    <button class="qty-btn plus" data-id="${item.id}">+</button>
                    <button class="remove-btn" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;

        cartItemsContainer.appendChild(itemEl);
    });

    cartTotalPrice.innerText = `₹${total}`;

    // Attach event listeners for cart controls
    document.querySelectorAll('.qty-btn.plus').forEach(btn => {
        btn.addEventListener('click', (e) => updateItemQty(e.target.dataset.id, 1));
    });
    document.querySelectorAll('.qty-btn.minus').forEach(btn => {
        btn.addEventListener('click', (e) => updateItemQty(e.target.dataset.id, -1));
    });
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => removeFromCart(e.target.closest('button').dataset.id));
    });
}

function updateItemQty(id, change) {
    const item = cart.find(item => item.id === id);
    if (!item) return;

    item.qty += change;
    if (item.qty <= 0) {
        removeFromCart(id);
    } else {
        updateCartUI();
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function setupCartListeners() {
    const cartBtn = document.getElementById('cart-btn');
    const closeCartBtn = document.getElementById('close-cart');
    const cartModal = document.getElementById('cart-modal');
    const checkoutBtn = document.getElementById('checkout-btn');

    cartBtn.addEventListener('click', () => toggleCartModal(true));
    closeCartBtn.addEventListener('click', () => toggleCartModal(false));

    // Close on click outside
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) toggleCartModal(false);
    });

    checkoutBtn.addEventListener('click', checkoutToWhatsApp);
}

function toggleCartModal(show) {
    const cartModal = document.getElementById('cart-modal');
    if (show) {
        cartModal.classList.add('active');
    } else {
        cartModal.classList.remove('active');
    }
}

function checkoutToWhatsApp() {
    if (cart.length === 0) return;

    const customerNameInput = document.getElementById('customer-name');
    const customerName = customerNameInput.value.trim();

    if (!customerName) {
        alert("Please enter your name to proceed.");
        customerNameInput.focus();
        return;
    }

    let message = `Hello Shobha Medical Store,\nI want to order the following items:\n\n*Customer Name:* ${customerName}\n\n`;
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        message += `${index + 1}. ${item.name} (${item.unit})\n   Qty: ${item.qty} | Price: ₹${itemTotal}\n`;
    });

    message += `\n*Total Amount: ₹${total}*`;
    message += `\n\nPlease confirm my order.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
