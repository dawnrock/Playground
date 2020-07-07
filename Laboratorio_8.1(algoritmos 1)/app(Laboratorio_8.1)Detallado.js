// 1. Full name validation

// - El nombre no este vacío, que no sea null, que no sea undefined,
// - Debe tener una longutid minima de 5 caracteres.
var isValidFullName = fullname => fullname && (fullname.length >= 5);


// - Obtener el nombre que ha introducido el usuario
// - Validar ese nombre
// - Si es invalido ==> Aplicamos regla CSS para error sobre el input   
// - Si es válido ==> No aplicamos regla CSS (la eliminamos).
var validateFullName = () => {
    var fullNameField = document.getElementById("fullName");
    var valid = isValidFullName(fullNameField.value);

    if (valid) {
        fullNameField.classList.remove("error");
    } else {
        fullNameField.classList.add("error");
    }

    return valid;
}
// 2. Birthdate validation

// - Year. Mayor que 1850. Menor o igual que el año actual.
// - Month. Entre 1 y 12.
// - Dias. Máximo 30 0 31 según el mes, con la excepcion de febrero que sera 28 0 29 (según año bisiesto).
var isValidYear = year => year && (year >= 1850) && (year <= new Date().getFullYear());
var isValidMonth = month => month && (month >= 1) && (month <= 12);

// - Necesitamos saber si es bisiesto. Para ello, en internet encontramos una formula para averiguarlo,
// no darle mas importancia ya que existen formas mas sencillas de hacerlo, esto seria la forma mas rudimentaria y matematica.
var isLeapYear = year => year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
var isValidDay = (day, month, year) => {
    var monthLength = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return day > 0 && day <= monthLength[month - 1];
} 
 //necesitamos que el string venga separado en varios para analizar los diferentes parametros del input(dia/mes/año)
//  para ello se usa la funcion .split (*/*)
var splitDateInParts = date => {
    var parts = date.split("/"); // parts => ["26", "08", "1986"]
//toda la linea siguiente se podría simplificar justo en la de arriba con la funcion "map"; var parts = date.split("/").map(parseInt);
    return [parseInt(parts[0]), parseInt(parts[1]), parseInt(parts[2])];
}

//ahora creamos una variable para comprobar que todos los parametros anteriores sean correctos
var isValidDate = date => {
    //queremos que los datos puedan venir sin los 0 de padding, osea en vez de 01/08/2008, 1/8/2008
//y devolvemos falso porque no nos interesa que siga calculando si el número introducido es erróneo
    if (date.length < 8 || date.length > 10) return false;
//si pasa la condicion anterior, llegado a este punto necesitamos partirla para comprobar que los datos introducidos son correctos
    var parts = splitDateInParts(date);// [day, month, year]
//aqui estamos invocando a la posición número 2 del array, en este caso [0, 1, year]
    var validYear = isValidYear(parts[2]); 
//aqui estamos invocando a la posición número 1 del array, en este caso [0, month, 2]
    var validMonth = isValidMonth(parts[1]);
//aqui estamos invocando a la posición número 0 del array, en este caso [day, 1, 2]
//en este caso la funcion nos pide 3 cosas, en la linea 32 puedes ver; var IsValidDay = (day, month, year), necesitamos los
//tres parámetros para validar la función. 
    var validDay = isValidDay(parts[0], parts[1], parts[2]);
//ahora añadimos la condicional para comprobar que devuelvan true los 3 buleanos, despues de haber validado el año,
// el mes y el dia(este ultimo pasando por los tres de nuevo)
    return validYear && validMonth && validDay;

}
//Repetimos la validación creando una funcion que recoja la fecha mediante el input, como hicimos en el validateFullName, linea 12
var validateBirthdate = () => {
    var birthdayField = document.getElementById("birthday");
    var valid = isValidDate(birthdayField.value);

    if (valid) {
        birthdayField.classList.remove("error");
    } else {
        birthdayField.classList.add("error");
    }

    return valid;
}

// 3. DNI validation.

//Comprobamos que el DNI cumpla los parametros del Ministerio del Interior (tabla en los apuntes).
var DNI_LETTERS = "TRWAGMYFPDXBNJZSQVHLCKET";
var isValidDNILetter = (dniLetter, dniNumber) => DNI_LETTERS [dniNumber % 23] === dniLetter;
var isValidDNINumber = number => number >= 0 && number <= 99999999;

var isValidDNI = dni => {
    //12345678Z
    if(dni.length !== 9) return false;
    //utilizamos slice para separar numeros y letra indicando la posición inicial y final del corte de cada variable
    var dniNumber = dni.slice(0, 8);
    var dniLetter = dni.slice(8, 9);
    
    return isValidDNINumber(dniNumber) && isValidDNILetter(dniLetter, dniNumber);
}

var validateDNI = () => {
    var dniField = document.getElementById("dni");
    var valid = isValidDNI(dniField.value);

    if (valid) {
        dniField.classList.remove("error");
    } else {
        dniField.classList.add("error");
    }

    return valid;
}


// 4. Mobile validation.

var isValidMobile = mobile => {
    return (
        mobile && 
        // si no es numero me devuelve not a number (NaN), por lo que me daria directamente false el buleano.
        parseInt(mobile) &&
        //si tiene una longitud mayor a 9 nos devuelve false también.
        mobile.length == 9 &&
        //podemos preguntar por que numero empieza (.startsWith)
        (mobile.startsWith("9") || mobile.startsWith("8") || mobile.startsWith("7") || mobile.startsWith("6"))
    )
}

var validateMobile = () => {
    var mobileField = document.getElementById("mobile");
    var valid = isValidMobile(mobileField.value);

    if (valid) {
        mobileField.classList.remove("error");
    } else {
        mobileField.classList.add("error");
    }
    
    return valid;
}

// 5. General Algorithm

var validateForm = (event) => {
    event.preventDefault();

    validateFullName();
    validateBirthdate();
    validateDNI();
    validateMobile();
    
};

// Events

document.getElementById("register").addEventListener("submit", validateForm);