
var num_chasis;
var num_taza;
var auto = {};

var jsonChasis;
var jsonTazas;

function iniciarAuto() {
    num_chasis = 0;
    num_taza = 0;
    auto.chasis = jsonChasis[num_chasis];
    auto.tazas = jsonTazas[num_taza];
    auto.color = obtenerColorVista();
    pintarAuto(auto);
}

function cambiarColor(color) {
    auto.color = color;
    cambiarColorVista(color);
    pintarAuto(auto);
}

function nextChasis() {
    num_chasis = mod((num_chasis+1),jsonChasis.length);
    auto.chasis = jsonChasis[num_chasis];
    pintarAuto(auto);
}

function prevChasis() {
    num_chasis = mod((num_chasis-1),jsonChasis.length);
    auto.chasis = jsonChasis[num_chasis];
    pintarAuto(auto);
}


function nextTaza() {
    num_taza = mod((num_taza+1),jsonTazas.length);
    auto.tazas = jsonTazas[num_taza];
    pintarAuto(auto);
}

function prevTaza() {
    num_taza = mod((num_taza-1),jsonTazas.length);
    auto.tazas = jsonTazas[num_taza];
    pintarAuto(auto);
}

function cargarRandom() {
    num_chasis = numeroRandom(jsonChasis.length);
    num_taza = numeroRandom(jsonTazas.length);
    var color = auto.color = colorRandom();
    cambiarColorVista(color);
    auto.chasis = jsonChasis[num_chasis];
    auto.tazas = jsonTazas[num_taza];
    pintarAuto(auto);
}

/* Functionalidad para el botón de Descargar Imagen */
function guardarImagen() {
    var a = document.createElement('a');
    a.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    a.download = "auto.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

