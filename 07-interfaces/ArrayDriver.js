"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GolfCoach_1 = require("./GolfCoach");
const CricketCoach_1 = require("./CricketCoach");
let myGolfCoach = new GolfCoach_1.GolfCoach();
let myCricketCoach = new CricketCoach_1.CricketCoach();
let theCoaches = [];
theCoaches.push(myGolfCoach);
theCoaches.push(myCricketCoach);
for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}
