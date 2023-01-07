

    //Listado de objetos (productos)
    class VideoJuegos {
      constructor(id, nombre, categoria, caratula, precio, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.caratula = caratula;
        this.precio = precio;
        this.cantidad = cantidad;
      }
    }

    //Creo productos y los almaceno en un array:
  
    const game1 = new VideoJuegos(1, 'Super Mario World', 'Plataforma', src="./img/supermario.jpg",  160, 10);
    const game2 = new VideoJuegos(2, 'Castlevania', 'Plataforma', src="./img/castlevania.jpg", 250, 6);
    const game3 = new VideoJuegos(3, 'Zelda','Aventura', src="./img/zelda.jpg", 79,  2);
    const game4 = new VideoJuegos(4, 'Star Fox','Shooter',src="./img/starfox.jpg", 32,  8);
    const game5 = new VideoJuegos(5, 'Super Mario Kart', 'Carreras', src="./img/mariokart.jpg", 60, 5);
    const game6 = new VideoJuegos(6, 'Super Metroid', 'Accion', src="./img/metroid.jpg", 337, 1);


    //Array de objetos (productos)
    const Listado =  [game1, game2, game3, game4, game5, game6];
    let carrito = [];

        // Se agrega localstorage
        document.addEventListener('DOMContentLoaded', () => {
          if (localStorage.getItem('carrito')){
              carrito = JSON.parse(localStorage.getItem('carrito'))
              actualizarCarrito()
          }
      })


    //Se crean las cards de los productos al html
    const contProduct= document.querySelector('#productos')

    function crearHtml(){
    
    for (const producto of Listado) {

    let li = document.createElement('li')
        li.innerHTML = `<div class='card'>
                            <img src="${producto.caratula}"></img>
                            <h3 class="card__titulo">${producto.nombre}</h3>
                            <p>Precio <span class="card__precio">$${producto.precio}</span></p>
                            <button id="btn${producto.id}" class="btn btn-primary"> Agregar al Carrito </button>
                        </div>`;
                        
      contProduct.appendChild(li);


     
    //Captura el id del producto a travez del boton
    const boton = document.getElementById(`btn${producto.id}`);
    boton.addEventListener('click', () => {
      agregarAlCarrito(producto.id)

      
    });

  };
}
crearHtml()



//Puseha el producto al array carrito
const agregarAlCarrito = (id) => {
  const producto = Listado.find(producto => producto.id === id);
  carrito.push(producto);

  actualizarCarrito()
}

//Se agrega los productos al html carrito de manera dinamica
const contenedorCarrito = document.querySelector("#lista__carrito tbody")
function actualizarCarrito() {
  //Limpiar el HTML
  limpiarHTML ()
  //Recorre el carrito y genera html
  carrito.forEach(producto => { 
    const tr = document.createElement("tr");
    tr.innerHTML =  `<td>
                      ${producto.id}
                      </td>
                      <td>
                      <img class="conteiner__imagen"  src="${producto.caratula}"></img>
                      </td>
                      <td>
                      ${producto.nombre}
                      </td>
                      <td>
                      <strong>$${producto.precio}</strong>
                      </td>`
                      ; 

      contenedorCarrito.appendChild(tr);
         //Se agrega seteo
         localStorage.setItem('carrito', JSON.stringify(carrito))
      calcularTotalCompra();
      calcularTotalmodal();
   
  });
  
}

//Limpia el HTML para que no hayan duplicados
function limpiarHTML (){
  contenedorCarrito.innerHTML = "";
}

//Función para vaciar todo el carrito por completo
const vaciarCarrito = document.getElementById('vaciar__carrito');
vaciarCarrito.addEventListener('click', () => {
  carrito.splice(0, carrito.length);
  actualizarCarrito();
});

//Calcula el total de la compra
const totalCompra = document.getElementById('totalCompra');
const calcularTotalCompra = () => {
  let total = 0;
  carrito.forEach((producto) => {
    total += producto.precio;
  });
  totalCompra.innerHTML = total;

};

//Calcula el total de la compra (modal)
const modalTotal = document.getElementById('modal__total');
const calcularTotalmodal = () => {
  let total = 0;
  carrito.forEach((producto) => {
    total += producto.precio;
  });
  modalTotal.innerHTML = total;
  

};

//Funcion para borrar el Precio total cuando se vacia el carrito
function VaciarPrecio () {
  vaciarCarrito.addEventListener('click', () => {
    totalCompra.innerHTML = 0;
    actualizarCarrito();
    calcularTotalmodal();
  });
}
VaciarPrecio () 

//Registro de datos del modal
const formularioReset = document.getElementById("modal__formul");
const modalParCvv = document.getElementById("modal__par-4");
const modalParTarjeta = document.getElementById('modal__par-3');
const modalParDire = document.getElementById('modal__par-2');
const modalParNom = document.getElementById('modal__par-1');
const btnComprar = document.querySelector("#modal__btn");
const textCompra = document.getElementById("modal__compra");
const btnBorrar = document.getElementById("modal__btn-borrar");


//Cuando se hace click en comprar se ejecuta la funcion
btnComprar.addEventListener("click", ()=>{ 
  condicionForm()
});

function condicionForm() {

  let inputNombre = document.getElementById("modal__nombre").value
  let inputDire = document.getElementById("modal__dire").value
  let inputTarjeta = document.getElementById("modal__tarjeta").value
  let inputCvv = document.getElementById("modal__cvv").value
  const textCompraError = document.getElementById("modal__compra-error");

   //Condiciones en el formulario de compra

   if (inputNombre.length === 0) {
    modalParNom.innerText = "[ERROR] El campo debe tener un valor"
  }else if (inputNombre.length !== 0){
    modalParNom.innerText = " ";
  }

  if (inputDire.length === 0) {
    modalParDire.innerText = "[ERROR] El campo debe tener un valor"
   }else if (inputDire.length !== 0){
    modalParDire.innerText = " ";
   }

  if(isNaN(inputTarjeta) || inputTarjeta.length === 0){
    modalParTarjeta.innerText = "[ERROR] El campo debe tener un valor numerico"
  }else{
    modalParTarjeta.innerText = " ";
  }

  if(isNaN(inputCvv) || inputCvv.length === 0){
    modalParCvv.innerText = "[ERROR] El campo debe tener un valor numerico"
  }else{
    modalParCvv.innerText = " ";
    modalTotal.innerHTML = 0;
    totalCompra.innerHTML = 0;
    

  //Se valida si hay productos, el usuario no puede comrpar si no hay nada en el carrito
  if(carrito.length === 0){
    textCompraError.innerText = "Ingrese un producto";
    textCompra.innerText = "";
    }else{
    localStorage.removeItem("carrito");
    carrito.splice(0, carrito.length);
    textCompra.innerText = "GRACIAS POR SU COMPRA";
    textCompraError.innerText = " ";
    }
    actualizarCarrito();
  
  }

  
  
  formularioReset.reset();

}

//Borra los datos del formulario
function borrarFormulario() {
  btnBorrar.addEventListener("click", ()=>{
  
    textCompra.innerText = " ";
    formularioReset.reset();
   
  })
}
borrarFormulario()


//filtrar videojuego
function filtrarJuego(filtro) {
  let filtrado = Listado.filter((el) =>{
    return el.categoria.includes(filtro)
  });
  return filtrado

}

//Filtar por nombre
search.addEventListener("input", () => {
  let filtro = filtrarJuego(search.value)
  crearHtml(filtro)
});




