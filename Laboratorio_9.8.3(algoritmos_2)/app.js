console.log("////////////////////////////////////////////");


// Implementa una función que admita 2 arrays como argumento, y intercambia los elementos del primero en el segundo
// y viceversa. Muestra los arrays transformados por consola.

var arraySalad = ["ham", "peanuts", "almonds", "tomatoe"];

var arraySweets = ["chocolate", "vanilla", "honey", "jam"];

var swapElementsEachOther = (arrayA, arrayB) => {

    console.log("arrayA sin intercambiar", arrayA);
    console.log("arrayB sin intercambiar", arrayB);

    var index = 0;
    while (index < arrayA.length && index < arrayB.length) {
        var temp = arrayA[index];
        arrayA[index] = arrayB[index]
        arrayB[index] = temp;
        index++;
    }
    console.log("Este es el arrayA intercambiado por el arrayB ", arrayA);
    console.log("Este es el arrayB intercambiado por el arrayA ", arrayB);
}

swapElementsEachOther(arraySalad, arraySweets);

console.log("////////////////////////////////////////////");


// Implementa una función que admita un array como argumento, y construya un objeto en el que almacene cada uno de
// los elementos del array en propiedades indexadas, del tipo ‘prop1’, ‘prop2’, ‘prop3’, etc

var caracteristicas = ["maniobrable", "rapido", "robusto", "seguro"];

var objectFromArray = array => {
    var result = [];
    
    for (var index = 0; index < array.length; index++) {
        var propName = "prop " + (index + 1) ;
        result[propName] = array[index];
    } 
    console.log(result);
    return result;
}

objectFromArray(caracteristicas);


console.log("////////////////////////////////////////////");

// Implementa una función que admita un array y un número, y empieza a recorrer dicho array por el número dado.
// Muestra por consola cada elemento por el que iteres.

var arrayGetStart = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var getStartInArray = (array, number) => {

    var containerStartNumber = 0;

    if ( number >= 0 && number < array.length) {
        containerStartNumber = number;

        for( index = containerStartNumber; index <= array.length; index ++) {
            console.log(index);
        }
    }
}

getStartInArray(arrayGetStart, 3 );


console.log("////////////////////////////////////////////");

// Implementa una función que dado un array de strings y otro parámetro como string diga si existe en el array.

var modalidades = ["badminton", "tenis", "padel", "pin-pon"];

var modIn = "pin-pon";
var modIn2 = "badminton";

var getModalidadInArray = (arrayStrings, string) => {
     
    for (index = 0; index <= arrayStrings.length; index++ ) {

        if (arrayStrings[index] === string) {
            console.log("El objeto " + string + " se encuentra dentro del array ");
        } 
    } return false;
}

getModalidadInArray(modalidades, modIn );

getModalidadInArray(modalidades, modIn2 );


console.log("////////////////////////////////////////////");

// Implementa un array que contenga nombres de frutas en Español y otro array con las mismas frutas en el mismo orden
// pero en ingles. Implementa una función de traducción, que dada una fruta en español, diga la traducción en Inglés, y
// otra función equivalente que haga la traducción inversa.

var fEsp = ["fresa", "manzana", "platano", "piña"];

var fEng = ["strawberry", "apple", "banana", "pineapple"];

var getTranslationToSpanish = fruit => fEsp[fEng.indexOf(fruit)];
   
var getTranslationToEnglish = fruta => fEng[fEsp.indexOf(fruta)];
    

console.log(getTranslationToSpanish("banana"));
  
console.log(getTranslationToEnglish("piña"));

console.log("////////////////////////////////////////////");

// Implementa una función que admita un texto por parámetro y lo devuelva por consola al revés.


var showReverse = text => {
    var result = "";
    for (var index = text.length - 1; index >= 0; index--) {
        result += text[index];
    }
    console.log(result);
}
showReverse("string ordenado");


console.log("////////////////////////////////////////////");


// Implementa una función que admita un texto por parámetro y lo devuelva en formato ‘EsTe Es Mi TeXtO’.

var kinkiText = text => {
    var result = "";
    for (var index = 0; index < text.length; index++) {
        result += index % 2 === 0? text[index].toUpperCase(): text[index];
    }
    return result;
}

console.log(kinkiText("Soy tu chulo moreno 15"));


console.log("////////////////////////////////////////////");


//Implementa una función que admita como parámetro un array de arrays. La función debe recorrer todos los elementos
// de cada subarray y mostrarlos por consola.


var iterarSubItems = array => {
    for (var subArray of array) {
        for (var item of subArray) {
            console.log(item)
        }
    }
}

var showSubArray = [[4, 5, 6], [30, 40, 50]];
iterarSubItems(showSubArray);



