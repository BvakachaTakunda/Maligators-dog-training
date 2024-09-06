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