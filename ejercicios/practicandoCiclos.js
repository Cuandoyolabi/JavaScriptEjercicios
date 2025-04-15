/*
const numbers = [1, 2, 3, 4, 5];
const numbersList = [];

for(const num of numbers){
    numbersList.push(num);
}

console.log(numbersList);


const listOfCharacters = [];
const message = "Hola";
for(const char of message){
    listOfCharacters.push(char);
    let listUnion = listOfCharacters.join("");
    console.log(listUnion);
    
}

const uniqueNumbers = new Set([10, 20, 30]);
for (const value of uniqueNumbers){
    console.log(value);
}

//Ejemplos de While.
/*
let i = 1;
while(i <= 5){
    console.log(i);
    i++
}
*/
/*
let j = 5;
while(j > 0){
    console.log(j);
    j--;
}

let i = 1;
let sum = 0;
while (i <= 5){
    sum += i;
    i++;
}

console.log(`Suma total es ${sum}`);
*/

//Simulacion de un cajero automatico.
/*
let balance = 1000;
while (balance > 0){
    const withdrawal = Math.floor(Math.random() * 500);
    console.log(`Intentando retirar: ${withdrawal}`);

    if(withdrawal > balance){
        console.log("Fondos insuficientes. Rertiro cancelado.");
    } else {
        balance -= withdrawal;
        console.log(`Retiro exitoso. Balance restante: ${balance}`);
    }

    if(balance <= 200){
        console.log(`Advertencia: Tu saldo es bajo.`);
        break;
    }
}
/*
//Ejemplo 2

const data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let found = false;
let i = 0;

while(i < data.length && !found){
    let j = 0;
    while(j < data[i].length){
        if(data[i][j] === 5){
            console.log(`Elemento encontrado en la posicion [${i}, ${j}]`);
            found = true;
            break;
        }
        j++;
    }
    i++;
}

// Ejemplo 3

let count = 5;

function countdown(){
    if(count === 0){
        console.log(`¡Despegue!`);
        return;
    }

    console.log(count);
    count--;
    setTimeout(countdown, 1000);
}

countdown();

//Ejemplo 4

let inventory = { apples: 10, oranges: 5, bananas: 8};
let shoppingList = ['apples', 'bananas', 'grapes'];

while( shoppingList.length > 0){
    let item = shoppingList.shift();

    if(inventory[item] > 0){
        inventory[item]--;
        console.log(`Compraste 1 ${item}. Quedan: ${inventory[item]}`);
    } else {
        console.log(`${item} no esta disponible en el inventario`);
    }
}

// EJemplos de ForEach()

const employees = [
    {
        name: 'Alice',
        proyects: [
            {title: 'Website Redesign', active: true},
            {title: 'SEO Optimization', active: false}
        ]
    },
    {
        name: 'Bob',
        proyects: [
            {title: 'Mobile App', active: true},
            {title: 'Backend API', active: true}
        ]
    }
];

const activeProyects = [];

employees.forEach(employee => {
    employee.proyects.forEach(project => {
        if(project.active){
            activeProyects.push(project.title);
        }
    });
});

console.log(`Proyectos activados`, activeProyects);
*/
/*
//10 ejemplos de map()
const numbers = [1, 2, 3, 4];
const incremented = numbers.map(num => num + 1);
console.log(incremented);

const words = ["hola", "mundo"];
const uppercased = words.map(word => word.toUpperCase());
console.log(uppercased);

const names = ["Ana", "Pedro", "Sofia"];
const lengths = names.map(name => name.length);
console.log(lengths);

const celsius = [0, 20, 30];
const farenheit = celsius.map(c => (c * 9) / 5 + 32);
console.log(farenheit);

const fruits = ["manzana", "pera"];
const withEmoji = fruits.map(fruit => fruit + "manzana");
console.log(withEmoji);
*/
/*
const products = [
    {name: 'Laptop', price: 800},
    {name: 'Phone', price: 500}
]

const discounted = products.map(product => ({
    ...product,
    price: product.price * 0.9
}));

console.log(discounted);

const users = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
];

const names = users.map(user => user.name);
console.log(names);

const matrix = [[1, 2], [3, 4], [5, 6]];
const flattened = matrix.map(row => row.map(num => num * 2));
console.log(flattened);

const people = [
    {name: 'Juan', age: 20},
    {name: 'Maria', age: 17},
];

const isAdult = people.map(persona => ({
    ...persona,
    adult: persona.age >= 18
}));

console.log(isAdult);

const students = [
    {name: "Carlos", score: 85},
    {name: "Ana", score: 65},
    {name: "Juan", score: 92}
];

const topStudents = students
    .map(student => ({
        ...student,
        passed: student.score >= 70
    }))
    .filter(student => student.passed);

console.log(topStudents);
*/
/*
//10 ejemplos de filter()
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const words = ["Sol", "Luna", "Estrella", "Cielo"];
const longWords  = words.filter(word => word.length > 3);
console.log(longWords);

const products = [
    {name: "Laptop", price: 800},
    {name: "Phone", price: 500},
    {name: "Tablet", price: 300}
];

const affordableProducts = products.filter(product => product.price < 600);
console.log(affordableProducts);

const students = [
    {name: "Alice", grade: 85},
    {name: "Bob", grade: 65},
    {name: "Charlie", grade: 95}
];

const passedStudents = students.filter(student => student.grade >= 70);
console.log(passedStudents);

const phrases = ["manzana", "platano", "cereza", "fres"];
const containsA = phrases.filter(phrase => phrase.includes('a'));
console.log(containsA);
*/
/*
const inventory = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1200 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 800 },
    { id: 3, name: 'Table', category: 'Furniture', price: 250 },
    { id: 4, name: 'Chair', category: 'Furniture', price: 150 },
    { id: 5, name: 'Headphones', category: 'Electronics', price: 200 }
];

const filteredProducts = inventory.filter(product => 
    product.category === "Electronics" &&  product.price < 1000 
);

console.log(filteredProducts);

const employees = [
    { name: 'Alice', department: 'HR', years: 3 },
    { name: 'Bob', department: 'IT', years: 5 },
    { name: 'Charlie', department: 'Finance', years: 2 },
    { name: 'David', department: 'IT', years: 7 },
    { name: 'Eva', department: 'HR', years: 4 }
];

const seasonedIT = employees.filter(employee => 
    employee.department === "IT" && employee.years > 4
);

console.log(seasonedIT);

const transactions = [
    { id: 1, amount: 500, date: '2024-01-01' },
    { id: 2, amount: 1000, date: '2024-01-15' },
    { id: 3, amount: 150, date: '2024-02-05' },
    { id: 4, amount: 700, date: '2024-02-10' },
    { id: 5, amount: 1200, date: '2024-03-01' }
];

const filteredTransaction = transactions.filter(transaction => 
    transaction.amount >= 500 && new Date(transaction.date) >= new Date('2024-01-01')
);

console.log(filteredTransaction);


const appointments = [
    { patient: 'John', doctor: 'Smith', date: '2024-10-01' },
    { patient: 'Jane', doctor: 'Doe', date: '2024-10-05' },
    { patient: 'Alex', doctor: 'Smith', date: '2024-10-10' },
    { patient: 'Mary', doctor: 'Johnson', date: '2024-10-12' },
    { patient: 'Bob', doctor: 'Doe', date: '2024-10-15' }
];

const filteredAppoinments = appointments.filter(appointment => 
    appointment.doctor === "Smith" && new Date(appointment.date) > new Date('2024-01-01')
);

console.log(filteredAppoinments);
*/
//10 ejemplos de reduce()
/*
const numbers = [1, 2, 3, 4];
const num = numbers.reduce((acc , current) => acc + current, 0);
console.log(num);

const numbers_num2 = [1, 2, 3, 4];
const product = numbers_num2.reduce((acc, current) => acc * current, 1);
console.log(product);

const keys = ["name", "age", "country"];
const values = ["Alice", 25, "USA"];

const obj = keys.reduce((acc, current, index) => {
    acc[current] = values[index];
    return acc;
}, { });

console.log(obj);
*/
/*
const people = [
    { name: 'Alice', country: 'USA' },
    { name: 'Bob', country: 'Canada' },
    { name: 'Charlie', country: 'USA' },
    { name: 'David', country: 'Canada' },
    { name: 'Eva', country: 'UK' }
];

const groupedByCountry = people.reduce((acc, person) => {
    const {country } = person;
    if(!acc[country]) {
        acc[country ] = [];
    }
    acc[country].push(person);
    return acc;
}, {});

console.log(groupedByCountry);

const numbers = [4, 8, 15, 16, 23, 42];

const stats = numbers.reduce(
    (acc, num) => {
        acc.sum += num;
        acc.max = Math.max(acc.max, num);
        acc.min = Math.min(acc.min, num);
        return acc;
    },
    {sum: 0, max: -Infinity, min: Infinity}
)

stats.average = stats.sum / numbers.length;

console.log(stats);

const products = [
    { id: 101, name: 'Laptop', price: 1200 },
    { id: 102, name: 'Phone', price: 800 },
    { id: 103, name: 'Tablet', price: 500 }
];

const productMap = products.reduce((acc, product) => {
    acc[product.id] = product;
    return acc;
}, { });

console.log(productMap);
]
*/

