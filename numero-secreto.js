var adivina_numero = null;
var inicio_juego = null;
var max = 99;
var min = 1;
var mensaje = "Introduce el codigo secreto";
//Genera el número aleatorio
var numero_aleatorio = Math.random() * (max-min) + min;
//Convierte en entero y quita decimales el número aleatorio
numero_aleatorio = parseInt(numero_aleatorio);

while (adivina_numero !== 0){
	
	console.log(numero_aleatorio);
	adivina_numero = prompt(mensaje);
	adivina_numero = parseInt(adivina_numero);

	if (adivina_numero === 0) {
		alert("Pediste finalizar el juego.");
	}else if (adivina_numero === numero_aleatorio) {
		alert("Puedes pasar, ese es el codigo secreto. Ganaste!");
		inicio_juego = parseInt(prompt("¿Quieres volver a jugar? \n Pulsa 1 para Si, o 0 para Salir"));
		
		if (inicio_juego === 0 ) {
			adivina_numero = 0;
		}else {
			alert("Perfecto, Continuamos!");
			//Genera el número aleatorio nuevamente
			var numero_aleatorio = Math.random() * (max-min) + min;
			//Convierte en entero y quita decimales el número aleatorio
			numero_aleatorio = parseInt(numero_aleatorio);
		}
	}else if (adivina_numero < numero_aleatorio) {
		alert("El codigo es un número mayor");
	}else if (adivina_numero > numero_aleatorio) {
		alert("El codigo es un número menor");
	} 



}

alert("Juego Finalizado");
