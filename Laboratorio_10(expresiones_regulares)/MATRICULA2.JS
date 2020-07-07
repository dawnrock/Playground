// // Validar Matricula.

// Caso 2.
// Vamos a extraer por un lado la parte numérica y por otro las letras.


const patternNumber = /^\d{4}/;

const patternLetters = /[A-Z]{3}/;


const value1 = "2021 GMD";
const value2 = "2345-GMD";
const value3 = "4532BDB";
const value4 = "0320-AAA";

console.log("-------------------");

console.log(patternNumber.exec(value1));
console.log(patternNumber.exec(value2));
console.log(patternNumber.exec(value3));
console.log(patternNumber.exec(value4));

console.log("-------------------");

console.log(patternLetters.exec(value1));
console.log(patternLetters.exec(value2));
console.log(patternLetters.exec(value3));
console.log(patternLetters.exec(value4));