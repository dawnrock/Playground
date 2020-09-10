export const dayValidator = ({ value }) => {
  const parseValue = parseInt(value) > 0 && parseInt(value) <= 31;

  return {
    succeeded: parseValue,
    message: parseValue ? '' : 'Introduce un día correcto',
  };
};

export const monthValidator = ({ value }) => {
  const parseValue = parseInt(value) > 0 && parseInt(value) <= 12;

  return {
    succeeded: parseValue,
    message: parseValue ? '' : 'Introduce un mes correcto',
  };
};

export const yearValidator = ({ value }) => {
  const parseValue = parseInt(value) >= 2020 && parseInt(value) < 2022;

  return {
    succeeded: parseValue,
    message: parseValue ? '' : 'Introduce un año correcto',
  };
};
