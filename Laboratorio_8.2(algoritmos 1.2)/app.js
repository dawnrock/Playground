// Constantes.

const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
    {
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Papelera plástico",
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    },
];


// Apartado 1. Generar HTML dinámico para representar selección de unidades por cada producto de la lista.




// Las siguientes variables se crearon para guardar los valores que más tardes necesitaremos extraer.
// No han sido creadas de una vez, aunque esten ubicadas al principio algunas fueron creadas al final del ejercicio( por ejemplo el Array shoppingList)


var container = document.getElementById("product-list-container");
var subtotal = 0;
var shoppingList = [ ];
var total = 0;

// En esta primera función estamos haciendo dos cosas diferentes; primero creamos el HTML dinámico en el que nos aparecera la descripcion del producto y su precio,
// y luego el correspondiente input por cada producto con la peculiaridad de tener en sus atributos su tipo, minimos, máximos (del stock) y 
//un addEventListener donde vamos a guardar el resultado parseado (parseInt, cambio de valor a number) de los inputs cada vez que se cambien. 
// En ambas acciones seleccionamos la variable donde esté ubicado el ID (container.appendChild(------)) del HTML para que sen pintadas de forma dinámica en el mismo sitio.

var addProduct = (product) => {

        var description = document.createElement("h5");
        description.innerText = product.description + " - " + product.price + "  €/ud.";
        container.appendChild(description);

        var input = document.createElement("input");
        input.setAttribute("type", "number");
        input.setAttribute("min", "0");
        input.setAttribute("max", product.stock);
        input.addEventListener("change", function (event) {
            product.units = parseInt(event.target.value);
        });
        container.appendChild(input); 
}

// Aqui creamos un bucle donde iremos llamando a la función anterior por cada objeto (product) de nuestra lista.
var showProducts = productList => {
    for (var product of productList) {
      addProduct(product);  
    }
}

showProducts(products);



// Las siguientes funciones fueron de las ultimas en hacerse, y sus unicas tareas son las de imprimir de forma dinánmica los diferentes resultados que hemos ido obteniendo
//en las funciones : addSubtotal, addTaxes, addCarrito.

var addSubtotal = () => {
    subtotal = calcularSubtotal();
    document.getElementById("subtotal").innerText = subtotal;

}

var addTaxes = () => {
    var tax = calcularTax();
    document.getElementById("impuestos").innerText = tax;
}

var addCarrito = () => {
    var total = calcularCarrito();
    document.getElementById("total").innerText = total;
}

// Esta función sirve para calcular el subtotal de los productos seleccionados.
var calcularSubtotal = () => {
    subtotal = 0;
    for (product of products) {
        subtotal = (product.units * product.price) + subtotal; 
    }
    return subtotal;
}

// Esta función se encarga de sumar todos los impuestos, ya sean regulares o bajos ( los exentos de impuestos no necesitan declarar una funcion ya que el resultado es 0)
// de forma que se van acumulando en las variables regularTax y lowerTax para ser devueltas al final haciendo el return devolviendonos la suma final de las dos.

var calcularTax = () => {
   var regularTax = 0;
   var lowerTax = 0;
   for (product of shoppingList) {
    
    if(product.tax === REGULAR_TYPE) {
        regularTax =+ (product.units * REGULAR_TYPE / 100);
    } else if (product.tax === LOWER_TYPE) {
        lowerTax =+ product.units * LOWER_TYPE / 100;
    } 
   }
   return regularTax + lowerTax;

}


// En la siguiente funcion vamos a guardar dentro de un Array (tempList) todos los productos que tengan seleccionadas más de una unidad (product.units > 0).

var crearShoppingList = () => {
    var tempList = [ ];
    for (product of products) {
        if (product.units > 0) {
            tempList.push(product);
        } 
    }
    shoppingList = tempList;   
}

// Creamos un funcion que llama a la funcion anterior junto a la funcion que imprime los resultados y la que los calcula. Todo junto.

var calcularCarrito = () => {
    var total = 0;
        
    crearShoppingList();
    addSubtotal();
    addTaxes();
    total = calcularTax() + calcularSubtotal();
    return total;
}

// Y para terminar llamamos a addCarrito con el click, que a su vez llama a calcular carrito para pintar el resultado final en el HTML.
document.getElementById("btn").addEventListener("click", () => addCarrito());


