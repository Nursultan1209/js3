let number1 = prompt("Введите первое число");
let number2 = prompt("Введите второе число");
function argMax(number1, number2) {
    if (number1 > number2) return number1;
    else return number2;
}
alert(argMax(number1, number2));