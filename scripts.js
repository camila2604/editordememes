const prueba = document.getElementById('modoClaro');
//const nombreBoton = document.getElementsByClassName('nombre-boton');

const toggleMode = () => {
    document.body.classList.toggle("dark");
    // if (document.body.classList == 'dark') {
    //     nombreBoton.innerText = 'Modo claro';
    // }else {
    //     nombreBoton.innerText = 'Modo oscuro';
    // }
}
prueba.addEventListener('click', toggleMode); 

// document.body.classList = 'modoClaro'
// document.prueba = prueba.innerText('modo oscuro')
// prueba.innerText = 'modo oscuro'

// const cambiarModoOscuro = () => {
//     document.body.classList.remove('light-theme')
//     document.body.classList.add('dark-theme')
//   }
//   const cambiarModoClaro = () => {
//     document.body.classList.remove('dark-theme')
//     document.body.classList.add('light-theme')
//   }

const imagenURL = document.getElementById('url');
const imagenMeme = document.getElementById('imagenID');

function imagenURLMeme() {
    let url = imagenURL.value;
    imagenMeme.style.backgroundImage = 'url';
}
imagenURL.addEventListener('change', imagenURLMeme);