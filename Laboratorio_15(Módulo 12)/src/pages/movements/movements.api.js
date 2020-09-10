import Axios from 'axios';

const url = `${process.env.BASE_API_URl}/movements`;

export const getMovements = (id) =>
  Axios.get(url, { params: { accountId: id } }).then((response) => {
    return response.data;
  });
