// Empezamos importando la hoja de estilos como dice el ejercicio.

import "./styles.css";

// Importamos las funciones createCharacter y showCharacter mediante la extracción de ./utils.js en Utils.
import * as Utils from "./utlis.js";

// Importamos las funciones getCharacters y getCharactersById mediante la extracción de ./data-business.js en DataBusiness.
import * as DataBusiness from "./data-business.js";

// Para empezar usamos la función getCharacters() para obtener la promesa(datos). Hemos creado la const divRoot igualandola al elemento
// "root" de nuestro HTML que contiene la palabra Loading, la única razon por la que hemos creado esta constante es precisamente
// para eliminar la palabra que nos viene predefinida en el HTML cuando termine de cargar el primer bucle.
// Creamos las constante nodeBreaking, que será el nodo/objeto donde agregaremos los personajes.

// El siguiente paso será crear el bucle que vaya iterando por cada objeto(characterCount) obtenido de la llamada datos.
// Creamos la constante node, donde guardaremos el resultado de la función (createCharacter) de cada objeto introducido (characterCount)

// La siguiente promesa nos sirve para la segunda parte del ejercicio, que al hacer click en uno de los nodos que hemos dibujado en nuestro
// HTML nos devuelva una lista más detallada(showCharacter). Para ello debemos asignar una función el evento .onclick a nuestra constante node.
// Dentro de la función onclick importaremos la función getCharactersById de utils.js y le añadimos como parámetro de entrada
// characterCount.char_id. De esta manera obtenemos el array del personaje directamente en la primera llamada, ya que lo unico que necesitabamos
// en la función getCharactersById era una id. El siguiente paso de la promesa será pintarlo mediante showCharacter.

// Debemos ir añadiendo al array vacío creado (nodeBreaking) cada itreación del bucle en node para poder pintarla en nuestro HTML.
// Cerramos el bucle borrando el elemento divRoot, que contenía la palabra loading.

// Y para terminar creamos el bucle (enumera of nodeBreaking) en el que pintaremos en el div "root" del HTML cada personaje
// guardado en nodeBreaking.

DataBusiness.getCharacters().then((datos) => {
  const divRoot = document.getElementById("root");
  const nodeBreaking = [];
  for (let characterCount of datos) {
    const node = Utils.createCharacter(characterCount);

    node.onclick = function () {
      DataBusiness.getCharactersById(characterCount.char_id).then((datos2) => {
        Utils.showCharacter(datos2);
      });
    };

    nodeBreaking.push(node);
    divRoot.innerHTML = "";
  }

  for (let enumera of nodeBreaking) {
    document.getElementById("root").append(enumera);
  }
});
