document.addEventListener("DOMContentLoaded", () => {
    const inicioButton = document.getElementById('inicio');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { 
            inicioButton.style.display = 'block';
        } else {
            inicioButton.style.display = 'none';
        }
    });

    inicioButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
