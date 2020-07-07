// Validar Matricula

// Caso 1
//Vamos a validar una matrícula de coche moderna, esta compuesta por 4 digitos y tres letras, patrones a validar:


const pattern = /^\d{4}(\s|-|_)?[A-Z]{3}$/;


const value1 = "2021 GMD";
const value2 = "2345-GMD";
const value3 = "4532BDB";
const value4 = "0320-AAA";

console.log(pattern.test(value1));
console.log(pattern.test(value2));
console.log(pattern.test(value3));
console.log(pattern.test(value4));