//Metodos de busqueda de indice y booleano.

let stringNum1 = "Hola mundo";
let stringNum2 = "Hola k hace";

let incluyendo = stringNum1.includes("Hola");
console.log(incluyendo);

let inddexx =  stringNum1.indexOf("a");
console.log(inddexx);

let lastIndexx = stringNum1.lastIndexOf("mundo");
console.log(lastIndexx);

let starts = stringNum2.startsWith("Hola");
console.log(starts);

let ends = stringNum1.endsWith("abc");
console.log(ends);

//Metodos de extraccion.

let stringNum3 = "Este va ser un nuevo string, vamos a probar metodos";
let stringNum4 = "Esta es una prueba de metodos";
let stringNum5 = "Esta es la ultima prueba de metodos de extraccion ";

//Slice no borra o modifica el String original.
let slicesss = stringNum3.slice(10, 27);
console.log(slicesss);
console.log(stringNum3);

//Substring tampoco.
let substringss = stringNum3.substring(10, 27);
console.log(substringss);
console.log(stringNum3);

//Metodos de relleno.
let metodoDeRellenoInicio = stringNum3.padStart(100, "Hola");
console.log(metodoDeRellenoInicio);
console.log(stringNum3);

let metodoDeRllenoFinal = stringNum4.padEnd(50, "jeje");
console.log(metodoDeRllenoFinal);

//Metodos de manipulacion de Strings.

let repit = stringNum5.repeat(2);
console.log(repit);
console.log(stringNum5);

let Upper = stringNum5.toUpperCase();
console.log(Upper);
console.log(stringNum5);

let Lower = stringNum5.toLowerCase();
console.log(Lower);

let probandoTrim = "         HOLAAAAA   ESTO ES            ";
let trimm = probandoTrim.trim();
console.log(trimm);
console.log(probandoTrim);