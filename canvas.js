let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext('2d');
let whiteStart = 100;
let blackStart = 165;

for (let i = 0; i < 7; i++) {
    context.beginPath();
    context.rect(whiteStart, 100, 100, 400);
    context.lineWidth = 1;
    context.strokeStyle = 'black';
    context.stroke();
    whiteStart += 100;
}

for (let i = 0; i < 5; i++) {
    context.beginPath();
    context.fillRect(blackStart, 100, 70, 275);
    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.stroke();
    blackStart += (i == 1 ? 200 : 100);
}

canvas.addEventListener('click', function() { 
    console.log('clicked');
}, false);
