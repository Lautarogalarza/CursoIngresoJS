/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numerouno 
	var numerodos 
	var resultado
    numerouno=document.getElementById('numeroUno').value;
    numerouno=parseInt(numeroUno)
	numerodos=document.getElementById('numeroDos').value;
	numerodos=parseInt(numeroDos);
	resultado=numeroUno + numeroDos
	alert("la suma es "+ resultado);




}

function restar()
{
	var numerouno 
	var numerodos 
	var resultado
    numeroUno=document.getElementById('numeroUno').value;
    numeroUno=parseInt(numeroUno)
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno - numeroDos
	alert("la resta es "+ resultado);
}

function multiplicar()
{ 
	var numerouno 
	var numerodos 
	var resultado
    numeroUno=document.getElementById('numeroUno').value;
    numeroUno=parseInt(numeroUno)
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno * numeroDos
	alert("la multiplicacion es "+ resultado);
}

function dividir()
{
	var numerouno 
	var numerodos 
	var resultado
    numeroUno=document.getElementById('numeroUno').value;
    numeroUno=parseInt(numeroUno)
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno / numeroDos
	alert("la division es "+ resultado);
}

