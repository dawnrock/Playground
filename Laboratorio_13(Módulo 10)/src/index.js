console.log("////////////////////////////////////////");

// hasId
//Implementa una función llamada hasId que admita como parámetro un objeto y
//compruebe si dicho objeto tiene una propiedad llamada id (debe devolver booleano true / false ).

const object1 = {
  id: 1,
  name: "Antonio",
  surname: "Alba",
  age: 34,
};

const object2 = {
  name: "Manu",
  surname: "Alba",
  age: 33,
};

const object3 = {
  id: 3,
  name: "Marina",
  surname: "Alba",
  age: 26,
};

const hasId = ({ id }) => (id ? true : false);

console.log(hasId(object1));
console.log(hasId(object2));
console.log(hasId(object3));

console.log("////////////////////////////////////////");

// Implementa una función llamada head tal que, dado un array como entrada, devuelva el primer elemento.

const semana = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

const head = (array) => {
  const [firstItem] = array;
  console.log(firstItem);
};
head(semana);

console.log("////////////////////////////////////////");

// Implementa una función llamada tail tal que, dado un array como entrada, devuelva un nuevo array con todos los elementos menos el primero.

const tail = (array) => {
  const [, ...restItems] = array;
  console.log(restItems);
};
tail(semana);

console.log("////////////////////////////////////////");

// Implementa una función llamada swapFirstToLast tal que, dado un array como entrada,
//devuelva un nuevo array donde el primer elemento ha sido colocado en la última posición.
