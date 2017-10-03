var sm = 736000;
var aux = 80000;
var pago = "";
var rt = "";
var salario = parseInt(prompt("Enter your salary"));
var rf = parseInt(prompt(("ingrese su retencion de fuente")));
var dia = Number(prompt("ingrese el numero de dias trabajados"));
var retencion = "";
if (dia>30){
    alert ("maximo de dias 30");
}
var pago = parseInt(salario + aux);
if (salario <= (sm * 2)) {
    pago = salario + aux;
    console.log("Will be granted transport aid then your payment will be " + pago);
} else {
    retencion = (rf * salario )/100;
    rt = ( salario - retencion);
    console.log (rt);
}


