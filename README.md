# Node JS Lat One

- Multiple Request with set out time

	//1st function

	function placeAnOrder(orderNumber) {

  		console.log("Customer Order:", orderNumber);

  		//after you create 2nd function you write 2nd function here

 	 	cookAndDeliver(function() {

     	 		console.log("Delivered food order:", orderNumber);

 	 	});
	};

		//this is sample how to print out
	
		placeAnOrder(1);

	//2nd function and set the time out
	
	function cookAndDeliver(callAway) {
   		
		setTimeout(callAway, 3000);

	};

	//to print out on console
	
	placeAnOrder(1);

	placeAnOrder(2);

	placeAnOrder(3);

	placeAnOrder(4);

	placeAnOrder(5);

	placeAnOrder(6);
	
