function mostrar()
{
//tomo la edad  

/*operadores de logica: or=||(o), and=&&(y) not=!(no)        
                          
|:pipe, &:ampersand
*/

var edad;
edad=document.getElementById('edad').value;
edad=parseInt(edad);

// if(!(edad< || edad<17) )
if(edad >= 13 && edad <= 17)
{

alert("es adolescente");

}



}//FIN DE LA FUNCIÓN