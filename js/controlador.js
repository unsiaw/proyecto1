// Constantes
const path_chasis = "img/chasis/";
const path_tazas = "img/tazas/";

var num = 0;
var auto = {};

var jsonChasis;
var jsonTazas;

function iniciarAuto() {
    num = -1;
    auto.color = obtenerColorVista();
    nextChasis();
}

function cambiarColor(color) {
    auto.color = color;
    cambiarColorVista(color);
    pintarAuto(auto);
}

function nextChasis() {
    num = mod((num+1),jsonChasis.length);
    updateChasis();
    pintarAuto(auto);
}

function prevChasis() {
    num = mod((num-1),jsonChasis.length);
    updateChasis();
    pintarAuto(auto);
}

function cargarRandom() {
    num = numeroRandom(jsonChasis.length);
    var color = auto.color = colorRandom();
    cambiarColorVista(color);
    updateChasis();
    pintarAuto(auto);
}

/* Actualiza el objeto auto con el pathfondo y pathchasis según el num actual */
function updateChasis() {
    auto.pathfondo = path_chasis + jsonChasis[num].fondo;
    auto.pathchasis = path_chasis + jsonChasis[num].chasis;
}

/* Actualiza el objeto del auto con el pathtaza según el num actual */
function updateTazas() {
    auto.pathtazas = path_tazas + jsonTazas[num].taza;
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

