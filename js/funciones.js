/**
 * Created by ricky on 9/4/2017.
 */
const path_chasis = "img/chasis/";
const path_tazas = "img/tazas/";

var imagenes = ["car01.png", "car02.png", "car03.png", "car04.png", "car05.png", "car06.png", "car07.png", "car08.png"];
var aux = ["car01t.png", "car02t.png", "car03t.png", "car04t.png", "car05t.png", "car06t.png", "car07t.png", "car08t.png"];
var num = 0;

var autito = {};

var canvas;

function addToCanvas(path, prop) {
    fabric.Image.fromURL(path, function (img) {
        img.selectable = false;
        img.crossOrigin = 'anonymous';
        canvas.add(img);
        autito[prop] = img;
    }, { crossOrigin: '' });
}

function nextChasis() {
    num = (num + 1) % imagenes.length;
    canvas.clear(); // limpio lo que haya en el canvas
    addToCanvas(path_chasis + imagenes[num],"fondo");
    addToCanvas(path_chasis + aux[num],"chasis");
    cambiarColor();
    canvas.renderAll();
}


function prevChasis() {
    num = mod((num-1),imagenes.length);
    canvas.clear(); // limpio lo que haya en el canvas
    addToCanvas(path_chasis + imagenes[num],"fondo");
    addToCanvas(path_chasis + aux[num],"chasis");
    cambiarColor();
    canvas.renderAll();
}

function cargarImagen() {
    var canvas = document.getElementById('imagenAuto');
    var context = canvas.getContext('2d');

    img = new Image();
    img.src = path_chasis + 'auto1.png';
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);
    }
    console.log("Estoy cargando la imagen");
}


function cargarRandom() {
    num = numeroRandom(imagenes.length);
    canvas.clear(); // limpio lo que haya en el canvas
    addToCanvas(path_chasis + imagenes[num],"fondo");
    addToCanvas(path_chasis + aux[num],"chasis");
    cambiarColor();
    canvas.renderAll();
}

/* Crea un numero random entre 0 y un limite dado */
function numeroRandom(limite) {
    return Math.floor((Math.random() * limite));
}

$().ready(function () {
    canvas = new fabric.Canvas('imagenAuto');

    canvas.setWidth(miContenedor.offsetWidth);
    canvas.setHeight(miContenedor.offsetHeight * 1.7);
    //canvas.renderAll();

    cargarTheme();
    cargarAutoDefault();
});

/* Themes propios y guardando el theme elegido */
function cargarTheme() {
    var themeElegido = localStorage.getItem("theme");
    if (themeElegido === undefined && themeElegido !== null) {
        themeElegido = "css/bootstrap-theme.min.css";
        localStorage.setItem("theme", themeElegido);
    }
    $("#theme").attr("href", themeElegido);
}

function cambiarTheme(theme) {
    document.getElementById('theme').href = theme;
    localStorage.setItem("theme", theme);
}


/* Pruebas nuevas sobre carga de un auto, ruedas, chasis, etc */
function cargarAutoDefault() {
    num = -1; // despues nextChasis se encarga de hacerlo 0.
    nextChasis();
}


function cambiarColor() {
    var obj = autito["chasis"];
    obj.filters = []; // reseteo los filtros (para no sobreescribir uno arriba del otro)
    obj.applyFilters();

    obj.filters.push(new fabric.Image.filters.Tint({
        color: document.getElementById('blend-color').value,
        opacity: 0.6
    }));
    obj.applyFilters(canvas.renderAll.bind(canvas));
}

/* Funcion Modulo, ya que en Javascript el modulo de un negativo no se comporta como el resto */
function mod(n, m) {
    return ((n % m) + m) % m;
}