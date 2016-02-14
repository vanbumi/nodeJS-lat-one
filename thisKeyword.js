//this with object

var Person = {
    printFirstName: function () {
        console.log("My name is Dyo");
        console.log(this === Person); // true
    }
};
Person.printFirstName();

//sample this "global"

function doSomething() {
    console.log("Do something good");
    console.log(this === global);
};
doSomething();