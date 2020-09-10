// Fichero para los métodos de mapeo.

/* mapAccountFromApiToViewModel mapea la información introducida (account)
   del API hacia el HTML (viewModel).
*/

export const mapAccountFromApiToViewModel = (account) => {
  return {
    ...account,
    alias: account.name,
  };
};

/* mapAccountFromViewModelToApi mapea la información introducida (account)
   del HTML (viewModel) hacia la API.
*/

export const mapAccountFromViewModelToApi = (account) => {
  return {
    ...account,
    name: account.alias,
  };
};
