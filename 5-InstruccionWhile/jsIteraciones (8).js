function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var suma;
	var producto;
	var respuesta='si';
	var numero;

	while(respuesta=="si")
	{	 // variable + constante+
		numero=prompt("ingrese el numero ");
		numero=parseInt(numero);
		contador++;
		
		if(numero<0)
		{
			negativo=negativo*numero

		}	

			else
			{	

				positivo=positivo+numero;
			}				 
			// variable + variable
		//contador=contador+1; // variable + constante


		respuesta=prompt("quiere seguir? ¿si o no?");
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN