const menu = document.getElementById('menu');
const container = document.querySelector('.container');

container.addEventListener('mouseover', () => {
    menu.classList.add('active');
})

container.addEventListener('mouseout', () => {
    menu.classList.remove('active');
})

function total() {
    let valor = parseFloat(document.getElementById("precio").value);
    let iva = "8%"
    let total1 = valor * 0.08;
    let total2 = total1 + valor

    document.getElementById("sin_iva").innerHTML = "Precio sin IVA " +valor;
    document.getElementById("iva").innerHTML = "El IVA es " +iva;
    document.getElementById("valoragregado").innerHTML = "El Agregado es " +total1;
    document.getElementById("total_pagar").innerHTML = "El Total a Pagar es " +total2;
    

}
