const menu = document.getElementById('menu');
const container = document.querySelector('.container');

container.addEventListener('mouseover', () => {
    menu.classList.add('active');
})

container.addEventListener('mouseout', () => {
    menu.classList.remove('active');
})

function calcula() {
    let b= parseFloat(document.getElementById("b").value);
    let h = parseFloat(document.getElementById("h").value);
    let a = (b*h)/2;

    document.getElementById("resultado").innerHTML = "Su área es: " +a;
}