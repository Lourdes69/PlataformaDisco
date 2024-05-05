// Selecciona todos los botones de tickets
let botonesTickets = document.querySelectorAll('button[data-entradas]');

botonesTickets.forEach((boton) => {
    boton.addEventListener('click', () => { 
        let entradasDisponibles = parseInt(boton.dataset.entradas);

        // Verifica si hay entradas disponibles
        if (entradasDisponibles > 0) {
            swal("¡Su compra fue exitosa!");
            boton.dataset.entradas = entradasDisponibles - 1;
        } else {
             boton.textContent = "AGOTADO";
             boton.disabled = true;
             boton.classList.add("btn-agotado");
        }
    });
});


//Agregar Nombre 
let nombre = prompt("Cuál es tu nombre?").toUpperCase();
while (nombre.length < 3) {
  nombre = prompt(
    "Mmmm, tu nombre no puede ser tan corto, ingresa al menos 3 letras",
  ).toUpperCase();
}
let span = document.getElementById("welcome");
span.textContent = `Hola, ${nombre}`;
let i = document.querySelector("i");
i.setAttribute("class", "bi bi-ticket-detailed");


// Pide al usuario que ingrese su edad
let edad = parseInt(prompt("¿Cuál es tu edad?"));
if (edad < 18) {
  swal("Lo siento", "Debes ser mayor de edad para comprar tickets.", "error");

  botonesTickets.forEach(function (boton) {
    boton.disabled = true;
    boton.classList.add("btn-disabled");
  });
} else {
  swal("¡Bienvenido!", `Hola, ${nombre}!`, "success");
}
