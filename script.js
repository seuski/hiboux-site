const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let circles = [];

for (let i = 0; i < 100; i++) {
  circles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  circles.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.fill();

    c.x += c.dx;
    c.y += c.dy;

    if (c.x < 0 || c.x > canvas.width) c.dx = -c.dx;
    if (c.y < 0 || c.y > canvas.height) c.dy = -c.dy;
  });

  requestAnimationFrame(animate);
}

animate();
