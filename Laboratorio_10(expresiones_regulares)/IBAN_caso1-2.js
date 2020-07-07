// EXPRESIONES REGULARES //

// Validar IBAN
// Caso 1 dado este IBAN: ES6600190020961234567890 Validar que se informa con dos letras, y los números correspondientes.

const pattern = /^([A-Za-z]{2}(\s|-|_)?\d{2}(\s|-|_)?\d{4}(\s|-|_)?\d{4}(\s|-|_)?\d{2}(\s|-|_)?\d{10})|([A-Za-z]{2}(\s|-|_)?\d{2}(\s|-|_)?((\d{4})(\s|-|_)?){5})$/;

const value = "ES6600190020961234567890";
console.log(pattern.test(value));

// Caso 2 
// Vamos a permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas:

const value2 = "ES6600190020961234567890";
console.log(pattern.test(value2));


const value3 = "ES66 0019 0020 9612 3456 7890";
console.log(pattern.test(value3));
