export const mapAccountExpFromApiToViewModel = (accountList) => {
  return accountList.map((account) => mapAccountFromApiToViewModel(account)); // Por cada cuenta obtenida del mapeo de accountList usamos el mapeador que creamos abajo.
};

export const mapAccountExpFromViewModelToApi = (transfer) => {
  return mapAccountFromViewModelToApi(transfer); // Por cada cuenta obtenida del mapeo de accountList usamos el mapeador que creamos abajo.
};

const mapAccountFromApiToViewModel = (account) => {
  return {
    ...account,
    sourceAccount: account.id,
  };
};

const mapAccountFromViewModelToApi = (transfer) => {
  return {
    ...transfer,
    id: transfer.sourceAccount,
  };
};
