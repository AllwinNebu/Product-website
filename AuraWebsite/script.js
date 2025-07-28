// Show product grid when scrolling past hero, and animate in corner products
window.addEventListener('DOMContentLoaded', () => {
    const productSection = document.querySelector('.product-grid-section');
    const heroSection = document.querySelector('.hero-section');
    const cornerProducts = document.querySelectorAll('.product-card.animate-corner');

    // Fade in product grid section when hero is out of view
    const productSectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                productSection.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });
    productSectionObserver.observe(productSection);

    // Animate in corner products as they come into view
    const cornerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });
    cornerProducts.forEach(card => cornerObserver.observe(card));
});

console.log("Website scripts loaded!");