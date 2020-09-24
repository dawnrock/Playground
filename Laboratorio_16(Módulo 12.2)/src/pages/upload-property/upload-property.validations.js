import { Validators, createFormValidation } from '@lemoncode/fonk';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';
import { arrayRequired } from '@lemoncode/fonk-array-required-validator';

const validationSchema = {
  field: {
    title: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    notes: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    email: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.email,
        message: 'Email no váildo',
      },
    ],
    phone: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: {
          pattern: /^(6|7|8|9)\d{8}$/,
        },

        message: 'Teléfono incorrecto',
      },
    ],
    price: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: positiveNumber.validator,
        message: 'Precio incorrecto',
      },
    ],
    address: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    city: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    province: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    squareMeter: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: positiveNumber.validator,
        message: 'Número incorrecto',
      },
    ],
    rooms: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: positiveNumber.validator,
        message: 'Número incorrecto',
      },
    ],
    bathrooms: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: positiveNumber.validator,
        message: 'Número incorrecto',
      },
    ],
    locationUrl: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: {
          pattern: /^(http|https|ftp)\:\/\/[a-z0-9\.-]+\.(([a-z]{2,4})+)*/,
        },
        message: 'Introduce una ubicación válida.',
      },
    ],
    mainFeatures: [
      {
        validator: arrayRequired.validator,
        customArgs: { minLength: 1 },
        message: 'Campo requerido',
      },
    ],
    equipments: [
      {
        validator: arrayRequired.validator,
        customArgs: { minLength: 1 },
        message: 'Campo requerido',
      },
    ],
    images: [
      {
        validator: arrayRequired.validator,
        customArgs: { minLength: 1 },
        message: 'Campo requerido',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
