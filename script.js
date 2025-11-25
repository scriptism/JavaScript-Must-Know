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
const namesWithA  = 

// .every(), it returns true if all elements pass the test
const arr = ["A", "b", "C"];
arr.every(letter => letter === letter.toUpperCase());

