// query selectors
const result = document.querySelector('.result');
const equation = document.querySelector('.equation');

// return number clicked

const view = {
  displayEquation: (e) => {
    const errorMessage = 'Error: Limit Met';
    // add button clicked to equations textContent
    if (equation.textContent === errorMessage) {
      equation.textContent = '';
    }

    if (equation.textContent.length < 25) {
      if (e.target.classList.contains('num')) {
        equation.textContent += e.target.textContent;
      } else if (e.target.classList.contains('operator') && equation.textContent !== '') {
        const checkForSpace = equation.textContent.split('');
        const lastIndex = checkForSpace.length - 1;

        if (checkForSpace[lastIndex] !== ' ') {
          equation.textContent += `${e.target.textContent}`;
        }
      }
      // make last button clicked results textContent
      // if button clicked is number or operator
      if (e.target.classList.contains('num' || 'operator')) {
        result.textContent = e.target.textContent;
      }
    } else {
      equation.textContent = errorMessage;
    }
  },
  clearScreen: (e) => {
    if (e.target.classList.contains('all_clear')) {
      equation.textContent = '';
      result.textContent = 0;
    }
  },
  clearLastEntry: (e) => {
    if (e.target.classList.contains('clear_entry')) {
      const screenInput = Array.from(equation.textContent);
      const indexOfLastItem = screenInput.length - 1;
      equation.textContent = screenInput.splice(0, indexOfLastItem).join('');
    }
  },
  displayAnswer: (e) => {
    if (e.target.classList.contains('equals')) {
      result.textContent = eval(equation.textContent);
    }
  },
};

document.addEventListener('click', view.displayEquation);
document.addEventListener('click', view.clearScreen);
document.addEventListener('click', view.clearLastEntry);
document.addEventListener('click', view.displayAnswer);

