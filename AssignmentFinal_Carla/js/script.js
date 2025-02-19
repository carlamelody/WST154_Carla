class Wisp {
    constructor(x, y, radius, dx, dy, glowColor) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.glowColor = glowColor;
    }

    draw(ctx) {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(this.x, this.y, this.radius * 0.2, this.x, this.y, this.radius);
        gradient.addColorStop(0, this.glowColor);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.globalCompositeOperation = "lighter";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";
        ctx.closePath();
    }

    update(canvas) {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
    }
}

const canvas = document.getElementById("ballCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const wisps = [];
let glowColor = `rgba(255, 255, 170, 1)`; 
for (let i = 0; i < 30; i++) { 
    let radius = Math.random() * 10 + 5;
    let x = Math.random() * (canvas.width - radius * 2) + radius;
    let y = Math.random() * (canvas.height - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;

  
    wisps.push(new Wisp(x, y, radius, dx, dy, glowColor));
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    wisps.forEach(wisp => {
        wisp.update(canvas);
        wisp.draw(ctx);
    });

    requestAnimationFrame(animate);
}

animate();
