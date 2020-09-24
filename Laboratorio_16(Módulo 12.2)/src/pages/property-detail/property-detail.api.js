import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

const urlEquipments = `${process.env.BASE_API_URL}/equipments`;

const urlContact = `${process.env.BASE_API_URL}/contact`;

export const getApiProperty = (id) =>
  Axios.get(`${url}/${id}`).then(({ data }) => data);

export const getApiEquipment = () =>
  Axios.get(urlEquipments).then(({ data }) => data);

export const postContact = (contact) =>
  Axios.post(urlContact, contact).then(({ data }) => data);
