
//formula peso ideal:
//altura en cmm - 150 * 0.75|0.6 + 50;


//FORMA ABREVIADA  


var calcularPesoIdeal = (altura, sexo) => (altura * 100 - 150) * (sexo === "hombre"? 0.75: 0.60) + 50;
var calcularExcesoDePeso = (pesoActual, pesoIdeal) => (pesoActual - pesoIdeal);
var notificaPesoIdeal = pesoIdeal => "tu peso ideal corresponde a " + pesoIdeal + " kilos";


var notificaSobrepeso = (excesoPeso) => {
    if (excesoPeso >= 1) {
        return "Cuidado con los excesos! Debes adelgazar " + excesoPeso + " kilos";
    } else if (excesoPeso <= -1) {
        return "Come un poco más! Debes recuperar" + (excesoPeso * -1);
    } else {
        return "Estas en tu peso ideal!";
    }
}

var informePesoIdeal = (person) => {
    var pesoIdeal = calcularPesoIdeal(person.altura, person.sexo);
    console.log(notificaPesoIdeal(pesoIdeal));
    console.log(notificaSobrepeso(calcularExcesoDePeso(person.peso, pesoIdeal)));
}

var person = {
    altura: 1.75,
    peso: 74,
    sexo: "hombre",
}

informePesoIdeal(person);

