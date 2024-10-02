alert("erro!");
let numeroSecreto = 6;
let chute;
let tentativa = 1;


while(chute != numeroSecreto){
    chute = prompt("que tipo de paisagem voce gosta");
if(chute== numeroSecreto){
console.log("boa")
}
else{
if(numeroSecreto> chute){
alert(" numero Secreto é maior que ${chute}")

}else{
alert("numero secreto é menor que ${chute}")

}
}
}
