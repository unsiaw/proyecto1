/**
 * Created by ricky on 9/4/2017.
 */


function cargarImagen() {
    var canvas = document.getElementById('imagenAuto');
    var context = canvas.getContext('2d');

    img = new Image();
    img.src = 'img/auto1.png';
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);
    }
    console.log("Estoy cargando la imagen");
}

