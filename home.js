// Home page search functionality

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });
    }

    // Cart functionality
    setupCartListeners();

    // Search functionality - Redirect to products page with search query
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const searchInputDesktop = document.getElementById('search-input-desktop');
    const searchBtnDesktop = document.getElementById('search-btn-desktop');

    function performSearch(query) {
        const trimmedQuery = query.trim();
        if (trimmedQuery) {
            window.location.href = `products.html?search=${encodeURIComponent(trimmedQuery)}`;
        } else {
            window.location.href = 'products.html';
        }
    }

    // Mobile search
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
    }
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            performSearch(searchInput?.value || '');
        });
    }

    // Desktop search
    if (searchInputDesktop) {
        searchInputDesktop.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(searchInputDesktop.value);
            }
        });
    }
    if (searchBtnDesktop) {
        searchBtnDesktop.addEventListener('click', () => {
            performSearch(searchInputDesktop?.value || '');
        });
    }
});

// Cart State (minimal for homepage)
let cart = [];

// Configuration
const WHATSAPP_NUMBER = "919028670610";

function setupCartListeners() {
    const cartBtn = document.getElementById('cart-btn');
    const closeCartBtn = document.getElementById('close-cart');
    const cartModal = document.getElementById('cart-modal');
    const checkoutBtn = document.getElementById('checkout-btn');

    if (cartBtn) {
        cartBtn.addEventListener('click', () => toggleCartModal(true));
    }
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', () => toggleCartModal(false));
    }

    // Close on click outside
    if (cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) toggleCartModal(false);
        });
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkoutToWhatsApp);
    }

    // Initialize cart display
    updateCartUI();
}

function toggleCartModal(show) {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        if (show) {
            cartModal.classList.add('active');
        } else {
            cartModal.classList.remove('active');
        }
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');

    if (cartCount) {
        const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
        cartCount.innerText = totalQty;
    }

    if (cartItemsContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Your cart is empty</div>';
            if (cartTotalPrice) cartTotalPrice.innerText = '₹0';
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

        if (cartTotalPrice) {
            cartTotalPrice.innerText = `₹${total}`;
        }
    }
}

function checkoutToWhatsApp() {
    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }

    const customerNameInput = document.getElementById('customer-name');
    const customerName = customerNameInput ? customerNameInput.value.trim() : '';

    if (!customerName) {
        alert("Please enter your name to proceed.");
        if (customerNameInput) customerNameInput.focus();
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
