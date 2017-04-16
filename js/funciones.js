/**
 * Created by ricky on 9/4/2017.
 */
const path_chasis = "img/chasis/";
const path_tazas = "img/tazas/";

var imagenes = [ "car01.png", "car02.png", "car03.png",  "car04.png", "car05.png",  "car06.png", "car07.png",  "car08.png"];
var num = 0;

var autito = {};

var canvas;

function nextChasis(){

    var canvas = document.getElementById('imagenAuto');
    var context = canvas.getContext('2d');
    img = new Image();
    num = (num+1) % imagenes.length;
    img.src = path_chasis + imagenes[num];
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);
    }
    console.log("Estoy cargando la imagen siguiente");
    console.log(img.src);
}


function prevChasis(){

    var canvas = document.getElementById('imagenAuto');
    var context = canvas.getContext('2d');
    img = new Image();
    (num == 0) ? (num = imagenes.length-1) : (num = (num-1) % imagenes.length);
    img.src = path_chasis + imagenes[num];
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);
    }
    console.log("Estoy cargando la imagen anterior");
    console.log(img.src);
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
    var canvas = document.getElementById('imagenAuto');
    var context = canvas.getContext('2d');

    img = new Image();
    img.src = path_chasis + imagenes[numeroRandom(imagenes.length)];
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);
    };
    console.log("Estoy cargando la imagen random");
    console.log(img.src);
}

/* Crea un numero random entre 0 y un limite dado */
function numeroRandom(limite) {
    return Math.floor((Math.random() * limite));
}

$().ready(function() {
    canvas = new fabric.Canvas('imagenAuto');

    canvas.setWidth(miContenedor.offsetWidth);
    canvas.setHeight(miContenedor.offsetHeight * 1.7);
    canvas.renderAll();

    cargarTheme();
    cargarAuto();
});

/* Themes propios y guardando el theme elegido */
function cargarTheme() {
   var themeElegido = localStorage.getItem("theme");
   if (themeElegido === undefined && themeElegido !== null) {
       themeElegido = "css/bootstrap-theme.min.css";
       localStorage.setItem("theme",themeElegido);
   }
   $("#theme").attr("href", themeElegido);
}

function cambiarTheme(theme) {
    document.getElementById('theme').href = theme;
    localStorage.setItem("theme",theme);
}


/* Pruebas nuevas sobre carga de un auto, ruedas, chasis, etc */
function cargarAuto() {
    fabric.Image.fromURL("img/chasis/car01.png", function(img) {
        img.selectable = false;
        img.crossOrigin = 'anonymous';
        canvas.add(img);
    }, {crossOrigin: ''});
    fabric.Image.fromURL("img/chasis/car01tra.png", function(img) {
        img.selectable = false;
        img.crossOrigin = 'anonymous';
        canvas.add(img);
        autito["chasis"] = img;
    }, {crossOrigin: ''});

    canvas.renderAll();
}


function cambiarColor(){
    var obj = autito["chasis"];
    obj.filters = []; // reseteo los filtros (para no sobreescribir uno arriba del otro)
    obj.applyFilters();

    obj.filters.push(new fabric.Image.filters.Tint({
        color: document.getElementById('blend-color').value,
        opacity: 0.6
    }));
    obj.applyFilters(canvas.renderAll.bind(canvas));
    //canvas.renderAll();
}
