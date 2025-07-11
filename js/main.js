
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
 
      // Simple Navigation Dots Script
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        // Immediately update the active dot when clicked
        updateActiveState(sectionId);
        
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Update active state immediately when dot is clicked
function updateActiveState(targetSectionId) {
    const sections = ['hero', 'about', 'services', 'projects', 'contact'];
    const navDots = document.querySelectorAll('.nav-dot');
    const targetIndex = sections.indexOf(targetSectionId);
    
    // Remove active class from all dots
    navDots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to clicked dot
    if (navDots[targetIndex]) {
        navDots[targetIndex].classList.add('active');
    }
}

// Update active dot based on scroll position
function updateActiveDot() {
    const sections = ['hero', 'about', 'services', 'projects', 'contact'];
    const navDots = document.querySelectorAll('.nav-dot');
    
    let activeIndex = 0;
    const scrollPosition = window.pageYOffset + 100; // Less offset for better detection
    
    // Find which section is currently in view
    for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop - 200) {
            activeIndex = i;
            break;
        }
    }
    
    // Remove active class from all dots
    navDots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current dot
    if (navDots[activeIndex]) {
        navDots[activeIndex].classList.add('active');
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Update active dot on scroll with throttling for better performance
    let ticking = false;
    
    function handleScroll() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateActiveDot();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // Set initial active dot
    updateActiveDot();
    
    // Also update on resize
    window.addEventListener('resize', updateActiveDot);
});
