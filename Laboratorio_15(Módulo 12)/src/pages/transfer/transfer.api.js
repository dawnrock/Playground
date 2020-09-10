import Axios from 'axios';

const url = `${process.env.BASE_API_URl}/transfer`;

export const onSave = (transfer) =>
  Axios.post(url, transfer).then(({ data }) => data);
