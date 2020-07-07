// Implementa una función que muestre por consola “Hola Mundo”.
function sayHello() {
    console.log("Hola Mundo");
} 
sayHello();


console.log("////////////////////////////////////////////");

// Implementa una función que admita como parámetro un nombre y salude por consola a dicha persona.

var name = "Manu";

var sayName = name => {
    console.log("Hola " + name)
}
sayName(name);


console.log("////////////////////////////////////////////");

// Implementa una función que dado un string como parámetro devuelva el string en mayúsculas.


var getCapital = sentence => {
    var container = sentence.toUpperCase();
    console.log(container);
}

getCapital("minúsculas convertidas a mayúsculas");


console.log("////////////////////////////////////////////");

// Implementa una función que dado un string como parámetro devuelva el string en minúsculas.


var getLower = sentence => {
    var container = sentence.toLowerCase();
    console.log(container);
}

getLower("MAYÚSCULAS CONVERTIDAS EN MINÚSCULAS");


console.log("////////////////////////////////////////////");

// Implementa una función que admita 2 números como parámetro y devuelva la suma de ambos.


var suma = (number1, number2) => {
    var total = number1 + number2;
    console.log("Total suma: " + total);
    return total;
}

suma(3, 7);


console.log("////////////////////////////////////////////");

// Implementa una función que admita 3 argumentos de tipo string y devuelva otro string con la concatenación de los 3.

var concatenateStrings = (string1, string2, string3) => {
    containerStrings = string1 + string2 + string3;
    console.log(containerStrings);
    return containerStrings;
} 

concatenateStrings("Somos ", " 3 ", "strings");


console.log("////////////////////////////////////////////");

// Implementa una función que admita como parámetro un objeto y añada a dicho objeto una propiedad llamada ‘id’ inicializada a null.


var addObject = (object, propiedad, value) => {

    object[propiedad] = value;
} 

var objectToAdd = {
    nombre : "Manu",
    edad : 33,
}

addObject(objectToAdd, "id ", null);

console.log(objectToAdd);

console.log("////////////////////////////////////////////");
console.log("////////////////////////////////////////////");

// Implementa una función que admita un parámetro, de cualquier tipo, y que compruebe si el parámetro es undefined o null .

var isUndefined;

var otherUndefined;

var isNull = null;

var checking = anything => anything === undefined ? console.log("Is undefined"): console.log("Is " + isNull + " value");
    
checking(isUndefined);
checking(otherUndefined);
checking(isNull);


console.log("////////////////////////////////////////////");


// Implementa una función que admita un número como parámetro y devuelva si el número es positivo o negativo.

var checkIfPosOrNeg = number => {
   if (number > 0) {
       console.log( number + " es un numero positivo");
   } else if ( number < 0) {
    console.log( number + " es un numero negativo");
   } else {
    console.log( number + " no es ni negativo ni positivo, es un número neutro");
   }
    
}

checkIfPosOrNeg(1);

checkIfPosOrNeg(-1);

checkIfPosOrNeg(0);


console.log("////////////////////////////////////////////");

// Implementa una función que admita un número como parámetro y diga, por consola, si es mayor que 100, menor que 100 o exactamente 100.

var checkIfHundred = number => {
    if (number > 100) {
        console.log( number + " es mayor que 100");
    } else if ( number < 100) {
     console.log( number + " es menor que 100");
    } else {
     console.log( "Es exactamente " + number );
    }
     
}
 
checkIfHundred(101);

checkIfHundred(99);

checkIfHundred(100);


console.log("////////////////////////////////////////////");

// Implementa una función que admita como parámetro un objeto y devuelva si dicho objeto tiene una propiedad ‘name’ o no.

var emptyObject = {};

var objectWithName = {
    name: "Manu",
}

 var checkIfPropName = object => {
    object.name? console.log("El objeto tiene la propiedad name"): console.log("El objeto no tiene la propiedad name");
}

checkIfPropName(emptyObject);

checkIfPropName(objectWithName);


console.log("////////////////////////////////////////////");

// Implementa una función que admita 2 números como argumento y compruebe si el primero es divisible por el segundo.

var isDiv = (numberA, numberB) => numberA % numberB === 0 ? console.log("Los numeros " + numberA + " y " + numberB + " son divisibles"):
 console.log("Los numeros " + numberA + " y " + numberB + " no son divisibles");

isDiv(4,2);

isDiv(4,3);


console.log("////////////////////////////////////////////");

// Implementa una función que admita un string y un número como parámetro, y comprobar que tienen ese número de caracteres.

var objectString = "Soy un string."; // contiene 14 carácteres

var checkAmountCharacters = (string, number) => {
    string.length === number ? console.log("El número " + number + " coincide con el número de carácteres del objeto."): 
    console.log("El número " + number + " no coincide con el número de carácteres del objeto.")
}
 
checkAmountCharacters(objectString, 13);

checkAmountCharacters(objectString, 14);

checkAmountCharacters(objectString, 15);

console.log("////////////////////////////////////////////");

// Implementa una función que admita un día de la semana en formato número (del 1 al 7) y devuelva que día de la semana es (en texto).

var dayOFtheWeek = day => {
    switch (day) {
        case 1:
            return console.log("El número " + day + " corresponde al Lunes.");
        case 2:
            return console.log("El número " + day + " corresponde al Martes.");
        case 3: 
            return console.log("El número " + day + " corresponde al Miércoles.");
        case 4:
            return console.log("El número " + day + " corresponde al Jueves.");
        case 5:
            return console.log("El número " + day + " corresponde al Viernes.");
        case 6:
            return console.log("El número " + day + " corresponde al Sábado.");
        case 7:
            return console.log("El número " + day + " corresponde al Domingo.");
        default:
            return console.log("El número " + day + " no corresponde con un dia de la semana.");
    }
}

dayOFtheWeek(6);

dayOFtheWeek(7);

dayOFtheWeek(8);


console.log("////////////////////////////////////////////");

// Implementa un función que dado un número (del 1 al 12), diga a qué mes corresponde en texto.


var monthOfYear = month => {
    switch (month) {
        case 1:
            return console.log("El mes " + month + " corresponde a Enero.");
        case 2:
            return console.log("El mes " + month + " corresponde a Febrero.");
        case 3: 
            return console.log("El mes " + month + " corresponde a Marzo.");
        case 4:
            return console.log("El mes " + month + " corresponde a Abril.");
        case 5:
            return console.log("El mes " + month + " corresponde a Mayo.");
        case 6:
            return console.log("El mes " + month + " corresponde a Junio.");
        case 7:
            return console.log("El mes " + month + " corresponde a Julio.");
        case 8:
            return console.log("El mes " + month + " corresponde a Agosto.");
        case 9: 
            return console.log("El mes " + month + " corresponde a Septiembre.");
        case 10:
            return console.log("El mes " + month + " corresponde a Octubre.");
        case 11:
            return console.log("El mes " + month + " corresponde a Noviembre.");
        case 12:
            return console.log("El mes " + month + " corresponde a Diciembre.");
        default:
            return console.log("La cifra " + month + " no corresponde a ningún mes del año.");
    }
}

monthOfYear(1);
monthOfYear(2);
monthOfYear(3);
monthOfYear(4);
monthOfYear(5);
monthOfYear(6);
monthOfYear(7);
monthOfYear(8);
monthOfYear(9);
monthOfYear(10);
monthOfYear(11);
monthOfYear(12);
monthOfYear(13);


console.log("////////////////////////////////////////////");

// Implementa una función que admita 2 arrays como argumento, y devuelva el array más largo.

var arrayA = ["ratón", "teclado", "pantalla", "altavoces", "torre"];

var arrayB = ["ratón", "teclado", "pantalla", "altavoces"];

var longestArray = (arrayA, arrayB) => arrayA.length > arrayB.length ? console.log("arrayA: " + arrayA): console.log("arrayB: " + arrayB);

longestArray(arrayA, arrayB);


console.log("////////////////////////////////////////////");

// Implementa una función que admita 2 arrays como argumento, y devuelva si el primer elemento de ambos arrays es igual o no.

var puebloA = ["Benalmadena","Fuengirola", "Torremolinos"];

var puebloB = ["Benalmadena","Fuengirola", "Torremolinos"];

var puebloC = ["Fuengirola", "Torremolinos", "Benalmadena"];

var firstSame = (puebloA, puebloB) => puebloA[0] === puebloB[0]? console.log("El primer elemento de ambos arrays son el mismo"):
    console.log("El primer elemento de los arrays son diferentes");

firstSame(puebloA, puebloB);

firstSame(puebloB, puebloC);

firstSame(puebloC, puebloA);