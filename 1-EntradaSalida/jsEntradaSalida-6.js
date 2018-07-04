/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

var numerouno= document.getElementById('numeroUno').value;

var numerodos= document.getElementById('numeroDos').value;

var resultado= parseInt(numerouno)+parseInt(numerodos);

alert("la suma es "+resultado)

}

