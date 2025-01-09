let compra = parseFloat(prompt("Ingrese el monto de su compra: "));
let mensaje = prompt("Tiene un codigo de descuento? ");

let descuento10 = parseFloat(compra*0.10);
let descuento20 = parseFloat(compra*0.20);

if(mensaje === "si"){
    let descuento=prompt("Escribe su codigo de descuento");
    if(descuento==="DESCUENTO10"){
        let total = parseFloat(compra-descuento10);
        console.log("El monto de su compra es: ",compra);
        console.log("El descuento aplicado es: ",descuento10);
        console.log("Su total a pagar es: ",total);
    }
    else if(descuento==="DESCUENTO20"){
        let total = parseFloat(compra-descuento20);
        console.log("El monto de su compra es: ",compra);
        console.log("El descuento aplicado es: ",descuento20);
        console.log("Su total a pagar es: ",total);
    }
    else{
        console.log("Su codigo no es valido");
    }
}
else{
    console.log("Usted no tiene un codigo de descuento");
}