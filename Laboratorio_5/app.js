const product = { count:3, price:12.55, type: "ropa" };

let total;
if (product.count > 0) {
    total = product.count * product.price;
}
else {
    total = 0
};
console.log("Total sin IVA " + total); 

let tipoIva;

switch(product.type){
    case "alimentacion":
        tipoIva = 0.10; break;
    case "libro":
        tipoIva = 0.04; break;
    default: tipoIva = 0.21;                    
}

let = iva = (total * tipoIva);
console.log("Iva " + iva);

let = totalFinal = (iva + total)
console.log("Total " + totalFinal);













