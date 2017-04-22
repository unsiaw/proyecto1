
var num_chasis;
var num_taza;
var auto = {};

var jsonChasis;
var jsonTazas;

function iniciarAuto() {
    num_chasis = localStorage.getItem("num_chasis");
    if ((num_chasis === undefined) || (num_chasis === null)) {
        num_chasis = 0;
    }
    num_taza = localStorage.getItem("num_taza");
    if ((num_taza === undefined) || (num_taza === null)) {
        num_taza = 0;
    }
    var color = localStorage.getItem("color");
    if ((color === undefined) || (color === null)) {
        auto.color = obtenerColorVista();
    } else {
        auto.color = color;
        cambiarColorVista(color);
    }
    auto.chasis = jsonChasis[num_chasis];
    auto.tazas = jsonTazas[num_taza];
    pintarAuto(auto);
    // Guardo datos en el localStorage
    localStorage.setItem("color",auto.color);
    localStorage.setItem("num_chasis",num_chasis);
    localStorage.setItem("num_taza",num_taza);
}

function cambiarColor(color) {
    auto.color = color;
    cambiarColorVista(color);
    pintarAuto(auto);
    localStorage.setItem("color",color);
}

function nextChasis() {
    num_chasis = mod((num_chasis+1),jsonChasis.length);
    auto.chasis = jsonChasis[num_chasis];
    pintarAuto(auto);
    localStorage.setItem("num_chasis",num_chasis);

}

function prevChasis() {
    num_chasis = mod((num_chasis-1),jsonChasis.length);
    auto.chasis = jsonChasis[num_chasis];
    pintarAuto(auto);
    localStorage.setItem("num_chasis",num_chasis);
}


function nextTaza() {
    num_taza = mod((num_taza+1),jsonTazas.length);
    auto.tazas = jsonTazas[num_taza];
    pintarAuto(auto);
    localStorage.setItem("num_taza",num_taza);
}

function prevTaza() {
    num_taza = mod((num_taza-1),jsonTazas.length);
    auto.tazas = jsonTazas[num_taza];
    pintarAuto(auto);
    localStorage.setItem("num_taza",num_taza);
}

function cargarRandom() {
    num_chasis = numeroRandom(jsonChasis.length);
    num_taza = numeroRandom(jsonTazas.length);
    var color = auto.color = colorRandom();
    cambiarColorVista(color);
    auto.chasis = jsonChasis[num_chasis];
    auto.tazas = jsonTazas[num_taza];
    pintarAuto(auto);
    // Guardo datos en el localStorage
    localStorage.setItem("color",color);
    localStorage.setItem("num_chasis",num_chasis);
    localStorage.setItem("num_taza",num_taza);
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

