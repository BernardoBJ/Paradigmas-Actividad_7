var Suma = (x, y) => parseInt(x) + parseInt(y);
var Resta = (x, y) => parseInt(x) - parseInt(y);
var Multiplicacion = (x, y) => parseInt(x) * parseInt(y);

function Sumar() {
    var num1 = document.getElementById('Numero1').value;
    var num2 = document.getElementById('Numero2').value;
    document.getElementById('Resultado').value = Suma(num1, num2);
}

function Restar() {
    var num1 = document.getElementById('Numero1').value;
    var num2 = document.getElementById('Numero2').value;
    document.getElementById('Resultado').value = Resta(num1, num2);
}

function Multiplicar() {
    var num1 = document.getElementById('Numero1').value;
    var num2 = document.getElementById('Numero2').value;
    document.getElementById('Resultado').value = Multiplicacion(num1, num2);
}