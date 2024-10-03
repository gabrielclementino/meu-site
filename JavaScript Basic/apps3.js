// // function calculateArea (length, width){
// //     return length * width
// // }

// // console.log(calculateArea(3,5));
// // console.log(calculateArea(8,9));
// debugger

// let arr = [2, 3, 6, 8, 15, 7];

// for (let a of arr) {
//   console.log(a);
// }

// Função para calcular o Lucro liquido
// function calculateProfit(amount, percent, period, profitTotal){
//     // declarando o lucro liquido
//     let profitLiquid = 0
//     //iniciando a iteração do periodo
//     for ( let i = 0; i < period ; i++){
//     // calculando  o lucro para o periodo atual
//         let profit = amount * (percent / 100)
//     // adicionando o lucro ao motante atual
//         amount += profit;
//     // acumulando o lucro liquido;
//         profitLiquid += profit;
//     }
//     // arredondando o lucro liquido
//     profitLiquid = Math.floor(profitLiquid);
//     return profitLiquid;
// }
// // Funcão para calcular o  total  + lucro liquido
// function calculateTotalAmount(amount, percent, period){
//     let profitLiquid = calculateProfit(amount, percent, period);

//     let totalAmount = amount + profitLiquid;
//     return totalAmount;
// }
// console.log(calculateProfit(1000,5,1));
// console.log(calculateProfit(12500,3,12));
// console.log(calculateTotalAmount(1000,5,1));
// console.log(calculateTotalAmount(12500,3,12));

// function isWereWolf(target){
//     const letters = 'abcdefghijklmnopqrstuvxyzw';
//     const lowerTarget = target.toLowerCase();

//     let direct = '';
//     let reversed = '';

//     for (const ch of lowerTarget){
//         if (letters.includes(ch)){
//             direct += ch;
//             reversed = ch + reversed;
//         }
//     }
//     return direct === reversed;
// }
// console.log(isWereWolf('traxart')); // true
// console.log(isWereWolf('racecar')); // true
// console.log(isWereWolf('Wowx')); // false

// const numeroCartao = '1332 1246 4440 1352';

// const primeirosQuatro = numeroCartao.slice(0, 5);
// const ultimosQuatro = numeroCartao.slice(-4);
// const tamanho = numeroCartao.length; 
 
// console.log(
//     primeirosQuatro + "\n" +
//     ultimosQuatro + "\n" +
//     numeroCartao
// )

// console.log(primeirosQuatro.padStart(tamanho, '**** '));
// console.log(ultimosQuatro.padEnd(tamanho, ' ****'));

// function isSpecialNumber(n){

//     const number = n.toString();

//     for (let i = 0; i < number.length; i++){
//         if (parseInt(number[i] > 5)){
//             return 'Special';
//         }else{
//             return 'NOT!!!'
//         }
//     }

// }
// console.log(isSpecialNumber(4));
// function scrollingText(word) {
//     // write code here
//     word = word.toUpperCase(); // transforma a string em MAISCULA
  
//     let result = []; // inicia um array vazio
  
//     for (let i = 0; i < word.length; i++){ // iterar sobre cada caractere da palavra
  
//       result.push(word.slice(i) + word.slice(0,i)); // adiciona ao array uma nova string que e a combinação dos caracteres do indice atual ate o final, seguido pelo carecteres do inicio ate o indice atual
//     }
//     // retorna o array com as combinações
//     return result;
//   }

//   console.log(scrollingText("broto"));

// function initials(firstname,lastname){
//   let unit = firstname[0] + lastname[0];
//   unit = unit.toUpperCase();
//   unit = unit.toLowerCase();
//   unit = unit + " - Iniciais"
//   return unit;

// }

// console.log(initials('gabriel','clementino'));

// function soma(a = 0,b = 1){
//   return a + b;
// }

// console.log(soma());

// const f1 = function(arg1, arg2){
//   return arg1 + arg2;
// }

// const f = (arg1, arg2) => {
//   return arg1 + arg2;
// }

// const soma = a => a * a * a;

// const resultado = soma(10);

// const cubic = area => area * area * area

// const result = cubic(10 + 10 + 300)


// const multiply = (a,b = 1) => a * b;

// const r1 = multiply(10,50)
// console.log(r1);

// // trocando o if, else por switch essa função é para saber qual a tarefa do dia. 
// function getTask(weekday) {
//   // adicionando uma variavel na função para retornar ela 
//   let task;
//   switch (weekday) {
//     case 'monday':
//     case 'wednesday':
//       task = 'Write a new module for the program';
//       break;
//     case 'tuesday':
//     case 'thursday':
//       task = 'Test the module and find bugs';
//       break;
//     case 'friday':
//       task = 'You need to meet the boss today';
//       break;
//     case 'saturday':
//       task ='Spend the evening with your friends';
//       break;
//     case 'sunday':
//       task = 'Go to the movies in the evening';
//       break;
//     default:
//   task = 'Entered the wrong day of the week';
//   }
//   return task;
// }


// console.log(getTask('saturay'));

// trocando o if, else por switch essa função é para saber qual a tarefa do dia. 
// usando somente o return
// function getTask(weekday) {
//   switch (weekday) {
//     case 'monday':
//     case 'wednesday':
//       return'Write a new module for the program';

//     case 'tuesday':
//     case 'thursday':
//       return 'Test the module and find bugs';

//     case 'friday':
//       return 'You need to meet the boss today';

//     case 'saturday':
//       return 'Spend the evening with your friends';

//     case 'sunday':
//       return 'Go to the movies in the evening';

//     default:
//       return 'Entered the wrong day of the week';
//   }
// }


// console.log(getTask('wednesdey'));

// const contador = 50;

// switch (true){
//   case (contador >= 1 && contador <= 5):
//   console.log('Poucos');
//   break;

//   case (contador >= 6 && contador <= 10):
//   console.log('Alguns');
//   break;

//   default:
//   console.log('Muitos');
// }


// back, forward, left, right, stop
// hor =x ver=y

// function getDirection(direction){

// let coordinates;

//   switch (direction) {
//     case 'forward':
//       coordinates = 'hor=0 ver=1';
//       break;
//     case 'back':
//       coordinates = 'hor=0 ver=-1';
//       break;
//     case 'right':
//       coordinates = 'hor=1 ver=0';
//       break;
//     case 'left':
//       coordinates = 'hor=-1 ver=0';
//       break;
//     default:
//       coordinates = 'stop';
//       break;
//   }
//   return coordinates;
// }

// console.log(getDirection('forward'));


// function findCalculationType(a, b, res) {
//   // write code here

//   if(a + b === res){
//     return "addiction"
//   } else if (a - b === res){
//     return "subtraction"
//   } else if (a / b === res){
//     return "division"
//   } else if (a * b === res){
//     return "multiplication"
//   }
// }


// console.log(findCalculationType(5,10,50));

// aula switch case

// const contador = 5;

// switch(contador){
//   case 1:
//   console.log('Poucos');
//   break;

//   case 2:
//   console.log('Muitos');
//   break;

//   default:
//   console.log('Alguns');
//   break;
// }

// function canTheyBook(adultsCount, childrenCount) {
  
//     if(adultsCount > 8  || adultsCount === 0 || childrenCount >= 7){
//         return false;
//     }else if(adultsCount === 8 && childrenCount > 0 ){
//         return false;
//     } else {
//         return true;}
// }

// console.log(canTheyBook(5,3));

// small room para ate 4 pessoas
// big room para ate 8 pesoas 
// extra bed para bebes

// function recommendRoom(adultsCount, childrenCount, babiesCount) {


// if (adultsCount >= 0 || adultsCount === 0 || childrenCount > 0 || babiesCount === 0 ){
//     return 'small room';
// }
// if (adultsCount >= 0 || adultsCount === 8 || childrenCount > 0 || babiesCount === 0 ){
//     return 'big room';
// }
// if (adultsCount >= 0 || adultsCount === 4 || childrenCount === 0 || babiesCount === 1 ){
//     return 'small room + extra bed';
// }
// if (adultsCount >= 0 || adultsCount === 8 || childrenCount === 0 || babiesCount === 1 ){
//     return 'big room + extra bed';
// }
// }

// console.log(recommendRoom(2,2,1));
// console.log(recommendRoom(2,1,1));
// console.log(recommendRoom(3,2));
// console.log(recommendRoom(3,0,2));
// console.log(recommendRoom(7,0,2));
// console.log(recommendRoom(8));

//conceito de objetos

// const user = {
//     firstName: 'Gabriel',
//     lastName: 'Clementino'

// }

// function addFullName(user) {
//     const fullName = `${user.firstName} ${user.lastName}`;
//     return fullName;
//   }

//   console.log(user(user))

// function countBoxes(boxes) {
//     // write code here
//     let countBox = {};
  
//     for (const chave of boxes){
//       if(countBoxes[chave] === undefined){
//         countBoxes[chave] === 1;
//       } else{
//         countBoxes[chave]++;
//       }
//     }
//     return countBox;
//   }
function getTriathlonDistance(distance) {
    // write code here
    const natacao = 3.86;
    const ciclismo = 180.25;
    const maratona = 42.2;
    const distanciaTotal = natacao + ciclisco + maratona;
  
    if (distance === 0){
      return 'Starting line... Good Luck!';
  } else if (distance > 0 && distance < swimDistance){
      return { natacao: `${(distanciaTotal - distance).toFixed(2)} to go!`};
  }
  }