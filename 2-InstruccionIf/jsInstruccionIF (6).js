function mostrar()
{
//tomo la edad  

 var edad;

 edad=document.getElementById('edad').value;

 	if(edad<13)
 	{
 		alert("es un niño");
 	}

 		else if (edad>18)
 		{
 			alert("es un adulto");
 		}
 			else
 			{
 				alert("es adolescente");
 			}


/*
if(edad>=18)
{

alert("es mayor de edad");

}

else
{
	
  if (edad>=13 && edad<=17)

  {

  alert("es un adolescente");

  }

  else
  {

  alert("es niño");

  }



}
*/

}//FIN DE LA FUNCIÓN