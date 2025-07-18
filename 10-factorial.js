function factorial(n) {
  if (isNaN(n) || n <= 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

const arg = process.argv[2];

const number = parseInt(arg);

const result = factorial(number);

console.log(result);
