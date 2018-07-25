function mostrar()
{

	var planetas;

	planetas=prompt("ingrese el planeta");

	switch(planetas)

	{
		case "mercurio":
		case "venus":
			alert("acá hace más calor");
			break
		case "tierra":
			alert("aca vivimos")
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
			alert("aca hace mas frio");
			break;
			default:
			alert("no es un planeta valido");
			break;
	}




}
