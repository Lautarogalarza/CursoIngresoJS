function mostrar()
{

	var precio;
	var descuento;
	var descuentoEnDinero;
	var precioDescuento;
	var IVA;
	var precioFinal;

	precio=prompt("ingrese el precio");
	precio=parseInt(precio);

	descuento=prompt("ingrese el descuento");
	descuento=parseInt(descuento);

	descuento=descuento/100

	descuentoEnDinero=precio*descuento;
	precioDescuento=precio-descuentoEnDinero;

	IVA=precio*0.21

	precioFinal=precioDescuento+(precioDescuento*0.21)

	document.getElementById('elPrecioFinal').value=precioFinal;

	alert(" descuento en dinero "+descuentoEnDinero+" precio con descuento "+precioDescuento+" un IVA de"+IVA);	




}
