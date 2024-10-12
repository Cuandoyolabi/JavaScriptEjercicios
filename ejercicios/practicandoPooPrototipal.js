/*
function Vehiculo(tipo){
    this.tipo = tipo;
}

Vehiculo.prototype.mover = function(){
    console.log(`El ${this.tipo} se esta moviendo`);
}

const coche = new Vehiculo("Coche");
coche.mover();

// Ejemplo 2

function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.hablar = function(){
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
}

const juan = new Persona("Juan", 30);
juan.hablar();

//Ejemplo 3

function Circulo(radio){
    this.radio = radio;
}

Circulo.prototype.area = function(){
    return Math.PI * this.radio * 2;
}

const circuloGrande = new Circulo(10);
console.log(circuloGrande.area());


//Ejemplo 4 Cuenta bancaria

function CuentaBancaria(saldoInicial){
    this.saldo = saldoInicial;
}

CuentaBancaria.prototype.depositar = function(cantidad){
    this.saldo += cantidad;
}

CuentaBancaria.prototype.obtenerSaldo = function(){
    return this.saldo;
}

const miCuenta = new CuentaBancaria(1000);
miCuenta.depositar(500);
console.log(miCuenta.obtenerSaldo());
miCuenta.depositar(500);
console.log(miCuenta.obtenerSaldo());

//Ejemplo 5

function Animal(nombre){
    this.nombre = nombre;
}

Animal.prototype.hacerSonido = function(){
    console.log(`${this.nombre} esta haciendo un sonido`);
};

const perro = new Animal("Perro");
perro.hacerSonido();

//Herencia prototipal.

function Vehiculo(tipo){
    this.tipo = tipo;
}

Vehiculo.prototype.mover = function(){
    console.log(`${this.tipo} se esta moviendo`);
};

function Coche(marca){
    Vehiculo.call(this, "Coche");
    this.marca = marca;
}

Coche.prototype = Object.create(Vehiculo.prototype);
Coche.prototype.constructor = Coche;

const miCoche = new Coche("Toyota");
miCoche.mover();
*/

//HERENCIA, POLIMORFISMO, ABSTRACCION Y ENCAPSULACION

//Practicando POO prototipal. 100 ejemplos.
/*
//1
function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.saludar = function(){
    console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
}

const juan = new Persona("Juan", 22);
juan.saludar();

//2
function Animal(nombre){
    this.nombre = nombre;
}

Animal.prototype.hablar = function(){
    console.log(`${this.nombre} hace un sonido`);
}

function Perro(nombre, raza){
    Animal.call(this, nombre);
    this.raza = raza;
}

Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;

Perro.prototype.hablar = function(){
    console.log(`${this.nombre} ladra`);
}

const fido = new Perro("Fido", "Labrador");
fido.hablar();

//3
function Vehiculo(marca){
    this.marca = marca;
}

Vehiculo.prototype.encender = function(){
    console.log(`${this.marca} esta encendido`);
};

function Coche(marca, modelo){
    Vehiculo.call(this, marca);
    this.modelo = modelo;
}

Coche.prototype = Object.create(Vehiculo.prototype);
Coche.prototype.onstructor = Coche;

Coche.prototype.encender = function(){
    console.log(`${this.marca} ${this.modelo} esta encendido `);
};

const coche = new Coche("Toyota", "Corolla");
coche.encender();

//4
function Computadora(marca){
    this.marca = marca;
}

const miComputadora = new Computadora("Dell");

Computadora.prototype.encender = function(){
    console.log(`${this.Computadora} esta encendida`);
}

miComputadora.encender();

//5
function Bicicleta(marca){
    this.marca = marca;
}

Bicicleta.prototype = {
    arrancar: function(){
        console.log(`${this.marca} esta arrancando`);
    },
    frenar: function(){
        console.log(`${this.marca} esta frenando`);
    }
};

const miBici = new Bicicleta("Trek");
miBici.arrancar();
miBici.frenar();

//6
function Telefono(marca){
    this.marca = marca;
}

Telefono.prototype.llamar = function(numero){
    console.log(`Llamando al ${numero} desde ${this.marca}...`)
    return this;
};

Telefono.prototype.colgar = function(){
    console.log(`LLmada finzalizada en ${this.marca}.`);
};

const miTelefono = new Telefono("IPhone");
miTelefono.llamar("555-1234").colgar();

//7m ???????
const serVivo = {
    respirar: function(){
        console.log("Respirando");
    }
};

const serHumano = Object.create(serVivo);
serHumano.hablar = function(){
    console.log("Hablando");
};

serHumano.respirar();
serHumano.hablar();

//8
const nadador = {
    nadar: function(){
        console.log(`${this.nombre} esta corriendo`);
    }
};

const corredor = {
    correr: function(){
        console.log(`${this.nombre} esta corriendo`);
    }
};

function Atleta(nombre){
    this.nombre = nombre;
}

Object.create(Atleta.prototype, nadador, corredor);
const atleta = new Atleta("Adam");
atleta.nadar();
atleta.correr();

//9
const carroPrototype = {
    encender: function(){
        console.log(`${this.marca} esta encendido`);
    },
    apagar: function(){
        console.log(`${this.marca} esta apagado`);
    }
};

function crearCarro(marca){
    const carro = Object.create(carroPrototype);
    carro.marca = marca;
    return carro;
}

const miCarro = crearCarro("Mazda");
miCarro.encender();

//10
function Persona(nombre){
    this.nombre = nombre;
}

Object.defineProperty(Persona.prototype, "nombre", {
    get: function(){
        return this._nombre;
    },
    set: function(nuevoNombre){
        this._nombre = nuevoNombre;
    }
});

const persona = new Persona("Adam");
console.log(persona.nombre);
persona.nombre = "Carlos";
console.log(persona.nombre);
*/
/*
//11
function Vehiculo(marca){
    this.marca = marca;
}

Vehiculo.prototype.arrancar = function(){
    console.log(`${this.marca} esta arrancando`);
}

function Coche(marca, modelo){
    Vehiculo.call(this, marca);
    this.modelo = modelo;
}

Coche.prototype = Object.create(Vehiculo.prototype);
Coche.prototype.constructor = Coche;

Coche.prototype.mostrarModelo = function(){
    console.log(`El coche es un ${this.marca} ${this.modelo}`);
};

const miCoche = new Coche("Ford", "Munstang");
miCoche.arrancar();
miCoche.mostrarModelo();

//12
function Animal(tipo){
    this.tipo = tipo;
}

Animal.prototype.hablar = function(){
    console.log(`${this.tipo} hace un sonido`);
}

function Gato(nombre){
    Animal.call(this, "Gato");
    this.nombre = nombre;
}

Gato.prototype = Object.create(Animal.prototype);
Gato.prototype.constructor = Gato;

Gato.prototype.hablar = function(){
    console.log(`${this.nombre} dice Miau`);
};

const miGato = new Gato("Solovino");
miGato.hablar();
*/
//13
/*
function Animal(nombre){
    this.nombre = nombre;
}

Animal.prototype.hablar = function(){
    console.log(`${this.nombre} hace un sonido`);
};

function Perro(nombre, raza){
    Animal.call(this, nombre);
    this.raza = raza;
}

Perro.prototype = Objetc.create(Animal.prototype);
Perro.prototype.constructor = Perro;

Perro.prototype.hablar = function(){
    console.log(`${this.nombre} ladra`);
};

const miPerro = new Perro("Solovino", "Desconocido");
miPerro.hablar();

//14
function Vehiculo(ruedas){
    this.ruedas = ruedas;
}

Vehiculo.prototype.mover = function(){
    console.log(`Este vehiculo se mueve sobre ${this.ruedas} ruedas`);
};

function Motor(tipo){
    this.tipo = tipo;
}

Motor.prototype.arrancar = function(){
    console.log(`El motor ${this.tipo} esta en marcha`);
}

function Carro(ruedas, tipo){
    Vehiculo.call(this, ruedas);
    Motor.call(this, tipo);
}

Object.assign(Carro.prototype, Vehiculo.prototype);
Object.assign(Carro.prototype, Motor.prototype);

const miCarro = new Carro(4, "Gasolina");
miCarro.mover();
miCarro.arrancar();
*/
