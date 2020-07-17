const MyPromise = new Promise((resolve, reject) => {
  const currentDay = new Date().getDate();

  if (currentDay === 1) {
    reject("Esta aplicacion no se puede utilizar el día 1");
  } else if (currentDay < 15) {
    setTimeout(function () {
      alert("Promesa 1 finalizada");
      resolve("Hola, estamos en la segunda quincena del mes");
    }, 3000);
  } else {
    resolve("Hola, estamos en la primera quincena del mes");
  }
});

MyPromise.then((result) => {
  const mySecondPromise = new Promise((resolve) => {
    setTimeout(function () {
      resolve("La promesa se ha devuelto correctamente: " + result);
    }, 2000);
  });

  return mySecondPromise;
}).then((result2) => {
  alert(result2);
});

MyPromise.catch((error) => {
  alert("Se ha producido un error: " + error);
});
