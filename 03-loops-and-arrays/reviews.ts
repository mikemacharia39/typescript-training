let reviews: number[] = [5, 5, 5.5, 4, 3];

for(let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
}

console.log("============");

let total: number = 0;
for (let review of reviews) {
    console.log(review);
    total += review;
}

let average: number = total / reviews.length;

console.log(`Average = ${average}`);
