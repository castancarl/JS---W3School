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
document.getElementById('demo-2a').innerHTML = str.slice(-12, -6);
