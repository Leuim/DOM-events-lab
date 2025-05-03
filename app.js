/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/
let firstNumStr = ''
let firstNum = 0
let secondNum = 0
let operator = null
let total = null
/*------------------------ Cached Element References ------------------------*/
const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')

const display = document.querySelector('.display')
const equalsButton = document.querySelector('.equals')
display.innerText = 0


/*-------------------------------- Functions --------------------------------*/
operatorButtons.forEach((operatorButton, i) => {
    operatorButton.addEventListener('click', (event) => {
        const opText = operatorButton.innerText
        if (opText === '*') {
            operator = '*'
            secondNum = firstNum
            firstNum = 0
            firstNumStr = ''
            handleDisplay()
            console.log('We are mulitplying')
        } else if (opText === '/') {
            operator = '/'
            secondNum = firstNum
            firstNum = 0
            firstNumStr = ''
            handleDisplay()
            console.log('We are dividing')
        } else if (opText === '-') {
            operator = '-'
            secondNum = firstNum
            firstNum = 0
            firstNumStr = ''
            handleDisplay()
            console.log('We are subtracting')
        } else if (opText === '+') {
            operator = '+'
            secondNum = firstNum
            firstNum = 0
            firstNumStr = ''
            handleDisplay()
            console.log('We are adding')
        } else if (opText === 'C') {
            console.log('clear')
            handleClear()
        }
    }
    )
})

numberButtons.forEach((number, i) => {
    number.addEventListener('click', (event) => {
        firstNumStr = firstNumStr + event.target.innerText
        firstNum = Number(firstNumStr)
        // console.log(firstNum);
        handleDisplay()
    })
})

const add = () => {
    return firstNum + secondNum
}
const subtract = () => {
    return secondNum - firstNum
}
const divide = () => {
    return secondNum / firstNum
}
const multiply = () => {
    return firstNum * secondNum
}
const handleClear = () => {
    firstNum = 0
    secondNum = 0
    firstNumStr = ''
    operator = null
    handleDisplay()
}
const handleDisplay = () => {
    display.innerText = firstNum
}
const handleCalculate = () => {
    if (operator === '+') {
        total = add()
    } else if (operator === '-') {
        total = subtract()
    } else if (operator === '*') {
        total = multiply()
    } else if (operator === '/') {
        total = divide()
    }

    firstNum = total
    firstNumStr = total.toString()
    secondNum = 0
    operator = null
    display.innerText = total
}

/*----------------------------- Event Listeners -----------------------------*/
equalsButton.addEventListener('click', handleCalculate)
// operatorButtons.addEventListener('click', handleOperator)

// numberButtons.addEventListener('click', handleNumber)
