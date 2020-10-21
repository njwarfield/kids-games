
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = exports.LaunchPad = void 0;
const firework_1 = require("./firework");
export class LaunchPad {
    constructor(canvas, innerHeight, innerWidth) {
        this.hue = 120;
        this.limtiterTotal = 5;
        this.limiterTick = 0;
        this.timerTotal = 80;
        this.timerTick = 0;
        this.mouseDown = false;
        this.mouseX = 0;
        this.mouseY = 0;
        this.fireworks = [];
        this.particles = [];
        this.canvas = canvas;
        canvas.height = this.canvasHeight = innerHeight;
        canvas.width = this.canvasWidth = innerWidth;
        const context = canvas.getContext('2d');
        if (context) {
            this.context = context;
        }
    }
    init() {
        this.canvas.addEventListener('mousemove', (event) => {
            this.mouseX = event.pageX - this.canvas.offsetLeft;
            this.mouseY = event.pageY - this.canvas.offsetTop;
        });
        this.canvas.addEventListener('mousedown', (event) => {
            event.preventDefault();
            this.mouseDown = true;
        });
        this.canvas.addEventListener('mouseup', (event) => {
            event.preventDefault();
            this.mouseDown = false;
        });
    }
    fire() {
        requestAnimationFrame(this.fire);
        const context = this.context;
        const hue = random(0, 360);
        if (context) {
            context.globalCompositeOperation = 'desintation-out';
            context.fillStyle = 'rgba(0, 0, 0, 0.5)';
            context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
            context.globalCompositeOperation = 'lighter';
            let f = this.fireworks.length;
            while (f--) {
                const firework = this.fireworks[f];
                firework.draw(context, hue);
                const remove = firework.update();
                if (remove) {
                    this.fireworks.splice(f, 1);
                }
            }
            let p = this.particles.length;
            while (p--) {
                const particle = this.particles[p];
                particle.draw(context, hue);
                const remove = particle.update();
                if (remove) {
                    this.particles.splice(p, 1);
                }
            }
            if (this.timerTick >= this.timerTotal) {
                if (!this.mouseDown) {
                    this.fireworks.push(new firework_1.Firework(this.canvasWidth / 2, this.canvasHeight, random(0, this.canvasWidth), random(0, this.canvasHeight / 2)));
                    this.timerTick = 0;
                }
                else {
                    this.timerTick++;
                }
            }
            if (this.limiterTick >= this.limtiterTotal) {
                if (this.mouseDown) {
                    this.fireworks.push(new firework_1.Firework(this.canvasWidth / 2, this.canvasHeight, this.mouseX, this.mouseY));
                    this.limiterTick = 0;
                }
                else {
                    this.limiterTick++;
                }
            }
        }
    }
}
exports.LaunchPad = LaunchPad;
function random(min, max) {
    return Math.random() * (max - min) + min;
}
exports.random = random;
