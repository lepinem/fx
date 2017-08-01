console.log(max(5, 9));
console.log(maxOfThree(2, 9, 4));
console.log(isVowel("y"));
console.log(sum(8, 3));
console.log(avg(7, 2, 8));
console.log(getLength("string"));
console.log(greaterThan(88, 76));
console.log(greet("Matt"));
console.log(madLib("she's","buying","stairway","heaven"));

// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(x, y){
  if (x > y){
    return x;
  } else {
    return y;
  }

    // Your answer here
}


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(x, y, z){
  if ((x > y) && (x > z)) {
    return x;
  } else if ((y > x) && (y > z)) {
        return y;
      } else if ((z > x) && (z > y)){
          return z;
      }
  }

    // Your answer here


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(c){
  if (c == "a") {
    return "true";
  } else if (c == "e") {
    return "true";
  } else if (c == "i") {
    return "true";
  } else if (c == "o") {
    return "true";
  } else if (c == "u") {
    return "true";
  } else if (c == "y") {
    return "sometimes";
  } else {
    return "false";
  }

    // Your answer here
}


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(x, y) {
  return x + y
}


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(x, y, z) {
  return (x + y + z)/3

}


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength() {
  let str = "String"
  let n = str.length
  return n
}


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(x, y) {
  if (x > y) {
    return "true";
  } else {
    return "false"
  }
}


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(name) {
  return "Hello, " + name;
}


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madLib(a, b, c, d) {
  return "...and " + a + " " + b + " a " + c + " to " + d +"!"

}
