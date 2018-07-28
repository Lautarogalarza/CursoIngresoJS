function mostrar()
{
/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 2-Suma de los positivos. 
3-Cantidad de positivos. 4-Cantidad de negativos. 
5-Cantidad de ceros. 6-Cantidad de números pares. 
7-Promedio de positivos. 8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).
*/
	var contadorNegativos=0;
	var contadorPositivos=0;
	var numero;
	var respuesta="si";
	var acumuladorPositivos=0;
	var acumuladorNegativos=0;
	var contadorCeros=0
	var contadorPares=0
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var max;
	var flag=false;

	while(respuesta!="no")
	
	{
		numero=prompt("ingrese un numero")
		numero=parseInt(numero);


			if(numero>0)
			{
				acumuladorPositivos=acumuladorPositivos+numero;
				contadorPositivos++;
			}
				else
				{
					if(numero<0)
					{
							acumuladorNegativos=acumuladorNegativos+numero;
							contadorNegativos--;
					}
					
					else
					{
						contadorCeros=contadorCeros+1;
					}

				}


				if((numero%2)==0 && numero!=0)
					{
						contadorPares++;
					}
						if(flag==false || numero>max)
						{
							max=numero;

							flag=true
						}

							respuesta = prompt("desea continuar?");
		
	
	}

			diferencia=acumuladorPositivos+acumuladorNegativos

		document.write("1.suma negativos "+acumuladorNegativos+"<br>");
		document.write("2.suma positivos "+acumuladorPositivos+"<br>")
		document.write("3.Cantidad de positivos "+contadorNegativos+"<br>");
		document.write("4.Cantidad de negativos "+contadorPositivos+"<br>");
		document.write("5.Cantidad de ceros "+contadorCeros+"<br>");
		document.write("6.Cantidad de números pares "+contadorPares+"<br>");
			if(contadorPositivos!=0)
			{
				promedioPositivos=acumuladorPositivos/contadorPositivos
				document.write("7.Promedio de positivos "+promedioPositivos+"<br>");
			}
				else
				{
					document.write("7.Promedio de positivos: no se pudo calcular <br>");
				}
			if(contadorNegativos!=0)
			{
				promedioNegativos=acumuladorNegativos/contadorNegativos
				document.write("8.Promedios de negativos"+promedioNegativos+"<br>");

			}
			else
			{
				document.write("8.Promedios de negativos: no se pudo calcular <br>");
			}

		document.write("7.Promedio de positivos "+promedioPositivos+"<br>");
		document.write("8.Promedios de negativos"+promedioNegativos+"<br>");
		document.write("9.Diferencia entre positivos y negativos"+diferencia+"<br>");

}//FN DE LA FUNCIÓN

//declarar contadores y variables 
	//var respuesta="si";
	//while(respuesta!="no")
	//respuesta=prompt("desea continuar?")

	/*var contador=0;
	var numero;
	var respuesta = true
	while(respuesta==true)
	
	{
				numero=prompt("ingrese un numero")
				numero=parseInt(numero);







				respuesta = comfirm("desea continuar?");
		
	
	}
	*/