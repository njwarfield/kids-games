export declare class Firework {
    x: number;
    y: number;
    startX: number;
    startY: number;
    targetX: number;
    targetY: number;
    distanceToTarget: number;
    distanceTraveled: number;
    coordinates: Array<[number, number]>;
    coordinateCount: number;
    angle: number;
    speed: number;
    acceleration: number;
    brightness: number;
    targetRadius: number;
    constructor(startX: number, startY: number, targetX: number, targetY: number);
    getDistanceToTarget(): void;
    update(): boolean;
    draw(context: CanvasRenderingContext2D, hue: number): void;
}
