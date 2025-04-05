/* Created by AI */
document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    class Service {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 20 + 10;
            this.speedX = (Math.random() - 0.5) * 1;
            this.speedY = (Math.random() - 0.5) * 1;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.strokeStyle = getComputedStyle(document.body).getPropertyValue('--primary-color');
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius * 0.6, 0, Math.PI * 2);
            ctx.stroke();
        }
    }
    const services = Array.from({ length: 12 }, () => new Service());
    function drawCurvedLine(x1, y1, x2, y2) {
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        const offset = 50;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(
            midX + (Math.random() - 0.5) * offset,
            midY + (Math.random() - 0.5) * offset,
            x2, y2
        );
        ctx.stroke();
    }
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        services.forEach(service => {
            service.update();
            service.draw();
        });
        services.forEach((service1, i) => {
            services.slice(i + 1).forEach(service2 => {
                const dx = service1.x - service2.x;
                const dy = service1.y - service2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 200) {
                    ctx.strokeStyle = getComputedStyle(document.body).getPropertyValue('--primary-color');
                    ctx.globalAlpha = 0.15 * (1 - distance / 200);
                    ctx.lineWidth = 1;
                    drawCurvedLine(service1.x, service1.y, service2.x, service2.y);
                    ctx.globalAlpha = 1;
                }
            });
        });
        requestAnimationFrame(animate);
    }
    animate();
});