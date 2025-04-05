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
    class Block {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 30 + 10;
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
            ctx.rect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
            ctx.strokeStyle = getComputedStyle(document.body)
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    }
    const blocks = Array.from({ length: 15 }, () => new Block());
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        blocks.forEach(block => {
            block.update();
            block.draw();
        });
        blocks.forEach((block1, i) => {
            blocks.slice(i + 1).forEach(block2 => {
                const dx = block1.x - block2.x;
                const dy = block1.y - block2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 200) {
                    ctx.beginPath();
                    ctx.moveTo(block1.x, block1.y);
                    ctx.lineTo(block2.x, block2.y);
                    ctx.strokeStyle = getComputedStyle(document.body);  //.getPropertyValue('--primary-color');
                    ctx.globalAlpha = 0.15 * (1 - distance / 200);
                    ctx.lineWidth = 1;
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            });
        });
        requestAnimationFrame(animate);
    }
    animate();
});