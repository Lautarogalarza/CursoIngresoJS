function mostrar()
{
	var nota;
	nota=document.getElementById('laHora').value;
	//nota=parseInt(nota);


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

				if(nota==4 || nota==5)
					{
						alert("debes preocuparte más");
					}
					break;
			case "6":
				alert("raspando");
				break;
			case "7":
			case "8":
				alert("aprobo");
				break;
			case "9":
			case "10":
				if(nota>8)
				{
					alert("muy bien");
				}
				break;
				default:
					alert("no es un numero valido")

 }		

        }
