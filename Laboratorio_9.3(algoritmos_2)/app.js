// VAMOS A VER TRES DIFERENTES TIPOS DE ALGORITMOS DE BUSQUEDA



// Ordenación por burbuja o Bubble sort.


// Este método se caracteriza por ir comparando los números por parejas preguntandoles quien es mayor que el otro y desaplazando al mayor hacia
// la derecha en cada iteración.



var myArray = [3, 5, 1, 8, 7, 2]


// Primero creamos la función swap que nos servirá para comparar los elementos a y b que iremos intercambiando a continuación en nuestros algoritmos de búsqueda.

var swap = (array, a, b) => {
    var temp = array[a];
    array[a] = array[b]
    array[b] = temp;
}               

var bubbleSort = array => {
    // Es necesario simplificar el tamaño del array, ya que será usado por un bucle y su bucle anidado.
    var size = array.length;
    
    // Declaramos el primer bucle, este empezará a iterar desde el indice 1 del array (ahora veremos el porqué) e iterará tantas veces como elementos haya en el array.

    for (var index = 1; index < size; index++) {
        console.log("iteración: ", index);
        
        // Dentro del bucle anidamos el siguiente que empezará a itirerar desde el indice 0. (en este caso llamamos al indice del bucle "left").
        // La peculiaridad de este bucle anidado es que su condición para seguir iterando es que:   
        // left < (el indice de la izquierda sea menor que) size - index (el tamaño del array menos el indice del primer bucle)
        // de esta manera nos aseguramos que el indice left esté siempre a la izquierda de index.
        
        for (var left = 0; left < size - index; left++) {
            
            // El siguiente paso sera declarar la variable "right", que al igualarlo a left + 1 estamos obligando a que nuestro 
            // indice right esté siempre a la derecha de left
            
            var right = left + 1;

            // Con este if hacemos la siguente pregunta en cada iteración: 
            // El valor de la izquierda es mayor que el valor de la derecha?
            // Si es mayor ejecutamos swap.( le pasamos el array, el indice de la izquierda y de la derecha )
            
            if (array[left] > array[right]) swap(array, left, right);
            console.log("Array: ", array);
        }   
    }
// al final retornaremos con el array
    return array;
}
 console.log(bubbleSort(myArray));


//  iteración:  1

//  app.js:29 Array:  (6) [3, 1, 5, 8, 7, 2]
//  app.js:29 Array:  (6) [3, 1, 5, 8, 7, 2]
//  app.js:29 Array:  (6) [3, 1, 5, 7, 8, 2]
//  app.js:29 Array:  (6) [3, 1, 5, 7, 2, 8]

//  iteración:  2

//  app.js:29 Array:  (6) [1, 3, 5, 7, 2, 8]
//  app.js:29 Array:  (6) [1, 3, 5, 7, 2, 8]
//  app.js:29 Array:  (6) [1, 3, 5, 7, 2, 8]
//  app.js:29 Array:  (6) [1, 3, 5, 2, 7, 8]

//  iteración:  3

//  app.js:29 Array:  (6) [1, 3, 5, 2, 7, 8]
//  app.js:29 Array:  (6) [1, 3, 5, 2, 7, 8]
//  app.js:29 Array:  (6) [1, 3, 2, 5, 7, 8]

//  iteración:  4

//  app.js:29 Array:  (6) [1, 3, 2, 5, 7, 8]
//  app.js:29 Array:  (6) [1, 2, 3, 5, 7, 8]

//  iteración:  5

//  app.js:29 Array:  (6) [1, 2, 3, 5, 7, 8]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








