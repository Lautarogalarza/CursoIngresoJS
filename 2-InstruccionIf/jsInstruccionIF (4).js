function mostrar()
{
//tomo la edad  

/*
operadores de logica: or=||(o), and=&&(y) not=!(no)        
                          
|:pipe, &:ampersand

*/

	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	if(edad>=13 && edad<=17)
	{
		alert("es adolescente");
	}


/*
if(edad<13)
{
alert("es niño");
}

else if (edad>=13 && edad<=17)

{

 alert("es un adolescente")
}
else

{

alert("es adulto")
}
*/


}//FIN DE LA FUNCIÓN