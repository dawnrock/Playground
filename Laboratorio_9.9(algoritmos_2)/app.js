// DIBUJANDO BUCLES //

console.log("////////////DIBUJANDO BUCLES////////////////");

/*  Todos los ejercicios que se proponen a continuación tienen la misma dinámica: se resuelven con bucles.
Son ejercicios cortitos, pero habrá que darle al coco. En muchos de ellos conviene pensar en filas y columnas .
En cada ejercicio dibujaremos una figura por consola, usando uno o varios carácteres normales.
Además, la figura podrá ser pintada con distintos tamaños.
Crea una función para cada ejercicio que admita el tamaño de la figura como argumento. Llama a este argumento n .
También es recomendable que la función admita como argumento(s) el carácter(es) usados para dibujar la figura.   */


console.log("////////////////////////////////////////////");
console.log("Cuadrado sencillo.");

var getSimpleSquare = (n, char) => {
    
    
    for (var index = 0; index < n; index++) {

        console.log(char);
    } 
    return;
    
}
getSimpleSquare(4, "****");


console.log("////////////////////////////////////////////");
console.log("Cuadrado con bordes.");

for (var index = 0; index < 5; index++) {
    console.log(index, "*****");
    for ( var intIndex = 1; intIndex < index; intIndex++){
        console.log(index, "INT");
    }
    
}
