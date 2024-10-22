document.addEventListener('DOMContentLoaded', () => {
    const img = document.getElementById('happyDogImage');
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s';
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});


javascript
function enlargeMap() {
    const mapContainer = document.querySelector('.map-container');
    mapContainer.classList.toggle('enlarged');
}


document.getElementById("theme_switcher").addEventListener("click", function () {
    document.body.classList.toggle("dark")
})


let currentSlide = 0;
const slides = document.querySelectorAll('.client-testimonials');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); 

document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlide);
});