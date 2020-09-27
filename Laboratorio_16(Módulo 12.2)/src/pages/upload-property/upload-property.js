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
  onAddFeature,
  onRemoveFeature,
  onAddImage,
} from './upload-property.helpers';

import { mapNewPropertyFromVMtoApi } from './upload-property.mappers';

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
  mainFeatures: [],
  equipments: [],
  images: [],
};

Promise.all([getSaleTypes(), getEquipmentsList(), getProvincesList()]).then(
  ([saleTypeList, equipmentList, provincesList]) => {
    setOptionList(provincesList, 'province');

    setCheckboxList(saleTypeList, 'saleTypes');

    setCheckboxList(equipmentList, 'equipments');
    setEvents(saleTypeList, 'saleTypes');
    setEvents(equipmentList, 'equipments');
  }
);

const addElement = (value, id) =>
  (newProperty = { ...newProperty, [id]: [...newProperty[id], value] });

const removeElement = (value, id) => {
  const ids = newProperty[id].indexOf(value);

  newProperty[id].splice(ids, 1);
};

const setEvents = (list, id) => {
  list.forEach((element) => {
    const ids = formatCheckboxId(element);
    onUpdateField(ids, (event) => {
      const value = event.target.value;
      event.target.checked ? addElement(value, id) : removeElement(value, id);
      console.log(newProperty);
    });
  });
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

// onUpdateField('equipments', (event) => {
//   const value = event.target.value;
//   newProperty = {
//     ...newProperty,
//     equipments: value,
//   };

//   formValidation
//     .validateField('equipments', newProperty.equipments)
//     .then((result) => {
//       onSetError('equipments', result);
//     });
// });

onAddFile('add-image', (value) => {
  onAddImage(value);
  newProperty.images = value;
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
      const propertyMapped = mapNewPropertyFromVMtoApi(newProperty);
      postProperty(propertyMapped).then(() => {
        history.back();
      });
    } else {
      console.log(result);
    }
  });
});
