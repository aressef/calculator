// query selectors
const screen = document.querySelector('.screen');
const result = document.querySelector('.result');
const equation = document.querySelector('.equation');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const subtract = document.querySelector('.add');
const add = document.querySelector('.subtract');
const equals = document.querySelector('.equals');
const decimal = document.querySelector('.decimal');

// return number clicked
function displayToScreen(e) {
  // const buttonToNum = parseInt(e.target.textContent, 10);

  // add button clicked to equations textContent
  if (e.target.classList.contains('num')) {
    equation.textContent += e.target.textContent;
  } else if (e.target.classList.contains('operator') && equation.textContent !== '') {
    const checkForSpace = equation.textContent.split('');
    const lastIndex = checkForSpace.length - 1;

    if (checkForSpace[lastIndex] !== ' ') {
      equation.textContent += ` ${e.target.textContent} `;
    }
  }

  // make last button clicked results textContent
  // if button clicked is number or operator
  if (e.target.classList.contains('num' || 'operator')) {
    result.textContent = e.target.textContent;
  }
}

// clear screen
function clearAll(e) {
  if (e.target.classList.contains('all_clear')) {
    equation.textContent = '';
  }
}

// clear last entry
function clearLastEntry(e) {
  if (e.target.classList.contains('clear_entry')) {
    const screenInput = Array.from(equation.textContent);
    const indexOfLastItem = screenInput.length - 1;
    equation.textContent = screenInput.splice(0, indexOfLastItem).join('');
  }
}

function returnAnswer(e) {
  if (e.target.classList.contains('equals')) {
    result.textContent = 'lol';
  }
}

document.addEventListener('click', displayToScreen);
document.addEventListener('click', clearAll);
document.addEventListener('click', clearLastEntry);
document.addEventListener('click', returnAnswer);

