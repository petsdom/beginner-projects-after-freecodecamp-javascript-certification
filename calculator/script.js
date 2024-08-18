const screen = document.getElementById("screen")
let operation;
let step = 0
let firstNum
let secondNum
let numArr = []
let secondNumArr = []
let result = 0
let clear = document.getElementById("clear")

const getNumber = (num) => {
    if (step === 0 || step === 1) {
        numArr.push(num)
        step = 1
        firstNum = Number(numArr.join(''))
        screen.innerText = firstNum
    } else if (step === 2) {
        secondNumArr.push(num)
        secondNum = Number(secondNumArr.join(''))
        screen.innerText = secondNum

    }

}

const getOperation = (op) => {
    step = 2
    operation = op
}

const calResult = () => {
    if (operation === "+") {
        result = firstNum + secondNum
        screen.innerText = result

    }
    if (operation === "-") {
        result = firstNum - secondNum
        screen.innerText = result

    }
    if (operation === "/") {
        result = firstNum / secondNum
        screen.innerText = result

    }
    if (operation === "*") {
        result = firstNum * secondNum
        screen.innerText = result

    }
    if (operation === "%") {
        result = firstNum % secondNum
        screen.innerText = result

    }
}

function clearText(){
    screen.innerText = ""
    result = 0
    firstNum = 0
    secondNum = 0
    step = 0
    numArr = []
    secondNumArr = []
}

clear.addEventListener("click",clearText)



