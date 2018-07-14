function mostrar()
{
//tomo la edad  

var edad;
edad=document.getElementById('edad').value;
edad=parseInt(edad);

if(edad<=13 && edad>=17)

{

 alert("es un adolescente")

}

else if  (edad>=18)

{

 alert("es un adulto")

}

else
{

 alert("es un niño")

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