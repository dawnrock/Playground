// ALGORITMOS DE BUSQUEDA

var array = [ 1, 3, 4, 5, 2, 9, 6, 7, 8];

var search = (array, target) => {

    for (var i = 0; i < array.length; i++) {
        if(array[i] === target) return i;        
    }
    return -1;
}

console.log(search(array, 2));

// // Para saber el indice concreto de un objeto dentro de un Array tambien existe una función que implementa toda la función que hemos creado anteriormente que la hace
// // más facil y sencilla (siempre y cuando el objeto que buscamos no esté repetido dentro del Array, en ese caso nos dará el indice del primero que encuentre):

console.log(array.indexOf(2));


// BUSQUEDA BINARIA

// Las caracteristicas principales de este tipo de busqueda es que necesita tener el Array ordenado para poder funcionar de forma correcta y numeros enteros.

// Creamos la función binarySearch donde crearemos nuestro algoritmo de búsqueda. Tendrá DOS parámetros de entrada; array (dónde introduciremos el nombre del array que vamos a 
// ordenar, y target (el nombre del objeto que buscamos).

//Pasos:
 
var binarySearch = (array, target) => {
    // -Buscar los índices máximos y mínimos del array como 'min = 0' y 'max = lenght'-
    var min = 0;
    var max= array.length - 1;
    while (min <= max) {
        // -Computar el punto medio como la media entre min y max redondeada hacia abajo.
        var mid = Math.floor((max - min) / 2) + min;
        // -Si 'array[punto medio] === target', paramos el algoritmo, lo hemos encontrado.
        if (array[mid] === target) return mid;
        // -Si 'array[punto medio] < target', movemos el mínimo 'min = punto medio + 1'.
        else if (array[mid] < target) min = mid + 1;
        // - En otro caso, movemos el máximo a 'max = punto medio - 1'
        else max = mid - 1;
        // -Volvemos al 'paso 2'.
    }
    // El valor de retorno -1 es simplemente para identificar fail con un valor.
    return -1
}
var sortedArray = [11, 15, 32, 34, 36, 37, 75, 79, 80, 89];

console.log(binarySearch(sortedArray, 32));