// Fichero para validar los campos en el HTML.

// Importamos el validador y el creador de formulario desde la libreria fonk de lemoncode.

import { Validators, createFormValidation } from '@lemoncode/fonk';

/* Creamos el esquema de validaciones (mirar viewModel de la pagina account.js)
  
  let account = {
  id: '',
  type: '',
  alias: '', };
*/

const validationSchema = {
  field: {
    type: [Validators.required], // Array donde le pasamos el validador requerido.
    alias: [Validators.required], // Array donde le pasamos el validador requerido.
  },
};

// Creamos formValidation y le pasamos el esquema de validaciones para crear el método.

export const formValidation = createFormValidation(validationSchema);

// Y lo exportamos.
