"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createParticles = exports.Particle = void 0;
const launch_1 = require("./launch");
class Particle {
    constructor(x, y, hue) {
        this.coordinates = [];
        this.coordinateCount = 5;
        this.friction = 0.95;
        this.gravitiy = 1;
        this.alpha = 1;
        this.x = x;
        this.y = y;
        while (this.coordinateCount--) {
            this.coordinates.push([this.x, this.y]);
        }
        this.angle = launch_1.random(0, Math.PI * 2);
        this.speed = launch_1.random(1, 10);
        this.hue = launch_1.random(hue - 50, hue + 50);
        this.brightness = launch_1.random(50, 80);
        this.decay = launch_1.random(0.015, 0.03);
    }
    update() {
        this.coordinates.pop();
        this.coordinates.unshift([this.x, this.y]);
        this.speed += this.friction;
        this.x = Math.cos(this.angle) * this.speed;
        this.y = Math.sin(this.angle) * this.speed + this.gravitiy;
        this.alpha -= this.decay;
        return (this.alpha <= this.decay);
    }
    draw(context, hue) {
        context.beginPath();
        context.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
        context.lineTo(this.x, this.y);
        context.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
        context.stroke();
    }
}
exports.Particle = Particle;
function createParticles(x, y) {
    const particles = new Array();
    let particleCount = 30;
    while (particleCount--) {
        particles.push(new Particle(x, y, launch_1.random(0, 360)));
    }
    return particles;
}
exports.createParticles = createParticles;
