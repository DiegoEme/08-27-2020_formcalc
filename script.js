const inputName = document.getElementById("inputName");
const nombreMensaje = document.getElementById("nombreMensaje");

const inputApellido = document.getElementById("inputApellido");
const apellidoMensaje = document.getElementById("apellidoMensaje");

const inputCorreo = document.getElementById("inputCorreo");
const correoMensaje = document.getElementById("correoMensaje");

const inputTel = document.getElementById("inputTel");
const telMensaje = document.getElementById("telMensaje");

function validarFormulario(event) {
  event.preventDefault();
  if (inputName.value == "") {
    inputName.classList.add("alert");
    nombreMensaje.innerText = "Escriba su nombre";
  }
  if (inputApellido.value == "") {
    inputApellido.classList.add("alert");
    apellidoMensaje.innerText = "Escriba su apellido";
  }
  if (inputCorreo.value == "") {
    inputCorreo.classList.add("alert");
    correoMensaje.innerText = "Escriba su correo";
  }
  if (inputTel.value == "") {
    inputTel.classList.add("alert");
    telMensaje.innerText = "Escriba su telefono";
  }

  if (
    inputName.value == "" ||
    inputApellido.value == "" ||
    inputCorreo.value == "" ||
    inputTel.value == ""
  ) {
    swal("¡Llene el formulario!");
  } else {
    swal("¡Buena mi perro!", "¡Ahora vamos a la calculadora!", "success");
  }

  setTimeout(function () {
    window.location = "./calculadora.html";
  }, 2000);
}
