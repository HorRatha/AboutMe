 
        // Typewriter effect for name only
        const nameElement = document.querySelector('.portfolio-typewriter');
        if (nameElement) {
            const fullName = "Hor Ratha";
            nameElement.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < fullName.length) {
                    nameElement.textContent += fullName.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                } else {
                    // Remove the cursor after typing is complete
                    setTimeout(() => {
                        nameElement.classList.add('portfolio-finished');
                    }, 2000);
                }
            };
            
            // Start typing after a short delay
            setTimeout(typeWriter, 1000);
        }
