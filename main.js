//registro de usuario (simula una base de datos, lo cual se iria guardando en el array cada usuario que se registre, al finalizar la simulacion ver la cosnola donde deberia aparecer el usuario registrado dentro del array)

alert("Por favor registrese en la web")


let nomUser = prompt("Ingrese su nombre");
let telUser = prompt("Ingrese su telefono");
let emailUser = prompt("Ingrese su email");


    function Usuarios(nombre, telefono, email){
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;

    }

const user1= new Usuarios(nomUser, telUser, emailUser);
const usuarios = [user1];


const agregarUsuarios = [];


    function CarrgarUsuario(arr, user1) {
        arr.push(user1);
    }

    CarrgarUsuario(agregarUsuarios, user1)

console.log(agregarUsuarios);



// Bienvenida a la web

    function Bienvenida ( nomUser){
        alert("Hola " +  nomUser + "!,  Bienvenido/a a la pagina de videojuegos retro");
    }

Bienvenida(nomUser);


//Se declaran Variables

let resultado = 0;
let cantidad = 0;
let total = 0;


// Simula con el alert el index del marketplace

alert("Disponemos de esta lista de videjuegos, escriba el nombre como se muestra en la lista para agregarlo al carrito:\n \n 1) Super Mario World \n 2) Castlevania \n 3) Zelda \n 4) Star Fox \n 5) Mario Kart \n 6) Super Metroid");

//Filtrado en el array de videojuegos por genero

let filtros = prompt("¡Si lo desea consulte los generos de videojuegos!, te ayudamos, -Plataforma, -Shooter, -Accion, -Aventura, -Carreras o aprete ENTER para seguir")


// Funcion para buscar y agregar videojuegos, hace una operacion para darle al usuario el total del carrito.

let entrada = prompt("Seleccione un videojuego para el carrito. Escriba  ok para finalizar la compra");

    function Carrito () {

        while( entrada != "ok"){
            switch (entrada) {
                case "Super Mario World":
                    cantidad = parseInt(prompt("Cuantos titulos queres comprar?"));
                    alert("Se agrego al carrito " + cantidad + " titulo/s de Super Mario World");
                    if (resultado <= cantidad) {
                    total += (cantidad * SuperMarioWorld.precio);

                    alert("El valor de su carrito es de $" + total);
                    }
                    
                    break;
                case "Castlevania":
                    cantidad = parseInt(prompt("Cuantos titulos queres comprar?"));
                    alert("Se agrego al carrito " + cantidad + " titulo/s de Castlevania");
                    if (resultado < cantidad) {
                    total += (cantidad * Castlevania.precio);

                    alert("El valor de su carrito es de $" + total);
                    }
                    
                    break;    
                case "Zelda":
                    cantidad = parseInt(prompt("Cuantos titulos queres comprar?"));
                    alert("Se agrego al carrito " + cantidad + " titulo/s de Zelda");
                    if (resultado < cantidad) {
                    total += (cantidad * Zelda.precio);

                    alert("El valor de su carrito es de $" + total);
                    }
                    
                    break;
                case "Star Fox":
                    cantidad = parseInt(prompt("Cuantos titulos queres comprar?"));
                    alert("Se agrego al carrito " + cantidad + " titulo/s de Star Fox");
                    if (resultado < cantidad) {
                    total += (cantidad * StarFox.precio);

                    alert("El valor de su carrito es de $" + total);
                    }
                    
                    break;
                case "Mario Kart":
                    cantidad = parseInt(prompt("Cuantos titulos queres comprar?"));
                    alert("Se agrego al carrito " + cantidad + " titulo/s de Mario Kart");
                    if (resultado < cantidad) {
                    total += (cantidad * MarioKart.precio) ;

                    alert("El valor de su carrito es de $" + total);
                    }

                    break;
                case "Super Metroid":
                    cantidad = parseInt(prompt("Cuantos titulos queres comprar?"));
                    alert("Se agrego al carrito " + cantidad + " titulo/s de Super Metroid");
                    if (resultado < cantidad) {
                    total += (cantidad * SuperMetroid.precio) ;

                    alert("El valor de su carrito es de $" + total);
                    }

                    break;
                default:
                    alert("El videojuego no esta en la lista")
                    
            }

            function CarrgarJuego(arr, entrada) {
                arr.push(entrada);
            }
            
            CarrgarJuego(CarritoFinal, entrada)
        

        
                entrada = prompt("Seleccione otro videojuego para el carrito. Escriba ok para finalizar la compra");
            
        }
                 
    }

    
//Carga los productos al array "CarritoFinal"

const CarritoFinal = []
console.log(CarritoFinal);


// funcion que da el total de la compra

    function Sumar (){

        let TotalCarrito = total;
        alert("El total de la compra es de:  $" +TotalCarrito);

    }


//Se simula un formulario adentro del carrito de compras para finalizar la compra

    function Finalizar (){

        if( entrada == "ok"){
            alert("Ingrese los datos de su tarjeta de credito, para finalizar la compra. ")
        }else{
            false;           
        }
        


        prompt("Ingrese su Nombre");
        prompt("Ingrese su dirección de facturación");
        let tarjeta = parseInt(prompt("Ingrese el numero de la tarjeta de credito, Precione 0 para cancelar"));
        let cvv =  parseInt(prompt("Ingrese el cvv, Precione 0 para cancelar"));
    


            
                while(tarjeta != "0"){

                    if(!isNaN(tarjeta) && !isNaN(cvv)){
                        alert("Gracias por su compra");
                        break;
                    }else{
                        alert("Datos no validos");
                    }

                    tarjeta = parseInt(prompt("Ingrese el numero de la tarjeta de credito, Precione 0 para cancelar"));
                    cvv =  parseInt(prompt("Ingrese el cvv, Precione 0 para cancelar"));
                }
                
        
    }





//Listado de objetos (productos)
    function VideoJuegos(nombre, genero, formato, jugadores, precio, stock){
        this.nombre = nombre;
        this.genero = genero;
        this.formato = formato;
        this.jugadores = jugadores;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
    
    }
    
    
    const SuperMarioWorld = new VideoJuegos("Super Mario World", "Plataforma", "Snes", "1 jugador", 50, 10);
    const Castlevania= new VideoJuegos("Castlevania", "Plataforma", "Snes", "1 jugador", 250, 6);
    const Zelda= new VideoJuegos("Zelda", "Aventura", "Snes", "1 jugador", 300, 2);
    const StarFox= new VideoJuegos("Star Fox", "Shooter", "Snes", "1 jugador", 200, 8);
    const MarioKart= new VideoJuegos("Mario Kart", "Carreras", "Snes", "1 jugador, 4 jugadores", 522, 5);
    const SuperMetroid= new VideoJuegos("Super Metroid", "Accion", "Snes", "1 jugador", 350, 1);
    

    const Listado =  [SuperMarioWorld, Castlevania, Zelda, StarFox, MarioKart, SuperMetroid]



Carrito ();
Sumar()
Finalizar();




