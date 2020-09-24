import {
  getApiProperty,
  getApiEquipment,
  postContact,
} from './property-detail.api';
import { mapPropertyFromApiToViewModel } from './property-detail.mappers';
import { history } from '../../core/router';
import { setPropertyValues } from './property-detail.helpers';
import { formValidation } from './property-detail.validations';
import {
  onUpdateField,
  onSetError,
  onSubmitForm,
  onSetFormErrors,
} from '../../common/helpers';

const params = history.getParams();

Promise.all([getApiProperty(params.id), getApiEquipment()]).then(
  ([apiProperty, apiEquipment]) => {
    loadProperty(apiProperty, apiEquipment);
  }
);

const loadProperty = (apiProperty, apiEquipment) => {
  const viewModelProperty = mapPropertyFromApiToViewModel(
    apiProperty,
    apiEquipment
  );
  setPropertyValues(viewModelProperty);
};

let contact = {
  email: '',
  message: '',
};

onUpdateField('email', (event) => {
  const value = event.target.value;
  contact = {
    ...contact,
    email: value,
  };

  formValidation.validateField('email', contact.email).then((result) => {
    onSetError('email', result);
  });
});

onUpdateField('message', (event) => {
  const value = event.target.value;
  contact = {
    ...contact,
    message: value,
  };

  formValidation.validateField('message', contact.message).then((result) => {
    onSetError('message', result);
  });
});

onSubmitForm('contact-button', () => {
  formValidation.validateForm(contact).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded) {
      postContact(contact).then(() => {
        history.back();
      });
    }
  });
});
