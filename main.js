// var secondsInMinute = 60;
// var minutesInHour = 60;
// var hoursInDay = 24;
// var daysInYear = 365;
// var secondsInYear = ((secondsInMinute * minutesInHour) * hoursInDay) * daysInYear;
// var hoursInAYear = hoursInDay * daysInYear;
// var minutesInDecade = (hoursInAYear * 60) * 10;
// var ageInSeconds = secondsInYear * 32;

// console.log(hoursInAYear);
// console.log(minutesInDecade);
// console.log(ageInSeconds);

// // var userAge = prompt("Enter your age in years");
// // alert("You are " + parseInt(userAge) * secondsInYear + " seconds old");

// var age = 20;
// var drinkingAge = 21;

// if (age >= drinkingAge) {
//   console.log("have a drink");
// } else {
//   console.log("no drinks for you");
// }

// var cow = true;
// var frog = false;

// if (cow) {
//   console.log('you are a cow');
// }

// if (!frog) {
//   console.log('no frogs');
// }

// var age = 25;
// var male = true;

// if (age > 21 && male) {
//   console.log("Scotch and cigar night!");
// }

// var speed = 'fast';
// var color = 'red';
// var drink = 'coke';

// if ((speed === 'fast' || color === 'red') && drink === 'coke') {
//   console.log('ticket time and a coke');
// }

//for loops



//within the parenthesis add the commands you want to happen.  The first thing is the number you want to start with "i = 0" end with semicolon.  Think of the items inside the for command as 'before', 'during', and 'after'. when 'during' is not true anymore, exit loop.  DON'T END LAST COMMAND OF LOOP WITH SEMICOLON.

// for(var i = 0; i < 5; i++) {
//   console.log('Your number is: ', i+1);
// }

// var num = 5;

// for(var i = 0; i < num + 1; i++) {
//   console.log('Your number is: ', i);
// }

// var myArray = ['cat', 'dog', 'fish', 'cow'];

// for( var j = 0; j < myArray.length; j++ ) {
//   console.log('index', j);
//   console.log('You are a ', myArray[j]);
// }


//String Manipulation

var firstName = "Jonathan";
var lastName = "Hinton";
var name = firstName + " " + lastName;
console.log(name[2]);
console.log(name.length);
console.log(firstName.length);

for( var k=0; k<firstName.length; k++){
  console.log(firstName[k]);
}

var phrase = "I loue cows";
console.log('charat 7', phrase.charAt(7));
console.log(phrase);
phrase = phrase.replace('loue', 'love'); //always store any command you give javascript otherwise it will run it and delete it.
console.log(phrase);

var anotherPhrase = "The lazy dog likes the weird fox";
var newPhrase = anotherPhrase.replace(/o/g, "i");
console.log(newPhrase);









































