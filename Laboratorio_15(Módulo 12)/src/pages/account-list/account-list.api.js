// Creamos este fichero para hacer la llamada al servidor

import Axios from 'axios';

// Necesitamos la ruta de la api + /account-list para acceder a la lista de cuentas del servidor.

const url = `${process.env.BASE_API_URl}/account-list`;

// Exportamos el método que obtiene la lista de cuentas.

export const getAccountList = () =>
  Axios.get(url).then((response) => {
    return response.data;
  });
