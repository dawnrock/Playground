const getRoomWord = (rooms) => {
  return rooms > 1 ? 'habitaciones' : 'habitación';
};
const getBathrooms = (bathrooms) => {
  return bathrooms > 1 ? 'baños' : 'baño';
};

const getEquipments = (propertyIds, equipmentsList) => {
  let equipmentContainer = '';
  equipmentContainer = propertyIds.map(function (obj) {
    const equipmentClient = equipmentsList.find(
      (element) => element.id === obj
    );
    return equipmentClient.name;
  });
  return equipmentContainer;
};

export const mapPropertyFromApiToViewModel = (property, equipmentsList) => {
  return {
    images: property.images,
    city: property.city,
    title: property.title,
    rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
    squareMeter: `${property.squareMeter}m2`,
    bathrooms: `${property.bathrooms} ${getBathrooms(property.bathrooms)}`,
    notes: property.notes,
    price: `${property.price.toLocaleString()} €`,
    mainImage: Array.isArray(property.images) ? property.images[0] : '',
    locationUrl: property.locationUrl,
    mainFeatures: property.mainFeatures,
    equipments: getEquipments(property.equipmentIds, equipmentsList),
  };
};

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 10);

// console.log(found);
