// VALIDACIÓN IBAN CASO 3

const pattern = /^[A-Z]{2}\d{2}/;

const value3 = "ES66 0019 0020 9612 3456 7890";
console.log(pattern.exec(value3));