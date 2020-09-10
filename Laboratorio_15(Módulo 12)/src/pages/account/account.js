/* Fichero principal para la página de cuenta (Página muy parecida a login.js ) */

import {
  onUpdateField, // Devuelve el valor instantáneo de cada Input.
  onSubmitForm, // Éste método nos devuelve un callback al hacer click en el elemento HTML elegido por la id.
  onSetError, // Método que mediante la id y el tipo de error nos devuelve un mensaje concreto.
  onSetFormErrors, // Método que setea todos los errores del formulario.
  onSetValues, // Función privada que recibe los valores y con el nombre del campo saca de que elemento es.
} from '../../common/helpers';

import { formValidation } from './account.validations'; // Importamos el método que contiene el esquema de validaciones de los campos del objeto.

import { history } from '../../core/router'; // El método history contiene las acciones de navegación push y back. Tambien contiene getParams, pero sirve para obtener datos de la URL.

import { getAccount, updateAccount, insertAccount } from './account.api'; // Fichero que obtiene las acciones de get, put y push para la cuenta de cliente.

import {
  // Métodos de mapeo desde la API hacia ViewModel y vicevérsa.
  mapAccountFromApiToViewModel,
  mapAccountFromViewModelToApi,
} from './account.mappers';

const params = history.getParams(); // getParams es un método que coge el parámetro que buscamos en la URL utilizando los metodos de javascript, más info en history.js

const isEditMode = Boolean(params.id); // Creamos una constante que me diga si es modo edición o no viendo si  tiene valor el parámetro id.
//  (Boolean te dice si es verdadero o falso, si existe ese parámetro estamos en modo edición)

/* A continuación usamos la comprobación (isEditMode) para que, si estamos en 
   modo edición, cambie el comportamiento de la página.
   Por lo tanto, si está en modo edición, usamos el mismo identificador del usuario en la URL (params.id).

*/

if (isEditMode) {
  getAccount(params.id).then((apiAccount) => {
    account = mapAccountFromApiToViewModel(apiAccount);
    onSetValues(account);
  });
}

// Modelo de la vista (viewModel)
let account = {
  id: '',
  type: '',
  alias: '',
};

onUpdateField('type', (event) => {
  // Recogemos el valor de la id "type" y recogemos el evento para
  const value = event.target.value; // poder conseguir el valor que el usuario está seleccionando.
  account = {
    // Para hacerlo inmutable hacemos Spread y solo cambiamos el tipo (type).
    ...account,
    type: value,
  };

  /* Cuando cambie el valor del tipo validamos el campo, pasandole el id ('type') y el valor (account.type).
     Usamos validateField, método que inicialmente recuperamos de fonk en createFormValidation ( fichero account.validations.js)
     Nos devuelve una promesa con el resultado de la validación, y le aplicamos el método (onSetError, necesita el id y 
     el resultado) que nos pinta en el HTML si hay algun error. 
  */

  formValidation.validateField('type', account.type).then((result) => {
    onSetError('type', result);
  });
});

// Repetimos la misma acción con alias.

onUpdateField('alias', (event) => {
  const value = event.target.value;
  account = {
    ...account,
    alias: value,
  };
  formValidation.validateField('alias', account.alias).then((result) => {
    onSetError('alias', result);
  });
});

/* El método onSave actualizara o guardará la información en una cuenta nueva
   dependiendendo de isEditMode o no cogiendo los datos mapeados del viewModel
   para actualizarlos o insertarlos correctamente en la API.
*/

const onSave = () => {
  const apiAccount = mapAccountFromViewModelToApi(account);
  return isEditMode ? updateAccount(apiAccount) : insertAccount(apiAccount);
};

onSubmitForm('save-button', () => {
  formValidation.validateForm(account).then((result) => {
    // Validamos el formulario entero y le aplicamos onSetFormErrors para
    onSetFormErrors(result); // que nos pinte error en el HTML en el caso de que no sea succeeded el seteo de errores del formulario.
    if (result.succeeded) {
      // Si el resultado es succeeded, llamamos al método para guardar, que recibirá
      // la cuenta mapeada para la API y al ejecutarse usamos history.back()
      // para navegar hacia atrás como fin de la acción en ese menú.
      onSave().then((apiAccount) => {
        history.back();
      });
    }
  });
});

/* Account {
    id.string;
    type:string;
    alias. string; // name -> alias
}
*/
