function mostrar()
{

var precio;
var descuento 
var calculo;
var final;
precio=prompt("ingrese el precio");
precio=parseInt(precio);
descuento=prompt("ingrese el descuento");
descuento=parseInt(descuento);
//para convertir un numero a porcentaje se divide x100
calculo=descuento/100;
final=precio-precio*calculo;



document.getElementById('elPrecioFinal').value=final;







}
