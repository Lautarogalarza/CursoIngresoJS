function mostrar()
{
	//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	//alert (mesDelAño);
	
	switch(mesDelAño)
	{
		case "Febrero":
			alert("tiene 28 días");
			break;

		case "Abril": 
		case "Noviembre": 
		case "Junio": 
		case "Septiembre": 
			alert("tiene 30 dias");
			break;
			default:
			alert("tiene 31 dias");
	        break;
	}		



}	//FIN DE LA FUNCIÓN