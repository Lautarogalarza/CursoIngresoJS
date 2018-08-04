/*
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10),la edad y el sexo (validar el sexo “f” o “m”) 
de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6. 
d) El sexo y la nota del más joven 
d) La edad y la nota de la primera mujer ingresada o informar si no hubo ninguna mujer. 

*/
function mostrar()
{

var nota;
var sexo;
var edad;
var promedio;
var contador=0;
var acumulador=0;
var contadorVarones=0;
var notaMasbaja;
var sexoNotaMasbaja;
var bandera=0;
var sexodelMasjoven;
var edadDelmasjoven;
var notadelMasjoven;
var contadorMujeres=0
var edadDelaprimermujer;
var notaDelaprimermujer;

	//pido la edad

while(contador<5)

{
	contador++;
	edad=prompt("ingrese su edad");
	edad=parseInt(edad);
	
	//valido la edad
	while(edad<0 || edad>100)

		{
			edad=prompt("por favor ingrese una edad validad");
			edad=parseInt(edad);
		}
			//pido el sexo
			sexo=prompt("for favor ingrese su sexo");
			//valido el sexo
	while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("por favor ingrese un sexo valido");
			
		}
			if(sexo=="f")
				{
					contadorMujeres++;
				}

		//pido la nota
		nota=prompt("ingrese su nota");
		nota=parseInt(nota);
		acumulador=acumulador+nota;
		//valido la nota
	while(nota<0 || nota>10)
		{
			nota=prompt("por favor ingrese una nota valida");
			nota=parseInt(nota);
			acumulador=acumulado+nota;
		}


			if(edad>=18 && sexo=="m" && nota>=6)
			{
				contadorVarones++;
			}

				if(nota<notaMasbaja || bandera==0)
				{
					notaMasbaja=nota;
					sexoNotaMasbaja=sexo;

					
				}


				if(edad<edadDelmasjoven || bandera==0)
				{
					edadDelmasjoven=edad;
					notadelMasjoven=nota;
					sexodelMasjoven=sexo;

					bandera=1;
				}

				if(sexo=="f" && contadorMujeres==1)
				{
					edadDelaprimermujer=edad;
				    notaDelaprimermujer=nota;
				}
				
}




promedio=acumulador/contador;






alert("los varones son "+contadorVarones+" la edad de la primer mujer ingresada es "+edadDelaprimermujer+" la nota de la primer mujer ingresada es "+notaDelaprimermujer+ " la nota mas baja es " +notaMasbaja+" y su sexo es "+sexoNotaMasbaja+" la nota del mas joven es "+notadelMasjoven+" y su sexo es "+sexodelMasjoven+" y el promedio de las notas es "+promedio);

}

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
	var nombreDelmenor;
	var edadDelmenor;
	var nombreDelmayor;
	var edadDelmayor
	var nombreDelhombreMenor;
	var edadDelhombreMenor
	var bandera=0;
	
	

	while(contador<3)

		//pido los datos
	{
		contador++;
		nombre=prompt("ingrese su nombre "+contador);
		
		sexo=prompt("ingrese sexo "+contador);
		sexo=sexo.toLowerCase();
		// valido si el sexo es correcto
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ingrese un sexo correcto "+contador);
		}
			//pido la edad
			edad=prompt("ingrese edad "+contador);
			edad=parseInt(edad);
			//valido si la edad es correcta
			while(edad<0 || edad>100)
			{
				edad=prompt("ingrese una edad correcta "+contador)
				edad=parseInt(edad);
			}
				// ME FIJO SI ES MAYOR O MENOR DE EDAD Y CUENTO
				if(edad>=18)
				{

					contadorDemayores++;
				}	

					else
					{
						contadorDemenores++;
					}
						//ME FIJO SI ES MASCULINO O FEMENINO Y CUENTO
						if(sexo=="m")

						{
							contadorDehombres++;
	
						}
	
							else
								{
									contadorDemujeres++;
								}
								// 	
								if(  edad>edadDelmayor || bandera==0)
									{   

										edadDelmayor=edad;
									    nombreDelmayor=nombre;
										
									}
									if(edad<edadDelmenor || bandera==0)
									{   

										edadDelmenor=edad;
									    nombreDelmenor=nombre;
										
										bandera=1;
									}




									/*if(contador==1)
									{
										edadDelmenor=edad;
										nombreDelmenor=nombre;
										edadDelmayor=edad;
										nombreDelmayor=nombre;
									}
									if(edad<edadDelmenor)
									{
					 					edadDelmenor=edad;
					 					nombreDelmenor=nombre;
									}
									if(edad>edadDelmayor)
									{
										edadDelmayor=edad;
										nombreDelmayor=nombre;
									}*/

									if(sexo=='m' && contadorDehombres==1)
									{
										nombreDelhombreMenor=nombre;
	                                    edadDelhombreMenor=edad;
									}

									if(sexo=='m' && edad < edadDelhombreMenor)
									{
										nombreDelhombreMenor=nombre;
	                                    edadDelhombreMenor=edad;
									}	}

	document.write("<br> la contidad de mayores es: "+ contadorDemayores );
	document.write("<br> la contidad de menores es: "+ contadorDemenores );
	document.write("<br> la cantidad de hombres es: "+ contadorDehombres );
	document.write("<br> la cantidad de mujeres es: "+ contadorDemujeres );
	document.write("<br> el nombre del mayor es: "+ nombreDelmayor );
	document.write("<br> el nombre del menor es: "+ nombreDelmenor );
	if(contadorDehombres==0)
	{
		nombreDelhombreMenor="no se ingreso ningun hombre"
	}
	document.write("<br> el nombre del hombre menor es: "+ nombreDelhombreMenor );
}

