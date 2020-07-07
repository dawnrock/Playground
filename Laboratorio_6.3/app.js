var numeroA = () => parseInt(document.getElementById("inputA").value);
var numeroB = () => parseInt(document.getElementById("inputB").value);

var suma = () => numeroA() + numeroB();
var resta = () => numeroA() - numeroB();
var multiplicacion = () => numeroA() * numeroB();
var division = () => numeroA() / numeroB();


var calcularSuma = () => document.getElementById("resultado").innerText = "El resultado es: " + suma();
var calcularResta = () => document.getElementById("resultado").innerText = "El resultado es: " + resta();
var calcularMultiplicacion = () => document.getElementById("resultado").innerText = "El resultado es: " + multiplicacion();
var calcularDivision = () => document.getElementById("resultado").innerText = "El resultado es: " + division();

function calcularSumaCorrecta() {
    if (isNaN(numeroA()) || isNaN(numeroB())) {
        document.getElementById("resultado").innerText = "Error, debes introducir dos números"; 
    } else {
        calcularSuma();
        console.log(calcularSuma());
    }
}
function calcularRestaCorrecta() {
    if (isNaN(numeroA()) || isNaN(numeroB())) {
        document.getElementById("resultado").innerText = "Error, debes introducir dos números"; 
    } else {
        calcularResta();
        console.log(calcularResta());
    }
}
function calcularMultiplicacionCorrecta() {
    if (isNaN(numeroA()) || isNaN(numeroB())) {
        document.getElementById("resultado").innerText = "Error, debes introducir dos números"; 
    } else {
        calcularMultiplicacion();
        console.log(calcularMultiplicacion());
    }
}
function calcularDivisionCorrecta() {
    if (isNaN(numeroA()) || isNaN(numeroB())) {
        document.getElementById("resultado").innerText = "Error, debes introducir dos números"; 
    } else {
        calcularDivision(); 
        console.log(calcularDivision());  
    }
}

document.getElementById("buttonSuma").addEventListener("click", calcularSumaCorrecta);
document.getElementById("buttonResta").addEventListener("click", calcularRestaCorrecta);
document.getElementById("buttonMultiplicacion").addEventListener("click", calcularMultiplicacionCorrecta);
document.getElementById("buttonDivision").addEventListener("click", calcularDivisionCorrecta);




































// var calcularSuma = (a, b) => (a + b);
// var calcularResta = (a, b) => (a - b);
// var calcularMultiplicacion = (a, b) => (a * b);
// var calcularDivision = (a, b) => (a / b);
// console.log(calcularSuma(a, b));







// 
//     console.log(calcularResta);

// 
//     console.log(calcularMultiplicacion);

// 
//     console.log(calcularDivision);


    
// document.getElementById("buttoResta").addEventListener("click", calcularResta);
// document.getElementById("resultado").innerText = calcularResta;

// document.getElementById("buttonMultiplicacion").addEventListener("click", calcularMultiplicacion);
// document.getElementById("resultado").innerText = calcularMultiplicacion;

// document.getElementById("buttonDivision").addEventListener("click", calcularDivision);
// document.getElementById("resultado").innerText = calcularDivision;


//  {
//     ;
//     alert(calcularResta(a, b));
// }

//  {
//     ;
//     alert(calcularMultiplicacion(a, b));
// }

//  {
//    
//     alert(calcularDivision(a, b));
// }















