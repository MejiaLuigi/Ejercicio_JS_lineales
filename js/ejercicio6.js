const menu = document.getElementById('menu');
const container = document.querySelector('.container');

container.addEventListener('mouseover', () => {
    menu.classList.add('active');
})

container.addEventListener('mouseout', () => {
    menu.classList.remove('active');
})

function total() {
    let hombre = parseFloat(document.getElementById("hombre").value);
    let mujer = parseFloat(document.getElementById("mujer").value);
    let total_alumnos = hombre + mujer;
    let porcentaje_hombre = parseInt((hombre/total_alumnos)*100);
    let porcentaje_mujer = parseInt( (mujer/total_alumnos)*100);

    document.getElementById("total_alumnos").innerHTML = "Total de Alumnos: " +total_alumnos;
    document.getElementById("totalalumnos_hombre").innerHTML = "Total de Alumnos Hombres: " +porcentaje_hombre +"%";
    document.getElementById("totalalumnos_mujer").innerHTML = "Total de Alumnos Mujer: " +porcentaje_mujer +"%";
    
    

}