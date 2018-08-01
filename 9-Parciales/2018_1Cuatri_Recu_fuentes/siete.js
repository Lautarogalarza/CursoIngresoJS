/*
ingreso:
maria f 15
jose m 33
pepe m 81

mostrar:
	cantidad
		1- de mayores de edad= 2
		2- menores de edad= 1 
		3-cantidad de mujeres=1
		4-cantidad de hombres=2
	nombre
		5-del mayor=pepe
		6-del menor=maria
		7-del hombre de menor edad=jose

*/
function mostrar()
{

	var nombre;
	var sexo;
	var edad;
	var respuesta="si";
	var contador=0;
	var contadorDemayores=0;
	var contadorDemenores=0;
	var contadorDehombres=0;
	var contadorDemujeres=0;
	//var nombreDelmenor;
	//var nombreDelmayor;
	//var nombreDelhombreMenor;
	

	while(contador<10)
	{
		contador++;
		nombre=prompt("ingrese su nombre "+contador);
		
		sexo=prompt("ingrese sexo "+contador);

		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ingrese un sexo correcto "+contador);
		}
			edad=prompt("ingrese edad "+contador);
			edad=parseInt(edad);
			while(edad<0 || edad>100)
			{
				edad=prompt("ingrese una edad correcta "+contador)
				edad=parseInt(edad);
			}

				if(edad>18)
				{

					contadorDemayores++
				}	
					else
					{
						contadorDemenores++	
					}

						if(sexo=="m")

						{
							contadorDehombres++
	
						}
	
							else
								{
									contadorDemujeres++
								}
									/*if(contador==1)
									{
										notaMasbaja=nota
										sexoNotamasbaja=sexo

									}
									if(nota<notaMasbaja)
									{
					 					notaMasbaja=nota;
									}
									if(sexo<sexoNotamasbaja)
									{
										sexoNotamasbaja=sexo;
									}
								*/
	}

	document.write("<br> la contidad de mayores es "+ contadorDemayores );
	document.write("<br> la contidad de menores es "+ contadorDemenores );
	document.write("<br> la cantidad de hombres es "+ contadorDehombres );
	document.write("<br> la cantidad de mujeres es "+ contadorDemujeres );
	//document.write("<br> el nombre del mayor es "+ nombreDelmayor );
	//document.write("<br> el nombre del menor es "+ nombreDelmenor );
}
