let prompt = require("prompt-sync")();

function fibonacciSequence(n) {
  let fib = [0, 1];
  while (fib[fib.length - 1] < n) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib;
}

function checkFibonacci(num) {
  let fibSequence = fibonacciSequence(num);
  if (fibSequence.includes(num)) {
    return `O número ${num} pertence à sequência de Fibonacci.`;
  } else {
    return `O número ${num} não pertence à sequência de Fibonacci.`;
  }
}

let num = parseInt(
  prompt(
    "Digite um número para verificar se pertence à sequência de Fibonacci: "
  )
);
console.log(checkFibonacci(num));
