function mostrar()
{

/*si yo pongo 1000*0.10 me va a dar solo el porcentaje pero si pongo 1000*1.10 
me da el numero con el porcentaje agregado
*/

var precio;
var porcentajedescuento;
var descuento;
var descuentoendinero;
var preciodescuento;
var IVA;
var final;
precio=prompt("ingrese el precio")
precio=parseInt(precio)
porcentajedescuento=prompt("ingrese el porcentaje de descuento");
descuento=porcentajedescuento/100;
descuentoendinero=precio*descuento
preciodescuento=precio-(precio*descuento);
IVA=precio*0.21;
final=preciodescuento+IVA;
document.getElementById('elPrecioFinal').value=final;

alert("el precio tiene un descuento de "+descuentoendinero+" haciendo que el precio con descuento sea "+preciodescuento+", mas un IVA de "+IVA)



}
