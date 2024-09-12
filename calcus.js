let firstNumber = prompt('Enter first number')
firstNumber = parseFloat(firstNumber)

let operator = prompt('Enter operator')

let secondNumber = prompt('Enter second Number')
secondNumber = parseFloat(secondNumber)



let result
if (operator == '+'){
    result = firstNumber + secondNumber;
    alert(result);
} else if (operator == "-"){
    result = firstNumber - secondNumber;
    alert(result);
}else if (operator == '*'){
    result = firstNumber * secondNumber;
    alert(result)
}else if (operator == '/'){
    result = firstNumber / secondNumber;
    alert(result)
}else if (operator == '%'){
    result = firstNumber % secondNumber
    alert(result)
}
