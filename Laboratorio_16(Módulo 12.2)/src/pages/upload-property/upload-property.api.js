import Axios from 'axios';

const urlSaleTypes = `${process.env.BASE_API_URL}/saleTypes`;

const urlEquipments = `${process.env.BASE_API_URL}/equipments`;

const urlProvinces = `${process.env.BASE_API_URL}/provinces`;

const urlProperties = `${process.env.BASE_API_URL}/properties`;

export const getSaleTypes = () =>
  Axios.get(urlSaleTypes).then(({ data }) => data);

export const getEquipmentsList = () =>
  Axios.get(urlEquipments).then(({ data }) => data);

export const getProvincesList = () =>
  Axios.get(urlProvinces).then(({ data }) => data);

export const postProperty = (newProperty) =>
  Axios.post(urlProperties, newProperty).then(({ data }) => data);
