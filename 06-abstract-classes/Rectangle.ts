import { Shape } from "./Shape";

export class Rectangle extends Shape {
    constructor(theX: number, theY: number, private _width: number, private _length: number) {
        super(theX, theY);
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get length(): number {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }

    public getInfo(): string {
        return super.getInfo() + `width = ${this.width} length = ${this.length}`
    }

    calculateArea(): number {
        return this._length * this._width;
    }
}