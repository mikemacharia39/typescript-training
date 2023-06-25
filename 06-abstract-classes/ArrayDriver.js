"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCirle = new Circle_1.Circle(5, 10, 20);
var myRectangle = new Rectangle_1.Rectangle(0, 0, 20, 25);
var theShapes = [];
theShapes.push(myRectangle);
theShapes.push(myCirle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var aShape = theShapes_1[_i];
    console.log(aShape);
    console.log("Area = ".concat(aShape.calculateArea()));
}
