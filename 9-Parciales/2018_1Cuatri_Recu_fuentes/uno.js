
function mostrar()
{
var base;
var altura;
var superficie;
var perimetro;
base=prompt("ingrese la base del triangulo");
base=parseInt(base);
altura=prompt("ingrese la altura del triangulo");
altura=parseInt(altura);
//base x altura sobre 2 para calcular la superficie de cualquier triangulo
superficie=base*(altura/2);
//para calcular el perimetro se suman las 3 bases iguales
perimetro=base*3;

alert("el triangulo tiene una superficie de: "+superficie+" y un perimetro de: "+perimetro);









}
