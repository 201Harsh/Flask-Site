// script.js
const cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        const price = button.getAttribute('data-product-price'); // Capture price from the button attribute
        cart.push({ productId, price }); // Store price along with the product ID
        localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
        alert('Product added to cart!');
    });
});
