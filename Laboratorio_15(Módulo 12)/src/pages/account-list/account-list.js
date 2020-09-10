/* Fichero principal para la página de listas de cuentas del usuario. */

/*  getAccountList nos devuelve la lista de cuentas del servidor.
    addAccountRows recibe la lista y las pinta en el HTML.
    mapAccountListFromApiToViewModel modifica de una entidad (API) a la entidad que queremos tener en la vista del cliente(ViewModel).
    onUpdateField devuelve el valor instantáneo de cada Input.(Usado anteriormente en login.js)
    history contiene los métodos push, back y getParams que usaremos para la navegación. (Usado anteriormente en login.js)
*/

import { getAccountList } from './account-list.api';
import { addAccountRows } from './account-list.helpers';
import { mapAccountListFromApiToViewModel } from './account-list.mappers';
import { onUpdateField } from '../../common/helpers';
import { history } from '../../core/router';

/*   Account
 {
    id: string;
    iban: string;
    name: string;
    balance: string; // number -> string €
    lastTransaction: string // string -> DD/MM/YYYY 
  } 
*/

getAccountList().then((accountList) => {
  const viewModelAccountList = mapAccountListFromApiToViewModel(accountList);
  addAccountRows(viewModelAccountList);

  viewModelAccountList.forEach((account) => {
    onUpdateField(`select-${account.id}`, (event) => {
      const route = event.target.value;
      history.push(route);
    });
  });
});

/*  Obtenemos la lista de cuentas del servidor.
    Creamos viewModelAccountList y lo igualamos al mapeo de la lista de cuentas obtenida de la API.
    Y la ejecutamos con el método (addAccountRows) que las pinta en el HTML para que lo haga con la lista mapeada.
    Por cada cuenta mapeada hacemos onUpdateField.
    onUpdateField es un método que necesita de una id (`select-${account.id}` apunta a cada input de cada cuenta) para poder 
    atacar y luego la función que queremos ejecutar. Del evento que nos llega recuperamos el valor de lo que hemos elegido.
*/
