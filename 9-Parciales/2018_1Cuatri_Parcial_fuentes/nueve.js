function mostrar()
{

var marca;
var peso;
var temperatura;
var producto;
var respuesta="si";
var cantidadDeTemperaturasPares=0;
var cantidadDeProductosAceroGrados=0;
var cantidadDePesos=0;
var contadorDelPeso=0;
var pesoMaximo;
var marcaPesoMaximo;
var pesoMinimo;
var bandera=0;
var promedio;
while(respuesta=="si")
	{
		peso=prompt("ingrese el peso del producto(entre 1 y 100)");
		peso=parseInt(peso);
		cantidadDePesos=cantidadDePesos+peso
		contadorDelPeso++
			while(peso<1 || peso>100)
			{
				peso=prompt("error REingrese el peso del producto(entre 1 y 100)");
				peso=parseInt(peso);
		
			}

		temperatura=prompt("ingrese la temperatura de almacenamiento(entre -30 y 30)");
		temperatura=parseInt(temperatura)

			while(temperatura<-30 || temperatura>30)
			{
				temperatura=prompt("error REingrese la temperatura de almacenamiento(entre -30 y 30)");
				temperatura=parseInt(temperatura);
			}

			marca=prompt("ingrese la marca del producto");



			if(temperatura%2==0)
			{
				cantidadDeTemperaturasPares++
			}


			if(temperatura<0)
			{
				cantidadDeProductosAceroGrados++
			}




			if(peso>pesoMaximo || bandera==0)
			{
				pesoMaximo=peso;
				marcaPesoMaximo=marca;
			}

			if(peso<pesoMinimo || bandera==0)
			{
				pesoMinimo=peso

				bandera=1
			}



			respuesta=prompt("desea continuar?");




	


	}

promedio=cantidadDePesos/contadorDelPeso;

document.write("La cantidad de temperaturas pares es "+cantidadDeTemperaturasPares+"<br>");
document.write("La marca del producto más pesado es "+marcaPesoMaximo+"<br>");
document.write("La cantidad de productos que se conservan a menos de 0 grados son "+cantidadDeProductosAceroGrados+"<br>");
document.write("El promedio del peso de todos los productos es "+promedio+"<br>");
document.write("El peso máximo es "+pesoMaximo+" y el peso minimo es"+pesoMinimo+"<br>");


}

/*Testeo con los siguientes valores 
(m=pepito;p = 50; t =-300(mal) ,-30(bien) ) 
(m=teem;p = 10; t =0 ) 
(m=llut;p = 150(mal), 15(bien); t =-13 ) 
(m=fpy;p = 45; t =-12 )*/