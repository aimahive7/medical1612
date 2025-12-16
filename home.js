/* Home Page JavaScript */
const WHATSAPP_NUMBER = '919028670610';

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');

    if (menuBtn && mobileNav) {
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

        // Close mobile nav when clicking links
        const navLinks = mobileNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Search functionality - redirect to products page
    const searchInputDesktop = document.getElementById('search-input-desktop');
    const searchBtnDesktop = document.getElementById('search-btn-desktop');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    function performSearch(query) {
        if (query.trim()) {
            window.location.href = `products.html?search=${encodeURIComponent(query.trim())}`;
        } else {
            window.location.href = 'products.html';
        }
    }

    if (searchInputDesktop) {
        searchInputDesktop.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch(searchInputDesktop.value);
        });
    }
    if (searchBtnDesktop) {
        searchBtnDesktop.addEventListener('click', () => performSearch(searchInputDesktop?.value || ''));
    }
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch(searchInput.value);
        });
    }
    if (searchBtn) {
        searchBtn.addEventListener('click', () => performSearch(searchInput?.value || ''));
    }

    // Cart functionality
    let cart = JSON.parse(localStorage.getItem('shobhaCart')) || [];
    updateCartCount();

    function updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        if (cartCount) {
            const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
            cartCount.textContent = totalItems;
        }
    }

    // Cart Modal
    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const closeCart = document.getElementById('close-cart');

    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            renderCart();
            cartModal.classList.add('active');
        });
    }

    if (closeCart) {
        closeCart.addEventListener('click', () => {
            cartModal.classList.remove('active');
        });
    }

    if (cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.classList.remove('active');
            }
        });
    }

    function renderCart() {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotalPrice = document.getElementById('cart-total-price');

        if (!cartItemsContainer) return;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Your cart is empty</div>';
            if (cartTotalPrice) cartTotalPrice.textContent = '₹0';
            return;
        }

        let total = 0;
        cartItemsContainer.innerHTML = cart.map((item, index) => {
            const itemTotal = item.price * item.qty;
            total += itemTotal;
            return `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <span class="cart-item-name">${item.name}</span>
                        <span class="cart-item-price">₹${item.price} x ${item.qty}</span>
                    </div>
                    <div class="cart-item-actions">
                        <button class="qty-btn" data-action="decrease" data-index="${index}">-</button>
                        <span class="item-qty">${item.qty}</span>
                        <button class="qty-btn" data-action="increase" data-index="${index}">+</button>
                        <button class="remove-btn" data-index="${index}"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            `;
        }).join('');

        if (cartTotalPrice) cartTotalPrice.textContent = `₹${total}`;

        // Add event listeners for cart actions
        cartItemsContainer.querySelectorAll('.qty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                const action = e.target.dataset.action;
                if (action === 'increase') {
                    cart[index].qty++;
                } else if (action === 'decrease') {
                    if (cart[index].qty > 1) {
                        cart[index].qty--;
                    } else {
                        cart.splice(index, 1);
                    }
                }
                localStorage.setItem('shobhaCart', JSON.stringify(cart));
                updateCartCount();
                renderCart();
            });
        });

        cartItemsContainer.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);
                cart.splice(index, 1);
                localStorage.setItem('shobhaCart', JSON.stringify(cart));
                updateCartCount();
                renderCart();
            });
        });
    }

    // Checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            const customerName = document.getElementById('customer-name')?.value.trim();
            if (!customerName) {
                alert('Please enter your name');
                return;
            }
            if (cart.length === 0) {
                alert('Your cart is empty');
                return;
            }

            let message = `*New Order from Shobha Medical Store*\n\n`;
            message += `📋 *Customer:* ${customerName}\n\n`;
            message += `*Order Details:*\n`;

            let total = 0;
            cart.forEach((item, i) => {
                const itemTotal = item.price * item.qty;
                total += itemTotal;
                message += `${i + 1}. ${item.name}\n   Qty: ${item.qty} | Price: ₹${itemTotal}\n`;
            });

            message += `\n💰 *Grand Total:* ₹${total}`;

            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }
});
