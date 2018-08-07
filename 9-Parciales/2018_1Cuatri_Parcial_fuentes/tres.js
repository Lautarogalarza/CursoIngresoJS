function mostrar()
{

	var precio;
	var descuento;
	var precioFinal;

	precio=prompt("ingrese el precio");
	precio=parseInt(precio);

	descuento=prompt("ingrese el descuento");
	descuento=parseInt(descuento);

	descuento=descuento/100

	precioFinal=precio-(precio*descuento);

	document.getElementById('elPrecioFinal').value=precioFinal;





}
