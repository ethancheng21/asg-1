// Array of Concert Data
const concerts = [
    { name: "Drake FATD Concert", date: "2024-12-15", location: "Madison Square Garden, NY", price: 120 },
    { name: "Travis Scott Utopia Concert", date: "2024-11-20", location: "Staples Center, LA", price: 150 },
    { name: "Kanye West Yeezus Concert", date: "2024-10-05", location: "Barclays Center, NY", price: 200 },
    { name: "Kanye West Graduation Concert", date: "2024-09-01", location: "Tokyo Dome, Tokyo", price: 250 },
    { name: "Travis Scott Astroworld Concert", date: "2024-08-18", location: "Wembley Stadium, London", price: 180 },
    { name: "Drake Take Care Concert", date: "2024-07-25", location: "O2 Arena, London", price: 170 },
    { name: "Drake More Life Concert", date: "2024-06-12", location: "MetLife Stadium, NJ", price: 140 },
    { name: "Travis Scott Rodeo Concert", date: "2024-05-19", location: "Madison Square Garden, NY", price: 210 },
    { name: "Kanye West Late Registration Concert", date: "2024-04-07", location: "The Forum, LA", price: 190 },
];

// Function to Render Concerts in Table
function renderConcerts(filter = "") {
    const tableBody = document.getElementById("concert-table-body");
    if (!tableBody) return; // Prevent error if table body is not found
    tableBody.innerHTML = ""; // Clear existing rows

    const filteredConcerts = concerts.filter(concert =>
        concert.name.toLowerCase().includes(filter.toLowerCase()) ||
        concert.location.toLowerCase().includes(filter.toLowerCase()) ||
        concert.date.includes(filter)
    );

    filteredConcerts.forEach(concert => {
        const concertRow = `
            <tr>
                <td>${concert.name}</td>
                <td>${concert.date}</td>
                <td>${concert.location}</td>
                <td>$${concert.price}</td>
                <td>
                    <select class="select-seating">
                        <option value="CAT 1">CAT 1 - $${concert.price}</option>
                        <option value="CAT 2">CAT 2 - $${concert.price - 20}</option>
                        <option value="CAT 3">CAT 3 - $${concert.price - 40}</option>
                    </select>
                </td>
                <td>
                    <input class="quantity-input" type="number" min="1" value="1" />
                </td>
                <td><button onclick="addToCart('${concert.name}', ${concert.price}, event)">Buy Ticket</button></td>
            </tr>
        `;
        tableBody.innerHTML += concertRow;
    });
}

// Search Bar Listener
document.getElementById("search")?.addEventListener("input", (e) => {
    renderConcerts(e.target.value);
});

// Function to add concert tickets to cart
function addToCart(concertName, concertPrice, event) {
    const row = event.target.closest('tr');  // Get the closest row to the clicked button
    const seating = row.querySelector('.select-seating').value;
    const quantity = parseInt(row.querySelector('.quantity-input').value);

    const ticketName = `${concertName} - ${seating}`;
    const ticketPrice = concertPrice - (seating === "CAT 2" ? 20 : seating === "CAT 3" ? 40 : 0);
    const ticket = {
        name: ticketName,
        price: ticketPrice * quantity,
        quantity: quantity
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the ticket already exists in the cart
    const existingTicket = cart.find(item => item.name === ticket.name);
    if (existingTicket) {
        existingTicket.quantity += ticket.quantity;  // Update quantity if ticket already exists
        existingTicket.price = existingTicket.quantity * ticketPrice;  // Update price accordingly
    } else {
        cart.push(ticket);  // Add new ticket
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${ticket.name} x${quantity} has been added to your cart!`);
}

// Function to load the profile image from localStorage
function loadPageData() {
    const profileImage = localStorage.getItem("profileImage");

    if (profileImage) {
        // Update the profile icon if a custom image is stored
        document.getElementById("profile-icon").src = profileImage;
    } else {
        // Reset to the default image if no custom image exists
        document.getElementById("profile-icon").src = "images/default-avatar.png"; // Relative path here
    }
}

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
    renderConcerts(); // Render concerts when the page loads
    displayCart(); // Display the cart when the page loads
});

// Optional: Add event listener for the Clear Cart button
document.getElementById
