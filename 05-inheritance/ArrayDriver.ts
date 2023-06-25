import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
let myCirle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(0, 0, 20, 25);

let theShapes: Shape[] = [];

theShapes.push(myShape);
theShapes.push(myRectangle);
theShapes.push(myCirle);

for (let aShape of theShapes) {
    console.log(aShape);
    console.log(`Area = ${aShape.area()}`);
}