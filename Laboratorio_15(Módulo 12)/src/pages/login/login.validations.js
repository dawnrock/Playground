/* Para este paso es necesario instalar la libreria fonk de lemoncode.
 Primero cortamos el servidor con CTRL + C, y posteriormente 
 tecleamos npm install @lemoncode/fonk --save para instalar el paquete.
 En esta librería se simplifica el formulario de validación, para ello creamos
 un esquema con los validadores de cada campo(input) y podemos elegir el mensaje
 que nos devuelve en caso de error. 
*/

import { Validators, createFormValidation } from '@lemoncode/fonk';
// Validators es el campo donde están todas las validaciones de la librería,
// y la función createFormValidation crea un nuevo formulario de validación.

/* validationSchema es la plantilla que usaremos para comparar los elementos
  del objeto login y sus propiedades para saber si son correctos.
*/
const validationSchema = {
  field: {
    user: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.email,
        message: 'Email no váildo',
      },
    ],
    password: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
