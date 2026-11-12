        function createHeart() {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = Math.random() * 20 + 15 + 'px';
            heart.style.opacity = '0.7';
            heart.style.animation = 'fall 4s linear';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '9999';
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 4000);
        }

        const style = document.createElement('style');
        style.textContent = `
            @keyframes fall {
                from { transform: translateY(-100px) rotate(0deg); opacity: 1; }
                to { transform: translateY(100vh) rotate(360deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        setInterval(createHeart, 300);

        document.getElementById('introContinue').addEventListener('click', () => {
            document.getElementById('introScreen').hidden = true;
        });