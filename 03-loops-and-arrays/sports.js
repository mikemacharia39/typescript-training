var sports = ["golf", "football", "cricket", "volleyball"];
for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}
console.log("===== ANOTHER WAY ========");
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    console.log(sport);
}
console.log("===== WITH IF ========");
for (var _a = 0, sports_2 = sports; _a < sports_2.length; _a++) {
    var sport = sports_2[_a];
    if (sport == "cricket") {
        console.log("".concat(sport, " my favorite"));
    }
    else {
        console.log(sport);
    }
}
console.log("======= WITH FOR EACH=========");
sports.forEach(function (sport) {
    console.log(sport);
});
