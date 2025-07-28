// Show product grid sections when scrolling past hero, and animate in corner products
window.addEventListener('DOMContentLoaded', () => {
    const productSections = document.querySelectorAll('.product-grid-section');
    const heroSection = document.querySelector('.hero-section');
    // Toggle logo in corner when not on hero
    const body = document.body;
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                body.classList.remove('scrolled');
            } else {
                body.classList.add('scrolled');
            }
        });
    }, { threshold: 0.5 });
    if (heroSection) heroObserver.observe(heroSection);

    productSections.forEach(section => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    section.classList.add('visible');
                    // Animate corner products if present in this section
                    const cornerProducts = section.querySelectorAll('.product-card.animate-corner');
                    cornerProducts.forEach(card => {
                        card.classList.add('visible');
                    });
                }
            });
        }, { threshold: 0.2 });
        observer.observe(section);
    });
});

console.log("Website scripts loaded!");