let firstNumber = 0;
while (firstNumber < 1 | firstNumber > 10 | firstNumber == null) {
    firstNumber = Number(window.prompt('firstNumber : Entre 0 et 10 ...'))
    if (firstNumber == null) {
        firstNumber = Number(window.prompt('firstNumber : Fais un effort ...'));
    } 
} 
let secondNumber = 0;
while (secondNumber <= 1 | secondNumber > 10 | secondNumber == null) {
    if (secondNumber == 0) {
        secondNumber = Number(window.prompt('secondNumber : pas 0 ...'));
    } else if (secondNumber == null) {
        secondNumber = Number(window.prompt('secondNumber : Fais un effort ...'));
    } else if (secondNumber == 1) {
        secondNumber = Number(window.prompt('secondNumber : Divisé par 1 on y arrivera pas mec ...'));
    } else {
        secondNumber = Number(window.prompt('secondNumber : Entre 0 et 10')); 
    }
} 

let res = 2;


while (res > 1) {
    res = (firstNumber / secondNumber);
    console.log(res);
    document.write('<div>' + res + '</div>');
    firstNumber = res;
};

