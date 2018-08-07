function mostrar()
{

	var numeroUno;
	var numeroDos;
	var resultado;

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

			if(numeroUno<numeroDos)
			{
				numeroUno=parseInt(numeroUno);
				numeroDos=parseInt(numeroDos);

				resultado=numeroDos+numeroUno;

				alert(resultado);
				
			}








		}



}
