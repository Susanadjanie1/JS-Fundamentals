const xArg = process.argv[2];

const numberOfOccurrences = parseInt(xArg);
if (isNaN(numberOfOccurrences)) {
  console.log("Missing number of occurrences");
} else if (numberOfOccurrences > 0) {
  
  for (let i = 0; i < numberOfOccurrences; i++) {
    console.log("C is fun");
  }
}