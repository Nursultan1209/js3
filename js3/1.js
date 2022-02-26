let number1 = prompt("Введите первое число");
let number2 = prompt("Введите второе число");
function argMin(number1, number2) {
    if (number1 > number2) return number2;
    else return number1;
}
alert(argMin(number1, number2));