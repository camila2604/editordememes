//boton modo claro / modo oscuro
const prueba = document.getElementById('claro-oscuro');

const toggleMode = () => {
    document.body.classList.toggle("dark");
}
prueba.addEventListener('click', toggleMode); 


/* Función mostrar/ocultar barra aside texto/imagen*/

const botonImagen = document.getElementById('botonImagen');
const botonTexto = document.getElementById('botonTexto');
const sectionImage = document.getElementById('sectionImage');
const sectionText = document.getElementById('sectionText');

const functionAsideTexto = () => {
    sectionText.classList.remove('oculto');
    sectionImage.classList.add('oculto');
}
botonTexto.addEventListener('click', functionAsideTexto);

const functionAsideImagen = () => {
    sectionImage.classList.remove('oculto');
    sectionText.classList.add('oculto');
}
botonImagen.addEventListener('click', functionAsideImagen);


/* Función url */ 
const imagenURL = document.getElementById('url');
const imagenMeme = document.getElementById('imagenID');

function imagenURLMeme() {
    let url = imagenURL.value;
    imagenMeme.style.backgroundImage = `url("${url}")`;
}
imagenURL.addEventListener('change', imagenURLMeme)


/* Funcion aplicacion de color de fondo */ 

let inputColorFondo = document.getElementById('color-fondo');

const colorFondo = () =>{
    
    imagenMeme.style.backgroundColor = inputColorFondo.value;

}
inputColorFondo.addEventListener('input', colorFondo);


/* Funcion seleccionar estilo color */

const botonSelect = document.getElementById('color-opciones');

const estilos = () =>{
    imagenMeme.style.backgroundBlendMode = botonSelect.value;
}
botonSelect.addEventListener('input', estilos);

// Función texto top y botom

const textoSuperior = document.getElementById('textoSuperior');
const textoInferior = document.getElementById('textoInferior');
let h3Top = document.getElementById('h3Top');
const h3Bottom = document.getElementById('h3Bottom');

const topText = () =>{
    const textoTop = textoSuperior.value;
    h3Top.innerHTML=textoTop;

}
textoSuperior.addEventListener('keyup', topText);


const bottomText = () =>{
    const textoBottom = textoInferior.value;
    h3Bottom.innerHTML=textoBottom;

}
textoInferior.addEventListener('keyup', bottomText);
