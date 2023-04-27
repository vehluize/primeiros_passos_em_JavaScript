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

  function executar(variavel) {
    return variavel = 356;
  }
  
  let resultado = executar(5);
  console.log(resultado);

