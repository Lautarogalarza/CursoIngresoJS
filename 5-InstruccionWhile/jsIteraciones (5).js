function mostrar()
{

	var sexo = prompt("ingrese f ó m .");
	sexo=sexo.toLowerCase();//se usa para transforma en minuscula lo que se guarda en la variable
	//while (!(sexo=="f" || sexo=="m"))
	while(sexo!="f" && sexo!="m" && sexo!="F" && sexo!="M")
		{
			sexo=prompt("ingrese un sexo correcto");
			sexo=sexo.toLowerCase();
		}

			document.getElementById('Sexo').value=sexo;



}//FIN DE LA FUNCIÓN