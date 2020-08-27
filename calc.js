//Lamamos al boton
const promedio = document.getElementById("promedio");
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const mult = document.getElementById("mult");
const div = document.getElementById("div");

promedio.addEventListener("click", () => {
  //trae y almacena el valor del input
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let resultado = (num1 + num2) / 2;
  let respuesta = document.getElementById("respuesta");
  respuesta.innerHTML = "<i>" + resultado + "</i>";
});

suma.addEventListener("click", () => {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let resultado = num1 + num2;
  let respuesta = document.getElementById("respuesta");
  respuesta.innerHTML = "<i>" + resultado + "</i>";
});
resta.addEventListener("click", () => {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let resultado = num1 - num2;
  let respuesta = document.getElementById("respuesta");
  respuesta.innerHTML = "<i>" + resultado + "</i>";
});
mult.addEventListener("click", () => {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let resultado = num1 * num2;
  let respuesta = document.getElementById("respuesta");
  respuesta.innerHTML = "<i>" + resultado + "</i>";
});
div.addEventListener("click", () => {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let resultado = num1 / num2;
  let respuesta = document.getElementById("respuesta");
  respuesta.innerHTML = "<i>" + resultado + "</i>";
});
