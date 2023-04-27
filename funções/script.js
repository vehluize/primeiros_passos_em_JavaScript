 //Crie uma função que:
//Receba um array de números; 
//Retorne um novo array com dois elementos: 
//o último e o primeiro número do array recebido divididos por dois.

let numsArray = [120, 340, 355, 197];

function calculaArray(array) {
  let area = array.reduce((total, num) => total + num);
  return area;
}
let resultado = calculaArray(numsArray);
console.log(resultado);

  //function arrayDeNumeros ()
    //let numero = [2,3,4,5];
    //const pri = [numero[0]/2, numero[3]/2];
    //return pri;
  
  //let chama = arrayDeNumeros ();
  //alert(chama);

  //function executar(variavel) {
    //return variavel = 356;
  //}
  
  //let resultado = executar(5);
  //console.log(resultado);

/////----------------------- Aula do dia 24/04--------------------
// A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando
// algumas informações sobre você, como:
// Troque o nome, idade, cidade e se é estudando ou não por informações sobre você. 
// Lembrando que função não possui entradas, apenas imprime essa mensagem.

//let meusDados = function() {
  //return "Eu sou Verônica, tenho 28 anos, moro em São Leopoldo, sou estudante e sou nerd e gamer."
//}
//console.log(meusDados())

//Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), 
//a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas 
//as informações da pessoa em uma só mensagem com o template:

//function informacoesPessoas(nome, idade, cidade, profissao) {
 // return `Olá! meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
 // } 
  ///// essas infos, vem na ordem estabelecida pela ordem dos parametros da função
  
//alert (informacoesPessoas("Verônica", 28, "São Leopoldo", "Jornalista"))

//2. Escreva as funções explicadas abaixo:    
    //a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das
    //duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.    
    //b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é
    //**maior ou igual** ao segundo.    
    //c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    //d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa 
    //mensagem, juntamente com uma versão dela em letras maiúsculas.

    //a)
    function somar(a, b) {
      return a + b;
    }
    
    const resultado = somar(2, 3);
    console.log(resultado);
    //---- resultado 5

    //b)
    function maiorOuIgual(a, b) {
      return a >= b;
    }
    
    const resultado = maiorOuIgual(5, 3);
    console.log(resultado); // imprime true
    
    const resultado2 = maiorOuIgual(3, 5);
    console.log(resultado2); // imprime false

    //----
    //c)
    function ehPar(numero) {
      return numero % 2 === 0;
    }
    
    const resultado = ehPar(4);
    console.log(resultado); // imprime true
    
    const resultado2 = ehPar(3);
    console.log(resultado2); // imprime false

    //-----
    //d)
    function imprimirTamanhoEMaiusculas(mensagem) {
      const tamanho = mensagem.length;
      const mensagemMaiuscula = mensagem.toUpperCase();
    
      console.log(`A mensagem "${mensagemMaiuscula}" tem ${tamanho} caracteres.`);
    }
    
    imprimirTamanhoEMaiusculas("Olá, mundo!"); // imprime "A mensagem "OLÁ, MUNDO!" tem 10 caracteres."

  ///------



    
