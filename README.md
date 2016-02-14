# NodeJS Lat One

#### Multiple Request with set out time

1st function

	function placeAnOrder(orderNumber) {

		console.log("Customer Order:", orderNumber);

		//after you create 2nd function you write 2nd function here

	 	cookAndDeliver(function() {

 	 	console.log("Delivered food order:", orderNumber);

	 	});
	};

This is sample how to print out
	
	placeAnOrder(1);

2nd function and set the time out
	
	function cookAndDeliver(callAway) {
		
		setTimeout(callAway, 3000);
	
	};

To print out on console
	
	placeAnOrder(1);

	placeAnOrder(2);

	placeAnOrder(3);

	placeAnOrder(4);

	placeAnOrder(5);

	placeAnOrder(6);
	
#### References to Object

	var SomeOne = {
	    favFood: "Nasi Goreng",
	    favDrink: "Jahe Cola"
	};

	var Person = SomeOne;

	Person.favFood = "Gulai";
	Person.favDrink = "Bandrex";

	console.log("What his fav food? " + Person.favFood);
	console.log("What his fav drink? " + Person.favDrink);

#### Two and Three Equal sign, what the diff??

	console.log(19 == '19'); // true

	console.log(19 === '19'); // false

#### This

##### this with object

	var Person = {
	    printFirstName: function () {
	        console.log("My name is Dyo");
	        console.log(this === Person); // true
	    }
	};
	Person.printFirstName();

##### sample this "global"

	function doSomething() {
	    console.log("Do something good");
	    console.log(this === global);
	};
	doSomething();