
function mostrar()
{
var base

var altura

var superficie

var perimetro

base=prompt("ingrese la base del triangulo")
base=parseInt(base)
perimetro=base*3
altura=prompt("ingrese la altura del triangulo")
altura=parseInt(altura)
superficie= base*altura/2
alert("el perimetro del triangulo es "+ perimetro+"y su altura es "+superficie )
}
