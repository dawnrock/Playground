// Fichero donde exportamos los siguientes métodos:

/* insertAccount : recibe una cuenta, y apuntamos a la cuenta de la URL para insertar (.post)
   la información pasándole esa nueva cuenta.(Axios.post(`${url}/${account.id}`, account)) 
   Y cuando se resuelva nos devolvera los datos con el id ya generado en servidor.

  getAccount : método que recupera (.get) la información por el id. (data)

  updateAccount : método de actualizar (.put), le pasamos los datos nuevos que tiene la cuenta
  y se actualiza apuntando al id (account.id).
*/

import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/account`;

export const insertAccount = (account) =>
  Axios.post(`${url}/${account.id}`, account).then((response) => {
    return response.data;
  });

export const getAccount = (id) =>
  Axios.get(`${url}/${id}`).then((response) => {
    return response.data;
  });

export const updateAccount = (account) =>
  Axios.put(`${url}/${account.id}`, account).then((response) => {
    return response.data;
  });
