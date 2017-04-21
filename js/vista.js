
var canvas;

function pintarAuto(auto) {
    canvas.clear(); // limpio lo que haya en el canvas
    fabric.Image.fromURL(auto.pathfondo, function (img) {
        img.selectable = false;
        img.crossOrigin = 'anonymous';
        canvas.add(img);
        auto.fondo = img;
        fabric.Image.fromURL(auto.pathchasis, function (img) {
            img.selectable = false;
            img.crossOrigin = 'anonymous';
            canvas.add(img);
            auto.chasis = img;

            img.filters = []; // reseteo los filtros (para no sobreescribir uno arriba del otro)
            img.applyFilters();

            img.filters.push(new fabric.Image.filters.Tint({
                color: auto.color,
                opacity: 0.6
            }));
            img.applyFilters(canvas.renderAll.bind(canvas));
            canvas.renderAll();
        });
    });
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


function cambiarColorVista(color) {
    document.getElementById('blend-color').value = color;
    document.getElementById('blend-color').jscolor.fromString(color);
}

function obtenerColorVista() {
    return document.getElementById('blend-color').value;
}