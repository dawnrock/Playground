
// Búsquedas Aleatorias //

// La función Math.Random() genera números decimales aleatorios entre [0, 1) <<<<===  (  " [ " significa que el 0 está incluido en el inicio de la busqueda y
//  " ) " por lo contrario significa que el 1 no se incluiría en la busqueda, siendo el último valor de ésta 0.99.

// Math.random();

// console.log(Math.random()); ==>> 0.941430318835514
// console.log(Math.random()); ==>> 0.4458344134381491 
// console.log(Math.random()); ==>> 0.4061561696476004
// console.log(Math.random()); ==>> 0.2541659273172443
// console.log(Math.random()); ==>> 0.8796417451685381


// Generacion Binaria //

// Las búsquedas Binarias son siempre una elección entre 50% de una opción y 50% de la otra, blanco y negro, niño o niña, noche y dia, etc...


//        0                    0.5                     1 
//        [---------------------\----------------------)


// Probabilidad de que el resultado sea menor que  0.5 ---> 50%
// Probabilidad de que el resultado sea mayor que  0.5 ---> 50%

// var getRandom = (a, b) => (Math.random() < 0.5) ? a: b;

// console.log(getRandom("rojo", "negro"));
// console.log(getRandom("rojo", "negro"));
// console.log(getRandom("rojo", "negro"));
// console.log(getRandom("rojo", "negro"));
// console.log(getRandom("rojo", "negro"));



// Otra forma de hacer busquedas Binarias sería añadiendo la función "round", que se encarga de hacer 
// justo lo que acabamos de conseguir, darnos dos resultados prosibles al 50% pero con la diferencia que ahora
//  nos devolvera una buleano, o mejor dicho, verdadero o falso.

// La función de redondeo seria:   

// var getRoundRandom = (a, b) => Math.round(Math.random()) ? a: b;

// console.log(Math.round(0.50));




// Generación de búsqueda con multiples opciones //

// CASO SENCILLO

// Elegir aleatoriamente entre 0 y 9 (10 números).

// Para calcular el rango seguimos la siguiente formula:
// range = máx - min + 1 = 9 - 0 + 1 => 10 números

// Math.random() * 10; 


//   0    1    2    3    4    5    6    7    8    9    10
//   [----|----|----|----|----|----|----|----|----|----)
//     0    1    2    3    4    5    6    7    8    9 



// La siguiente función; Math.floor, hace lo mismo pero redondeando hacia el entero que tenemos a la izquierda. Si el resultado de la busqueda fuera 4.9 nos lo
//redondearía a 4.

// var getRandomNumber = () => Math.floor(Math.random() * 10);



// CASO GENERAL 

// Elegir un número aleatorio entre 50 y 100.

// var range = 100 - 50 + 1;  // 51 numeros a escoger.

// Math.floor(Math.random()* range); //Resultado = enteros entre [0, 51] nos falta algo.

// El caso peor nos dará 0.000 y el caso mejor 50.999,con la diferencia que al hacer Math.floor automaticamente nos 
// dará como resultado el entero que tenemos a la izquierda, asegurandonos que su valor máximo final siempre sea el que queramos.
// Hemos resuelto el problema de buscar en el rango de 50 números, pero no nos piden que ese rango se encuentre entre 0 y 50, más bien entre 50 y 100.
// Para solucionar este problema simplemente sumaremos el mínimo de la busqueda a su resultado, asegurandonos así que siempre esté en el rango que nos piden.



// Para calcular números aleatorios entre un max y min seguiremos la siguiente fórmula:
// Math.floor(Math.random() * range) + min.           ====>>>>>Ya teníamos la formula que nos daba el rango entre dos números (range = máx - min + 1)

// Math.floor(Math.random()* range) + 50;  // Resultado = aleatorios enteros entre [50 y 100].



// Asi quedaría en un caso real:

var max = 100, min = 50;
var range = max - min + 1;
var getRandom = () => Math.floor(Math.random()* range) + min;

console.log(getRandom());

///////