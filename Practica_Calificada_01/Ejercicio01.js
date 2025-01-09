let peso = parseFloat(prompt("Ingrese su peso en kilogramos"));
let altura = parseFloat(prompt("Ingrese su altura en metros"));

let IMC=parseFloat((peso/(altura*altura)).toFixed(2));

console.log("Su peso es: ",peso);
console.log("su altura es: ",altura);
console.log("su IMC es: ",IMC);

if(IMC<=18.5){
    console.log("Bajo Peso");
}
else if(IMC>=18.5 && IMC<=24.9){
    console.log("Normal");
}
else if(IMC>=25 && IMC<=29.9){
    console.log("Sobrepeso");
}
else{
    console.log("Obesidad");
}



