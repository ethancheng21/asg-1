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

// Function to add product to the cart
function addToCart(productName, price) {
    // Retrieve the cart from localStorage (if it exists)
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Default to an empty array if no cart

    // Create an item object
    const item = {
        name: productName,
        price: price
    };

    // Add the item to the cart array
    cart.push(item);

    // Update cart in localStorage to persist it across page reloads
    localStorage.setItem("cart", JSON.stringify(cart));

    // Log the cart contents (for demonstration purposes)
    console.log("Cart:", cart);

    // Alert the user that the item was added
    alert(`${productName} has been added to your cart!`);
}

// Function to display the cart on the cart page
function viewCart() {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
        cart = storedCart;
    }

    console.log("Your Cart:", cart);
}

// Event listener to load data when the page loads
document.addEventListener("DOMContentLoaded", loadPageData);
