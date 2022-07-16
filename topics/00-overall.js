/*------------  STRINGIFY FORMATTING -------------*/
document.write('<h3>STRINGIFY FORMATTING </h3>');
const human = {
  name: 'Marek',
  height: 175,
  weight: 'fat',
  age: 42,
  friends: ['Osia', 'Astram', 'Daniel'],
};

document.write(JSON.stringify(human, null, '</br>'));
