//Practicando Sincronia con Callbacks

/*
function greet(name, callback){
    console.log("Hi, " + name);
    callback();
}

function sayGoodbye(){
    console.log("Goodbye");
}

greet("Alice", sayGoodbye);

//Ejemplo 2

function calculate(num1, num2, callback){
    const result = num1 + num2;
    callback(result);
}

function displayResult(result){
    console.log("The result is: " + result);
}

calculate(5, 10, displayResult);

//Ejemplo 3

function transformText(text, callback){
    const newText = text.toUpperCase();
    callback(newText);
}

function printText(text){
    console.log("Transformed text: " + text);
}

transformText("Hello", printText);


//Ejemplo 4 

const numbers = [1, 2, 3, 4];

function double(num){
    return num * 2;
}

const doubleNumbers = numbers.map(double);
console.log(doubleNumbers);

//Ejemplo 5
function validate(value, callback){
    if(value > 0){
        callback(true);
    } else {
        callback(false);
    }
}

function showValidation(result){
    let return_nm1 = (result === true) ? "Value is valid" : "Value is not valid";
    console.log(return_nm1);
}

validate(10, showValidation);


//Problema numero 1
/*
Aquí te dejo un problema de dificultad alta relacionado con callbacks:

Problema: Simulación de flujo de trabajo con callbacks anidados
Tienes una serie de pasos que representan un flujo de trabajo en una fábrica. Cada paso tarda un tiempo en completarse, y cada paso depende del resultado del anterior. Quieres simular el proceso usando callbacks.

Pasos:
Recibir materia prima (tarda 1 segundo).
Procesar materia prima (tarda 2 segundos).
Empaquetar el producto (tarda 1 segundo).
Enviar el producto (tarda 2 segundos).
Cada paso recibe un parámetro de entrada (que es el resultado del paso anterior) y lo pasa al siguiente paso a través de un callback. Si alguno de los pasos falla (simulando un error con probabilidad del 20%), el flujo de trabajo debe detenerse y el error debe ser manejado adecuadamente.

Requisitos:
Debes usar callbacks para modelar este flujo de trabajo.
Cada paso tiene una probabilidad del 20% de fallar, en cuyo caso debes detener todo el proceso y mostrar un mensaje de error.
Si todo el proceso tiene éxito, debe imprimirse un mensaje diciendo: "Producto enviado con éxito".
Funciones:
Escribe las siguientes funciones (ya están definidas sus tareas):

receiveMaterials(callback)
processMaterials(materials, callback)
packageProduct(product, callback)
shipProduct(package, callback)
handleError(error)
Ejemplo de flujo exitoso:
Recibir materia prima: "Materia prima recibida".
Procesar materia prima: "Materia procesada".
Empaquetar el producto: "Producto empaquetado".
Enviar el producto: "Producto enviado con éxito".
Flujo fallido:
Si uno de los pasos falla, el flujo debe detenerse inmediatamente y manejar el error.

Pistas:
Usa setTimeout para simular el tiempo que tarda cada paso.
Simula el error usando un número aleatorio y detén el flujo si ocurre un error.
*/
/*
//Simulacion de error
function simulandoError(callback){
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let randomError = (randomNumber == 1 || randomNumber == 2) ? true : false;
    if(randomError == true){
        callback("Error: Algo salio mal.");
    } else {
        callback(null);
    }
}

//Recibiendo materiales
function receiveMaterials(callback){

    console.log("Recibiendo materia prima");
    setTimeout( () =>{
        simulandoError((error) => {
            if(error) {
                callback(error);
            } else {
                console.log("Materia prima recibida");
                callback(null, "Materia prima");
            }
        });
    }, 1000)
}

//Procesando materiales
function processMaterials(materials, callback){

    console.log("Procesando " + materials + "....");
    setTimeout( () =>{
        simulandoError((error) => {
            if(error) {
                callback(error);
            } else {
                console.log("Materia procesada.");
                callback(null, "Proucto procesado");
            }
        });
    }, 2000)
}

//Empaquetando el producto
function packageProduct(product, callback){

    console.log("Empaquetado" + product + "...");
    setTimeout( () =>{
        simulandoError((error) => {
            if(error) {
                callback(error);
            } else {
                console.log("Producto empaquetado");
                callback(null, "Proucto empaquetado");
            }
        });
    }, 1000)
}

//Enviando el producto
function shipProduct(package, callback){

    console.log("Enviando" + package + "...");
    setTimeout( () =>{
        simulandoError((error) => {
            if(error) {
                callback(error);
            } else {
                console.log("Producto enviado con exito");
                callback(null);
            }
        });
    }, 2000)
}

//Manejando el error
function handleError(error){
    console.log(error)
}   

//Funcion que empieza el estado de trabajo
function empezarTrabajo(){
    receiveMaterials((error, materials) => {
        if(error) return handleError(error);
        
        processMaterials(materials, (error, product) => {
            if(error) return handleError(error);

            packageProduct(product, (error, package) => {
                if(error) return handleError(error);
            
                shipProduct(package, (error) => {
                    if(error) return handleError(error);
                });
            });
        });
    });
};

empezarTrabajo();
*/
/*
function operar(a, b, callback){

    const resultado = callback(a, b);
    console.log(resultado);
    
}

function suma(x, y){
    return x + y;
}

function resta(x, y ){
    return x - y;
}

operar(10, 5, suma);
operar(10, 5, resta);
*/

function mostrarMensajeConRetraso(mensaje, callback){

    funcionConMensaje();
}

function funcionConMensaje(){
    let msg = "Uy que rico";
}

mostrarMensajeConRetraso("Hola mundo", function(msg){
    console.log("Mensaje recibido", msg);
});

