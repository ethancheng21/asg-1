let currentSlide = 0; 

function moveSlide(step) {
    showSlide(currentSlide += step);
}


function showSlide(index) {
    let slides = document.getElementsByClassName("slide");

    
    if (index >= slides.length) {
        currentSlide = 0;
    }
    if (index < 0) {
        currentSlide = slides.length - 1;
    }

    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    
    slides[currentSlide].style.display = "block";
}

showSlide(currentSlide);

// Helper to toggle visibility of sections
function toggleAuthSections(isLoggedIn) {
    const authSection = document.getElementById("auth-section");
    const logoutSection = document.getElementById("logout-section");
    const profileIcon = document.getElementById("profile-icon");

    if (isLoggedIn) {
        // Hide the Sign Up and Log In section
        authSection.style.display = 'none';

        // Show the Log Out section
        logoutSection.style.display = 'block';

        // Update the profile icon to the logged-in version
        profileIcon.src = "c:\\Users\\ethan\\Downloads\\Metro_Boomin_–_Not_All_Heroes_Wear_Capes.png";
    } else {
        // Show the Sign Up and Log In section
        authSection.style.display = 'block';

        // Hide the Log Out section
        logoutSection.style.display = 'none';

        // Update the profile icon to the default version
        profileIcon.src = "c:/Users/ethan/Downloads/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg";
    }
}


// Check if a user is logged in on page load
// Check if a user is logged in on page load
function checkLoggedIn() {
    console.log("Checking login status...");
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    
    // Retrieve profile image from localStorage
    const profileImage = localStorage.getItem("profileImage");

    if (loggedInUser && profileImage) {
        toggleAuthSections(true); // Update UI for logged-in user
        document.getElementById("profile-icon").src = profileImage; // Update profile icon with logged-in image
    } else {
        toggleAuthSections(false); // Show login/register section if not logged in
        document.getElementById("profile-icon").src = "c:/Users/ethan/Downloads/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"; // Default image
    }
}

// Register function
// Register function
function register() {
    console.log("Register button clicked");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    if (registeredUsers.some(user => user.email === email)) {
        alert("This email is already registered. Please log in.");
        return;
    }

    registeredUsers.push({ email, password });
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

    alert("You are now registered!");
    localStorage.setItem("loggedInUser", JSON.stringify({ email, password }));
    localStorage.setItem("profileImage", "r_Capes.png"); // Logged-in profile image
    toggleAuthSections(true); // Update UI
}



// Login function
function login() {
    console.log("Login button clicked");
    const email = document.getElementById("email2").value;
    const password = document.getElementById("password2").value;

    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
    const user = registeredUsers.find(user => user.email === email && user.password === password);

    if (user) {
        alert("You are now logged into the website!");
        
        // Store the logged-in user's profile image in Local Storage
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        localStorage.setItem("profileImage", "c:/Users/ethan/Downloads/Metro_Boomin_–_Not_All_Heroes_Wear_Capes.png"); // Logged-in profile image

        toggleAuthSections(true); // Update UI
    } else {
        alert("Invalid email or password. Please try again.");
    }
}


// Log Out function
function logout() {
    console.log("Logout button clicked");
    localStorage.removeItem("loggedInUser"); // Clear logged-in state
    alert("You have been logged out.");
    toggleAuthSections(false); // Update UI
}

// Call checkLoggedIn when the page loads
checkLoggedIn();
