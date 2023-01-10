

    //Constructor de productos
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

    //Creo productos y los almaceno en el array Listado:
    const game1 = new VideoJuegos(1, 'Super Mario World', 'plataforma', src="./img/supermario.jpg",  160, 10);
    const game2 = new VideoJuegos(2, 'Castlevania', 'plataforma', src="./img/castlevania.jpg", 250, 6);
    const game3 = new VideoJuegos(3, 'Zelda','aventura', src="./img/zelda.jpg", 79,  2);
    const game4 = new VideoJuegos(4, 'Star Fox','shooter',src="./img/starfox.jpg", 32,  8);
    const game5 = new VideoJuegos(5, 'Super Mario Kart', 'carreras', src="./img/mariokart.jpg", 60, 5);
    const game6 = new VideoJuegos(6, 'Super Metroid', 'accion', src="./img/metroid.jpg", 337, 1);
    const game7 = new VideoJuegos(7, 'Aladín','plataforma',src="./img/aladin.jpg", 87,  3);
    const game8 = new VideoJuegos(8, 'TMNT', 'plataforma', src="./img/tmnt.jpg", 250, 2);
    const game9 = new VideoJuegos(9, 'Street Fighter II', 'lucha', src="./img/streetfighters.jpg", 200, 1);
    const game10 = new VideoJuegos(10, 'Killer Instinct','lucha',src="./img/ki.jpg", 60,  2);
    const game11 = new VideoJuegos(11, 'Batman Returns', 'accion', src="./img/batman.jpg", 149, 4);
    const game12 = new VideoJuegos(12, 'The lion king', 'aventura', src="./img/tlk.jpg", 282, 1);
    const game13 = new VideoJuegos(13, 'X-MEN: Mutant Apocalypse','accion',src="./img/xmen.jpg", 91,  7);
    const game14 = new VideoJuegos(14, 'Donkey Kong Country', 'plataforma', src="./img/dkk.jpg", 60, 6);
    const game15 = new VideoJuegos(15, 'EarthBound', 'rol', src="./img/eb.jpg", 1000, 1);


    //Array de objetos (productos)
    const Listado =  [game1, game2, game3, game4, game5, game6, game7, game8, game9, game10, game11, game12, game13, game14, game15];
    let carrito = [];

    // Se agrega localstorage y JSON
    document.addEventListener('DOMContentLoaded', () => {
      if (localStorage.getItem('carrito')){
          carrito = JSON.parse(localStorage.getItem('carrito'))
          actualizarCarrito()
      }
  })

    //Se crean las cards de los productos al html
    const contProduct= document.querySelector('#productos')

    function crearHtml(arr) {
      let li;
      contProduct.innerHTML="";
      for (const producto of arr) {
         li = document.createElement('li')
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
    crearHtml(Listado)
    

//Puseha el producto al array carrito
const agregarAlCarrito = (id) => {
  const producto = Listado.find(producto => producto.id === id);
  carrito.push(producto);

  actualizarCarrito()
}

//Se agrega los productos al carrito de manera dinamica
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
      //Seteo LS 
      localStorage.setItem('carrito', JSON.stringify(carrito))
      calcularTotalCompra();
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
const modalTotal = document.getElementById('modal__total');
const calcularTotalCompra = () => {
  let total = 0;
  carrito.forEach((producto) => {
    total += producto.precio;
  });
  totalCompra.innerHTML = total;
  modalTotal.innerHTML = total;
};

//Funcion para borrar el Precio total cuando se vacia el carrito
function VaciarPrecio () {
  vaciarCarrito.addEventListener('click', () => {
    localStorage.removeItem("carrito");
    totalCompra.innerHTML = 0;
    actualizarCarrito();
    calcularTotalCompra();
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
const textCompraError = document.getElementById("modal__compra-error");
const btnBorrar = document.getElementById("modal__btn-borrar");
const btnCerrar = document.getElementById('moda__btn-cerrar')

//Cuando se hace click en comprar se ejecuta la funcion
btnComprar.addEventListener("click", ()=>{ 
  condicionForm()
});

function condicionForm() {
  let inputNombre = document.getElementById("modal__nombre").value
  let inputDire = document.getElementById("modal__dire").value
  let inputTarjeta = document.getElementById("modal__tarjeta").value
  let inputCvv = document.getElementById("modal__cvv").value
 
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
  }

  //Se valida si hay productos, el usuario no puede comrpar si no hay nada en el carrito, y se valida si el usuario escribio los datos de la compra
  if((carrito.length === 0)){
    textCompraError.innerText = "Ingrese un producto";
    textCompra.innerText = "";
    }else if((inputCvv.length === 0) || (inputTarjeta.length === 0) || (inputDire.length === 0) || (inputNombre.length === 0) ){
    textCompraError.innerText = "Ingrese los datos";
    textCompra.innerText = "";
    }else{
      formularioReset.reset();
    localStorage.removeItem("carrito");
    carrito.splice(0, carrito.length);
    textCompra.innerText = "GRACIAS POR SU COMPRA";
    textCompraError.innerText = " ";
    }
    actualizarCarrito();
  

}

//Se borra el texto "Gracias por su compra e Ingresa un producto" al darle click a cerrar
btnCerrar.addEventListener('click', () =>{
  textCompra.innerText = " ";
  textCompraError.innerText = " ";
})

//Borra los datos del formulario
function borrarFormulario() {
  btnBorrar.addEventListener("click", ()=>{
    textCompra.innerText = " ";
    formularioReset.reset();
   
  })
}
borrarFormulario()

//Filtra los juegos por categoria
const search = document.querySelector("#search")
function filtrarJuego(filtro) {
  let filtrado = Listado.filter((producto) =>{
    return producto.categoria.includes(filtro)
  });
  return filtrado
}

//Llama a la funcion
crearHtml(Listado)
//Filtra por categoria 
search.addEventListener("input", () => {
  let filtro = filtrarJuego(search.value)
  crearHtml(filtro)
});







