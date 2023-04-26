//Crie um programa que peça ao usuário para inserir o seu nome e sua cor favorita e imprima a mensagem: 
//A cor favorita de FULANO é COR"

//Faça o exercício duas vezes, utilizando template strings e concatenação*/

//let nome1 = prompt("Insira seu nome:");
//let cor1 = prompt("Insira sua cor favorita:");
//alert (`A cor favorita de ${nome1} é ${cor1}`);

//let nome2 = prompt("Insira seu nome:");
//let cor2 = prompt("Insira sua cor favorita:");
//console.log(`A cor favorita de ${nome2} é ${cor2}`); 

// let nome = "Vitor Hugo"
//alert(nome.length)

//let texto = "The LAST of us é A MELHOR SERIE"
//alert(texto.length)
//alert(texto.toLocaleUpperCase)

//Trim tira os espaços do inicio e do final
//let texto = '       Chrono Trigger rei do SNES '
//alert(text.trim())

//Includes te dá true ou false, se a palavra está na frase
//const frase = 'Hoje eu comi cenoura';
//alert(frase.includes('cenoura'))

//const frase = "Hoje comi cenoura, adoro cenoura"
//const novaFrase = frase.replaceAll('cenoura', 'alface')
//alert (novaFrase)

/* Peça para o usuário escrever uma frase e imprima no console a frase alterada, com:

Todas as letras maiúsculas;
Na língua do i (substituindo a vogal "o" por "i");
O tamanho da frase.*/

//let frase = prompt("Escreva uma frase:");
//let fraseMaiuscula = frase.toUpperCase();
//console.log("Frase em maiúsculas: " + fraseMaiuscula);

//let fraseLinguaI = frase.replaceAll('o', "i");
//console.log("Frase na língua do i: " + fraseLinguaI);

//let tamanhoFrase = frase.length;
//console.log("Tamanho da frase: " + tamanhoFrase);

//Crie um array com pelo menos 5 raças de cachorro
//Peça para o usuário inserir um número de 0 a 4
//Imprima no console a raça correspondente à posição escolhida pelo usuário

//let racas = ["Labrador Retriever", "Bulldog Francês", "Poodle", "Golden Retriever", "Chihuahua"];

//let posicao = parseInt(prompt("Insira um número de 0 a 4 para ver a raça correspondente:"));
//let posicaoInt = parseInt(posicao);

//if (posicaoInt >= 0 && posicaoInt < racas.length) {
//  alert("A raça correspondente à posição " + posicao + " é: " + racas[posicaoInt]);
//} else {
//  alert("Posição inválida.");
//}

/*Para este exercício, comece criando um array com os valores: 1, 2, 3, 4, 5 e 6.
Determine o tamanho do array
Adicione o número 7
Remova os números 4 e 5
Determine o novo tamanho do array*/

let valores = [1, 2, 3, 4, 5, 6]; 
console.log(valores.length); 
valores.push(7); 
valores.splice(3,2); 
alert(valores);
alert(valores.length);