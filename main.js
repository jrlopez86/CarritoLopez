



// simulo con el alert el index del marketplace
alert("Disponemos de esta lista de videjuegos,   escriba el nombre para agregar al carrito:\n \n 1) Super Mario World \n 2) Castlevania \n 3) Zelda \n 4) Star Fox \n 5) Mario Kart \n 6) Super Metroid");

let entrada = prompt("Seleccione un videojuego para el carrito. Escriba  ok para finalizar la compra");




function Carrito () {

    let juegos = 200;
    let resultado = 0;
    let resultado2 = 0;
    let resultado3 = 0;
    let resultado4 = 0;
    let resultado5 = 0;
    let resultado6 = 0;
    
    

    while( entrada != "ok"){
        switch (entrada) {
            case "Super Mario World":
                let cantidad = parseInt(prompt("Cuantos titulos queres comprar?"));
                alert("Se agrego al carrito " + cantidad + " titulos de Super Mario World");
                if (resultado < cantidad) {
                resultado = resultado + (cantidad * juegos) ;


                alert("El valor es de $" + resultado);
                }
                
                        
                
                break;
            case "Castlevania":
                let cantidad2 = parseInt(prompt("Cuantos titulos queres comprar?"));
                alert("Se agrego al carrito " + cantidad2 + " titulos de Castlevania");
                if (resultado2 < cantidad2) {
                resultado2 = resultado2 + (cantidad2 * juegos) ;


                alert("El valor es de $" + resultado2);
                }
                
                
                break;    
            case "Zelda":
                let cantidad3 = parseInt(prompt("Cuantos titulos queres comprar?"));
                alert("Se agrego al carrito " + cantidad3 + " titulos de Zelda");
                if (resultado2 < cantidad3) {
                resultado3 = resultado3 + (cantidad3 * juegos) ;


                alert("El valor es de $" + resultado3);
                }
                
        
                break;
            case "Star Fox":
                let cantidad4 = parseInt(prompt("Cuantos titulos queres comprar?"));
                alert("Se agrego al carrito " + cantidad4 + " titulos de Star Fox");
                if (resultado4 < cantidad4) {
                resultado4 = resultado4 + (cantidad4 * juegos) ;


                alert("El valor es de $" + resultado4);
                }
                
                
                
                break;
            case "Mario Kart":
                let cantidad5 = parseInt(prompt("Cuantos titulos queres comprar?"));
                alert("Se agrego al carrito " + cantidad5 + " titulos de Mario Kart");
                if (resultado5 < cantidad5) {
                resultado5 = resultado5 + (cantidad5 * juegos) ;


                alert("El valor es de $" + resultado5);
                }6

                break;
            case "Super Metroid":
                let cantidad6 = parseInt(prompt("Cuantos titulos queres comprar?"));
                alert("Se agrego al carrito " + cantidad6 + " titulos de Super Metroid");
                if (resultado6 < cantidad6) {
                resultado6 = resultado6 + (cantidad6 * juegos) ;


                alert("El valor es de $" + resultado6);
                }


                break;
            default:
                alert("El videojuego no esta en la lista")
                 
        }
    
         entrada = prompt("Seleccione otro videojuego para el carrito. Escriba ok para finalizar la compra");
         
       

    }

            let total = resultado + resultado2 + resultado3 + resultado4 + resultado5 + resultado6;
            alert("El total de la compra es de:  $" +total);


            if( entrada == "ok"){
                alert("Ingrese los datos de su tarjeta de credito, para finalizar la compra. ")
            }else{
                false;           
            }


            
            
}










//Se simula un formulario adentro del carrito de compras para finalizar la compra
function Finalizar (){



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



Carrito ();
Finalizar();




