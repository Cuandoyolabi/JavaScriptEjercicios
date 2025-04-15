//STRINGS
const creando: string = "Hola soy la primera Variable de Adam en TypeScript";

const segunda: string = "Esta es la segunda variables de Adam en TypeScript";

let str1 : string = "jejejeje es mas facil de lo que parece";
let str2: string = "de hecho, es bastante facil";
let str3 : string = "Pero si no lo practicas, se te puede olvidar";

let Necesario: string = "Es necesario practicar lo que estudio, porque si no, se me va olvidar";

const proandoAndo: String = "Porque cuando uso const, se vuelve rosa ?";

const AsiQue : string = "Podemos suponer que es el nombre de la variables y luego string y despues = y el mensaje";

let unaMas : string = "Esta sera la ultima variable string por hoy.";

console.log(creando);
console.log(str1);
console.log(AsiQue);
console.log(unaMas);

const porFIn: string = "Por fin ya pude cargar mi cochinada jajajaja, tenia que crear el tsconfig.json para poder avanzar."
const gg: string = "Im really Excited to increase or improve my abilities";

//NUMEROS

const num1: number = 10;
const num2: number = 11;
const num3: number = 12;
const num4: number = 13;
const num5: number = 18;
const num7: number = 20;
const num10: number = 30;

let numeross: number = 111;

//Booleanos.

const bool1: boolean = true;
const bool2: boolean = false;

const bool3: boolean = false;
const bool4: boolean = true;

const bool6: boolean = true;
const bool7: boolean = false;

const bool8: boolean = false;
const bool9: boolean = true;

//UNDEFINED Y NULL.

let probandoUndefined: undefined;
let probandoMas: undefined;

let variableNull: null;
variableNull = null;

let probandoOtraVez: undefined;
let jejejeNul: null;

//Los datos primitivos son sencillos, puesto que primero se usa let, var y const, depsues el nombre, dos puntos, variables, = y valor.

const ultimoString: string = "UltimoStringDelDia";
const ultimoNumero: number = 22;
const esTypeScriptFacil: boolean = true;
let ultimoUndefined: undefined;
let ultimoNull: null;


//Creando funciones.

function sumar(a: number, b: number): number {
    return a * b;
}

function restar(a: number, b: number): number {
    return a - b;
}

function multiplicar(a: number, b : number): number{
    return a * b;
}

function dividir(a: number, b: number): number {
    return a / b;
}

function saludar(nombre: string, edad?: number): string{
    if(edad!== undefined){
        return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`
    } else {
        return `Hola, mi nombre es ${nombre}`;
    }
}

function saludarNum2(nombre: string, edad?: number): string {
    let respuesta = (edad) ? `Hola mi nombre es ${nombre} y tengo {${edad} años.`:`Hola, mi nombre es ${nombre}`;
    return respuesta;
}

function jugadorLastimado(jugandor: string, edad: number, razon: string): boolean {
    if(razon.length > 10){
        console.log(razon);
        return true;
    } else {
        console.log(razon)
        return false;
    }
}

let adam = jugadorLastimado("Adam", 22, "sdfljhsdfjhsdkfsh");

//Funciones con parametros como defectos.

function SaludarNum3(nombre: string, edad: number = 30): string {
    return `Hola mi nombre es ${nombre} y mi edad es ${edad}`;
}

//Funciones que pueden regresar valores distintos depende la respuesta.

function verificarNumero(num: number): boolean | number {
    return num > 0 ? true: num;
}

function buscarNombre(nombre: string, listaNombres: string[]): string | null {
    return listaNombres.includes(nombre) ? nombre: null;
}

function calcularPromedio(numeros: number[]): number | undefined{
    if(numeros.length === 0){
        return undefined;
    }
    const suma = numeros.reduce((acc, num) => acc + num, 0);
    return suma / numeros.length;
}

function imprimirMensaje(condicion: boolean): void | string {
    if(condicion){
        console.log("La condificion es verdadera");
        return "Mensaje impreso";
    }
    return;
}

function convertirValor(valor: number | string): string | number {
    if(typeof valor === "number"){
        return valor.toString();
    }
    return valor;
}

//Creando Enum.

enum Color {
    Red,
    Green,
    Blue
}

let myColor: Color = Color.Red;
console.log(myColor);

enum Status {
    Active = 1,
    Inactive,
    Suspended
}

let userStatus: Status = Status.Active;
console.log(userStatus);

enum Direction {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

let move: Direction = Direction.Left;
console.log(move);

enum Mixed{
    No = 0,
    Yes = "Yes"
}

let responseYes: Mixed = Mixed.Yes;
let responseNo: Mixed = Mixed.No;

enum Mathoperations{
    Add = "Add",
    Subtract = "Subtract",
    Multiply = "Multiply",
    Divide = "Divide"
}

function calculate(op: Mathoperations, a: number, b: number): number{
    switch(op){
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

enum Permisions {
    Read = 1 << 0,
    Write = 1 << 1,
    Execute = 1 << 2
}

let myPermision: Permisions = Permisions.Read | Permisions.Write;
console.log(myPermision);

enum Vehicle{
    Car = "Car",
    Truck = "Truck",
    Motorcycle = "MotorCycle",
    Bicycle = "Bycicle"
}

enum Shape {
    Circle = " Circle",
    Square = "Square",
    Triangle = "Triangle"
}

enum orderStatus{
    Pending = "PENDING",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED"
}

// Ejemplo while en TypeScript.
const randomNumbers : number[] = [];
let sum = 0;

for(let i = 0; i < 5; i++){
    const random = Math.floor(Math.random() * 100);
    randomNumbers.push(random);
    sum += random;
    console.log(`Numero generado: ${random}`);
}

console.log(`Arreglo generado: ${randomNumbers}`);
console.log(`Suma total: ${sum}`);


interface Product {
    id: number;
    name: string;
    price: number;
}

const products: Product[] = [
    {id: 1, name: 'Laptop', price: 1000},
    {id: 2, name: 'Mouse', price: 25},
    {id: 3, name: 'Kayboard', price: 50},
];

for(let i = 0; i < products.length; i++){
    const product = products[i];
    console.log(`Producto: ${product.name}, Precio: $${product.price}`);
}

//FOREACH() 

interface FormField {
    name: string;
    value: string;
    required: boolean;
}

const formFields: FormField[] = [
    {name: 'username', value: 'user123', required: true},
    {name: 'email', value: '', required: true},
    {name: 'age', value: '22', required: false}
];

let isValid = true;
const errors: string[] = [];

formFields.forEach(field => {
    if(field.required && field.value.trim() === ' '){
        isValid = false;
        errors.push(`El campo "${field.name}" es obligatorio.`);
    }
});

if(isValid){
    console.log(`Formulario valudo`)
} else {
    console.log(`Errores:`, errors);
}

//10 ejemplos de map()





//10 ejemplos de filter()



//10 ejemplos de reduce()