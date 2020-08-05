// El fichero utils.js nos viene dado en el ejercicio, de todas estas funciones sólo se exportarán dos, createCharacter y showCharacter.
// El orden de las funciones vienen ya dado.

// Cada función tiene una rama de nodos de los que extrae información:

// - createAvatar: Creamos la constante element donde guardamos la imagen -> document.createElement("img"), le asignamos mediante
//                 la extension .width el tamaño, con la extensión .className le asignamos la hoja de estilos en nuestro archivo .css.
//                 Mediante la extensión .src terminamos asignandole la ruta que queremos usar para obtener la imagen de la llamada, en este
//                 caso nos referimos al objeto img del parametro de entrada character. (character.img).

// - createRowText: Creamos la constante element donde guardamos el texto -> document.createElement("span") y a continuación le asignamos el
//                  hijo mediante el evento .append para que nos devuelva directamente el texto del objeto name de characters.
//

// createCharacter: Exportamos esta función para que nos devuelva un elemento HTML por cada personaje, que obtendrá una imagen(createAvatar) y
//                  un texto con el nombre (createRowText). Para crear esta información es necesario añadir como hijos las funciones anteriores
//                  mediante appendChild, ya que estamos tratando con nodos de información.
const createCharacter = (character) => {
  const element = document.createElement("div");

  const avatar = createAvatar(character);
  element.appendChild(avatar);

  const link = createRowText(character);
  element.appendChild(link);

  element.className = "character-row";

  return element;
};

const createAvatar = (character) => {
  const element = document.createElement("img");
  element.width = 150;
  element.className = "thumbnail";
  element.src = character.img;

  return element;
};

const createRowText = (character) => {
  const element = document.createElement("span");
  element.append(character.name);

  return element;
};

// createAvatarDetail: Esta función obtendrá la imagen de la misma manera que createAvatar, con la diferencia de que no le aplicaremos ninguna
//                     hoja de estilos para el marco y el tamaño será mayor.
const createAvatarDetail = (character) => {
  const element = document.createElement("img");
  element.width = 350;
  element.src = character.img;

  return element;
};

// showCharacter: Esta función lo primero que hará será mostrarnos por consola el parámetro de entrada. A continuación crearemos la constante
//                characterDetail donde asignaremos el div o emplazamiento del HTML mediante la id (document.getElementById("character-detail").
//                El siguiente paso será crear un string vacío donde iremos añadiendo los nodos mediante appendChild.
//                Añadimos el nodo createAvatarDetail para extraer la imagen de ese nodo, y posteriormente hacemos lo mismo con createParagraph,
//                la diferencia es que en este caso lo usamos tres veces, puesto que queremos obtener tres lineas diferentes de texto:
//                - createParagraph("Name: " + character.name) -> para obtener el nombre
//                - createParagraph("Birthday: " + character.birthday) -> para el cumpleaños
//                - createParagraph("Nickname: " + character.nickname) -> para el apodo.
const showCharacter = (character) => {
  console.log("character", character);
  const characterDetail = document.getElementById("character-detail");

  characterDetail.innerHTML = "";
  characterDetail.appendChild(createAvatarDetail(character));
  characterDetail.appendChild(createParagraph("Name: " + character.name));
  characterDetail.appendChild(
    createParagraph("Birthday: " + character.birthday)
  );
  characterDetail.appendChild(
    createParagraph("Nickname: " + character.nickname)
  );
  characterDetail.appendChild(
    createParagraph("Season: " + character.appearance)
  );
  characterDetail.appendChild(
    createParagraph("Occupation: " + character.occupation)
  );
};

// createParagraph: Esta función a diferencia de las demás admitirá como parámetro de entrada un texto. Y se encargará de crear un elemento "p",
//                 que se refiere únicamente a un tipo de estructura de texto. Y agregaremos como hijo el texto de entrada pintandolo en nuestro
//                  emplazamiento en el HTML.
const createParagraph = (text) => {
  const element = document.createElement("p");
  element.append(text);
  return element;
};

export { createCharacter, showCharacter };
