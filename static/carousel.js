/* ===================== CARROSSEL ===================== */
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

function showSlide(i) {
    if (i < 0) index = slides.length - 1;
    else if (i >= slides.length) index = 0;
    else index = i;
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Eventos dos botões
prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));

/* ===================== LIGHTBOX ===================== */
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

slides.forEach(slide => {
    const img = slide.querySelector('img');
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    });
});

lightbox.addEventListener('click', e => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});


/* // Descomentar para avançar sozinho
setInterval(() => {
    showSlide(index + 1);
}, 3000); // troca a cada 5 segundos
*/
