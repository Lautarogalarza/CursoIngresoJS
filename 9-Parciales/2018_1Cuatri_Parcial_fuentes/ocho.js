function mostrar()
/*
Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
*/
{

	var numero;
	var letra;
	var respuesta;
	var contadorPares;
	var contadorImpares;
	var contadorCeros;
	var acumuladorPositivos;
	var contadorPositivos;
	var acumuladorNegativos;
	var promedio;
	var maximo;
	var minimo
	var letraMaxima;
	var letraMinima;
	var bandera;

	respuesta="si";
	contadorPares=0;
	contadorImpares=0;
	contadorCeros=0;
	acumuladorPositivos=0;
	acumuladorNegativos=0;
	contadorPositivos=0;
	bandera=0;

		while(respuesta=="si")
		{
			numero=prompt("ingrese un numero entre el -100 y el 100")
			numero=parseInt(numero);
			while(numero<-100 || numero>100 || isNaN(numero))
			{
				numero=prompt("ERROR REingrese un numero entre el -100 y el 100");
				numero=parseInt(numero);

			}

			letra=prompt("ingrese una letra");



			if(numero%2==0 && numero!=0)
			{
				contadorPares++
			}

				else if(numero%2==1 || numero%2==-1 )
				{
					contadorImpares++
				}
					else
					{
						contadorCeros++
					}


			if(numero>0)
			{
				contadorPositivos++
				acumuladorPositivos=acumuladorPositivos+numero
			}

				else
				{
					acumuladorNegativos=acumuladorNegativos+numero
				}




				if(numero>maximo || bandera==0)
				{
					maximo=numero
					letraMaxima=letra
				}

				if(numero<minimo || bandera==0)
				{
					minimo=numero
					letraMinima=letra

					bandera=1;
				}






			respuesta=prompt("desea continuar?");




		}

		promedio=acumuladorPositivos/contadorPositivos


	document.write("pares "+contadorPares+"<br>")
	document.write("impares "+contadorImpares+"<br>")
	document.write("ceros "+contadorCeros+"<br>")
	document.write("positivos "+promedio+"<br>")
	document.write("suma negativos "+acumuladorNegativos+"<br>")
	document.write("el numero  maximo es "+maximo+" y su letra es "+letraMaxima+"<br>")
	document.write( "el numero  minimo es "+minimo+" y su letra es "+letraMinima+"<br>")






}
