import {
  onUpdateField,
  onSetError,
  onSubmitForm,
  onSetFormErrors,
} from '../../common/helpers';
import { onSave } from './transfer.api';
import { getAccountList } from '../account-list/account-list.api';
import {
  mapAccountExpFromApiToViewModel,
  mapAccountExpFromViewModelToApi,
} from './transfer.mappers';
import { setAccountOptions } from './transfer.helpers';
import { formValidation } from './transfer.validations';
import { history } from '../../core/router';

getAccountList().then((accountList) => {
  const viewModelAccountList = mapAccountExpFromApiToViewModel(accountList);
  setAccountOptions(viewModelAccountList, viewModelAccountList.sourceAccount);
});

let transfer = {
  sourceAccount: '',
  iban: '',
  name: '',
  amount: '',
  concept: '',
  day: '',
  month: '',
  year: '',
  date: '',
  notes: '',
  email: '',
};

onUpdateField('select-account', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    sourceAccount: value,
  };

  formValidation
    .validateField('select-account', transfer.sourceAccount)
    .then((result) => {
      onSetError('select - account', result);
    });
});

onUpdateField('iban', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    iban: value,
  };

  formValidation.validateField('iban', transfer.iban).then((result) => {
    onSetError('iban', result);
  });
});

onUpdateField('name', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    name: value,
  };

  formValidation.validateField('name', transfer.name).then((result) => {
    onSetError('name', result);
  });
});

onUpdateField('amount', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    amount: value,
  };

  formValidation.validateField('amount', transfer.amount).then((result) => {
    onSetError('amount', result);
  });
});

onUpdateField('concept', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    concept: value,
  };

  formValidation.validateField('concept', transfer.concept).then((result) => {
    onSetError('concept', result);
  });
});

onUpdateField('day', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    day: value,
    date: `${transfer.year}-${transfer.month}-${value}`,
  };

  formValidation.validateField('day', transfer.day).then((result) => {
    onSetError('day', result);
  });
});

onUpdateField('month', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    month: value,
    date: `${transfer.year}-${value}-${transfer.day}`,
  };

  formValidation.validateField('month', transfer.month).then((result) => {
    onSetError('month', result);
  });
});

onUpdateField('year', (event) => {
  const value = event.target.value;
  transfer = {
    ...transfer,
    year: value,
    date: `${value}-${transfer.month}-${transfer.day}`,
  };

  formValidation.validateField('year', transfer.year).then((result) => {
    onSetError('year', result);
  });
});

onUpdateField('notes', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, notes: value };
});

onUpdateField('email', (event) => {
  const value = event.target.value;
  transfer = { ...transfer, email: value };

  formValidation.validateField('email', transfer.email).then((result) => {
    onSetError('email', result);
  });
});

onSubmitForm('transfer-button', () => {
  formValidation.validateForm(transfer).then((result) => {
    onSetFormErrors(result);
    const transferApi = mapAccountExpFromViewModelToApi(transfer);
    if (result.succeeded) {
      onSave(transferApi).then(() => {
        history.back();
      });
    }
  });
});
