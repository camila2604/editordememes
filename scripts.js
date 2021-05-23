//boton modo claro / modo oscuro
const prueba = document.getElementById('claro-oscuro');

const toggleMode = () => {
    document.body.classList.toggle("dark");
}
prueba.addEventListener('click', toggleMode); 


// Función mostrar/ocultar barra aside texto/imagen

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


// Función url  
const imagenURL = document.getElementById('url');
const imagenMeme = document.getElementById('imagenID');

function imagenURLMeme() {
    let url = imagenURL.value;
    imagenMeme.style.backgroundImage = `url("${url}")`;
}
imagenURL.addEventListener('change', imagenURLMeme)


// Funcion aplicacion de color de fondo 

let inputColorFondo = document.getElementById('color-fondo');

const colorFondo = () =>{
    
    imagenMeme.style.backgroundColor = inputColorFondo.value;

}
inputColorFondo.addEventListener('input', colorFondo);


// Funcion seleccionar estilo color 

const botonSelect = document.getElementById('color-opciones');

const estilos = () =>{
    imagenMeme.style.backgroundBlendMode = botonSelect.value;
}
botonSelect.addEventListener('input', estilos);

// Funcion filtros

const brillo = document.getElementById('brillo');
const opacidad = document.getElementById('opacidad');
const contraste = document.getElementById('contraste');
const desenfoque = document.getElementById('desenfoque');
const grises = document.getElementById('escalaDeGrises');
const sepia = document.getElementById('sepia');
const hue = document.getElementById('hue');
const saturado = document.getElementById('saturado');
const negativo = document.getElementById('negativo');

const filtros = () => {
    imagenMeme.style.filter=`brightness(${brillo.value}) opacity(${opacidad.value})
    contrast(${contraste.value}%)
    blur(${desenfoque.value}px) 
    grayscale(${grises.value}%)
    sepia(${sepia.value}%)
    hue-rotate(${hue.value}deg)
    saturate(${saturado.value}%) invert(${negativo.value})`
}

brillo.addEventListener('input', filtros);
opacidad.addEventListener('input', filtros);
contraste.addEventListener('input', filtros);
desenfoque.addEventListener('input', filtros);
grises.addEventListener('input', filtros);
sepia.addEventListener('input', filtros);
hue.addEventListener('input', filtros);
saturado.addEventListener('input', filtros);
negativo.addEventListener('input', filtros);

// Filtro boton reset

const botonReset = document.getElementById('botonReset');

const reset = ()=>{
    imagenMeme.style.filter=`none`;
}

botonReset.addEventListener('click', reset);

// Función texto top y bottom

const textoSuperior = document.getElementById('textoSuperior');
const textoInferior = document.getElementById('textoInferior');
const h3Top = document.getElementById('h3-top');
const h3Bottom = document.getElementById('h3-bottom');

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

// Desaparecer y aparecer texto superior o inferior 

const contenedorTopText = document.getElementById('contenedor-top-text');
const contenedorBottomText = document.getElementById('contenedor-bottom-text');
const checkTextoSuperior = document.getElementById('checkSuperior');
const checkTextoInferior = document.getElementById('checkInferior');

const ocultarTextoSuperior = () => {
    contenedorTopText.classList.toggle('oculto');
}
checkTextoSuperior.addEventListener('click', ocultarTextoSuperior);

const ocultarTextoInferior = () => {
    contenedorBottomText.classList.toggle('oculto');
}
checkTextoInferior.addEventListener('click', ocultarTextoInferior);

// Cambiar fuente - Font Family   FALTA EL COMIC 

const selectFontFamily = document.getElementById('font-family');

const cambiarTextFontFamily = () => {
   // const selectFont = selectFontFamily.value;
    h3Top.style.fontFamily = selectFontFamily.value;
    h3Bottom.style.fontFamily = selectFontFamily.value;


   // h3Top.style.fontFamily = `(${h3Top}.value)`; `${"selectFont"}`;
}
selectFontFamily.addEventListener('change', cambiarTextFontFamily);

// Cambiar tamaño NO FUNCIONA

const inputNumberID = document.getElementById('inputNumber')

const cambiarInputNumber = () => {

    h3Top.style.fontSize = inputNumberID.value;
    h3Bottom.style.fontSize = inputNumberID.value;
}

inputNumberID.addEventListener('change', cambiarInputNumber);


// Cambiar alineación NO FUNCIONA

const alignLeft = document.getElementById('align-left')
const alignCenter = document.getElementById('align-center')
const alignRight = document.getElementById('align-right')

const changeToAlignLeft = () => {
    h3Top.style.textAlign = `alignLeft`;
    h3Bottom.style.textAlign = alignLeft;
}

alignLeft.addEventListener('click', changeToAlignLeft)


// Color letras NO FUNCIONA

// let colorTextoMain = document.getElementsByClassName('texto-main');

// const colorTexto = () =>{
//     colorTextoMain.style.color = colorTextoMain.value;
// }
// colorTextoMain.addEventListener('input', colorTexto);


// Color fondo letras
let inputLetraFondo = document.getElementById('letra-fondo');

const letraFondo = () =>{
    contenedorTopText.style.backgroundColor = inputLetraFondo.value;
    contenedorBottomText.style.backgroundColor = inputLetraFondo.value;
}
inputLetraFondo.addEventListener('input', letraFondo);


// Transparent FUNCIONA PERO BORRA TAMBIEN EL TEXTO

// let checkTransparente =  document.getElementById('check-tansparente');

// const fondoTransparente = () => {
//     contenedorTopText.classList.toggle('oculto');
//     contenedorBottomText.classList.toggle('oculto');
// }
// checkTransparente.addEventListener('click', fondoTransparente);




// Boton descarga

const download = document.getElementById('descargar');

download.addEventListener("click",() =>{
    domtoimage.toBlob(imagenMeme)
        .then(function (blob) {
            window.saveAs(blob, 'meme.png');
        });
});

