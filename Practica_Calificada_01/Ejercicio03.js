let importe= parseFloat(prompt("ingrese el importe de la compra"));
let iva= prompt("ingrese el tramo del IVA");

let basico=10
let reducido=5
let superreducido=2

if (iva==="basico"){
    let total=importe+(importe*basico/100);
    console.log("importe ingresado :"+importe,"iva ingresado : "+iva)
    console.log("el importe total con iva incluido es : "+total.toFixed(2));
}
else if (iva==="reducido"){
    let total=importe+(importe*reducido/100);
    console.log("importe ingresado :"+importe,"iva ingresado : "+iva)
    console.log("el importe total con iva incluido es  : " +total.toFixed(2))
}
else if (iva==="superreducido"){
    let total=importe+(importe*superreducido/100);
    console.log("importe ingresado :"+importe,"iva ingresado : "+iva)
    console.log("el importe total con iva incluido es : "+total.toFixed(2))
}
else {
    alert("TIPO DE IVA INCORRECTO")
}
