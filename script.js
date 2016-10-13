//ejercicio uno promedio
function callbackPromedio(num1,num2,num3,resultado){
		var suma= ((num1+num2+num3)/3);
		return resultado (suma);
}

//ejercicio dos segundero

var contador=1;
function segundero(){
	document.getElementById("titulo").innerHTML=contador++;
}
setInterval (segundero,1000);  