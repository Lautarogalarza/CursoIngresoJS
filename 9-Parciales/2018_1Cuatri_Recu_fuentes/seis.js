function mostrar()
{

	var nota

	nota=document.getElementById('laHora').value;
	nota=parseInt(nota);

	switch(nota)
	{
		case "0":
		case "1":
		case "2":
		case "3":
			alert("la proxima se puede");
			break;
		case "4":
		case "5":
		case "6":
			alert("raspando");
			if(nota<5)
			{
				alert("debes preocuparte mas");
			}
			break;
		case "7":
		case "8":
		case "9":
		case "10":
			alert("aprobo");
			if(nota>8)
			{
				alert("muy bien");
			}
			break;
			default:
			alert("no es una nota valida");



	}










}
