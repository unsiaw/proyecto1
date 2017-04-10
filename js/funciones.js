/**
 * Created by ricky on 9/4/2017.
 */
const path_chasis = "img/chasis/";
const path_tazas = "img/tazas/";

   var imagenes = [ "auto1.png", "car08.png", "car09.png",  "car010.png", "car011.png",  "car012.png", "car013.png",  "car014.png"];
   var num = 0;

function nextChasis(){

    var canvas = document.getElementById('imagenAuto');
    var context = canvas.getContext('2d');
    img = new Image();
    num++;
        if (num >= imagenes.lenght){
            num = 0;
        }
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
    num--;
        if (num < imagenes.lenght){
            num = imagenes.lenght - 1;
        }
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

    var imagenes = [ "auto1.png", "car08.png", "car09.png",  "car010.png"];

    img = new Image();
    img.src = path_chasis + imagenes[numeroRandom(imagenes.length)];
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);
    }
    console.log("Estoy cargando la imagen random");
    console.log(img.src);
}

function cambiarColor() {

    var canvas = new fabric.Canvas('imagenAuto');

    fabric.Image.fromURL(path_chasis + imagenes[num], function(img) {
        img.filters.push(new fabric.Image.filters.Blend({
            color: document.getElementById('blend-color').value,
            mode: 'multiply'
        }));
        img.applyFilters(canvas.renderAll.bind(canvas));
        img.selectable = false;
        canvas.add(img);

        console.log("Estoy cambiando el color");
    });
}

/* Crea un numero random entre 0 y un limite dado */
function numeroRandom(limite) {
    return Math.floor((Math.random() * limite));
}

$().ready(function() {
    cargarRandom();
});