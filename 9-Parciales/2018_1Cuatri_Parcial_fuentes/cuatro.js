	function mostrar()
	{

	var numero1;
	var numero2;
	var suma;
	var resta;


	numero1=prompt("ingrese el primer numero");
	numero1=parseInt(numero1);

	numero2=prompt("ingrese el segundo numero");
	numero2=parseInt(numero2);

	if(numero1==numero2)

	{

	 alert(numero1+" y "+numero2);

	}
	else 

	 {	

	    if(numero1<numero2)

	   {
	   	suma = numero1+numero2;
	   	if(suma>10)
	   	{
	   		alert("la suma es mayor que 10");
	   	}
	    alert(suma);
		}
		else
		{
			resta = numero1-numero2;
			alert(resta);
		}



	}




	}