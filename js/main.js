//Variables
const contProduct= document.querySelector('#productos'),
      contenedorCarrito = document.querySelector("#lista__carrito tbody"),
      vaciarCarrito = document.getElementById("vaciar__carrito"),
      totalCompra = document.getElementById('totalCompra'),
      modalTotal = document.getElementById('modal__total');
      spinner = document.getElementById('spinner4');
 

// Se agrega localstorage y JSON (operador ternario OR)
document.addEventListener('DOMContentLoaded', () => {
  carrito = JSON.parse(localStorage.getItem('carrito')) || [];  actualizarCarrito() 
});

//Se crean las cards de los productos al html (Destructuring)
function crearHtml(arr) {
  let li;
  contProduct.innerHTML = "";
  for (const producto of arr) {
    const { caratula, nombre, precio, id } = producto;
    li = document.createElement("li");
    li.innerHTML = `<div class='card'>
                            <img src="${caratula}"></img>
                            <h3 class="card__titulo">${nombre}</h3>
                            <p>Precio <span class="card__precio">$${precio}</span></p>
                            <button id="btn${id}" class="btn__id btn btn-primary"> Agregar al Carrito </button>
                        </div>`;

    contProduct.appendChild(li);
    //Captura el id del producto a travez del boton
    const boton = document.getElementById(`btn${id}`);
    boton.addEventListener("click", () => {
      agregarAlCarrito(id, arr);

    });
  }
}
  
//Se agrega los productos al carrito de manera dinamica (Destructuring)
function actualizarCarrito() {
  //Limpiar el HTML
  limpiarHTML();
  //Recorre el carrito y genera html
  carrito.forEach((producto) => {
    const { caratula, nombre,stock, precio, id } = producto;
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>
                        <p class="mod" >${id}</p>
                      </td>
                      <td>
                        <img class="conteiner__imagen"src="${caratula}"></img>
                      </td>
                      <td>
                      <p class="mod" >${nombre}</p>
                      </td>
                      <td>
                      <p class="mod" >${stock}</p>
                      </td>
                      <td>
                      <p  class="mod" <strong>$${precio}</strong></p> 
                      </td>
                      <td>
                        <input id="borrar${id}" class="btn__residuos" type="image" src="./img/residuos.svg"/> 
                      </td>`;


    contenedorCarrito.appendChild(tr);
    //Seteo LS
    localStorage.setItem("carrito", JSON.stringify(carrito));
    calcularTotalCompra();

    vaciarCarrito.addEventListener("click", () => {
      producto.stock = 1
    });
    btnComprar.addEventListener("click", () => {
      producto.stock = 1
    });

    //Funcion parar borrar un producto del carrito
    const borrarId = document.getElementById(`borrar${id}`);
    borrarId.addEventListener("click", () => {
      producto.stock = 1
      carrito.splice(carrito.indexOf(producto), 1);
      totalCompra.innerHTML = 0;
      localStorage.removeItem("carrito");
      actualizarCarrito();
      calcularTotalCompra();
    });
  });
}

//Puseha el producto al array carrito y si un producto ya existe se acumula (se agrega Toastify)
const agregarAlCarrito = (id, data) => {
  const existe = carrito.some((producto) => producto.id === id);
  if (existe) {
    producto = carrito.map((producto) => {
      if (producto.id === id) {
        producto.stock++;
        toastifyAagregarProd(producto);
      }
    });
  } else {
    let producto = data.find((producto) => producto.id === id);
    carrito.push(producto);
    toastifyAagregarProd(producto);
  }
  actualizarCarrito();
};

//Limpia el HTML para que no hayan duplicados
function limpiarHTML (){
  contenedorCarrito.innerHTML = "";
}

//Función para vaciar todo el carrito por completo
vaciarCarrito.addEventListener("click", () => {
  carrito.length === 0 ? true : toastifyVaciarCarr();
  carrito.splice(0, carrito.length);
  totalCompra.innerHTML = 0;
  localStorage.removeItem("carrito");
  actualizarCarrito();
  calcularTotalCompra();
});

//Calcula el total de la compra
const calcularTotalCompra = () => {
  let total = 0;
  carrito.forEach((producto) => {
    total += producto.precio * producto.stock;
  });
  totalCompra.innerHTML = total;
  modalTotal.innerHTML = total;
};


//sweet alert
function success() {
  Swal.fire(
    'Gracias por tu compra',
    'Recibiras un email con la confirmación',
    'success'
  )
}
function error() {
  Swal.fire({
    icon: 'error',
    title: 'Agregue un Producto',
    text: 'Su carrito esta vacío',
  })
}
//Toastify
function toastifyVaciarCarr() {
  Toastify({
    text: "Se vacío el carrito",
    duration: 1500,
    gravity: "top",
    position: "left",
    style: {
      background: "linear-gradient(#ff0000, #ff0000)",
    },
    onClick: function () {},
  }).showToast();

}
function toastifyAagregarProd (producto) {
  Toastify({
    text: `"${producto.nombre} Se agrego al carrito"`,
    duration: 1500,
    position: "left",
    border: "1px solid red",
  }).showToast();
}

//simula conexion a basa de datos
setTimeout(() => {
  spinner.classList.add("off");
  //FETCH LOCAL (convierto mi array a un formato json)
  fetch("./data/data.json")
    .then((response) => response.json())
    .then((data) => {
      //Filtra por categoria
      search.addEventListener("input", () => {
      let filtro = filtrarJuego((search.value.toLowerCase()), data);
      crearHtml(filtro);
      });
  
      crearHtml(data);
    });
   
}, 1000);







