import { onSetValues } from '../../common/helpers';

import { addMovementRows } from './movements.helpers';

import { history } from '../../core/router';

import { getMovements } from './movements.api';

import { mapMovementListFromApiToViewModel } from './movements.mappers';

import { getAccount } from '../account/account.api';

import { mapAccountFromApiToViewModel } from '../account/account.mappers';

const params = history.getParams(); // getParams es un método que coge el parámetro que buscamos en la URL utilizando los metodos de javascript, más info en history.js

getAccount(params.id).then((apiAccount) => {
  const account = mapAccountFromApiToViewModel(apiAccount);
  onSetValues(account);
});

getMovements(params.id).then((apiMovement) => {
  const movement = mapMovementListFromApiToViewModel(apiMovement);
  addMovementRows(movement);
});
