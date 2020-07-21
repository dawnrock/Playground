import axios from "axios";

function getCharacters() {
  return axios
    .get("https://www.breakingbadapi.com/api/characters")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      document.write("Se ha producido un error en la llamada a la API");
    });
}

function getCharactersById(id) {
  return axios
    .get("https://www.breakingbadapi.com/api/characters/" + id)
    .then((response) => {
      return response.data[0];
    });
}

export { getCharacters, getCharactersById };
