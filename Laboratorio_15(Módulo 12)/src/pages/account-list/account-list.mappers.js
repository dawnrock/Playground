/*
  Este fichero se encarga del mapeo (.map) de los datos obtenidos del servidor.
  Vamos a crear los métodos que van a coger la entidad de origen y la van 
  a transformar en la entidad de destino.
*/

export const mapAccountListFromApiToViewModel = (accountList) => {
  return accountList.map((account) => mapAccountFromApiToViewModel(account)); // Por cada cuenta obtenida del mapeo de accountList usamos el mapeador que creamos abajo.
};

/*
  Iniciamos exportando mapAccountListFromApiToViewModel para ver claramente 
  en el início del fichero que es los que estamos haciendo, no repercute en la
  ejecución estar al princípio del fichero.
*/

const mapAccountFromApiToViewModel = (account) => {
  return {
    id: account.id,
    iban: account.iban,
    name: account.name,
    balance: `${account.balance} €`,
    lastTransaction: new Date(account.lastTransaction).toLocaleDateString(),
  };
};

/* 
  Creamos mapAccountFromApiToViewModel que es el método que moldea la cuenta para usarla en mapAccountListFromApiToViewModel
  con el array creado con .map de la lista obtenida de accountList.
*/
