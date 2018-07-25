function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while(contador<5)
	{
		numero=prompt("ingrese el numero");
		numero=parseInt(numero);

		acumulador=acumulador+numero; // variable + variable
		contador=contador+1; // variable + constante
	}


		document.getElementById('suma').value=acumulador;
		document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN