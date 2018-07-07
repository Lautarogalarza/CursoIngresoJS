
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
//base por altura sobre 2
superficie=base*altura/2;
//la summa de todos sus lados
perimetro=altura*3;

alert("la superficie del triangulo es "+superficie+" y su perimetro es "+perimetro);








}
