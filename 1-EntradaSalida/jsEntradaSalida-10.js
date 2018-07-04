/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
var sueldo;
var descuento;
sueldo=document.getElementById('importe').value; //aca se pone value para mostrar el get
sueldo=parseInt(sueldo);
descuento=sueldo-sueldo*0.25;
document.getElementById('resultado').value=descuento;		
aler(descuento);
}
