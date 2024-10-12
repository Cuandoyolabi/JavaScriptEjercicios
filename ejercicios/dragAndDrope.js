
let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for (let list of lists) {
    list.addEventListener("dragstart", function(evento) {
        
        evento.dataTransfer.setData("text/plain", evento.target.id); // Almacena el ID del elemento arrastrado
        evento.dataTransfer.setDragImage(evento.target, 0, 0);
    });
}

// Agregar eventos a la caja de la derecha
rightBox.addEventListener("dragover", function(evento) {
    evento.preventDefault(); // Necesario para permitir que se acepte el drop
});

rightBox.addEventListener("drop", function(evento) {
    evento.preventDefault(); // Prevenir el comportamiento por defecto
    const id = evento.dataTransfer.getData("text/plain"); // Obtener el ID del elemento arrastrado
    const selected = document.getElementById(id); // Obtener el elemento por su ID
    rightBox.appendChild(selected); // Agregar el elemento a la caja de la derecha
});

// Si necesitas hacer lo mismo con la caja de la izquierda, puedes agregar lo mismo que arriba
leftBox.addEventListener("dragover", function(evento) {
    evento.preventDefault();
});

leftBox.addEventListener("drop", function(evento) {
    evento.preventDefault();
    const id = evento.dataTransfer.getData("text/plain");
    const selected = document.getElementById(id);
    leftBox.appendChild(selected);
});

