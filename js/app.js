
const equations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

// query selectors
const allClear = document.querySelector('.all_clear');
const clearEntry = document.querySelector('.clear_entry');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const subtract = document.querySelector('.add');
const add = document.querySelector('.subtract');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');
const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');

// event listeners
allClear.addEventListener('click', () => console.log('Clear Log'));
clearEntry.addEventListener('click', () => console.log('Clear Last Entry'));
divide.addEventListener('click', () => console.log('/'));
multiply.addEventListener('click', () => console.log('*'));
subtract.addEventListener('click', () => console.log('-'));
add.addEventListener('click', () => console.log('+'));
equals.addEventListener('click', () => console.log('='));
decimal.addEventListener('click', () => console.log('.'));
zero.addEventListener('click', () => console.log(0));
one.addEventListener('click', () => console.log(1));
two.addEventListener('click', () => console.log(2));
three.addEventListener('click', () => console.log(3));
four.addEventListener('click', () => console.log(4));
five.addEventListener('click', () => console.log(5));
six.addEventListener('click', () => console.log(6));
seven.addEventListener('click', () => console.log(7));
eight.addEventListener('click', () => console.log(8));
nine.addEventListener('click', () => console.log(9));

