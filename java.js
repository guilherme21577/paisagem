alert("erro!");
let numeroSecreto = 6;
let chute;
let tentativa = 1;


while(chute != numeroSecreto){
    chute = prompt("que tipo de paisagem voce gosta");
if(chute== numeroSecreto){
console.log ("boa com $(tentativa)");
alert("boa vc descobriu com $(tentativa)");
}
else{
if(numeroSecreto> chute){
alert(" numero Secreto é maior que ${chute}");

}else{
alert("numero secreto é menor que ${chute}");
}
}
}tentativa++;

if     (tentativas>1){
alert("isso ai voce descobriu um numero secreto ${numeroSecreto} com ${tentativas} tentativas ");
}
else {alert("isso ai voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa ");
}