function mostrar()
{

/*si yo pongo 1000*010 me va a dar solo el porcentaje pero si pongo 1000*1.10 
me da el numero con el porcentaje agregado
*/

var precio;
var descuento;
var iva;
var final;
precio=prompt("ingrese el precio");;
precio=parseInt(precio);
descuento=precio-precio*0.25;
iva=precio*0.21;
final=descuento+iva;

document.getElementById('elPrecioFinal').value=final;

alert("el precio con descuento es "+ descuento +" y tiene un IVA de "+iva);



}
