document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 160,
                    behavior: 'smooth'
                });
            }
        });
    });
});
