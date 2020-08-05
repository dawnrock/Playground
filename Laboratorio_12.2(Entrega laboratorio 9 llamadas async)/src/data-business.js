// Para hacer llamadas a API´s es necesario instalar AXIOS, de esa manera podremos importar los datos desde las URL´s.

import axios from "axios";

// Primero creamos una función para obtener los datos globales del array de personajes de breaking bad, lo que nos devolverá sera el objeto
// data de la respuesta.
function getCharacters() {
  return axios
    .get("https://www.breakingbadapi.com/api/characters")
    .then((response) => {
      return response.data;
    });
}

// La segunda función se encargará de devolvernos solo el personaje que le pasemos por el parámetro (id) ya que en nuestra primera promesa le
// estamos concatenando esa misma id en la URL de llamada. La respuesta será response.data[0], y que significa? Significa que está llamando al
// array completo del personaje puesto que cada personaje solo consta de un array [0].
function getCharactersById(id) {
  return axios
    .get("https://www.breakingbadapi.com/api/characters/" + id)
    .then((response) => {
      return response.data[0];
    });
}

export { getCharacters, getCharactersById };
