/*
 1 - Subtopic name
*/
//DEMO-1 -----------------------------------------
let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
document.getElementById('demo').innerHTML = text.length;

//DEMO-2 -----------------------------------------
let str = 'Apple, Banana, Kiwi';
console.log(str.length);
document.getElementById('demo-2').innerHTML = str.length + ' ' + 'string.length';
document.getElementById('demo-2a').innerHTML = str.slice(7, 13);

//DEMO-3 -----------------------------------------
function myFunction() {
  let text = document.getElementById('demo-3').innerHTML;
  document.getElementById('demo-3').innerHTML = text.replace('Microsoft', 'W3Schools');
}
function myReFunction() {
  let text = document.getElementById('demo-3').innerHTML;
  document.getElementById('demo-3').innerHTML = text.replace('W3Schools', 'Microsoft');
}

//DEMO-4 -----------------------------------------
function myFunction2() {
  let text = document.getElementById('demo-4').innerHTML;
  document.getElementById('demo-4').innerHTML = text.replace(/Microsoft/g, 'W3Schools');
}
function myReFunction2() {
  let text = document.getElementById('demo-4').innerHTML;
  document.getElementById('demo-4').innerHTML = text.replace('W3Schools', 'Microsoft');
}

//DEMO-5 -----------------------------------------
function myFunA() {
  let text = document.getElementById('demo-5').innerHTML;
  document.getElementById('demo-5').innerHTML = text.toUpperCase();
}
function myFunAre() {
  let text = document.getElementById('demo-5').innerHTML;
  document.getElementById('demo-5').innerHTML = text.toLowerCase();
}

//DEMO-6 -----------------------------------------
{
  let text1 = 'Hello';
  let text2 = 'World!';
  let text3 = 'World!';

  let text4 = text1.concat(' ', text2, ' ', text3);
  document.getElementById('demo-6').innerHTML = text4;
}
// console.log(text1); TODO: not find because of block scope {}
