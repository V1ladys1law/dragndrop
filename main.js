const balls = document.querySelectorAll('.ball');

let active = null;
let dx = 0;
let dy = 0;

balls.forEach((ball) => {
    ball.addEventListener('mousedown', (e) => {
        e.preventDefault();
        active = ball;
        dx = e.clientX - ball.offsetLeft;
        dy = e.clientY - ball.offsetTop;
    });
});

document.addEventListener('mousemove', (e) => {
    if (!active) return;

    let x = e.clientX - dx;
    let y = e.clientY - dy;

    // похибка екрана: не виходимо за краї вікна
    x = Math.max(0, Math.min(x, window.innerWidth - active.offsetWidth));
    y = Math.max(0, Math.min(y, window.innerHeight - active.offsetHeight));

    active.style.left = x + 'px';
    active.style.top = y + 'px';
});

document.addEventListener('mouseup', () => {
    active = null;
});