/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
 var nombre;
 nombre=prompt("ingrese su nombre");
 document.getElementById('elNombre').value=nombre; //al poner la variable al final hace 
 //que el id aparezca en el cuadro del texto del html


}


