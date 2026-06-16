let currentFrame = 1;
const muneco = document.querySelector('.muneco');

// Inicializamos las coordenadas del muñeco en el centro del mapa
let x = 390; // (800/2 - 20/2)
let y = 390; // (800/2 - 20/2)

muneco.style.left = x + 'px';
muneco.style.top = y + 'px';

document.addEventListener('keydown', (event) => {
    let activeImage = muneco.querySelector('img.active');
    activeImage.classList.remove('active');

    switch (event.key) {
        case 'ArrowUp':
            y -= 10;
            animate('back');
            break;
        case 'ArrowDown':
            y += 10;
            animate('front');
            break;
        case 'ArrowLeft':
            x -= 10;
            animate('left');
            break;
        case 'ArrowRight':
            x += 10;
            animate('right');
            break;
    }
    
    // Limitar las coordenadas dentro del mapa
    x = Math.max(0, Math.min(x, 780)); // 780 = 800 - 20 (ancho del muñeco)
    y = Math.max(0, Math.min(y, 780)); // 780 = 800 - 20 (alto del muñeco)
    
    muneco.style.left = x + 'px';
    muneco.style.top = y + 'px';
});

function animate(direction) {
    // Cambia a la siguiente imagen en la secuencia
    const nextImage = muneco.querySelector(`img[data-dir="${direction}${currentFrame}"]`);
    nextImage.classList.add('active');
    // Incrementa el frame para la siguiente vez
    currentFrame++;
    if (currentFrame > 4) {
        currentFrame = 1;
    }
}