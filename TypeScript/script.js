"use strict";
//STRINGS
const creando = "Hola soy la primera Variable de Adam en TypeScript";
const segunda = "Esta es la segunda variables de Adam en TypeScript";
let str1 = "jejejeje es mas facil de lo que parece";
let str2 = "de hecho, es bastante facil";
let str3 = "Pero si no lo practicas, se te puede olvidar";
let Necesario = "Es necesario practicar lo que estudio, porque si no, se me va olvidar";
const proandoAndo = "Porque cuando uso const, se vuelve rosa ?";
const AsiQue = "Podemos suponer que es el nombre de la variables y luego string y despues = y el mensaje";
let unaMas = "Esta sera la ultima variable string por hoy.";
console.log(creando);
console.log(str1);
console.log(AsiQue);
console.log(unaMas);
const porFIn = "Por fin ya pude cargar mi cochinada jajajaja, tenia que crear el tsconfig.json para poder avanzar.";
const gg = "Im really Excited to increase or improve my abilities";
//NUMEROS
const num1 = 10;
const num2 = 11;
const num3 = 12;
const num4 = 13;
const num5 = 18;
const num7 = 20;
const num10 = 30;
let numeross = 111;
//Booleanos.
const bool1 = true;
const bool2 = false;
const bool3 = false;
const bool4 = true;
const bool6 = true;
const bool7 = false;
const bool8 = false;
const bool9 = true;
//UNDEFINED Y NULL.
let probandoUndefined;
let probandoMas;
let variableNull;
variableNull = null;
let probandoOtraVez;
let jejejeNul;
//Los datos primitivos son sencillos, puesto que primero se usa let, var y const, depsues el nombre, dos puntos, variables, = y valor.
const ultimoString = "UltimoStringDelDia";
const ultimoNumero = 22;
const esTypeScriptFacil = true;
let ultimoUndefined;
let ultimoNull;
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
        return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
    }
    else {
        return `Hola, mi nombre es ${nombre}`;
    }
}
function saludarNum2(nombre, edad) {
    let respuesta = (edad) ? `Hola mi nombre es ${nombre} y tengo {${edad} años.` : `Hola, mi nombre es ${nombre}`;
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
let adam = jugadorLastimado("Adam", 22, "sdfljhsdfjhsdkfsh");
//Funciones con parametros como defectos.
function SaludarNum3(nombre, edad = 30) {
    return `Hola mi nombre es ${nombre} y mi edad es ${edad}`;
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
    const suma = numeros.reduce((acc, num) => acc + num, 0);
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
//Creando Enum.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Red;
console.log(myColor);
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Inactive"] = 2] = "Inactive";
    Status[Status["Suspended"] = 3] = "Suspended";
})(Status || (Status = {}));
let userStatus = Status.Active;
console.log(userStatus);
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
let move = Direction.Left;
console.log(move);
var Mixed;
(function (Mixed) {
    Mixed[Mixed["No"] = 0] = "No";
    Mixed["Yes"] = "Yes";
})(Mixed || (Mixed = {}));
let responseYes = Mixed.Yes;
let responseNo = Mixed.No;
var Mathoperations;
(function (Mathoperations) {
    Mathoperations["Add"] = "Add";
    Mathoperations["Subtract"] = "Subtract";
    Mathoperations["Multiply"] = "Multiply";
    Mathoperations["Divide"] = "Divide";
})(Mathoperations || (Mathoperations = {}));
function calculate(op, a, b) {
    switch (op) {
        case Mathoperations.Add:
            return a + b;
        case Mathoperations.Subtract:
            return a - b;
        case Mathoperations.Multiply:
            return a * b;
        case Mathoperations.Divide:
            return a / b;
    }
}
var Permisions;
(function (Permisions) {
    Permisions[Permisions["Read"] = 1] = "Read";
    Permisions[Permisions["Write"] = 2] = "Write";
    Permisions[Permisions["Execute"] = 4] = "Execute";
})(Permisions || (Permisions = {}));
let myPermision = Permisions.Read | Permisions.Write;
console.log(myPermision);
var Vehicle;
(function (Vehicle) {
    Vehicle["Car"] = "Car";
    Vehicle["Truck"] = "Truck";
    Vehicle["Motorcycle"] = "MotorCycle";
    Vehicle["Bicycle"] = "Bycicle";
})(Vehicle || (Vehicle = {}));
var Shape;
(function (Shape) {
    Shape["Circle"] = " Circle";
    Shape["Square"] = "Square";
    Shape["Triangle"] = "Triangle";
})(Shape || (Shape = {}));
var orderStatus;
(function (orderStatus) {
    orderStatus["Pending"] = "PENDING";
    orderStatus["Shipped"] = "SHIPPED";
    orderStatus["Delivered"] = "DELIVERED";
})(orderStatus || (orderStatus = {}));
