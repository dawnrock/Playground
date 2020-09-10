// Página para llamar al servidor, normalmente la llamamos  abcd.api.js.

import Axios from 'axios'; // Importamos desde Axios.(Importante tenerlo instalado en las dependencias)

const url = `${process.env.BASE_API_URL}/login`;
// Apuntamos a la URL del servidor que obtenemos de las variables de entorno.
// (  En el archivo ".env" podemos ver la URL real)
// /login es el fichero donde se compara IsValidLogin para devolvernos TRUE o FALSE desde el servidor.

export const isValidLogin = (
  login // Recogemos la información que hemos recuperado de los input y lanzamos una petición
) =>
  Axios.post(url, login).then((response) => {
    // al servidor mediante post, ya que vamos a introducir datos (Métodos get, post, put, delete, etc)
    return response.data; // El servidor nos devuelve un booleano como respuesta (true o false)
  });
