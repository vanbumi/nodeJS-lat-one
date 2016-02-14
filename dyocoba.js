var person = {
    firstName: "Dyo",
    lastName: "Bumi",
    address: "Jakarta Pusat"
};
console.log(person);

function addNumber(a,b){
  return a + b;
};
console.log(addNumber(3,5));

function worthless() {

};
console.log(worthless());

var printFish = function () {
    console.log("Fish is nice, don't believe just watch! ")
};
printFish();

//you can pass this function to another function and git it time to launch delay
setTimeout(printFish, 5000);
