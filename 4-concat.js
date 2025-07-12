const firstArgument = process.argv[2];
const secondArgument = process.argv[3];

// JavaScript's template literals will automatically convert 'undefined' to the string "undefined".
console.log(`${firstArgument} is ${secondArgument}`);
