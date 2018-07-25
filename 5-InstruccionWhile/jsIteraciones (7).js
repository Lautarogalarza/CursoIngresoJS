function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(respuesta=="si")
	{
		numero=prompt("ingrese el numero");
		//respuesta=prompt("quiere seguir?")
		numero=parseInt(numero);

		acumulador=acumulador+numero; // variable + variable
		contador=contador+1; // variable + constante
		respuesta=prompt("quiere seguir? ¿si o no?")
	}


		document.getElementById('suma').value=acumulador;
		document.getElementById('promedio').value=acumulador/contador;


}//FIN DE LA FUNCIÓN