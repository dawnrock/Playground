// Carrito de la compra

/**
 * Cada producto:
 * nombre, cantidad de  compra de cada uno, precio e IVA.
 */

// REQUISITOS

/**
 * Queremos calcular:
 * - El subtotal de la compra (suma de producto por cantidad sin contar con el IVA):
 * - El total de la compra(subtotal + IVA).
 */

const cesta = [
  {
    nombre: "Cerveza",
    cantidad: 1,
    precio: 2,
    tipoIva: "general",
  },

  {
    nombre: "Galletas",
    cantidad: 3,
    precio: 1,
    tipoIva: "reducido",
  },

  {
    nombre: "Pan",
    cantidad: 4,
    precio: 0.5,
    tipoIva: "superreducido",
  },
];

class CarritoDeLaCompra {
  constructor() {
    this._cesta = [];
    this._subtotal = 0;
    this._total = 0;
  }
  calculaSubtotal() {
    this._subtotal = cesta.reduce(
      (acumulado, { cantidad, precio }) => acumulado + cantidad * precio,
      0
    );
  }

  calculaFactorIVA(tipoIva) {
    switch (tipoIva) {
      case "general":
        return 1.21;
      case "reducido":
        return 1.1;
      case "superreducido":
        return 1.4;
    }
    return 1;
  }

  calculaTotal() {
    this._total = cesta.reduce(
      (acumulado, { cantidad, precio, tipoIva }) =>
        acumulado + cantidad * precio * this.calculaFactorIVA(tipoIva),
      0
    );
  }

  get total() {
    return this._total;
  }

  get subtotal() {
    return this._subtotal;
  }

  set cesta(cestaExterna) {
    this._cesta = cestaExterna;
    this.calculaSubtotal();
    this.calculaTotal();
  }
}

class CarritoExtranjero extends CarritoDeLaCompra {
  calculaTotal() {
    this._total = cesta.reduce(
      (acumulador, { cantidad, precio }) => acumulador + cantidad * precio,
      0
    );
  }
}

console.log("** Carrito de la compra normal **");
const carrito = new CarritoDeLaCompra();
carrito.cesta = cesta;
console.log("Subtotal ", carrito.subtotal);
console.log("Total ", carrito.total);

console.log("** Carrito de la compra extranjero **");
const carritoExtranjero = new CarritoExtranjero();
carritoExtranjero.cesta = cesta;
console.log("subtotal ", carritoExtranjero.subtotal);
console.log("total ", carritoExtranjero.total);
