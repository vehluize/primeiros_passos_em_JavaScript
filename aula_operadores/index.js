/* Para este exercicio, será necessario o conhecimento
das formulas para mudar a unidade de temperatura entre Graus
Celsius e Graus Fahrenheit e Kelvin. Abaixo estão duas formulas*/
//------------------------------------------------

//a) Calcule e mostre o valor de 77°F em K, mostrando a unidade no console também
//FUNÇÃO: (Kelvin) = (Graus_fahrenheit - 32)°*(5/9) + 273.15

/*let kelvin = (77 - 32)*(5/9) + 273.15
console.log(kelvin);

//b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
//FUNÇÃO: (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5)+32

/*let FAHRENHEIT = (80)*(9/5)+32
console.log(FAHRENHEIT);

//c) Calcule e mostre o valor de 30°C em °F e °K, mostrando a unidade no console

/*let °F = (30)*(9/5)+32;
console.log(°F + " °F");

let kelvin = (30) + 273.15;
console.log(kelvin + " K");

/*d)Altere o ultimo item para o usuario insira o valor em graus celsius que ele
deseja converter*/

/*let celsius = parseFloat(prompt("Insira o valor em graus Celsius que deseja converter:"));
let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + " graus Celsius equivale a " + fahrenheit + " graus Fahrenheit.");


/* Quilowatt-hora é uma unidade de energia. e é muito utilizada para se determinar
o consumo de energia eletrica em uma residencia. Sabe-se que o quilowatt-hora de
energia custa R$0,05. Faça um programa que receba a quantidade de quilowatts 
consumida por uma resistencia.*/

/* a) Calcule e mostre o valor a ser pago por uma residencia que consuma 280
quilowatt-hora */

/*const valorKwHora = 0.05; // valor do quilowatt-hora
const consumoKw = 280; // consumo de quilowatt-hora

const valorAPagar = consumoKw * valorKwHora;
console.log(O valor a ser pago é R$ ${valorAPagar.toFixed(2)}.);

/* b) Altere o programa para receber mais um valor: a porcentagem de desconto. Mostre
o valor a ser pago pela mesma residencia acima considerando 15% de desconto */

/*const porcentagemDesconto = parseFloat(prompt("Informe a porcentagem de desconto:")); // porcentagem de desconto
const valorComDesconto = valorAPagar * (1 - porcentagemDesconto/100);
console.log(Com desconto de ${porcentagemDesconto}%, o valor a ser pago é R$ ${valorComDesconto.toFixed(2)}.);


/* 1. Perguntar o ano de nascimento. 
2. Armazenar ano
3. Definir ano atual
4. Calcular
5. Informar Resultado*/

/*const anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));
const anoAtual = new Date().getFullYear();
const idade = anoAtual - anoNascimento;

console.log("A idade atual é " + idade + " anos.");


/* Verificar 3 notas e validar media 7
1. solicitar 3 notas
2. Somar 3 notas
3. Calcular média
4. Validar média >= 7
5. Se >= que 7 true senão false*/

//const usuario = prompt("Digite o usuário:");
//const nota1 = parseFloat(prompt("Digite a primeira nota:"));
//const nota2 = parseFloat(prompt("Digite a segunda nota:"));
//const nota3 = parseFloat(prompt("Digite a terceira nota:"));

//const somaNotas = nota1 + nota2 + nota3;
//const media = somaNotas / 3;

//if (media >= 7)
  //alert("A média do usuário " + usuario + " é " + media + ". Parabéns, você foi aprovado!");
 //else 
 //alert("A média do usuário " + usuario + " é " + media + ". Sinto muito, você foi reprovado.");*/

// solicitar um número para o usuario. Validar se é par e informar o resultado
 
//const numero = prompt("Digite um número:");

//if (numero % 2 === 0) 
  //alert('É PAR!')
//else 
//alert('É IMPAR!')

//Solicitar 3 números para o usuario e exibir o maior
 
let num1 = prompt("Digite o primeiro número: ");
let num2 = prompt("Digite o segundo número: ");
let num3 = prompt("Digite o terceiro número: ");

num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);

let maior = num1;
if (num2 > maior) 
  maior = num2;

if (num3 > maior) 
  maior = num3;
console.log("O maior número é: " + maior);





 