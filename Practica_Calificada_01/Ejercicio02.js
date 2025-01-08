let edad= parseInt(prompt("ingrese su edad"));
let ingreso= parseFloat(prompt("ingrese su ingreso mensual"));

if (edad>=18 && ingreso>=500 && ingreso <= 2000){
    console.log("el usuario es legible para el subsidio")
}
else {
    console.log("el usuario no es legible para el subsidio")
}
