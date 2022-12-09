"use strict";

import { deleteItem } from "./deleteItem.js";

export const deleteItemButton = (id) => {
  const buttonXis = document.createElement("button");
  buttonXis.classList.add("deleteButton");
  buttonXis.innerText = "x";

  buttonXis.onclick = () => {
    deleteItem(buttonXis.parentNode, id);
  };

  return buttonXis;
};
