// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe post cards
document.querySelectorAll('.post-card').forEach(card => {
    observer.observe(card);
});

// Newsletter form handling
const newsletterForm = document.getElementById('newsletter-form');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const input = newsletterForm.querySelector('.newsletter-input');
    const email = input.value.trim();
    
    if (email) {
        // Simple success feedback
        const btn = newsletterForm.querySelector('.newsletter-btn');
        const originalText = btn.textContent;
        
        btn.textContent = '✓ Subscribed!';
        btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        input.value = '';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 3000);
    }
});

// Smooth parallax effect on hero
document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.orb');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    
    orbs.forEach((orb, index) => {
        const factor = (index + 1) * 0.5;
        orb.style.transform = `translate(calc(-50% + ${x * factor}px), calc(-50% + ${y * factor}px))`;
    });
});

// Dynamic header background on scroll
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.style.background = 'rgba(23, 23, 23, 0.95)';
    } else {
        header.style.background = 'rgba(23, 23, 23, 0.8)';
    }
    
    lastScroll = currentScroll;
});

// Console easter egg
console.log('%c◆ Neural Narratives', 'font-size: 24px; font-weight: bold; color: #9E7FFF;');
console.log('%cExploring the future of intelligence.', 'font-size: 14px; color: #A3A3A3;');
