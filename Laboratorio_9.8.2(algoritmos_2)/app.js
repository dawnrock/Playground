console.log("////////////////////////////////////////////");

// Implementa una función que admita un array de números, y devuelva el segundo elemento, y en caso de no existir, devuelva ‘undefined’ .

var arrayOfNumbersA = [1, 2, 3];

var arrayOfNumbersB = [1];


var ifSecondExist = array => {
    
    return array[1] ? array[1]: undefined; 

}

console.log(ifSecondExist(arrayOfNumbersA));

console.log(ifSecondExist(arrayOfNumbersB));


console.log("////////////////////////////////////////////");

// Implementa una función que admita un string como parámetro y devuelva la última letra.

var vocales = "aeiou";

var getLastObjectInString = vocales => {
    
    var result = vocales[vocales.length -1];
    console.log(vocales.length);
    return result;
}

console.log(getLastObjectInString(vocales));


console.log("////////////////////////////////////////////");

// Implementa una función que dado un array, intercambie el primer elemento por el último. Muestra por consola el resultado.

var arraySwapfirstByLast = ["zapatillas", "pantalones","camisetas", "sudaderas"]

console.log("Array original");
console.log(arraySwapfirstByLast);

var changeFirstbylast = arraySwapfirstByLast => {

    var swap = (array, a, b) => {
        var temp = array[a];
        array[a] = array[b]
        array[b] = temp;
    }   
    
    swap(arraySwapfirstByLast, [0], [arraySwapfirstByLast.length -1]);
    return arraySwapfirstByLast;
    
}

console.log("----------")
console.log("Array cambiando el primer elemento por el último");
console.log(changeFirstbylast(arraySwapfirstByLast));


console.log("////////////////////////////////////////////");

// Implementa una función que admita 2 parámetros, un número y un texto, y que muestre por consola dicho texto tantas 
// veces como indique el número.




var showTextAsAmountOfNumber = ( number, text) => {

    var emptyArray = [];
    
    for (var index = 0; index < number; index++) {
        emptyArray.push(text);    
    } 
    console.log(emptyArray);

    return;
}

showTextAsAmountOfNumber( 5, " Me repito mucho? ");


console.log("////////////////////////////////////////////");

// Implementa una función que admita como parámetro un objeto cualquiera y devuelva el número de propiedades que
// tiene el objeto.


var menu = ["ensalada", "pizza", "pasta", "carne","postre"];

var getAmountPropInObj = () => {
    
    for (var index = 0; index < menu.length; index++) {
        var amountOfPlates = 0; 
        amountOfPlates += index + 1; 
    }
    console.log("El menú consta de " + amountOfPlates + " platos.");
    return;  
}

getAmountPropInObj(menu);

console.log("////////////////////////////////////////////");


// Implementa una función que admita como parámetro un objeto y muestre por consola los valores de sus propiedades.

var priceList = [
    { 
        tipo: "adulto", 
        price: 12.50, 
        primero: "ensalada", 
        segundo: "pizza, pasta o carne",
        postre: "si" 
    },
    { 
        tipo: "niño", 
        price: 8.50, 
        primero: "ensalada", 
        segundo: "pizza",
        postre: "no" 
    },

];

var getValueOfProperties = list => {

    for (object of list) {
        imprimir(object);
    }

    function imprimir(object) {
        console.log("----------");
        for (propiedad in object) {
            console.log(propiedad + ": " + object[propiedad]);
        }
    }     
};

getValueOfProperties(priceList);


console.log("////////////////////////////////////////////");

// Implementa una función que admita un array de números y otro parámetro que sea un número y sume cada elemento
// del array multiplicado por dicho número. Devuelve el resultado.


var arrayListOfNumbers = [2, 4, 6, 8];

var getMultipList = (arrayListOfNumbers, number) => {
    var arrayResult = [];
    var result = 0;
    
    for (var i = 0; i < arrayListOfNumbers.length; i++) {
        var containerNumber = arrayListOfNumbers[i];
        result = containerNumber * number;
        arrayResult.push(result);
    } 
    console.log("Resultado: ");
    console.log(arrayResult);   
    return ;
}

getMultipList(arrayListOfNumbers, 3);


console.log("////////////////////////////////////////////");


// Implementa una función que dado un string como parámetro y también un carácter, devuelva cuantas veces aparece
// dicho carácter en el string.


var stringToGetRepeated = "esternocleidomastoideo";
var characterToSearch = "e";

var getRepeatedCharacter = (stringToGetRepeated, characterToSearch) => {

    var countRepeated = 0;
    
    for ( var i = 0; i < stringToGetRepeated.length; i++ ) {
        stringToGetRepeated[i] === characterToSearch? countRepeated += 1: countRepeated ;  
    } 
    console.log("La letra " + characterToSearch);
    console.log("Se repite " + countRepeated + " veces en la palabra " + stringToGetRepeated );
      
    return ;
}

getRepeatedCharacter(stringToGetRepeated, characterToSearch);


console.log("////////////////////////////////////////////");

// Implementa una función que dado un array de cualquier tipo, lo recorra del primer al último elemento, mostrando cada
// elemento por consola.


var sports = ["fútbol", "baloncesto", "tenis", "golf", "natación"];

var getElements = array => {

    var containerElements = [];

    for (var index = 0; index < array.length; index++) {
        containerElements.push(array[index]);
    }
    console.log(containerElements);

    return;
}
getElements(sports);


console.log("////////////////////////////////////////////");

// Implementa una función que dado un array de cualquier tipo, lo recorra desde el último elemento al primero, y lo
// muestre por consola.


var getElementsFromLast = array => {

    var containerElements = [];

    for (var index = array.length - 1 ; index >= 0; index--) {
        containerElements.push(array[index]);
    }
    console.log(containerElements);
    return;
}

getElementsFromLast(sports);


console.log("////////////////////////////////////////////");


// Implementa una función que dado un array de números, y otro parámetro que sea un número, diga cuantos elementos
// son menores a dicho número, y cuántos no.


var arrayNumbersToGetSmaller = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var getSmallerThanNumber = (array, number) => {
    containerSmaller = 0;
    containerBigger = 0;
    for (var index = 0; index < array.length; index++) {
        number > array[index]? containerSmaller += 1: containerBigger += 1;
    } 
    console.log("Hay " + containerSmaller + " elementos menores que " + number);
    console.log("Hay " + containerBigger + " elementos iguales o mayores que " + number);

    return;

}

getSmallerThanNumber(arrayNumbersToGetSmaller, 5);


console.log("////////////////////////////////////////////");

// Implementa una función que admita 2 arrays como argumento, y diga si el elemento del primero, se encuentra en el
// segundo.


var arrayA = [1, 3, 5, 7, 9, 10, 11, 12];
var arrayB = [2, 4, 6, 8, 9, 11, 13, 15];

console.log(arrayA);
console.log(arrayB);

var getElementRepeated = (arrayA, arrayB) => {

    var containerArrayA ;
    var containerArrayB ;
    
    for (var aIndex = 0; aIndex < arrayA.length; aIndex++) {
        containerArrayA = arrayA[aIndex];
        
        for ( var bIndex = 0; bIndex < arrayB.length; bIndex++) {

            if (arrayB[bIndex] === containerArrayA) {
                containerArrayB = arrayB[bIndex] ;
                console.log("El elemento " + containerArrayB + " se repite en ambos arrays.");
            } 
        } 
    } return;
}

getElementRepeated(arrayA, arrayB);






