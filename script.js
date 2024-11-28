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
