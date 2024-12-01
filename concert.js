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
                <td><button onclick="addToCart('${concert.name}', ${concert.price})">Buy Ticket</button></td>
            </tr>
        `;
        tableBody.innerHTML += concertRow;
    });
}

// Search Bar Listener
document.getElementById("search").addEventListener("input", (e) => {
    renderConcerts(e.target.value);
});

// Function to add concert tickets to cart
function addToCart(concertName, concertPrice) {
    const seating = document.querySelector(".select-seating").value;
    const quantity = document.querySelector(".quantity-input").value;

    const ticket = {
        name: `${concertName} - ${seating}`,
        price: concertPrice * quantity
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(ticket);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${ticket.name} x${quantity} has been added to your cart!`);
}

// Initial Render
renderConcerts();

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
