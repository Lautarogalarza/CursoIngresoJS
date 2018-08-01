function mostrar()
{
	var nota
	var sexo
	var promedio
	var contador=0
	var acumulador=0
	var cantidadDevarones=0
	var notaMasbaja;
	var sexoNotamasbaja;

	while(contador<5)
	{

		contador++;
		
		sexo=prompt("ingrese sexo "+contador);

		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ingrese un sexo correcto "+contador);
		}
			nota=prompt("ingrese nota "+contador);
			nota=parseInt(nota);
			acumulador=acumulador+nota
			while(nota<=0 && nota>=10)
			{
				acumulador=0
				nota=prompt("ingrese una nota correcta "+contador)
				nota=parseInt(nota);
				acumulador=acumulador+nota
			}
     
				if(nota<=6 && sexo=="m")

				{
					cantidadDevarones++
				}

					if(contador==1)
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
     }
     		promedio=acumulador/contador

     alert("el promedio es: "+promedio+" y la cantidad de varones con una nota mayor a 6 son "+cantidadDevarones+ " la nota mas baja fue un "+notaMasbaja+" y su sexo es "+sexoNotamasbaja)
}
