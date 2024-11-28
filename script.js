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

// Get reference to the profile icon
const profileIcon = document.getElementById("profile-icon");

// Register function
function register() {
    alert("You are now a member! Please sign in again."); // Show popup message
}

// Login function
function login() {
    alert("You are now signed into the website!"); // Show popup message
    profileIcon.src = "c:\\Users\\ethan\\Downloads\\Metro_Boomin_–_Not_All_Heroes_Wear_Capes.png"; // Change to logged-in image
}