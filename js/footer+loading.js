
        // Reusable Matrix Rain Effect
        function createMatrixRain(containerId, options = {}) {
            const container = document.getElementById(containerId);
            if (!container) return;
            
            const settings = {
                chars: '01',
                columnWidth: 14,
                speed: 3,
                opacity: 0.7,
                density: 1,
                ...options
            };
            
            const columns = Math.floor(container.offsetWidth / settings.columnWidth) * settings.density;
            
            // Clear existing columns
            container.innerHTML = '';
            
            for (let i = 0; i < columns; i++) {
                const column = document.createElement('div');
                column.className = 'pf-matrix-column';
                column.style.left = i * settings.columnWidth + 'px';
                column.style.animationDelay = Math.random() * 2 + 's';
                column.style.animationDuration = (Math.random() * settings.speed + 2) + 's';
                column.style.opacity = settings.opacity;
                
                let text = '';
                for (let j = 0; j < 20; j++) {
                    text += settings.chars.charAt(Math.floor(Math.random() * settings.chars.length)) + '\n';
                }
                column.textContent = text;
                
                container.appendChild(column);
            }
        }

        // Initialize matrix for loading screen
        function initLoadingMatrix() {
            createMatrixRain('pfMatrixContainer');
        }

        // Loading Screen Logic
        const loadingMessages = [
            'Compiling source code...',
            'Connecting to server...',
            'Loading dependencies...',
            'Optimizing performance...',
            'Rendering components...',
            'Almost ready...'
        ];

        let currentMessage = 0;
        const terminalText = document.getElementById('pfTerminalText');
        const loadingText = document.getElementById('pfLoadingText');

        function updateLoadingText() {
            if (currentMessage < loadingMessages.length) {
                loadingText.textContent = loadingMessages[currentMessage];
                currentMessage++;
                setTimeout(updateLoadingText, 800);
            } else {
                terminalText.textContent = 'System ready!';
                setTimeout(() => {
                    document.getElementById('pfLoadingScreen').classList.add('pf-fade-out');
                    setTimeout(() => {
                        document.getElementById('pfLoadingScreen').style.display = 'none';
                    }, 500);
                }, 1000);
            }
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            initLoadingMatrix();
            setTimeout(updateLoadingText, 1000);
            
            // Initialize matrix backgrounds for all sections
            initAllMatrixBackgrounds();
        });

        // Function to initialize all matrix backgrounds
        function initAllMatrixBackgrounds() {
            // Find all elements with matrix background classes
            const matrixElements = document.querySelectorAll('.pf-matrix-bg');
            
            matrixElements.forEach(element => {
                const containerId = element.id + '-matrix';
                
                // Create matrix container if it doesn't exist
                if (!element.querySelector('.pf-matrix-bg-container')) {
                    const matrixContainer = document.createElement('div');
                    matrixContainer.className = 'pf-matrix-bg-container';
                    matrixContainer.id = containerId;
                    element.appendChild(matrixContainer);
                }
                
                // Determine options based on classes
                const options = {};
                if (element.classList.contains('pf-matrix-bg-slow')) {
                    options.speed = 8;
                    options.opacity = 0.2;
                } else if (element.classList.contains('pf-matrix-bg-dense')) {
                    options.density = 1.5;
                    options.opacity = 0.4;
                } else {
                    options.opacity = 0.3;
                }
                
                createMatrixRain(containerId, options);
            });
        }

        // Responsive matrix on resize
        window.addEventListener('resize', function() {
            const container = document.getElementById('pfMatrixContainer');
            if (container) {
                container.innerHTML = '';
                initLoadingMatrix();
            }
            
            // Reinitialize all matrix backgrounds
            initAllMatrixBackgrounds();
        });
  