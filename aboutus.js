let currentSlide = 0; // Start at the first image

// Function to move to the next or previous slide
function moveSlide(step) {
    showSlide(currentSlide += step);
}

// Function to show the correct slide based on the currentSlide index
function showSlide(index) {
    let slides = document.getElementsByClassName("slide");

    // If we reach the end of the slides, start over
    if (index >= slides.length) {
        currentSlide = 0;
    }
    if (index < 0) {
        currentSlide = slides.length - 1;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Show the current slide
    slides[currentSlide].style.display = "block";
}

// Initialize the slideshow by showing the first slide
showSlide(currentSlide);
// Function to load the profile image
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
