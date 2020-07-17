import axios from "axios";

axios
  .get("https://api.github.com/orgs/lemoncode/members")
  .then((response) => {
    return response.data;
  })
  .then((data) => {
    for (let item of data) {
      document.write(item.login);
    }
  })
  .catch((error) => {
    document.write("Se ha producido un error en la llamada a la API");
  });

// fetch("https://api.github.com/orgs/lemoncode/members")
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         for (item of data) {
//             document.write(item.login);
//         }

//     }).catch(error => {
//         document.write("Se ha producido un error en la llamada a la API")
//     });
