// Seleccionar todas las imágenes del carrusel
const images = document.querySelectorAll('.carousel img');
let currentIndex = 0;

// Función para mostrar la imagen actual
function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

// Evento para el botón "Anterior"
document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
});

// Evento para el botón "Siguiente"
document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
});

// Mostrar la primera imagen
showImage(currentIndex);

// Cambiar imagen automáticamente cada 3 segundos
setInterval(() => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
}, 3000);

// Seleccionar el botón de volver al inicio
const backToTopButton = document.querySelector('.back-to-top');

// Mostrar/ocultar el botón de volver al inicio según el desplazamiento
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Evento para volver al inicio al hacer clic en el botón
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
