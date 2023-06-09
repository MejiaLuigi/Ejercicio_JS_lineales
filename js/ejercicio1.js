const menu = document.getElementById('menu');
const container = document.querySelector('.container');

container.addEventListener('mouseover', () => {
    menu.classList.add('active');
});

container.addEventListener('mouseout', () => {
    menu.classList.remove('active');
});

function enviar() {
    let salario = parseFloat(document.getElementById("salario").value)
    salud = parseFloat(salario) * parseFloat(0.08);
    pension = salario * 0.1
    salariototal = salario - (pension+salud)


document.getElementById("resultado").innerHTML = "Salario Total: $" +salariototal
}