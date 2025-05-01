/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/
let equationResult = 0
let equationString = '0'
/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button')
const calculator = document.querySelector('#calculator')
const display = document.querySelector('.display')
/*----------------------------- Event Listeners -----------------------------*/
// buttons.forEach(button =>{
//     button.addEventListener('click',(event) =>{
//         console.log(event.target.innerText)
//     })
// })
display.innerText = '0'
const handleEquation = (event) => {
    if (event.target.classList.contains('number') || event.target.classList.contains('operator')) {
        if (checkValid(equationString)) {
            if (display.textContent === '0') {
                equationString = event.target.innerText
                // console.log(equationElement)
                display.textContent = equationString
            } else {
                equationString = equationString + event.target.innerText
                // console.log(equationElement)
                display.textContent = equationString
            }
        } else {
            alert('Invalid equation')
            restEquation()
        }
    }
    if (checkValid(equationString)) {
        if (event.target.innerText === '=') {
            // console.log(display.textContent);
            equationResult = eval(display.textContent)
            display.innerText = equationResult
            equationString = equationResult
        }
        if (event.target.innerText === 'C') {
            restEquation()
        }
    } else {
        alert('Invalid equation')
        restEquation()
    }

}
calculator.addEventListener('click', handleEquation)
/*-------------------------------- Functions --------------------------------*/
const restEquation = () => {
    equationString = '0'
    display.innerText = '0'
}
const checkValid = (equation) => {
    const operators = ['*', '/', '+', '-'];
    for (let i = 0; i < equation.length - 1; i++) {
        if (operators.includes(equation[i]) && operators.includes(equation[i + 1])) {
            // console.log('false');
            return false;
        }
    }
    // console.log(true);
    return true;
};
// checkValid('9+9')