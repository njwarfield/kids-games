Object.defineProperty(exports, "__esModule", { value: true });
exports.Firework = void 0;
const launch_1 = require("./launch");
class Firework {
    constructor(startX, startY, targetX, targetY) {
        this.x = 0;
        this.y = 0;
        this.startX = 0;
        this.startY = 0;
        this.targetX = 0;
        this.targetY = 0;
        this.distanceToTarget = 0;
        this.distanceTraveled = 0;
        this.coordinates = [];
        this.coordinateCount = 3;
        this.speed = 2;
        this.acceleration = 1.05;
        this.targetRadius = 1;
        while (this.coordinateCount--) {
            this.x = this.startX = startX;
            this.y = this.startY = startY;
            this.targetX = targetX;
            this.targetY = targetY;
            this.coordinates.push([this.x, this.y]);
        }
        this.angle = Math.atan2(this.targetY - this.startY, this.targetX - this.startX);
        this.brightness = launch_1.random(50, 70);
    }
    getDistanceToTarget() {
        this.distanceToTarget = calculateDistance(this.startX, this.startY, this.targetX, this.targetY);
    }
    update() {
        this.coordinates.pop();
        this.coordinates.unshift([this.x, this.y]);
        if (this.targetRadius < 8) {
            this.targetRadius += 0.3;
        }
        else {
            this.targetRadius = 1;
        }
        this.speed += this.acceleration;
        let vx = Math.cos(this.angle) * this.speed;
        let vy = Math.sin(this.angle) * this.speed;
        this.distanceTraveled = calculateDistance(this.startX, this.startY, this.x + vx, this.y + vy);
        var result;
        if (this.distanceTraveled >= this.distanceToTarget) {
            result = true;
        }
        else {
            this.x += vx;
            this.y += vy;
            result = false;
        }
        return result;
    }
    draw(context, hue) {
        context.beginPath();
        context.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
        context.lineTo(this.x, this.y);
        context.strokeStyle = "hsl(" + hue + ", 100%, " + this.brightness + "%)";
        context.stroke();
    }
}
exports.Firework = Firework;
function calculateDistance(pointX, pointY, secondPointX, secondPointY) {
    var xDistance = pointX - secondPointX;
    var yDistance = pointY - secondPointY;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}
