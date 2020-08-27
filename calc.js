//Lamamos al boton
const promedio = document.getElementById("promedio");
promedio.addEventListener("click", () => {
  //trae y almacena el valor del input
  let num1 = parseFloat(document.getElementById("num1").value);

  let num2 = parseFloat(document.getElementById("num2").value);
  let num3 = parseFloat(document.getElementById("num3").value);

  let respuesta = document.getElementById("respuesta");

  let resultado = (num1 + num2 + num3) / 3;

  respuesta.innerHTML = "<i>" + resultado + "</i>";
});
