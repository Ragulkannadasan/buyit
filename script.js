// filepath: /ecommerce-website/ecommerce-website/assets/js/script.js

document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartCountElement = document.createElement('div');
    cartCountElement.className = 'cart-count';
    document.body.appendChild(cartCountElement);

    const updateCartCount = () => {
        cartCountElement.textContent = `Cart (${cart.length})`;
    };

    const addToCartButtons = document.querySelectorAll('.product-item button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productItem = event.target.parentElement;
            const productName = productItem.querySelector('h3').textContent;
            const productPrice = productItem.querySelector('p').textContent;

            cart.push({ name: productName, price: productPrice });
            updateCartCount();
            alert(`${productName} has been added to your cart!`);
        });
    });
});