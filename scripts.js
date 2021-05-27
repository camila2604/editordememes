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
//const imagenMedio = document.getElementById('imagen-medio');

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
    imagenMeme.style.filter=`brightness(${brillo.value}) 
    opacity(${opacidad.value})
    contrast(${contraste.value}%)
    blur(${desenfoque.value}px) 
    grayscale(${grises.value}%)
    sepia(${sepia.value}%)
    hue-rotate(${hue.value}deg)
    saturate(${saturado.value}%) 
    invert(${negativo.value})`
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
const selectFontFamily = document.getElementById('font-family');
const cambiarTextFontFamily = () => {
    contenedorTopText.style.fontFamily = selectFontFamily.value;
    contenedorBottomText.style.fontFamily = selectFontFamily.value;
}
selectFontFamily.addEventListener('change', cambiarTextFontFamily);

// ------Tamaño de fuente--------- 

const inputTamanioLetra = document.getElementById('inputNumber');

const cambiarTamanioFuente = () => {
    contenedorTopText.style.fontSize = `${(inputTamanioLetra.value)}px`;
    contenedorBottomText.style.fontSize = `${(inputTamanioLetra.value)}px`;
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
const selectInterlineado = document.getElementById('interlineado');
const cambiarInterlineado = (event) => {
    const alturaValue = event.target.value;
    switch (alturaValue) {
        case "i0.8":
            contenedorTopText.style.lineHeight= '0.8';
            contenedorBottomText.style.lineHeight= '0.8';
            break;
        case "i1":
            contenedorTopText.style.lineHeight= '1';
            contenedorBottomText.style.lineHeight= '1';
            break;
        case "i1.2":
            contenedorTopText.style.lineHeight= '1.2';
            contenedorBottomText.style.lineHeight= '1.2';
            break;
        case "i1.5":
            contenedorTopText.style.lineHeight= '1.5';
            contenedorBottomText.style.lineHeight= '1.5';
            break;
        case "i2":
            contenedorTopText.style.lineHeight= '2';
            contenedorBottomText.style.lineHeight= '2';
            break;
        case "i2.5":
            contenedorTopText.style.lineHeight= '2.5';
            contenedorBottomText.style.lineHeight= '2.5';
            break;
    }
}
selectInterlineado.addEventListener('change', cambiarInterlineado);
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
}
inputColorLetra.addEventListener('input', letraColor);
// ----------Color fondo letras----------
const inputLetraFondo = document.getElementById('letra-fondo');
const letraFondo = () =>{
    contenedorTopText.style.backgroundColor = inputLetraFondo.value;
    contenedorBottomText.style.backgroundColor = inputLetraFondo.value;
}
inputLetraFondo.addEventListener('input', letraFondo);
// ----------Transparent----------
const checkTransparente = document.getElementById('check-tansparente');
const fondoTransparente = () => {
    if (checkTransparente.checked) {
        contenedorTopText.style.backgroundColor= 'transparent';
        contenedorBottomText.style.backgroundColor= 'transparent';
    }
    else {
        contenedorTopText.style.backgroundColor = 'white';
        contenedorBottomText.style.backgroundColor= 'white';
}
}
checkTransparente.addEventListener('click', fondoTransparente);



//-----------CONTORNO-----------

const btnNinguno = document.getElementById('btnNinguno');
const btnClaro = document.getElementById('btnClaro');
const btnOscuro = document.getElementById('btnOscuro');
// Ninguno
const contornoNinguno = () => {
    contenedorTopText.style.textShadow= 'none';
    contenedorBottomText.style.textShadow= 'none';
}
btnNinguno.addEventListener('click', contornoNinguno);
// Claro
const contornoClaro = () => {
    contenedorTopText.style.textShadow= 'rgb(255 255 255) 2px 2px, rgb(255 255 255) -2px 2px, rgb(255 255 255) 2px -2px, rgb(255 255 255) -2px -2px';
    contenedorBottomText.style.textShadow= 'rgb(255 255 255) 2px 2px, rgb(255 255 255) -2px 2px, rgb(255 255 255) 2px -2px, rgb(255 255 255) -2px -2px';
}
btnClaro.addEventListener('click', contornoClaro);
// Oscuro
const contornoOscuro = () => {
    contenedorTopText.style.textShadow= 'rgb(0 0 0) 2px 2px, rgb(0 0 0) -2px 2px, rgb(0 0 0) 2px -2px, rgb(0 0 0) -2px -2px';
    contenedorBottomText.style.textShadow= 'rgb(0 0 0) 2px 2px, rgb(0 0 0) -2px 2px, rgb(0 0 0) 2px -2px, rgb(0 0 0) -2px -2px';
}
btnOscuro.addEventListener('click', contornoOscuro);



// ----------Boton descarga----------

const download = document.getElementById('descargar');

download.addEventListener("click",() =>{
    domtoimage.toBlob(imagenMeme)
        .then(function (blob) {
            window.saveAs(blob, 'meme.png');
        });
});


//----------Responsive----------
// ASIDE

const botonCerrarAside = document.getElementById("btn-salir");
const aside = document.getElementById("aside-cerrar");

const asideAbierto = () => {
    aside.style = `display:inline`
}

botonImagen.addEventListener('click', asideAbierto);
botonTexto.addEventListener('click', asideAbierto);

const cerrarAside = () => {
    aside.style = `display:none`;
}

botonCerrarAside.addEventListener('click', cerrarAside );