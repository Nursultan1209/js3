let estimation = prompt("Введите оценку(2-5)");
function estimationPH(estimation) {
    if (estimation == 5) return "Отличник(ца)";
    else if (estimation == 4) return "Ударник(ца)";
    else if (estimation == 3) return "Троечник(ца)";
    else if (estimation == 2) return "Двоечник(ца)";
    else return "Введите оценку между 2 и 5";
}
alert(estimationPH(estimation));