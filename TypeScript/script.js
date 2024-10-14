//STRINGS
var creando = "Hola soy la primera Variable de Adam en TypeScript";
var segunda = "Esta es la segunda variables de Adam en TypeScript";
var str1 = "jejejeje es mas facil de lo que parece";
var str2 = "de hecho, es bastante facil";
var str3 = "Pero si no lo practicas, se te puede olvidar";
var Necesario = "Es necesario practicar lo que estudio, porque si no, se me va olvidar";
var proandoAndo = "Porque cuando uso const, se vuelve rosa ?";
var AsiQue = "Podemos suponer que es el nombre de la variables y luego string y despues = y el mensaje";
var unaMas = "Esta sera la ultima variable string por hoy.";
console.log(creando);
console.log(str1);
console.log(AsiQue);
console.log(unaMas);
var porFIn = "Por fin ya pude cargar mi cochinada jajajaja, tenia que crear el tsconfig.json para poder avanzar.";
var gg = "Im really Excited to increase or improve my abilities";
//NUMEROS
var num1 = 10;
var num2 = 11;
var num3 = 12;
var num4 = 13;
var num5 = 18;
var num7 = 20;
var num10 = 30;
var numeross = 111;
//Booleanos.
var bool1 = true;
var bool2 = false;
var bool3 = false;
var bool4 = true;
var bool6 = true;
var bool7 = false;
var bool8 = false;
var bool9 = true;
//UNDEFINED Y NULL.
var probandoUndefined;
var probandoMas;
var variableNull;
variableNull = null;
var probandoOtraVez;
var jejejeNul;
//Los datos primitivos son sencillos, puesto que primero se usa let, var y const, depsues el nombre, dos puntos, variables, = y valor.
var ultimoString = "UltimoStringDelDia";
var ultimoNumero = 22;
var esTypeScriptFacil = true;
var ultimoUndefined;
var ultimoNull;
//Creando funciones.
function sumar(a, b) {
    return a * b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    return a / b;
}
function saludar(nombre, edad) {
    if (edad !== undefined) {
        return "Hola, mi nombre es ".concat(nombre, " y tengo ").concat(edad, " a\u00F1os.");
    }
    else {
        return "Hola, mi nombre es ".concat(nombre);
    }
}
function saludarNum2(nombre, edad) {
    var respuesta = (edad) ? "Hola mi nombre es ".concat(nombre, " y tengo {").concat(edad, " a\u00F1os.") : "Hola, mi nombre es ".concat(nombre);
    return respuesta;
}
function jugadorLastimado(jugandor, edad, razon) {
    if (razon.length > 10) {
        console.log(razon);
        return true;
    }
    else {
        console.log(razon);
        return false;
    }
}
var adam = jugadorLastimado("Adam", 22, "sdfljhsdfjhsdkfsh");
//Funciones con parametros como defectos.
function SaludarNum3(nombre, edad) {
    if (edad === void 0) { edad = 30; }
    return "Hola mi nombre es ".concat(nombre, " y mi edad es ").concat(edad);
}
//Funciones que pueden regresar valores distintos depende la respuesta.
function verificarNumero(num) {
    return num > 0 ? true : num;
}
function buscarNombre(nombre, listaNombres) {
    return listaNombres.includes(nombre) ? nombre : null;
}
function calcularPromedio(numeros) {
    if (numeros.length === 0) {
        return undefined;
    }
    var suma = numeros.reduce(function (acc, num) { return acc + num; }, 0);
    return suma / numeros.length;
}
function imprimirMensaje(condicion) {
    if (condicion) {
        console.log("La condificion es verdadera");
        return "Mensaje impreso";
    }
    return;
}
function convertirValor(valor) {
    if (typeof valor === "number") {
        return valor.toString();
    }
    return valor;
}
