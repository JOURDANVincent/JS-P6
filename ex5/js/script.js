let firstNumber = null;
if (firstNumber < 2 | firstNumber > 10 ) {
    firstNumber = Number(window.prompt('firstNumber : Entre 1 et 10 ..'));
    while (firstNumber < 2 | firstNumber > 10 | firstNumber == 0) {
        if (firstNumber == 0) {
            firstNumber = Number(window.prompt('firstNumber : Fais un effort !!!'));
        } else {
            firstNumber = Number(window.prompt('firstNumber : finalement entre 2 et 10 sinon ca plante !!!'));
        }
    }
} 

let secondNumber = null;
if (secondNumber < 1 | secondNumber > 10 | secondNumber == 0) {
    secondNumber = Number(window.prompt('secondNumber : Entre  1 et 10 ..'));
    while (secondNumber < 1 | secondNumber > 10| secondNumber == 0) {
        if (secondNumber == 0) {
            secondNumber = Number(window.prompt('secondNumber : Fais un effort !!!'));
        } else {
            secondNumber = Number(window.prompt('secondNumber : Entre 1 et 10 sinon ca plante !!!'));
        }   
    }
} 

let res = 0;
while (res < 250) {
    res = (firstNumber * secondNumber);
    //console.log(res);
    if (res < 250) {
        document.write('<div>' + res + '</div>');
    };
    secondNumber = res;
};

