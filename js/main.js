
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
  
    const game1 = new VideoJuegos(1, 'Super Mario World', 'Plataforma', src="./img/supermario.jpg",  50, 10);
    const game2 = new VideoJuegos(2, 'Castlevania', 'Plataforma', src="./img/castlevania.jpg", 250, 6);
    const game3 = new VideoJuegos(3, 'Zelda','Aventura', src="./img/zelda.jpg", 300,  2);
    const game4 = new VideoJuegos(4, 'Star Fox','Shooter',src="./img/starfox.jpg", 200,  8);
    const game5 = new VideoJuegos(5, 'Super Mario Kart', 'Carreras', src="./img/mariokart.jpg", 522, 5);
    const game6 = new VideoJuegos(6, 'Super Metroid', 'Accion', src="./img/metroid.jpg", 350, 1);


    //Array de objetos (productos)
    const Listado =  [game1, game2, game3, game4, game5, game6];
    let CarritoFinal = [];


    //Se crean las cards de los productos al html
    const contProduct= document.querySelector('#productos')

    for (const producto of Listado) {

    let li = document.createElement('li')
        li.innerHTML = `<div class='card'>
                            <img src="${producto.caratula}"></img>
                            <h3 class="card__titulo">${producto.nombre}</h3>
                            <p>Precio <span class="card__precio">$${producto.precio}</span></p>
                            <button id="btn${producto.id}" class="btn btn-primary"> Agregar al Carrito </button>
                        </div>`;
                        
      contProduct.appendChild(li);


     
    //Pinta en consolelog cada click que se hace en los botones "agregar carrito", y te devuelve el ID de cada videojuego
    const btnAgregarCarrito = document.getElementById(`btn${producto.id}`);

    btnAgregarCarrito.addEventListener('click', () => {
      CarritoFinal.push(`${producto.id} ${producto.nombre} ${producto.precio} `);

      console.log(CarritoFinal);
    });

    
    
  };

  
     
    //variables
    const contenedorCarrito = document.querySelector("#lista__carrito tbody")
 
  
    // Muestra el carrito de compras en el html
    
    for (const producto of CarritoFinal) {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>
                           ${producto.id}
                        </td>`;    
        
          contenedorCarrito.appendChild(tr);
                        
    }
     
    
    


   







