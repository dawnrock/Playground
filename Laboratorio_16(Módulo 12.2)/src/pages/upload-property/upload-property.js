import {
  onUpdateField,
  onSetError,
  onSubmitForm,
  onSetFormErrors,
  onAddFile,
} from '../../common/helpers';

import {
  getSaleTypes,
  getEquipmentsList,
  getProvincesList,
  postProperty,
} from './upload-property.api';

import { formValidation } from './upload-property.validations';

import {
  formatCheckboxId,
  setCheckboxList,
  setOptionList,
  formatDeleteFeatureButtonId,
  onAddFeature,
  onRemoveFeature,
  onAddImage,
} from './upload-property.helpers';

Promise.all([getSaleTypes(), getEquipmentsList(), getProvincesList()]).then(
  ([saleTypeList, equipamentList, provincesList]) => {
    setOptionList(provincesList, 'province');
    setCheckboxList(saleTypeList, 'saleTypes');
    saleTypeList.map((itemSaleTypes) => {
      const checkBoxId = formatCheckboxId(itemSaleTypes);
      onUpdateField(checkBoxId, (event) => {
        const checked = event.target.checked;
        if (checked == true) {
          newProperty.saleType.push(itemSaleTypes.id);
        } else {
          const index = newProperty.saleType.indexOf(itemSaleTypes.id);
          newProperty.saleType.splice(index, 1);
        }
        //Hacemos un validador custom para introducir un mensaje de error si no se marca al menos una casilla.
        if (newProperty.saleType.length < 1) {
          onSetError('saleTypes', {
            succeeded: false,
            message: 'Es necesario marcar al menos una casilla',
          });
        } else {
          onSetError('saleTypes', { succeeded: true, message: '' });
        }
      });
    });

    setCheckboxList(equipamentList, 'equipments');
    equipamentList.map((itemEquipments) => {
      //cada itemEquipments representa un item del array
      const checkBoxId = formatCheckboxId(itemEquipments);
      onUpdateField(checkBoxId, (event) => {
        const checked = event.target.checked; //pongo checked porque quiero que se tenga en cuenta cuando hago check
        if (checked == true) {
          newProperty.equipmentIds.push(itemEquipments.id); //No olvidar que push añade algo a una array. Por ello, en el equipmentIds que contiene transferGeneralData, debo colocar un array vacío.
        } else {
          const index = newProperty.equipmentIds.indexOf(itemEquipments.id);
          newProperty.equipmentIds.splice(index, 1);
        }
      });
    });
  }
);

let newProperty = {
  title: '',
  notes: '',
  email: '',
  phone: '',
  price: '',
  saleTypes: [],
  address: '',
  city: '',
  province: '',
  squareMeter: '',
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  // newFeature: '',
  mainFeatures: [],
  equipments: [],
  images: [],
};

onUpdateField('title', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    title: value,
  };

  formValidation.validateField('title', newProperty.title).then((result) => {
    onSetError('title', result);
  });
});

onUpdateField('notes', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    notes: value,
  };

  formValidation.validateField('notes', newProperty.notes).then((result) => {
    onSetError('notes', result);
  });
});

onUpdateField('email', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    email: value,
  };

  formValidation.validateField('email', newProperty.email).then((result) => {
    onSetError('email', result);
  });
});

onUpdateField('phone', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    phone: value,
  };

  formValidation.validateField('phone', newProperty.phone).then((result) => {
    onSetError('phone', result);
  });
});

onUpdateField('price', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    price: value,
  };

  formValidation.validateField('price', newProperty.price).then((result) => {
    onSetError('price', result);
  });
});

onUpdateField('saleTypes', (event) => {
  const value = event.target.value;
  const isChecked = event.target.checked;
  newProperty = {
    ...newProperty,
    saleTypes: isChecked ? formatCheckboxId(value) : '',
  };

  formValidation.validateField('price', newProperty.price).then((result) => {
    onSetError('price', result);
  });
});

onUpdateField('address', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    address: value,
  };

  formValidation
    .validateField('address', newProperty.address)
    .then((result) => {
      onSetError('address', result);
    });
});

onUpdateField('city', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    city: value,
  };

  formValidation.validateField('city', newProperty.city).then((result) => {
    onSetError('city', result);
  });
});

onUpdateField('province', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    province: value,
  };

  formValidation
    .validateField('province', newProperty.province)
    .then((result) => {
      onSetError('province', result);
    });
});

onUpdateField('squareMeter', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    squareMeter: value,
  };

  formValidation
    .validateField('squareMeter', newProperty.squareMeter)
    .then((result) => {
      onSetError('squareMeter', result);
    });
});

onUpdateField('rooms', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    rooms: value,
  };

  formValidation.validateField('rooms', newProperty.rooms).then((result) => {
    onSetError('rooms', result);
  });
});

onUpdateField('bathrooms', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    bathrooms: value,
  };

  formValidation
    .validateField('bathrooms', newProperty.bathrooms)
    .then((result) => {
      onSetError('bathrooms', result);
    });
});

onUpdateField('locationUrl', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    locationUrl: value,
  };

  formValidation
    .validateField('locationUrl', newProperty.locationUrl)
    .then((result) => {
      onSetError('locationUrl', result);
    });
});

onUpdateField('newFeature', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    newFeature: value,
  };

  formValidation
    .validateField('newFeature', newProperty.newFeature)
    .then((result) => {
      onSetError('newFeature', result);
    });
});

onUpdateField('equipments', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    equipments: value,
  };

  formValidation
    .validateField('equipments', newProperty.equipments)
    .then((result) => {
      onSetError('equipments', result);
    });
});

onAddFile('add-image', (value) => {
  onAddImage(value);
  newProperty.image = value;
});

let btnNewFeature = document.getElementById('insert-feature-button');
btnNewFeature.addEventListener('click', (event) => {
  const featureInput = document.getElementById('newFeature').value;
  newProperty.mainFeatures.push(featureInput);
  onAddFeature(featureInput);
  const featureDelete = document.getElementById(
    `delete-${featureInput}-button`
  );
  featureDelete.addEventListener('click', (event) => {
    onRemoveFeature(featureInput);
    const index = newProperty.mainFeatures.indexOf(featureInput);
    newProperty.mainFeatures.splice(index, 1);
  });
});

onSubmitForm('save-button', () => {
  formValidation.validateForm(newProperty).then((result) => {
    onSetFormErrors(result);
    if (result.succeeded) {
      postProperty(newProperty).then(() => {
        history.back();
      });
    } else {
      console.log(result);
    }
  });
});
