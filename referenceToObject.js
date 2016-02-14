// References to Object

var SomeOne = {
    favFood: "Nasi Goreng",
    favDrink: "Jahe Cola"
};

var Person = SomeOne;

Person.favFood = "Gulai";
Person.favDrink = "Bandrex";

console.log("What his fav food? " + Person.favFood);
console.log("What his fav drink? " + Person.favDrink);

// Two and Three Equal sign, what the diff??

console.log(19 == '19'); // true

console.log(19 === '19'); // false
