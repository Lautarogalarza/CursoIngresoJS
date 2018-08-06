function mostrar()
{


	var peso;

	var pesoMaximo;
	var pesoMinimo;

	var contadorbajo0=0;
	var nombredeanimal
	var nombredeAnimalmaspesado;
	var temperaturaAnimalmaspesado;
	var pesoAnimalmaspesado;
	var temperatura;
	var respuesta="si";
	var contadorPares=0;
	var bandera=0

	while(respuesta=="si")
	{
		nombredeanimal=prompt("ingresar el nombre del animal");

		peso=prompt("ingresar el peso del animal (entre 1 y 1000");
		peso=parseInt(peso)
		while(peso<1 || peso>1000)
		{
			peso=prompt("erorr REingresar el peso del animal (entre 1 y 1000");
			peso=parseInt(peso)
		}

		temperatura=prompt("ingresar la temperatura del habitat(entre -30 y 30)");
		temperatura=parseInt(temperatura);
		while(temperatura<-30 || temperatura>30)
		{
			temperatura=prompt("error REingresar la temperatura del habitat(entre -30 y 30)");
			temperatura=parseInt(temperatura);
		}

			if(temperatura%2==0)
			{
				contadorPares++
			}


				if(peso>pesoAnimalmaspesado  || bandera==0)
					{
						pesoAnimalmaspesado=peso
						nombredeAnimalmaspesado=nombredeanimal
						temperaturaAnimalmaspesado=temperatura

						bandera=1;

					}

						if(temperatura<0)
						{
							contadorbajo0++
							if(bandera==0)
							{
								pesoMaximo=peso;
								pesoMinimo=peso;
							}

							



					 	}




		respuesta=prompt("desea continuar?");
	}



	document.write("la cantidad de temperaturas pares es "+contadorPares+"<br>");
	document.write("el nombre del animal mas pesado es "+nombredeAnimalmaspesado+" y su temperatura es de"+temperaturaAnimalmaspesado+"<br>");
	document.write("el peso maximo del animal cuya temperatura es bajo 0 es "+pesoMaximo+"<br>");
	document.write("el peso minimo del animal cuya temperatura es bajo 0 es "+pesoMinimo+"<br>");








}
