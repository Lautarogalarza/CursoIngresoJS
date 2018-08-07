function mostrar()
{

	var nota;
	var sexo;
	var contador;
	var acumuladorDenotas;
	var bandera;
	var notasMasbaja
	var sexoNotaMasbaja;
	var contadorVarones;
	var promedio;

	contador=0
	acumuladorDenotas=0
	bandera=0;
	contadorVarones=0;

	while(contador<5)
	{

		nota=prompt("ingrese una nota entre el 0 y 10:");
		nota=parseInt(nota);
		while(nota<0 || nota>10)
		{
			nota=prompt("EROOR REingrese una nota entre el 0 y 10:");
			nota=parseInt(nota);
		}

		sexo=prompt("ingrese su sexo(f o m)");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ERROR REingrese su sexo(f o m)");
		}


			contador++;

			acumuladorDenotas=acumuladorDenotas+nota;

			if(nota<notasMasbaja || bandera==0)
				{
					notasMasbaja=nota
					sexoNotaMasbaja=sexo

					bandera=1
				}


				if(nota>=6 && sexo=="m")
				{
					contadorVarones++
				}
	
	}


	promedio=acumuladorDenotas/contador;


	alert("el promedio de todas las notas es "+promedio+"la nota mas baja fue de "+notasMasbaja+" y su sexo es "+sexoNotaMasbaja+" la cantidad de varones con una nota mayor o igual a 6 es "+contadorVarones);








}
