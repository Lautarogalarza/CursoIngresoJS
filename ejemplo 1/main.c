#include <stdio.h>
#include <stdlib.h>

int main()//punto de entrada
{
    int Numero;

    float NumeroDos;

    char caracter;

    printf("ingrese un numero: ");
    scanf("%d", &Numero);
    printf("el numero que ingreso es: %d\n", Numero);

    printf("ingrese un numero flotante: ");//pido dato
    scanf("%f", &NumeroDos);//guardo el dato de la variable en la memoria
    printf("el numero que ingreso es: %f\n", NumeroDos);//muestro el dato desde la memoria

    //fflush(stdin);
    setbuf(stdin,NULL);

    printf("ingrese un caracter: ");
    scanf("%c", &caracter);
    printf("el caracter que ingreso es: %c", caracter);



    //scamf()



        //printf("el numero es: %d y el otro numero es: %f\n000", Numero, NumeroDos);//equivale al console.log en js

        //printf("el caracter es: %c", caracter);
    return 0;
}
