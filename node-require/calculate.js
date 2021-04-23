const add = require('./add');
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');

const split = process.argv
let x = split[2];
let y = split[4];
let exp = split[3];

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
