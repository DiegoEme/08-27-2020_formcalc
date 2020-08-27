const inputName = document.getElementById("inputName");
const nombreMensaje = document.getElementById("nombreMensaje");
const apellidoMensaje = document.getElementById("apellidoMensaje");

function validarFormulario(event) {
  event.preventDefault();
  if (inputName.value == "") {
    inputName.classList.add("alert");
    nombreMensaje.innerText = "Llene el campo nombre";
  }
  if (inputApellido.value == "") {
    apellidoMensaje.innerText = "Escriba su apellido";
  }
  if (inputApellido.value == "") {
    apellidoMensaje.innerText = "Escriba su apellido";
  }
  window.location = "./calculadora.html";
}
