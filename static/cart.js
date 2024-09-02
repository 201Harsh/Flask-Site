// cart.js
const cartItems = document.querySelector('.cart-items');
const cart = JSON.parse(localStorage.getItem('cart')) || [];

cart.forEach(item => {
    const productElement = document.createElement('div');
    productElement.classList.add('cart-item');
    productElement.innerHTML = `
        <p>Product ID: ${item.productId}</p>
        <p>Price: $<span class="price">${item.price}</span></p>
        <button class="remove-from-cart" data-product-id="${item.productId}">Remove</button>
    `;
    cartItems.appendChild(productElement);
});

document.querySelectorAll('.remove-from-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        const index = cart.findIndex(item => item.productId === productId);
        if (index > -1) {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            button.parentElement.remove();
        }
    });
});
