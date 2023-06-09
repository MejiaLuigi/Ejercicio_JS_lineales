const menu = document.getElementById('menu');
const container = document.querySelector('.container');

container.addEventListener('mouseover', () => {
    menu.classList.add('active');
})

container.addEventListener('mouseout', () => {
    menu.classList.remove('active');
})

function suma() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let numr = num1+num2;

    document.getElementById("resultado").innerHTML = "Resultado Suma " +numr;
}
function resta() {
    let num3 = parseFloat(document.getElementById("num1").value);
    let num4 = parseFloat(document.getElementById("num2").value);

    let numr = num3-num4;

    document.getElementById("resultado").innerHTML = "Resultado Resta " +numr;
}
function multiplicacion() {
    let num5 = parseFloat(document.getElementById("num1").value);
    let num6 = parseFloat(document.getElementById("num2").value);

    let numr = num5*num6;

    document.getElementById("resultado").innerHTML = "Resultado Multiplicación " +numr;
}
function division() {
    let num7 = parseFloat(document.getElementById("num1").value);
    let num8 = parseFloat(document.getElementById("num2").value);

    let numr = num7/num8;

    document.getElementById("resultado").innerHTML = "Resultado División " +numr;
}