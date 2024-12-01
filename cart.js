// Function to load the profile image from localStorage
function loadPageData() {
    const profileImage = localStorage.getItem("profileImage");

    if (profileImage) {
        // Update the profile icon if a custom image is stored
        document.getElementById("profile-icon").src = profileImage;
    } else {
        // Reset to the default image if no custom image exists
        document.getElementById("profile-icon").src = "c:/Users/ethan/Downloads/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg";
    }
}

// Call this function when the page loads to ensure the correct profile image is displayed
document.addEventListener("DOMContentLoaded", loadPageData);

// Function to display the cart items on the cart page
function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Retrieve the cart from localStorage (default to an empty array if no cart exists)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = 'Your cart is empty.';
        totalPriceElement.textContent = '0.00';
        document.getElementById('clear-cart-button').style.display = 'none';
        return;
    }

    let cartHTML = '';
    let totalPrice = 0;

    // Loop through the cart and display each item
    cart.forEach(item => {
        cartHTML += `
            <div class="cart-item">
                <span>${item.name} x${item.quantity}</span>
                <span>$${item.price.toFixed(2)}</span>
            </div>
        `;
        totalPrice += item.price;
    });

    // Insert the cart HTML and update the total price
    cartContainer.innerHTML = cartHTML;
    totalPriceElement.textContent = totalPrice.toFixed(2);

    // Display the Clear Cart button
    document.getElementById('clear-cart-button').style.display = 'inline-block';
}

// Function to clear the cart
function clearCart() {
    // Remove the cart from localStorage
    localStorage.removeItem("cart");
    
    // Clear the cart display
    displayCart();
    
    // Notify the user
    alert('Your cart has been cleared.');
}

// Event listener to load data when the page loads
document.addEventListener("DOMContentLoaded", () => {
    loadPageData();
    displayCart(); // Display the cart when the page loads
});

// Optional: Add event listener for the Clear Cart button
document.getElementById('clear-cart-button')?.addEventListener('click', clearCart);
