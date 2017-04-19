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

function addToCanvas(auto, callback = null) {
    fabric.Image.fromURL(auto.pathfondo, function (img) {
        img.selectable = false;
        img.crossOrigin = 'anonymous';
        canvas.add(img);
        autito["fondo"] = img;
        fabric.Image.fromURL(auto.pathchasis, function (img) {
            img.selectable = false;
            img.crossOrigin = 'anonymous';
            canvas.add(img);
            autito["chasis"] = img;
            if (callback !== null) {
                callback(img);
            }
        });
    });
}

function nextChasis() {
    num = (num + 1) % imagenes.length;
    autito.pathfondo = path_chasis + imagenes[num];
    autito.pathchasis = path_chasis + aux[num];
    canvas.clear(); // limpio lo que haya en el canvas
    addToCanvas(autito,cambiarColor);
}


function prevChasis() {
    num = mod((num-1),imagenes.length);
    autito.pathfondo = path_chasis + imagenes[num];
    autito.pathchasis = path_chasis + aux[num];
    canvas.clear(); // limpio lo que haya en el canvas
    addToCanvas(autito,cambiarColor);
}


function guardarImagen() {
    var a = document.createElement('a');
    a.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    a.download = "auto.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}


function cargarRandom() {
    num = numeroRandom(imagenes.length);
    var color = document.getElementById('blend-color').value = colorRandom();
    autito.pathfondo = path_chasis + imagenes[num];
    autito.pathchasis = path_chasis + aux[num];
    canvas.clear(); // limpio lo que haya en el canvas
    addToCanvas(autito,cambiarColor);
    document.getElementById('blend-color').jscolor.fromString(color);
}


/* Themes propios y guardando el theme elegido */
function cargarTheme() {
    var themeElegido = localStorage.getItem("theme");
    if ((themeElegido === undefined) || (themeElegido === null)) {
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


function cambiarColor(obj = autito['chasis']) {
    obj.filters = []; // reseteo los filtros (para no sobreescribir uno arriba del otro)
    obj.applyFilters();

    obj.filters.push(new fabric.Image.filters.Tint({
        color: document.getElementById('blend-color').value,
        opacity: 0.6
    }));
    obj.applyFilters(canvas.renderAll.bind(canvas));
    canvas.renderAll();
}
