function mostrar()
{
//tomo la edad  

var edad;
edad=document.getElementById('edad').value;
edad=parseInt(edad);

if(edad<13)
{
	alert("es niño");
}

}//FIN DE LA FUNCIÓN