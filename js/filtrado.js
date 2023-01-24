//Filtra los juegos por categoria
function filtrarJuego(filtro) {
  let filtrado = Listado.filter((producto) => {
    return producto.categoria.includes(filtro);
  });
  return filtrado;
}
//Filtra por categoria
search.addEventListener("input", () => {
  let filtro = filtrarJuego((search.value = search.value.toLowerCase()));
  crearHtml(filtro);
});
