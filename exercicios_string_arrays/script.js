/*let array
console.log ('a.', array)
array = null
console.log('b.', array)

Resposta: indefinido e nulo. Pois não definimos nada para as variaveis*/

/*array = [3,4,5,6,7,8,9,10,11,12,13]
console.log('c,', array.length)
let i = 0
console.log('d.', array[i]);

array[i+1] = 19
console.log('e.', array);

const valor = array [i+6];
console.log('f.', valor);*/


/* const frase = prompt("Digite uma frase:")
console.log(frase.toUpperCase().replaceAll ("A", "I"), frase.length);*/

//1. Faça um programa que pergunte ao usuario seu nome e seu e-mail. Em seguida,
// imprima no console a seguinte mensagem: 
//O e-mail "emaildoUsuario" foi cadastrado com sucesso.
//Seja bem-vindo, "nomeDoUsuario"

/*let nome = prompt("Qual é o seu nome?");
let email = prompt("Qual é o seu e-mail?");

console.log(`O e-mail "${email}" foi cadastrado com sucesso. \nSeja bem-vindo, "${nome}"`);*/

//3. Faça um programa, seguindo os passos:
//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`    
//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
//c) Imprima o array no console
//d) Peça ao usuário que digite o *índice* de uma tarefa que ele já realizou: 0, 1 ou 2 
//e) Remova da lista o item de índice que o usuário escolheu.
//f) Imprima o array no console

let listaDeTarefas = [];
for (let i = 0; i < 3; i++) {
  let tarefa = prompt(`Digite a tarefa número ${i + 1}:`);
  listaDeTarefas.push(tarefa);
}
console.log("Lista de tarefas:", listaDeTarefas);
let indice = prompt("Digite o índice da tarefa que você já realizou (0, 1 ou 2):");
listaDeTarefas.splice(indice, 1);
console.log("Lista de tarefas atualizada:", listaDeTarefas);

//1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
let frase = prompt("Digite uma frase:");
let palavras = frase.split(" ").filter(palavra => palavra !== "");

console.log(palavras);

//2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa que acha o índice
//da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
let indiceAbacaxi = frutas.indexOf("Abacaxi");

console.log("O índice do Abacaxi é:", indiceAbacaxi);
console.log("O tamanho do array é:", frutas.length);

// 3.Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável.
//Em seguida, siga os passos:
//a) Imprima no console o array completo
//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas,
//*uma embaixo da outra*.
//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida
//pelo usuário. Imprima no console a nova lista

let comidasPreferidas = ["Lasanha", "Pizza", "Sushi", "Churrasco", "Hambúrguer"];

console.log(comidasPreferidas);

console.log("Essas são as minhas comidas preferidas:");
for (let i = 0; i < comidasPreferidas.length; i++) {
  console.log(comidasPreferidas[i]);
}
let novaComida = prompt("Digite uma nova comida preferida:");
comidasPreferidas[1] = novaComida;

console.log("Essas são as minhas novas comidas preferidas:");
for (let i = 0; i < comidasPreferidas.length; i++) {
  console.log(comidasPreferidas[i]);
}

//4. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
//Modifique os elementos do array de modo a a sequência de números ficar do contrário. Ou seja, se digitou: 1,2,3
//Vai aparecer: 3,2,1

let numeros = [];
for (let i = 1; i <= 3; i++) {
  let numero = Number(prompt(`Digite o número ${i}:`));
  numeros.push(numero);
}

console.log("Array original:", numeros);
numeros.reverse();

console.log("Array invertido:", numeros);