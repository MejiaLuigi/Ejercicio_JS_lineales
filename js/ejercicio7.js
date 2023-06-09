const menu = document.getElementById('menu');
const container = document.querySelector('.container');

container.addEventListener('mouseover', () => {
    menu.classList.add('active');
})

container.addEventListener('mouseout', () => {
    menu.classList.remove('active');
})

function total(){
    let nota1= parseFloat(document.getElementById("nota1").value);
    let nota2= parseFloat(document.getElementById("nota2").value);
    let nota3= parseFloat(document.getElementById("nota3").value);

    let total_notas = parseFloat((nota1 + nota2 +nota3)/3);

    document.getElementById("total_notas").innerHTML = "El Promedio Es: " +total_notas;
}