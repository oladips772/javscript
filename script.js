/** @format */
// ? STRINGS
// ? chartAt returns the index of the character
// var string = "hello world"
// var res = string.charAt(0);
// console.log(res);

// ? replacing a string with a new string
// var str = "Hello World";
// var res = str.replace("World", "love");
// console.log(res);

// ? search method finds the index of the first letter in the given string
// var str = "Visit W3schools today";
// var res = str.search("W3schools")
// console.log(res);

// ? split method is used to split a string into an array of strings
// var str = "Hello world how are you";
// var res = str.split(" ")
// console.log(res)

// ? subsrting method returns a new string created from the given string , creating the new string starting from the given index  ---- outputs "ell"
// var str = "Hello World!"
// var res = str.substring(1, 4);
// console.log(res)

// ? ARRAY

// ? length methods returns the numer of items in an array
// var fruits = ["Bannana", "orange", "mangoe", "apple"];
// console.log(fruits.length)

// // ? prototype constructor allows you to make a new array method and attach to an array
// Array.prototype.myUpperCase = function () {
//   for (i = 0; i < this.length; i++) {
//     this[i] = this[i].toUpperCase();
//   }
// };
// // ? this will converts all strings in the array to uppercase
// var fruits = ["Bannana", "orange", "mangoe", "apple"];
// fruits.myUpperCase()
// console.log(fruits)

// ? concat method takes an array as the aguments and join the arrays together
// var boys = ["jani", "james", "samuel"];
// var girls = ["jane", "joy", "ife"];
// const students = boys.concat(girls);
// console.log(students);

// ? copywithin method
// var fruits = ["kiwi", "apple", "orange", "mangoe"]
// var res = fruits.copyWithin(3, 0);
// console.log(res)

// ? entries method returns an array iterator object
// var fruits = ["mangoes", "apple", "kiwi"];
// var f = fruits.entries();
// console.log(f);

// every method checks if all elements in an array pass a test provided as function , it returns true or false;
// var ages = [20, 34, 24, 26];
// function checkAdult(age) {
//   return age >= 18;
// }

// const result = ages.every(checkAdult);
// console.log(result);

// ? fill method replaces a specific elements in an array with a given value to replace , it uses indexing to start filling and end
// var fruits = ["orange", "mangoe", "apple", "berry"];
// fruits.fill("kiwi", 0, 3);
// console.log(fruits);

// filter method returns or create a new array of elements that passes a test provided as function
// var ages = [20, 34, 24, 26,11,17];
// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(ages.filter(checkAdult));


// boolean
// true or false