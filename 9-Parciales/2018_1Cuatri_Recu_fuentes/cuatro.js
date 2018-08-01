function mostrar()
{
	var numeroUno
	var numeroDos
	var suma
	var division

	numeroUno=prompt("ingrese el numero 1");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("ingrese el numero 2");
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)

	{

	 alert(numeroUno+" y "+numeroDos);

	}

	else 

	 {	

	    if(numeroUno<numeroDos)

	   		{
	   			suma = numeroUno+numeroDos;
	   			alert("la suma es "+suma);
	   			if(suma<50)
	   			{
	   				alert("la suma es "+suma+" y es menor que 50");
	   			}

	    		
			}
						else
							{
								division = numeroUno/numeroDos;
								alert("la division es "+division);
		                    }



	}




}


