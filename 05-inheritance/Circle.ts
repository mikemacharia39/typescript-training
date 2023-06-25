import { Shape } from "./Shape";

export class Circle extends Shape {

    constructor(theX: number, theY: number, private _radius: number) {
        super(theX, theY);
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    public getInfo(): string {
        return super.getInfo() + ` radius = ${this._radius}`;
    }

    public area(): number {
        return 3.14 * this._radius * this._radius;
    }
}