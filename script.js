document.addEventListener('DOMContentLoaded', () => {
    // Animación de aparición (Scroll Reveal)
    const revealElement = document.querySelector('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(revealElement);

    // Manejo del formulario
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Gracias por su mensaje. Se mantendrá la más estricta confidencialidad.');
        form.reset();
    });
});

