function mostrar()
{
	//NaN: not a number se usa la funcion isNaN() para validar si es o no es un numero
	var numero=prompt("ingrese un número entre 0 y 10.");
	numero=parseInt(numero);
	//while (numero <0 || numero >10 || isNaN(numero))
	while(!(numero>=0 && numero<=10))
	{
		numero=prompt("Numero incorrecto ingrese numero valido.");
		numero=parseInt(numero);
	}

document.getElementById('Numero').value=numero

}//FIN DE LA FUNCIÓN