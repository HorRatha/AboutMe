
        // Matrix Rain Effect
        function createMatrixRain() {
            const container = document.getElementById('pfMatrixContainer');
            const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
            const columns = Math.floor(window.innerWidth / 14);
            
            for (let i = 0; i < columns; i++) {
                const column = document.createElement('div');
                column.className = 'pf-matrix-column';
                column.style.left = i * 14 + 'px';
                column.style.animationDelay = Math.random() * 2 + 's';
                column.style.animationDuration = (Math.random() * 3 + 2) + 's';
                
                let text = '';
                for (let j = 0; j < 20; j++) {
                    text += chars.charAt(Math.floor(Math.random() * chars.length)) + '\n';
                }
                column.textContent = text;
                
                container.appendChild(column);
            }
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
            createMatrixRain();
            setTimeout(updateLoadingText, 1000);
        });

        // Responsive matrix on resize
        window.addEventListener('resize', function() {
            const container = document.getElementById('pfMatrixContainer');
            container.innerHTML = '';
            createMatrixRain();
        });
