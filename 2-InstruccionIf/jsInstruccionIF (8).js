function mostrar()
{
//tomo la edad  

var edad;

var estadocivil;

edad=document.getElementById('edad').value;
estadocivil=document.getElementById('estadoCivil').value;
edad=parseInt(edad);

if(!(edad<18) && estadocivil =="Soltero")
{

alert(" es soltero y no es menor")

}


}//FIN DE LA FUNCIÓN