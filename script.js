document.addEventListener('DOMContentLoaded', function() {
    // Configura a data do próximo mesversário
    const today = new Date();
    const nextMonth = new Date(today);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    
    // Atualiza o contador regressivo
    function updateCountdown() {
        const now = new Date();
        const diff = nextMonth - now;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('countdown').textContent = 
            `Próximo mesversário em: ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
    }
    
    // Atualiza a cada segundo
    setInterval(updateCountdown, 1000);
    updateCountdown();
    
    // Efeito de digitação na carta de amor
    const letterParagraphs = document.querySelectorAll('.letter-content p');
    letterParagraphs.forEach((p, index) => {
        const originalText = p.textContent;
        p.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const typingEffect = setInterval(() => {
                if (i < originalText.length) {
                    p.textContent += originalText.charAt(i);
                    i++;
                } else {
                    clearInterval(typingEffect);
                }
            }, 30);
        }, index * 2000);
    });
    
    // Efeito de corações ao clicar
    document.addEventListener('click', function(e) {
        const heart = document.createElement('div');
        heart.innerHTML = '<i class="fas fa-heart"></i>';
        heart.style.position = 'absolute';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.color = `hsl(${Math.random() * 60 + 340}, 100%, 70%)`;
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heart.style.pointerEvents = 'none';
        heart.style.animation = 'float-heart 2s ease-out forwards';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 2000);
    });
});

// Adiciona animação para os corações criados dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes float-heart {
        0% {
            transform: translate(0, 0);
            opacity: 1;
        }
        100% {
            transform: translate(0, -100px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
