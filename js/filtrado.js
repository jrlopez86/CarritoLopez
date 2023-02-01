 //Filtra los juegos por categoria
 function filtrarJuego(filtro, data) {
  let filtrado = data.filter((producto) => {
    return producto.categoria.includes(filtro);
  });
  return filtrado;
}
