var sportsTwo = ["Golf", "football"];
sportsTwo.push("volleyball");
sportsTwo.push("handball");
for (var _i = 0, sportsTwo_1 = sportsTwo; _i < sportsTwo_1.length; _i++) {
    var sport = sportsTwo_1[_i];
    console.log(sport);
}
sportsTwo.pop();
console.log("After pop: ");
console.log(sportsTwo);
