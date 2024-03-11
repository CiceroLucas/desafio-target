let prompt = require("prompt-sync")();

function invertString(inputString) {
  let inverted = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    inverted += inputString[i];
  }
  return inverted;
}

let inputString = prompt("Digite uma string para ser invertida: ");
let invertedString = invertString(inputString);
console.log("String original:", inputString);
console.log("String invertida:", invertedString);
