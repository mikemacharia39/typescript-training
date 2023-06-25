import { Coach } from "./Coach";
import { GolfCoach } from "./GolfCoach";
import { CricketCoach } from "./CricketCoach";

let myGolfCoach = new GolfCoach();
let myCricketCoach = new CricketCoach();

let theCoaches: Coach[] = [];

theCoaches.push(myGolfCoach);
theCoaches.push(myCricketCoach);

for (let tempCoach of theCoaches) {
    console.log(tempCoach.getDailyWorkout());
}