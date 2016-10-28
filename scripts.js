//this is a comment
// {}();$
$(document).ready(function(){

// console.log("hello world!");

// var myGreeting = "hello, world with variables";
//
// console.log(myGreeting + " " + "and also strings!");

// var x = 100;
// var y = 5;
//
// console. log (x * y) + "5";
//
// if (x == 5) {
//
//     console.log ("it's more than 5");
// } else { if (x == 100) {
//
// 	console.log ("it's 100");
// }	else {
// 	console.log ("it's neither 5 nor 100");
// }

// || or
// != not equal
// && and
// ! not

// alert ('hello world');
//
// prompt ("Hello! World?");


//___________________________________________

	var answer = prompt ("what is your favorite meal?");


    // $("body").append(answer + "is my name")

    if (answer == "cake") {
    	$("body").prepend("mine too!");
    } else if (answer == "pizza"){
    	$("body").prepend("take care of yourself");
    } else{
				$("body").append("cool!" + " " + answer);
		}


});
