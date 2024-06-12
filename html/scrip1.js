document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const images = document.querySelectorAll('.carousel-inner img');
    let currentIndex = 0;
    let interval;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        carouselInner.style.transform = `translateX(-${currentIndex * 100 / images.length}%)`;
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        carouselInner.style.transform = `translateX(-${currentIndex * 100 / images.length}%)`;
    }

    function startCarousel() {
        interval = setInterval(showNextImage, 5000); // Cambia de imagen cada 5 segundos
    }

    function stopCarousel() {
        clearInterval(interval);
    }

    document.querySelector('.carousel-control.next').addEventListener('click', function() {
        stopCarousel();
        showNextImage();
        startCarousel();
    });

    document.querySelector('.carousel-control.prev').addEventListener('click', function() {
        stopCarousel();
        showPrevImage();
        startCarousel();
    });

    startCarousel();
});
