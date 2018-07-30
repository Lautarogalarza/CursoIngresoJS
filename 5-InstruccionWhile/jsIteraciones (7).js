function mostrar()
{

	var contador;
	var acumulador;
	var respuesta;
	var numero;
	var promedio;

	contador=0
	acumulador=0
	respuesta='si'

	//while (respuesta !="n")
	while(respuesta=="si")
	{	contador=contador+1; // variable + constante+
		numero=prompt("ingrese el numero "+contador);
		numero=parseInt(numero);
		acumulador=acumulador+numero; // variable + variable
		//contador=contador+1; // variable + constante
		respuesta=prompt("quiere seguir? ¿si o no?");
	}
		promedio=acumulador/contador

		document.getElementById('suma').value="la suma es: "+acumulador;
		document.getElementById('promedio').value="El promedio es: "+promedio;


}//FIN DE LA FUNCIÓN