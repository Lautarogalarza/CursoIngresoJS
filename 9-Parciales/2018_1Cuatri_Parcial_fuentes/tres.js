function mostrar()
{
var precio;
var descuento;
var calculo;
var preciocondescuento;
precio=prompt("ingrese el precio");
precio=parseInt(precio);
descuento=prompt("ingrese el porcentaje de descuento");
//descuento=parseInt(descuento);
calculo=descuento/100;
preciocondescuento=precio-(precio*calculo);
document.getElementById('elPrecioFinal').value=preciocondescuento;







}
