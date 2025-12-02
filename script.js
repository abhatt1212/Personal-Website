// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = 'none';
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .about-content, .contact-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.classList.contains('btn-primary')) {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background: #000000;
    z-index: 1001;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.01)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add skill tag animation
document.querySelectorAll('.skill-tag').forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.1}s`;
    tag.style.animation = 'fadeInUp 0.6s ease forwards';
    tag.style.opacity = '0';
});

// --- Projects Slider Infinite Loop & Manual Controls ---
(function() {
    const slider = document.querySelector('.projects-slider');
    const leftArrow = document.querySelector('.slider-arrow.left');
    const rightArrow = document.querySelector('.slider-arrow.right');
    if (!slider) return;
    const cards = slider.querySelectorAll('.project-card');
    const cardCount = cards.length;
    let currentIndex = 1; // Start at 1 due to prepended clone
    let interval = null;
    let isTransitioning = false;

    // Clone first and last card for seamless infinite effect
    const firstClone = cards[0].cloneNode(true);
    const lastClone = cards[cardCount - 1].cloneNode(true);
    slider.appendChild(firstClone);
    slider.insertBefore(lastClone, cards[0]);

    // Update cards NodeList after cloning
    const allCards = slider.querySelectorAll('.project-card');
    const totalCards = allCards.length;

    function getCardWidth() {
        const card = allCards[0];
        const style = window.getComputedStyle(slider);
        const gap = parseInt(style.columnGap || style.gap || '0', 10);
        return card.offsetWidth + gap;
    }

    function slideTo(index, animate = true) {
        const cardWidth = getCardWidth();
        if (!animate) slider.style.transition = 'none';
        else slider.style.transition = 'transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)';
        slider.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    function nextSlide() {
        if (isTransitioning) return;
        isTransitioning = true;
        slideTo(++currentIndex, true);
    }

    function prevSlide() {
        if (isTransitioning) return;
        isTransitioning = true;
        slideTo(--currentIndex, true);
    }

    function startAutoSlide() {
        interval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    // Handle transition end for infinite effect
    slider.addEventListener('transitionend', () => {
        const cardWidth = getCardWidth();
        // If at the (cloned) last card, jump to real first card
        if (currentIndex === totalCards - 1) {
            slider.style.transition = 'none';
            currentIndex = 1;
            slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            void slider.offsetWidth;
            slider.style.transition = 'transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)';
        }
        // If at the (cloned) first card, jump to real last card
        if (currentIndex === 0) {
            slider.style.transition = 'none';
            currentIndex = totalCards - 2;
            slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            void slider.offsetWidth;
            slider.style.transition = 'transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)';
        }
        isTransitioning = false;
    });

    // Pause on hover
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);

    // Responsive: Reset transform on window resize
    window.addEventListener('resize', () => slideTo(currentIndex, false));

    // Manual controls
    if (leftArrow && rightArrow) {
        leftArrow.addEventListener('click', () => {
            prevSlide();
            stopAutoSlide();
            startAutoSlide();
        });
        rightArrow.addEventListener('click', () => {
            nextSlide();
            stopAutoSlide();
            startAutoSlide();
        });
    }

    // Start at first real card
    slideTo(currentIndex, false);
    startAutoSlide();
})();

// Console welcome message
console.log(`
%cWelcome to My Website! 👋
%c
%cThis website was built with HTML, CSS, and JavaScript.
%cFeel free to explore the code and get in touch!
%c
%cBuilt with ❤️ for the web
`, 
'color: #000000; font-size: 20px; font-weight: bold;',
'',
'color: #666666; font-size: 14px;',
'color: #666666; font-size: 14px;',
'',
'color: #000000; font-size: 12px;'
); 