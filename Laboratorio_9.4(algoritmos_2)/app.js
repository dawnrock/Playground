
var myArray = [3, 5, 1, 8, 7, 2];

console.log( "myArray desordenado" , myArray);

var swap = (array, a, b) => {
    var temp = array[a];
    array[a] = array[b]
    array[b] = temp;
}               

// Algoritmo de ordenación por selección.

// Este tipo de búsqueda se caracteriza por asignar un valor min (minIndex) al indice 0 del array, comparandose con el resto de objetos a su derecha
// e intercambiandose con el menor de ellos para luego repetir el mismo procedimiento a partir del siguiente indice de minIndex y asi progresivamente hasta que no
// queden elementos a la derecha. 

var selectionSort = array => {

    // Declaramos la variable size para asignarle el tamaño del array y la variable minIndex sera el contenedor del indice donde iremos intercambiando los objetos.
    var size = array.length;
    var minIndex;

    // Bucle externo sIndex (selección)
    for(var sIndex = 0; sIndex < size; sIndex++) {
        minIndex = sIndex;
                
        // Bucle interno index. Le asignamos el indice sIndex + 1, asegurando asi que el indice de index este siempre a la derecha de sIndex.
        for(var index = sIndex + 1; index < size; index++) {
            if (array[index] < array[minIndex]) minIndex = index;
        }
        swap(array, minIndex, sIndex);
        console.log("TCL: array",sIndex, array);
    }
    return array;
}

console.log(selectionSort(myArray))