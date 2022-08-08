//DEMO-2 -----------------------------------------
{
  const cars = ['Saab', 'Volvo', 'BMW'];
  cars[1] = 'KIA';
  document.getElementById('demo-2').innerHTML = cars;
}
//DEMO-2b -----------------------------------------
{
  const cars = [];
  cars[0] = 'Saab';
  cars[1] = 'Volvo';
  cars[2] = 'BMW';
  document.getElementById('demo-2b').innerHTML = cars;
}
//DEMO-3 -----------------------------------------
{
  const person = ['John', 'Doe', 46];
  document.getElementById('demo-3').innerHTML = person[0];
}
//DEMO-3b,3c -------------------------------------
{
  const person = { firstName: 'John', lastName: 'Doe', 'eyes colour': 'light-blue', age: 46 };
  document.getElementById('demo-3b').innerHTML = person.firstName;
  document.getElementById('demo-3c').innerHTML = person['eyes colour'];
}
//DEMO-5 -------------------------------------

{
  function add(a, b) {
    return a + b;
  }
  document.getElementById('demo-5').innerHTML = add(1, 4);
}
