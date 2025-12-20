//

/*
Data Types in JavaScript
Data types help the program understand the kind of data it's working with.

Number: integers and floating-point values. Examples of integers include 7, 19, and 90.
Floating point: a number with a decimal point. Examples include 3.14, 0.5, and 0.0001.
String: a sequence of characters, enclosed in quotes. 'JavaScript is fun'
Boolean: true or false. Can represent a condition, such as isLoggedIn = true.
Undefined: a variable that has been declared but not assigned a value. 
Null:A null value is an empty value or a variable that has intentionally been assigned null.
Object: a collection of key-value pairs. The key is the property name, and the value is the property value.
Symbol: a unique and immutable value that may be used as an identifier for object properties.
BigInt: When the number is too large for the Number data type, you can use the BigInt data type to represent integers of arbitrary length.
*/

/*  
String Concatenation in JavaScript
Concatenation is the process of joining multiple strings or combining strings with variables that hold text. 
The + operator is one of the simplest and most frequently used methods to concatenate strings.
*/

let studentName = "Asad";
let studentAge = 25;
let studentInfo = studentName + " is " + studentAge + " years old.";
console.log(studentInfo); // Asad is 25 years old.

let fname = "Karim";
let lname = "Khan";
// let fullName = fname + " " + lname;
// or
// let fullName = `${fname} ${lname}`;
// let fullName = fname.concat(" ", lname);
// -------------------------------------------
// A function reference is a function name without the parentheses
const myFunc = (val) => `value: ${val}`;
const array = [1, 2, 3];
const newArray = array.map(myFunc);
console.log(newArray);

// it is common convention to prefix an unused parameter with an underscore _.
// You could also leave the parameter empty like so: (, char1) but it is
// often clearer to name the parameter for future readability.
const addCharacters = (_prefix) => (suffix) => suffix.toUpperCase();
console.log(addCharacters("foo")("bar")); // → "BAR"

// filtering
const superHeroNames = ["Batman", "Spongebob", "Spiderman", "Patric"];
const namesWithS = superHeroNames.filter((name) => name.startsWith("S"));
const namesWithA = superHeroNames.filter((letterA) => letterA.includes("a"));
console.log(namesWithS); // → ["Spongebob", "Spiderman"]
console.log(namesWithA); // → ["Batman", "Spiderman", "Patric"]
// .every(), it returns true if all elements pass the test
const arr = ["A", "b", "C"];
arr.every((letter) => letter === letter.toUpperCase());

// slice method
// Definitioon: The slice() Method: This method returns a new array containing a shallow copy of a portion of the original array, specified by start and end indices.

const text1 = "freeCodeCamp";
console.log(text1.slice(0, 4)); // "free"
console.log(text1.slice(4, 8)); // "Code"
console.log(text1.slice(8, 12)); // "Camp"

const isEven = (num) => num % 2 === 0;
console.log(isEven(4));

//The replace() Method: This method allows you to find a specified value (like a word or character) in a string and replace it with another value.
const text2 = "I like cats";
console.log(text2.replace("cats", "dogs")); // "I like dogs"

// The repeat() Method: This method is used to repeat a string a specified number of times.
const text3 = "Hello";
console.log(text3.repeat(3)); // "HelloHelloHello"

// typeof()

let age = 40;
console.log(typeof age);
