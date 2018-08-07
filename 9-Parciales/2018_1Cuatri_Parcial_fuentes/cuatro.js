function mostrar()
{

	var numeroUno;
	var numeroDos;
	var resta;
	var suma;

	numeroUno=prompt("ingrese el primer numero");

	numeroDos=prompt("ingrese el segundo numero");


	if(numeroUno==numeroDos)

	{

	 alert(numeroUno+numeroDos);

	}
		
		else
		{


				numeroUno=parseInt(numeroUno);
				numeroDos=parseInt(numeroDos);


			if (numeroUno<numeroDos) 
			{
				numeroUno=parseInt(numeroUno);
				numeroDos=parseInt(numeroDos);

				suma=numeroUno+numeroDos

				alert(suma);

				if (suma>10) 
				{
					alert("la suma es "+suma+" y es mayor a 10");
				}

			}

				else
				{
					numeroUno=parseInt(numeroUno);
					numeroDos=parseInt(numeroDos);

					resta=numeroUno-numeroDos

					alert(resta);
				}








		}



































	/*if(numeroUno==numeroDos)
		{
			alert(numeroUno+numeroDos);
		}

		else
		{
			if(numeroUno<numeroDos);
			{
				numeroUno=parseInt(numeroUno);
				numeroDos=parseInt(numeroDos);

				suma=numeroUno+numeroDos

				alert(suma);

				if(suma>10)
				{
					alert("la suma es"+suma+"y es mayor a 10");

				}

			}

				else 
				{
					numeroUno=parseInt(numeroUno);
					numeroDos=parseInt(numeroDos);

					resta=numeroUno-numeroDos

					alert(resta);
				}

		}*/


















}
