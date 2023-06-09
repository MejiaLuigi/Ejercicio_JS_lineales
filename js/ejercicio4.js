const menu = document.getElementById('menu');
const container = document.querySelector('.container');

container.addEventListener('mouseover', () => {
    menu.classList.add('active');
})

container.addEventListener('mouseout', () => {
    menu.classList.remove('active');
})

function sueldo() {
    let salario = parseFloat(document.getElementById("salario").value);
    let mes = parseFloat(document.getElementById("mes").value);
    let laboral = parseFloat(document.getElementById("laboral").value);
    let vlaboral = parseFloat(document.getElementById("vlaboral").value);
    let extra = parseFloat(document.getElementById("extra").value);
    let vextra = parseFloat(document.getElementById("vextra").value);
    let total_sueldo= parseInt(((laboral*vlaboral)+(extra+vextra))+salario);
    

    document.getElementById("resultado").innerHTML = "El sueldo total es: $" +total_sueldo;
}