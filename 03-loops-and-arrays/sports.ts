let sports: string[] = ["golf", "football", "cricket", "volleyball"];

for (let i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}

console.log("===== ANOTHER WAY ========");

for (let sport of sports) {
    console.log(sport);
}

console.log("===== WITH IF ========");

for (let sport of sports) {
    if (sport == "cricket") {
        console.log(`${sport} my favorite`);
    } else {
        console.log(sport);
    }
}

console.log("======= WITH FOR EACH=========");

sports.forEach(sport => {
    console.log(sport);
});