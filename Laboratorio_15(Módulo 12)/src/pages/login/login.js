// Página Principal.

import {
  onUpdateField, // Devuelve el valor instantáneo de cada Input.
  onSubmitForm, // Éste método nos devuelve un callback al hacer click en el elemento HTML elegido por la id.
  onSetError, // Método que mediante la id y el tipo de error nos devuelve un mensaje concreto.
  onSetFormErrors, // Método que setea todos los errores del formulario.
} from '../../common/helpers';
import { isValidLogin } from './login.api'; //Éste método se conecta a la URL y nos devuelve si es correcto ( Ver en login.middleware.js)
import { formValidation } from './login.validations'; // Éste método nos valida las propiedades del objeto login (user y password)
import { history, routes } from '../../core/router'; // Los métodos history y routes estan en la carpeta src/core/router
//  history contiene los métodos push, back y getParams que usaremos para la navegación.
//  routes contiene todas las rutas de navegación de nuestra página

let login = {
  user: '',
  password: '',
};

// El método onUpdateField recibe el id del elemento HTML y nos devuelve
// el evento (valor) del Input al teclearlo.

onUpdateField('user', () => {
  const value = event.target.value;
  //login.user = value;
  login = {
    // Al usar Spread (... ) copiamos el elemento entero y después actualizamos
    //el valor de la propiedad que necesitemos (user: value).
    ...login,
    user: value,
  };

  formValidation.validateField('user', login.user).then((result) => {
    // Usamos el método validateField de formValidation para verificar el campo user del objeto login cada vez que recibamos un evento del input 'user'.
    onSetError('user', result); // Y la función onSetError recoge el resultado del método anterior y nos pinta el tipo de error en el HTML.
  });
});

// Repetimos la misma acción para el Input de Password.
onUpdateField('password', () => {
  const value = event.target.value;
  // login.password = value
  login = {
    // Como vemos, al usar Spread mantenemos el valor de todas las propiedades de
    // login que obtenemos después de onUpdateField('user', ...)
    ...login,
    password: value,
  };
  formValidation.validateField('password', login.password).then((result) => {
    onSetError('password', result);
  });
});

const onNavigate = (isValid) => {
  // Creamos la función onNavigate que obtiene el metodo push de history y la dirección accountList de la libreria routes.
  if (isValid) {
    history.push(routes.accountList);
  } else {
    alert('Usuario y/o contraseña no válidos');
  }
};

onSubmitForm('login-button', () => {
  formValidation.validateForm(login).then((result) => {
    /* El método validateForm de formValidation nos valida el formulario                                                       
      entero que introduzcamos (login) cuando hagamos click en el botón,
      y lo aplicamos en el caso de que se pulse el botón antes de rellenar ningún campo.
    */
    onSetFormErrors(result); // Una vez que se ha resuelto la promesa con la información de los errores, nos pinta todos los errores de ese resultado.
    if (result.succeeded) {
      // Le ponemos la condición succeded ya que es uno de los campos del objeto result que nos devuelve.
      isValidLogin(login).then((isValid) => {
        // Si se cumple la condición pasamos a ejecutar isValidLogin de (login) para hacer la llamada a la api y comprobar que es correcta.
        onNavigate(isValid); // Y para terminar usamos onNavigate, que si recibe isValid navega hacia la siguiente página.
      });
    }
  });
});
