var isValidFullName = fullname => fullname && (fullname.length >= 5);

var isValidYear = year => year && (year >= 1850) && (year <= new Date().getFullYear());

var isValidMonth = month => month && (month >= 1) && (month <= 12);

var isLeapYear = year => year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);

var isValidDay = (day, month, year) => {
    var monthLength = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return day > 0 && day <= monthLength[month - 1];
} 

var splitDateInParts = date => {
    var parts = date.split("/"); 

    return [parseInt(parts[0]), parseInt(parts[1]), parseInt(parts[2])];
}

var isValidDate = date => {
    
    if (date.length < 8 || date.length > 10) return false;

    var parts = splitDateInParts(date);

    var validYear = isValidYear(parts[2]); 

    var validMonth = isValidMonth(parts[1]);

    var validDay = isValidDay(parts[0], parts[1], parts[2]);

    return validYear && validMonth && validDay;

}


var DNI_LETTERS = "TRWAGMYFPDXBNJZSQVHLCKET";
var isValidDNILetter = (dniLetter, dniNumber) => DNI_LETTERS [dniNumber % 23] === dniLetter;
var isValidDNINumber = number => number >= 0 && number <= 99999999;

var isValidDNI = dni => {
    
    if (dni.length !== 9) return false;
   
    var dniNumber = dni.slice(0, 8);
    var dniLetter = dni.slice(8, 9);
    
    return isValidDNINumber(dniNumber) && isValidDNILetter(dniLetter, dniNumber);
}


var isValidMobile = mobile => {
    return (
        mobile && 
       
        parseInt(mobile) &&
       
        mobile.length == 9 &&
      
        (mobile.startsWith("9") || mobile.startsWith("8") || mobile.startsWith("7") || mobile.startsWith("6"))
    )
}

//Añadimos una variable para usar directamente el argumento id y validationFunction para ahorrarnos la ecuación para funciones similares
//  (validateBirthdate, validateDNI, validateMobile). Mirar Laboratorio_8.1
var validateInput = (id, validationFunction) => { 
    //usamos la id directamente para referirnos a los inputs de todas las funciones y le damos ese valor a field.
    var field = document.getElementById(id);
    //aqui invocamos al valor de field, que en este caso es la id y le damos su valor a valid.
    var valid = validationFunction(field.value);

    if (valid) {
        field.classList.remove("error");
    } else {
        field.classList.add("error");
    }

    return valid;

}

//creamos un objeto con varias propiedades que llaman a sus correspondientes inputs y los valida.
var inputs = {
    fullname: () => validateInput("fullname", isValidFullName),
    birthday: () => validateInput("birthday", isValidDate),
    dni: () => validateInput("dni", isValidDNI),
    mobile: () =>  validateInput("mobile", isValidMobile),

}

var validateForm = (event) => {
    event.preventDefault();
    //Hacemos un bucle para que vaya llamando a la funcion validateInput de cada propiedad...
    for(var id in inputs){
        //...y lo ejecute. De esta manera, en bucle, voy a ir llamando a cada una de estas funciones que hemos almacenado en nuestro
        //objeto de registro (inputs).
        inputs[id]();
    } 
};

document.getElementById("register").addEventListener("submit", validateForm);
//Tambien podemos registrar todos los movimientos en los inputs sin necesidad de submits añadiendo un bucle parecido al de la 
//linea 96
for(var id in inputs) {
    //por cada id de los inputs le pasamos la id al evento(addEventListener) "change" y a este la función del bucle inputs[id].
    document.getElementById(id).addEventListener("change", inputs[id])  
}




