function mostrar()
{
//tomo la edad  

var edad

var estadocivil

edad=document.getElementById('edad').value;
estadocivil=document.getElementById('estadoCivil').value;
edad=parseInt(edad);

if(edad<18 && estadocivil !="soltero")
{

alert("es muy pequeño para no ser soltero")
}
	


}//FIN DE LA FUNCIÓN