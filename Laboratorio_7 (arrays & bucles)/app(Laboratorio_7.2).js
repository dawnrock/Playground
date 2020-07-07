const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
];

var indice;

for (i = 0; i < carrito.length; i++) {
    if (carrito[i].id === 54657) {
        indice = i;
    };
}

carrito.splice(indice, 1);

for (producto of carrito) {
    imprimir(producto);
}

function imprimir(reserva) {
    console.log("----------");
    for (propiedad in reserva) {
        console.log(propiedad + ": " + reserva[propiedad]);
    }

}
 





