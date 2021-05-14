const prueba = document.getElementById('modoClaro');

const toggleMode = () => {
    document.body.classList.toggle("dark")
}

prueba.addEventListener('click', toggleMode); 