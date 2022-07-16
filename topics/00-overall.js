/*------------  STRINGIFY FORMATTING -------------*/
document.write('<h3>STRINGIFY FORMATTING </h3>');
const human = {
  name: 'Marek',
  height: 175,
  weight: 'fat',
  age: 42,
  friends: ['Osia', 'Astram', 'Daniel'],
};

JSON.stringify({ a: 1, b: 2, c: { d: 1, e: [1, 2] } }, null, 4); // Indented 4 spaces
JSON.stringify({ a: 1, b: 2, c: { d: 1, e: [1, 2] } }, null, '\t'); // Indented with tab
document.write(JSON.stringify(human, null, '</br>'));
