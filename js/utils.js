
/* Funcion Modulo, ya que en Javascript el modulo de un negativo no se comporta como el resto */
function mod(n, m) {
    return ((n % m) + m) % m;
}

/* Crea un numero random entre 0 y un limite dado */
function numeroRandom(limite) {
    return (~~((Math.random() * limite)));
}

/* Devuelve un color random en Hex */
function colorRandom() {
    return "000000".replace(/0/g, function () {
        return (~~(Math.random() * 16)).toString(16).toUpperCase();
    });
}