document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');

    button.addEventListener('click', function() {
        button.classList.add('clicked');
        setTimeout(function() {
            button.classList.remove('clicked');
        }, 300);
    });
});


const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}

function updateSlider() {
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.slides').style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds
