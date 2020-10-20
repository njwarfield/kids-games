export declare class Particle {
    x: number;
    y: number;
    coordinates: [number, number][];
    coordinateCount: number;
    angle: number;
    speed: number;
    friction: number;
    gravitiy: number;
    hue: number;
    brightness: number;
    alpha: number;
    decay: number;
    constructor(x: number, y: number, hue: number);
    update(): boolean;
    draw(context: CanvasRenderingContext2D, hue: number): void;
}
export declare function createParticles(x: number, y: number): Particle[];
