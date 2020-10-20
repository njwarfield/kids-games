import { Firework } from './firework';
import { Particle } from './particle';
export declare class LaunchPad {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D | undefined;
    canvasWidth: number;
    canvasHeight: number;
    hue: number;
    limtiterTotal: number;
    limiterTick: number;
    timerTotal: number;
    timerTick: number;
    mouseDown: boolean;
    mouseX: number;
    mouseY: number;
    fireworks: Firework[];
    particles: Particle[];
    constructor(canvas: HTMLCanvasElement, innerHeight: number, innerWidth: number);
    init(): void;
    fire(): void;
}
export declare function random(min: number, max: number): number;
