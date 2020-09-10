import { Validators, createFormValidation } from '@lemoncode/fonk';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';
import { iban } from '@lemoncode/fonk-iban-validator';
import {
  dayValidator,
  monthValidator,
  yearValidator,
} from './transfer.custom.validations';

import { laterDate } from '@lemoncode/fonk-later-date-validator';

const validationSchema = {
  field: {
    sourceAccount: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],

    iban: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: iban.validator,
        message: 'Iban no válido',
      },
    ],
    name: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    amount: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: positiveNumber.validator,
        message: 'Cantidad incorrecta',
      },
    ],
    concept: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    day: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: dayValidator,
      },
    ],
    month: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: monthValidator,
      },
    ],
    year: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: yearValidator,
      },
    ],
    date: [
      {
        validator: laterDate.validator,
        customArgs: {
          parseStringToDateFn: (value) => new Date(value),
          date: new Date(),
        },
        message: 'Fecha introducida incorrecta',
      },
    ],

    email: [
      {
        validator: Validators.email,
        message: 'Email incorrecto',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
