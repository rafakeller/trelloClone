"use strict";

import { deleteInputBox } from "./deleteInputBox.js";
import { deleteItem } from "./deleteItem.js";

export const deleteItemButton = (id) => {
  const buttonXis = document.createElement("button");
  buttonXis.classList.add("deleteButton");
  buttonXis.innerText = "x";

  

  buttonXis.onclick = () => {
    const elementoPai = buttonXis.parentNode;
    const elementoAvo = buttonXis.parentNode.parentElement;

    if (elementoPai.classList[0] === "item") {
      deleteItem(elementoPai, id);
    } else {
      deleteInputBox(elementoAvo);
    }
  };

  return buttonXis;
};
