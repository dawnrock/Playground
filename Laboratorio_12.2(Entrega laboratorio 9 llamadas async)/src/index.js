import "./styles.css";

import * as Utils from "./utlis.js";

import * as DataBusiness from "./data-business.js";

DataBusiness.getCharacters().then((datos) => {
  const divRoot = document.getElementById("root");
  const nodeBreaking = [];
  for (let characterCount of datos) {
    const node = Utils.createCharacterRow(characterCount);

    node.onclick = function () {
      DataBusiness.getCharactersById(characterCount.char_id).then((datos2) => {
        Utils.showCharacter(datos2);
      });
    };

    nodeBreaking.push(node);
    divRoot.innerHTML = "";
  }

  for (let enumera of nodeBreaking) {
    document.getElementById("root").append(enumera);
  }
});
