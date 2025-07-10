
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            const hamburger = document.querySelector('.hamburger');
            
            mobileMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        }
        
        // Enhanced parallax effect on mouse move
        document.addEventListener('mousemove', (e) => {
            const navbar = document.querySelector('.navbar-container');
            const rect = navbar.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const deltaX = (e.clientX - centerX) * 0.008;
            const deltaY = (e.clientY - centerY) * 0.008;
            
            navbar.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.02)`;
        });
        
        // Reset transform when mouse leaves
        document.addEventListener('mouseleave', () => {
            const navbar = document.querySelector('.navbar-container');
            navbar.style.transform = 'translate(0, 0) scale(1)';
        });
        
        // Enhanced navigation link interactions
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('mouseenter', (e) => {
                // Add subtle scale effect to nearby links
                const allLinks = document.querySelectorAll('.nav-link');
                const currentIndex = Array.from(allLinks).indexOf(e.target);
                
                allLinks.forEach((otherLink, index) => {
                    if (index !== currentIndex) {
                        const distance = Math.abs(index - currentIndex);
                        const scale = 1 - (distance * 0.02);
                        otherLink.style.transform = `scale(${scale})`;
                        otherLink.style.opacity = '0.7';
                    }
                });
            });
            
            link.addEventListener('mouseleave', () => {
                // Reset all links
                document.querySelectorAll('.nav-link').forEach(otherLink => {
                    otherLink.style.transform = '';
                    otherLink.style.opacity = '';
                });
            });
        });
  