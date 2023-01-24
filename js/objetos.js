//Constructor de productos
class VideoJuegos {
  constructor(id, nombre, categoria, caratula, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.caratula = caratula;
    this.precio = precio;
    this.stock = stock;
  }
}

//Creo productos y los almaceno en el array Listado:
const game1 = new VideoJuegos(1, 'Super Mario World', 'plataforma', "./img/supermario.jpg",  160, 1),
      game2 = new VideoJuegos(2, 'Castlevania', 'plataforma', "./img/castlevania.jpg", 250, 1),
      game3 = new VideoJuegos(3, 'Zelda','aventura', "./img/zelda.jpg", 79,  2),
      game4 = new VideoJuegos(4, 'Star Fox','shooter', "./img/starfox.jpg", 32,  1),
      game5 = new VideoJuegos(5, 'Super Mario Kart', 'carreras', "./img/mariokart.jpg", 60, 1),
      game6 = new VideoJuegos(6, 'Super Metroid', 'accion', "./img/metroid.jpg", 337, 1),
      game7 = new VideoJuegos(7, 'Aladín','plataforma', "./img/aladin.jpg", 87,  3),
      game8 = new VideoJuegos(8, 'TMNT', 'plataforma', "./img/tmnt.jpg", 250, 1),
      game9 = new VideoJuegos(9, 'Street Fighter II', 'lucha', "./img/streetfighters.jpg", 200, 1),
      game10 = new VideoJuegos(10, 'Killer Instinct','lucha', "./img/ki.jpg", 60,  2),
      game11 = new VideoJuegos(11, 'Batman Returns', 'accion', "./img/batman.jpg", 149, 1),
      game12 = new VideoJuegos(12, 'The lion king', 'aventura', "./img/tlk.jpg", 282, 1),
      game13 = new VideoJuegos(13, 'X-MEN: Mutant Apocalypse','accion', "./img/xmen.jpg", 91,  1),
      game14 = new VideoJuegos(14, 'Donkey Kong Country', 'plataforma', "./img/dkk.jpg", 60, 1),
      game15 = new VideoJuegos(15, 'EarthBound', 'rol', "./img/eb.jpg", 1000, 1);

//Array de objetos (productos)
const Listado = [
  game1,
  game2,
  game3,
  game4,
  game5,
  game6,
  game7,
  game8,
  game9,
  game10,
  game11,
  game12,
  game13,
  game14,
  game15,
];

let carrito;




