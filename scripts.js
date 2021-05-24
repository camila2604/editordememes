// ----------Modo claro / modo oscuro----------
const prueba = document.getElementById('claro-oscuro');

const toggleMode = () => {
    document.body.classList.toggle("dark");
}
prueba.addEventListener('click', toggleMode); 

// ----------Aside imagen/texto----------

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


// ----------Función url---------- 

const imagenURL = document.getElementById('url');
const imagenMeme = document.getElementById('imagenID');

function imagenURLMeme() {
    let url = imagenURL.value;
    imagenMeme.style.backgroundImage = `url("${url}")`;
}
imagenURL.addEventListener('change', imagenURLMeme)


// ---------Color de fondo del meme---------- 

let inputColorFondo = document.getElementById('color-fondo');

const colorFondo = () =>{
    
    imagenMeme.style.backgroundColor = inputColorFondo.value;

}
inputColorFondo.addEventListener('input', colorFondo);


// ----------Estilo del color----------

const botonSelect = document.getElementById('color-opciones');

const estilos = () =>{
    imagenMeme.style.backgroundBlendMode = botonSelect.value;
}
botonSelect.addEventListener('input', estilos);

// ----------Funcion filtros----------

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

// ----------Filtro boton reset----------

const botonReset = document.getElementById('botonReset');

const reset = ()=>{
    imagenMeme.style.filter=`none`;
}

botonReset.addEventListener('click', reset);

// ----------Función texto top y bottom----------

const textoSuperior = document.getElementById('textoSuperior');
const textoInferior = document.getElementById('textoInferior');
// const h3Top = document.getElementById('h3-top');
// const h3Bottom = document.getElementById('h3-bottom');

const topText = () =>{
    const textoTop = textoSuperior.value;
    contenedorTopText.innerHTML=textoTop;
}
textoSuperior.addEventListener('keyup', topText);

const bottomText = () =>{
    const textoBottom = textoInferior.value;
    contenedorBottomText.innerHTML=textoBottom;
}
textoInferior.addEventListener('keyup', bottomText);

// ----------Desaparecer y aparecer texto superior o inferior----------

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

// ----------Font Family----------
// CAMBIE DOS ESTILOS DE LETRAS POR OTROS DOS QUE 
// ESTAN GUARDADOS PARA NO TENER QUE IMPORTAR. 
// SI QUIEREN IMPORTAR HAY QUE MODIFICARLOS

const selectFontFamily = document.getElementById('font-family');

const cambiarTextFontFamily = () => {
    contenedorTopText.style.fontFamily = selectFontFamily.value;
    contenedorBottomText.style.fontFamily = selectFontFamily.value;
}
selectFontFamily.addEventListener('change', cambiarTextFontFamily);

// ------Tamaño de fuente--------- 
//NO TIENE QUE SALIR DE LOS CONTENEDORES, NI DE EL MEME

const inputTamanioLetra = document.getElementById('inputNumber');

const cambiarTamanioFuente = () => {
    contenedorTopText.style.fontSize = `${(inputTamanioLetra.value)}px`;
    contenedorBottomText.style.fontSize = `${(inputTamanioLetra.value)}px`;
    //h3Top.style.fontSize = `${(inputTamanioLetra.value)}px`;
    //h3Bottom.style.fontSize = `${(inputTamanioLetra.value)}px`;
    
}

inputTamanioLetra.addEventListener('click', cambiarTamanioFuente);

// -----------------Espaciado ----------------

const inputEspaciado = document.getElementById('espaciado');

const cambiarEspaciado = () => {
    contenedorTopText.style.padding = `${(inputEspaciado.value)}px`;
    contenedorBottomText.style.padding = `${(inputEspaciado.value)}px`;
}

inputEspaciado.addEventListener('click', cambiarEspaciado);

//---------------------Interlineado-------------




// ----------Alineación----------

const btnAlignLeft = document.getElementById('align-left');
const btnAlignCenter = document.getElementById('align-center');
const btnAlignRight = document.getElementById('align-right');

const alignTextLeft = () => {
    contenedorTopText.style.justifyContent=`flex-start`;
    contenedorBottomText.style.justifyContent=`flex-start`;
}

btnAlignLeft.addEventListener('click', alignTextLeft);

const alignTextCenter = () => {
    contenedorTopText.style.justifyContent=`center`;
    contenedorBottomText.style.justifyContent=`center`;
}

btnAlignCenter.addEventListener('click', alignTextCenter);

const alignTextRight = () => {
    contenedorTopText.style.justifyContent=`flex-end`;
    contenedorBottomText.style.justifyContent=`flex-end`;
}

btnAlignRight.addEventListener('click', alignTextRight);

// ----------Color letras----------

const inputColorLetra = document.getElementById('color-letra');

const letraColor = () => {
    contenedorTopText.style.color= inputColorLetra.value;
    contenedorBottomText.style.color= inputColorLetra.value;
    //h3Top.style.color= inputColorLetra.value;
    //h3Bottom.style.color= inputColorLetra.value;
}
inputColorLetra.addEventListener('input', letraColor);


// ----------Color fondo letras----------
const inputLetraFondo = document.getElementById('letra-fondo');

const letraFondo = () =>{
    contenedorTopText.style.backgroundColor = inputLetraFondo.value;
    contenedorBottomText.style.backgroundColor = inputLetraFondo.value;
    // h3Top.style.backgroundColor = inputLetraFondo.value;
    // h3Bottom.style.backgroundColor = inputLetraFondo.value;
}
inputLetraFondo.addEventListener('input', letraFondo);


// ----------Transparent----------
//SACAS LOS ESTILOS, FUNCIONA PERO SI TOCAS LOS COLORES DEL FONDO 
//APARECE EL FONDO Y NO SE PUEDE SACAR SIN REFRESCAR LA PAGINA
//ES MEDIO LOCO LO QUE PASA JAJAJA 

const checkTransparente = document.getElementById('check-tansparente');


const fondoTransparente = () => {
    contenedorTopText.classList.toggle('top-text');
    contenedorBottomText.classList.toggle('bottom-text');
}
checkTransparente.addEventListener('click', fondoTransparente)


//ESTA ES OTRA OPCION QUE FUNCIONA PERO SACA LOS ESTILOS
// checkTransparente.addEventListener('change', () =>{
//     contenedorTopText.classList.toggle('top-text');
//     contenedorBottomText.classList.toggle('bottom-text');
// })







// ----------Boton descarga----------

const download = document.getElementById('descargar');

download.addEventListener("click",() =>{
    domtoimage.toBlob(imagenMeme)
        .then(function (blob) {
            window.saveAs(blob, 'meme.png');
        });
});