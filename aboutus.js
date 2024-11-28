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
