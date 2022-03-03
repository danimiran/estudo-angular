let num = 2;
const PI = 3.14;

var numeros = [1, 2, 3];

numeros.map(function(valor) { //antigo
    return valor * 2;
});

numeros.map(valor => valor * 2); //utiliza a => Ex 2015

//tipar variavel

var n1: string = 'texto';
n1 = 4; //erro

var n2: any = 'texto'; //qualquer coisa
n2 = 4;