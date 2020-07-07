// GENERADOR ALEATORIO //


var getRandom = (min, max, n) => {
    var arrayResultados = [];
    var maxContainer = max;  
    var minContainer = min;
    
    for (i = 0; i < n; i++) {
    range = maxContainer - minContainer + 1;
    result = Math.floor(Math.random() * range) + minContainer;
    arrayResultados.push(result);

    } return arrayResultados;
    
} 

console.log(getRandom(80, 100, 4));

