function mostrar()
{
	var peso;
	var marca;
	var temperatura;
	var respuesta;
	var contadorTemperaturasPares;
	var pesoMaximo;
	var marcaPesoMaximo;
	var pesoMinimo;
	var bandera;
	var contadorCeroG;
	var acumuladorPeso;
	var promedio;

	 respuesta="si";
	 contadorTemperaturasPares=0;
	 bandera=0;
	 contadorCeroG=0;
	 acumuladorPeso=0;
	 contadorPeso=0;

	while(respuesta=="si")
		{
			peso=prompt("ingrese un peso entre el 1 y el 100");
			peso=parseInt(peso);
			while(peso<1 || peso>100 || isNaN(peso))
			{
				peso=prompt("ERROR REingrese un peso entre el 1 y el 100");
				peso=parseInt(peso);

			}
			temperatura=prompt("ingrese una temperatura entre -30 y 30");
			temperatura=parseInt(temperatura);
			while(temperatura<-30 || temperatura>30 || isNaN(temperatura))
			{
				temperatura=prompt("EROOR REingrese una temperatura entre -30 y 30")
				temperatura=parseInt(temperatura);
			}


			marca=prompt("ingrese una marca");

			acumuladorPeso=acumuladorPeso+peso;
			contadorPeso++;

			if(temperatura%2==0)
			{
				contadorTemperaturasPares++;
			}


			if(peso>pesoMaximo || bandera==0)
				{
					pesoMaximo=peso
					marcaPesoMaximo=marca

				}

			if(peso<pesoMinimo || bandera==0)
				{
					pesoMinimo=peso

					bandera=1
				}



				if(temperatura<0)
				{
					contadorCeroG++
				}


				respuesta=prompt("desea continuar?");
		}

promedio=acumuladorPeso/contadorPeso

			document.write("temperaturas pares "+contadorTemperaturasPares+"<br>");
			document.write("la marca del mas pesado es "+marcaPesoMaximo+"<br>");
			document.write("las temperaturas a 0 grados son "+contadorCeroG+"<br>");
			document.write("el promedio de los pesos es "+promedio+"<br>");
			document.write("el peso maximo es "+pesoMaximo+"<br>");
			document.write("el peso minimo es "+pesoMinimo+"<br>");

}
