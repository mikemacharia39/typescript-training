var reviews = [5, 5, 5.5, 4, 3];
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
}
console.log("============");
var total = 0;
for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
    var review = reviews_1[_i];
    console.log(review);
    total += review;
}
var average = total / reviews.length;
console.log("Average = ".concat(average));
