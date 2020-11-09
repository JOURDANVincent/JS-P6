let firstNumber = 0;
while (firstNumber < 2 | firstNumber > 10 | firstNumber == null) {
    firstNumber = Number(window.prompt('firstNumber : Entre 0 et 10 ..'));
    while (firstNumber == 1 | firstNumber == null) {
        firstNumber = Number(window.prompt('finalement entre 2 et 10 sinon ca plante !!!'));
    }
} 
let secondNumber = 0;
while (secondNumber < 1 | secondNumber > 10 | secondNumber == null) {
    secondNumber = Number(window.prompt('secondNumber : Entre  1 et 10 on t\'a dit !!'));
} 

let res = 0;
let x = 250;

while (res < 250) {
    res = (firstNumber * secondNumber);
    //console.log(res);
    if (res < 250) {
        document.write('<div>' + res + '</div>');
    };
    secondNumber = res;
};

