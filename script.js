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
const text = "Hello";
console.log(text.repeat(3)); // "HelloHelloHello"
