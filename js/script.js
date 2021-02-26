var km;
var eta;
var lordo;
var sconto;
var netto;
var costoAlKm = 0.21;

km = prompt("Inserisca il numero di chilometri che vuole percorrere");
eta = prompt("Inserisca la sua età");
lordo = km * costoAlKm;

if(isNaN(eta)){
  eta = prompt("Inserisca la sua età (Questa volta però con i numeri!)");
}

if(eta < 18){
  sconto = 20;
  sconto = ( lordo * sconto ) / 100;
}else if(eta > 65){
  sconto = 40;
  sconto = ( lordo * sconto ) / 100;
}else{
  sconto = 0;
}

netto = lordo - sconto;

document.getElementById("km").innerHTML = km;
document.getElementById("eta").innerHTML = eta;
document.getElementById("lordo").innerHTML = lordo;
document.getElementById("sconto").innerHTML = sconto;
document.getElementById("netto").innerHTML = netto;
