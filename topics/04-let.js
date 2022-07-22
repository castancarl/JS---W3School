/////////////////////  LET , CONST ,  ////////////////////////////
console.log('3) Redeclaring Variables  - EXAMPLE 1');
var x = 10;
console.log('x = ' + x);
{
  var x = 3;
  console.log('x = ' + x);
}
console.log('x = ' + x);

//
//

console.log('4) LET Hoisting  - EXAMPLE 1');

carName = 'volvo';
var carName;
//
busName = 'Saab';
let busName = 'Volvo'; // --> Reference error: can't access lexical declaration 'busName' before initialization
