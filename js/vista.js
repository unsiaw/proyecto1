
// Constantes
const path_chasis = "img/chasis/";
const path_tazas = "img/tazas/";

var canvas;

function pintarAuto(auto) {
    $(':button').prop('disabled', true); // desactivo todos los botones
    canvas.clear(); // limpio lo que haya en el canvas

    // Pinto fondo
    fabric.Image.fromURL(path_chasis+auto.chasis.fondo, function (img) {
        img.selectable = false;
        img.crossOrigin = 'anonymous';
        canvas.add(img);

        // Pinto chasis
        fabric.Image.fromURL(path_chasis+auto.chasis.chasis, function (img) {
            img.selectable = false;
            img.crossOrigin = 'anonymous';
            canvas.add(img);
            // Coloreo el chasis
            img.filters.push(new fabric.Image.filters.Tint({
                color: auto.color,
                opacity: 0.6
            }));
            img.applyFilters(canvas.renderAll.bind(canvas));

            // Pinto la taza de adelante
            fabric.Image.fromURL(path_tazas+auto.tazas.taza, function (img) {
                    img.selectable = false;
                    img.crossOrigin = 'anonymous';
                    canvas.add(img);
                    canvas.bringToFront(img);
                    // Pinto la taza de atras
                    fabric.Image.fromURL(path_tazas+auto.tazas.taza, function (img) {
                        img.selectable = false;
                        img.crossOrigin = 'anonymous';
                        canvas.add(img);
                        canvas.bringToFront(img);
                        canvas.renderAll(); // renderizo
                        $(':button').prop('disabled', false); // vuelvo a activar todos los botones
                    },{
                        left: auto.chasis.ruedas.atras.x,
                        top: auto.chasis.ruedas.atras.y,
                        width: auto.chasis.ruedas.size,
                        height: auto.chasis.ruedas.size,
                        originX: "center",
                        originY: "center"
                    });
                },{
                    left: auto.chasis.ruedas.adelante.x,
                    top: auto.chasis.ruedas.adelante.y,
                    width: auto.chasis.ruedas.size,
                    height: auto.chasis.ruedas.size,
                    originX: "center",
                    originY: "center"
            });
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