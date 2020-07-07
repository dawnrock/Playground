var myArray = [3, 5, 1, 8, 7, 2];

console.log( "myArray desordenado" , myArray);

var swap = (array, a, b) => {
    var temp = array[a];
    array[a] = array[b]
    array[b] = temp;
}               

// Algoritmo de ordenación por inserción.

// Creamos el algoritmo principal donde llamaremos al array.

var insertionSort = array => {
    // Cómo en los casos anteriores dónde hemos usado bucles anidados, le asignamos el tamaño del bucle (array.length) a la variable "size".
    // También declaramos la variable sortedListLastIndex con valor 0, donde iremos guardando el último valor de nuestra lista.
    var size = array.length;
    var sortedListLastIndex = 0;

    // El bucle externo es de tipo "for". Tiene como indice la variable "item" y su valor es 1, por lo que empezará a itirerar desde esa posición.
    // La condición de nuestro bucle for es que "item" sea siempre menor que "size" (array.length), y aumentando su contador en cada iteración (item++).
    for (var item = 1; item < size; item++) {

        // Almacenamos el valor que hay en ese momento en el índice del array dentro de la variable current, o mejor dicho, el valor del array en su primera iteración. 
        // En este caso se refiere al valor 5. (myArray[5])
        var current = array[item];

        // La siguiente variable guardará simplemente el indice del bucle para usarlo más tarde(currentIndex = 1).
        var currentIndex = item;

        // Y en la última guardamos el índice del intercambio.
        var swapIndex = sortedListLastIndex;


        // Ahora pasamos a crear el bucle interno. Es de tipo while y las condiciones para iterar son que mientras el valor "current" sea menor que el valor con el que
        // estamos comparando y mientras swapIndex sea mayor o igual que 0, ya que estamos comparando hacia la izquierda. 
        //Abajo hemos creado sortedListLastIndex++, esta iteración general va incrementando el índice que vamos moviendo. (swapIndex = sortedListLastIndex)
        
        while(current < array[swapIndex] && swapIndex >= 0) {
            // Aqui entra la función de intercambio (swap), tendrá de entrada un array, e intercambiará los elementos currentIndex y swapIndex.
            // Los -- que van al final sirven para decir que cambien a una posición anterior, primero usas la variable y después se decrementa (o incrementa++)
            
            swap(array, currentIndex--, swapIndex--);
            console.log("          Mutaciones internas", myArray);
        }

        console.log("Final de cada iteración", myArray);


        sortedListLastIndex++;
    }
    return array;
}

console.log(insertionSort(myArray));