let sportsTwo: string[] = ["Golf", "football"];

sportsTwo.push("volleyball");
sportsTwo.push("handball");

for (let sport of sportsTwo) {
    console.log(sport);
}

sportsTwo.pop();
console.log("After pop: ");
console.log(sportsTwo);