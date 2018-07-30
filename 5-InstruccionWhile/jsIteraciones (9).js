function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var respuesta='si';
	var bandera=0
	var numero;

		while(respuesta!='no')
	{
		contador++
		numero=prompt("ingrese el numero: "+contador);
		numero=parseInt(numero);
		if(contador==1)
		//if(bandera==0)
		{
			minimo=numero;
			maximo=numero;
			//bandera=1;
		}


		if(numero<minimo)
		{
			minimo=numero;
		}
		if(numero>maximo)
		{
			maximo=numero;
		}
		respuesta=prompt("deasea continuar?");
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;



}//FIN DE LA FUNCIÓN