document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image-gallery img');

    images.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});



// about
document.addEventListener("DOMContentLoaded", function() {
    const testimonial = document.querySelector('.testimonial');
    testimonial.style.opacity = 0;
    testimonial.style.transition = 'opacity 1s ease-in-out';

    setTimeout(() => {
        testimonial.style.opacity = 1;
    }, 500);
});
