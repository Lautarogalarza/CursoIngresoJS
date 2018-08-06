function mostrar()
{

var letra;
var numero;
var respuesta="si";
var contadorPares=0;
var contadorImPares=0;
var contadorDeCeros=0;
var contadorPositivos=0;
var acumuladorPositivos=0;
var contadorNegativos=0;
var acumuladorNegativos=0;
var promedioPositivos;
var sumaNegativos;
var numeroMaximo;
var letranumeroMaximo;
var numeroMinimo;
var letranumeroMinimo;
var bandera=0;

while(respuesta=="si")
{
	numero=prompt("ingrese un numero entre 100 y -100");
	numero=parseInt(numero);
	
	while(numero<-100 || numero>100)
	{
		numero=prompt("error REingrese un numero entre 100 y -100");
		numero=parseInt(numero);

  	}

  	letra=prompt("ingrese una letra");
	letra=letra.toLowerCase();

  	
	if(numero%2==0 && numero!=0)
	{
		contadorPares++;
	}

	else
	{
		contadorImPares++
	}

	if(numero>0)
		{
			contadorPositivos++;
			acumuladorPositivos=numero+acumuladorPositivos;
		}

	else if(numero<0)
		{
			contadorNegativos++;
			acumuladorNegativos=numero+acumuladorNegativos;
		}	

	else 
	{
		contadorDeCeros++
	}
	/*else if(numero%2==1 || numero%2==-1)
	{
		contadorImPares++;
	}

	else
	{
		contadorDeCeros++
	}


	if(numero>0)
		{
			contadorPositivos++;
			acumuladorPositivos=numero+acumuladorPositivos;
		}

	else
		{
			contadorNegativos++;
			acumuladorNegativos=numero+acumuladorNegativos;
		}


*/

		if(numero>numeroMaximo || bandera==0)
			{
				numeroMaximo=numero;
				letranumeroMaximo=letra;
			}


		if(numero<numeroMinimo || bandera==0)
		{
			numeroMinimo=numero;
			letranumeroMinimo=letra;

			bandera=1;
		}

	respuesta=prompt("deasea continuar?");
}

promedioPositivos=acumuladorPositivos/contadorPositivos

sumaNegativos=acumuladorNegativos

document.write("la cantidad de numeros pares es "+contadorPares+"<br>");
document.write("la cantidad de numeros Impares es "+contadorImPares+"<br>");
document.write("la cantidad de ceros es "+contadorDeCeros+"<br>");
	if(contadorPositivos==0)
	{
		promedioPositivos="No se ingreso ningun numero positivo"
	}
document.write("el promedio de los positivos es "+promedioPositivos+"<br>");
	if(contadorNegativos==0)
	{
		sumaNegativos="No se ingreso ningun numero negativo"
	}
document.write("la suma de los negativos es "+sumaNegativos+"<br>");
document.write("el numero maximo es "+numeroMaximo+" y su letra es "+letranumeroMaximo+"<br>");
document.write("el numero minimo es "+numeroMinimo+" y su letra es "+letranumeroMinimo+"<br>");






}
