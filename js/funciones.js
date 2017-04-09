/**
 * Created by ricky on 9/4/2017.
 */


function cargarImagen() {
    var canvas = document.getElementById('imagenAuto');
    var context = canvas.getContext('2d');

    img = new Image();
    img.src = 'img/chasis/auto1.png';
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

    var imagenes = [ "auto1.png", "corsa.jpg", "ka.jpg",  "uno.jpg"];

    var randomNumber = Math.floor((Math.random() * imagenes.length));

    img = new Image();
    img.src = 'img/chasis/'+ imagenes[randomNumber];
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

    fabric.Image.fromURL('img/chasis/auto1.png', function(img) {
        img.filters.push(new fabric.Image.filters.Blend({
            color: document.getElementById('blend-color').value,
            mode: 'multiply'
        }));
        img.applyFilters(canvas.renderAll.bind(canvas));
        canvas.add(img);
        console.log("Estoy cambiando el color");
    });
}
