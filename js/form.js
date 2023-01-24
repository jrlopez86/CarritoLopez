//Registro de datos del modal
const formularioReset = document.getElementById("modal__formul"),
  modalParCvv = document.getElementById("modal__par-4"),
  modalParTarjeta = document.getElementById("modal__par-3"),
  modalParDire = document.getElementById("modal__par-2"),
  modalParNom = document.getElementById("modal__par-1"),
  btnComprar = document.querySelector("#modal__btn"),
  textCompra = document.getElementById("modal__compra"),
  textCompraError = document.getElementById("modal__compra-error"),
  btnBorrar = document.getElementById("modal__btn-borrar"),
  btnCerrar = document.getElementById("moda__btn-cerrar");

//Boton que valida los datos del registro para finalizar la compra
btnComprar.addEventListener("click", () => {
  let inputNombre = document.getElementById("modal__nombre").value;
  let inputDire = document.getElementById("modal__dire").value;
  let inputTarjeta = document.getElementById("modal__tarjeta").value;
  let inputCvv = document.getElementById("modal__cvv").value;


  //Condiciones en el formulario de compra (operadores ternarios en el if else)
  inputNombre.length === 0
    ? (modalParNom.innerText = "[ERROR] El campo debe tener un valor")
    : (modalParNom.innerText = "");

  inputDire.length === 0
    ? (modalParDire.innerText = "[ERROR] El campo debe tener un valor")
    : (modalParDire.innerText = "");

  isNaN(inputTarjeta) || inputTarjeta.length === 0
    ? (modalParTarjeta.innerText =
        "[ERROR] El campo debe tener un valor numerico")
    : (modalParTarjeta.innerText = " ");

  isNaN(inputCvv) || inputCvv.length === 0
    ? (modalParCvv.innerText = "[ERROR] El campo debe tener un valor numerico")
    : (modalParCvv.innerText = "");
  modalTotal.innerHTML = 0;
  totalCompra.innerHTML = 0;

  //Se valida si hay productos, el usuario no puede comrpar si no hay nada en el carrito, y se valida si el usuario escribio los datos de la compra
  if (carrito.length === 0) {
    error();
    textCompra.innerText = "";
  } else if (
    inputCvv.length === 0 ||
    inputTarjeta.length === 0 ||
    inputDire.length === 0 ||
    inputNombre.length === 0
  ) {
    textCompraError.innerText = "Ingrese los datos";
  } else {
    formularioReset.reset();
    localStorage.removeItem("carrito");
    carrito.splice(0, carrito.length);
    success();
    textCompraError.innerText = "";
    confetti({particleCount: 500, spread: 250, origin: { y: 0.6 }});
  }
  actualizarCarrito();
});

//Se borra el texto "Ingresa un producto" al darle click a cerrar
btnCerrar.addEventListener("click", () => {
  textCompraError.innerText = "";
});

//Borra los datos del formulario
function borrarFormulario() {
  btnBorrar.addEventListener("click", () => {
    formularioReset.reset();
  });
}
borrarFormulario();
