// Sample cart data (this would typically come from a backend or localStorage)
const cartData = [
    { name: "iPhone 16 Pro", price: 200000, quantity: 1 },
    { name: "Samsung Galaxy S23", price: 150000, quantity: 2 },
];

// Function to render cart items
function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    let total = 0;

    cartItemsContainer.innerHTML = ""; // Clear existing items

    cartData.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>₹${item.price} x ${item.quantity} = ₹${itemTotal}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    cartTotalElement.textContent = total.toFixed(2);
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cartData.splice(index, 1); // Remove item from cartData
    renderCart(); // Re-render the cart
}

// Initialize the cart on page load
document.addEventListener("DOMContentLoaded", renderCart);