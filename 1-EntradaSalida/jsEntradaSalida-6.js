/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

var numeroUno;
var numeroDos;
var resultado;

//la mejor fomra de hacerlo para no confundirme
numeroUno=document.getElementById('numeroUno').value;
numeroUno=parseInt(numeroUno); //toma el dato desde la derecha y lo convierte a 
//la izquierda para que aparezca como numero y en el cuadro del alert
numeroDos=document.getElementById('numeroDos').value;
numeroDos=parseInt(numeroDos);

resultado=numeroUno + numeroDos;

alert ("la suma es " + resultado);

}


