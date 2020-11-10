let firstNumber = 0;
if (firstNumber < 1 | firstNumber > 10) {
    firstNumber = Number(window.prompt('firstNumber : Entre 0 et 10 ...'))
    while (firstNumber < 1 | firstNumber > 10) {
        if (firstNumber == 0) {
            firstNumber = Number(window.prompt('firstNumber : Fais un effort ...'));
        } else {
            firstNumber = Number(window.prompt('firstNumber : Entre 0 et 10 ...'))
        }
    }
} 

let secondNumber = 0;
if (secondNumber <= 1 | secondNumber > 10) {
    secondNumber = Number(window.prompt('secondNumber : Entre 0 et 10')); 
    while (secondNumber <= 1 | secondNumber > 10) {
        if (secondNumber == 0) {
            secondNumber = Number(window.prompt('secondNumber : pas 0 ...'));
        } else if (secondNumber == 1) {
            secondNumber = Number(window.prompt('secondNumber : Divisé par 1 on y arrivera pas mec ...'));
        } else {
            secondNumber = Number(window.prompt('secondNumber : Entre 0 et 10'));
        }
    }
} 

let res = 2;
while (res > 1) {
    res = (firstNumber / secondNumber);
    console.log(res);
    if (res > 1) {
        document.write('<div>' + res + '</div>');
    }
    
    firstNumber = res;
};

