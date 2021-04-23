const add = require('./add');
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');

const split = process.argv[2].split(' ');
let x = parseInt(split[0]);
let y = parseInt(split[2]);
let exp = split[1];

if (exp === 'plus') {
  var answer = add(x, y);
} else if (exp === 'minus') {
  answer = subtract(x, y);
} else if (exp === 'times') {
  answer = multiply(x, y);
} else if (exp === 'over') {
  answer = divide(x, y);
}

console.log(answer)
