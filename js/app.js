
const equations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

// query selectors
const screen = document.querySelector('.screen');
const allClear = document.querySelector('.all_clear');
const clearEntry = document.querySelector('.clear_entry');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const subtract = document.querySelector('.add');
const add = document.querySelector('.subtract');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');

// event listeners
divide.addEventListener('click', () => console.log('/'));
multiply.addEventListener('click', () => console.log('*'));
subtract.addEventListener('click', () => console.log('-'));
add.addEventListener('click', () => console.log('+'));
equals.addEventListener('click', () => console.log('='));
decimal.addEventListener('click', () => console.log('.'));

// return number clicked
function buttonClicked(e) {
  // add number clicked to screen
  if (e.target.classList.contains('num')) {
    screen.textContent += e.target.textContent;
  }
}

// clear screen
function clearAll(e) {
  if (e.target.classList.contains('all_clear')) {
    screen.textContent = '';
  }
}

// clear last entry
function clearLastEntry(e) {
  if (e.target.classList.contains('clear_entry')) {
    const screenInput = Array.from(screen.textContent);
    const indexOfLastItem = screenInput.length - 1;
    screen.textContent = screenInput.splice(0, indexOfLastItem).join('');
  }
}

document.addEventListener('click', buttonClicked);
document.addEventListener('click', clearAll);
document.addEventListener('click', clearLastEntry);

