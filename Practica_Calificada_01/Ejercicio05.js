

let pedir =document.getElementById("pedido")  ;
pedir.addEventListener('click',realizarPedido) ; 

function realizarPedido() { 
    
let productoSeleccionado = prompt("Selecciona un producto:\n1. Pollo a la brasa (S/ 50)\n2. 1/4 de Pollo con papas (S/ 25)\n3. Salchipapa (S/ 15)\n4. Bebida grande (S/ 10)\n5. Postre casero (S/ 8)");


let precio = 0;

if (productoSeleccionado === "1") {
  precio = 50; // Pollo a la brasa
} else if (productoSeleccionado === "2") {
  precio = 25; // 1/4 de Pollo con papas
} else if (productoSeleccionado === "3") {
  precio = 15; // Salchipapa
} else if (productoSeleccionado === "4") {
  precio = 10; // Bebida grande
} else if (productoSeleccionado === "5") {
  precio = 8; // Postre casero
} else {
  alert("Opción no válida. Intenta de nuevo.");
  precio = 0; // Si no es una opción válida
}

if (precio > 0) {
  let dia = prompt("¿Qué día de la semana es hoy?").toLowerCase();

  let descuento = 0;

  if (dia === "lunes") {
    descuento = 0.10;
  } else if (dia === "martes") {
    descuento = 0.05;
  } else if (dia === "miércoles") {
    descuento = 0.15;
  } else if (dia === "jueves") {
    descuento = 0.07;
  } else if (dia === "viernes") {
    descuento = 0.20;
    alert("¡Bebida gratis incluida en tu pedido!");
  } else if (dia === "sábado" || dia === "domingo") {
    descuento = 0.03;
  } else {
    alert("Día no válido. No se aplicará descuento.");
  }

  let descuentoAplicado = precio * descuento;
  let totalConDescuento = precio - descuentoAplicado;

  alert("Detalle del pedido:\nProducto seleccionado: " + productoSeleccionado +
        "\nPrecio sin descuento: S/ " + precio +
        "\nDescuento aplicado: S/ " + descuentoAplicado +
        "\nTotal a pagar: S/ " + totalConDescuento);
}

}