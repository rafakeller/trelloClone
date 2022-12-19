"use strict";

import { addInputBox } from "../componentes/addInputBox.js";

export const addListButton = document.querySelector("[data-addList]");

export const addList = () => {
  addListButton.addEventListener("click", () => {
    addInputBox(addListButton);
  });
};
// buttonAddTitle.onclick = () => {
//   listContent.innerHTML = showButtonAddCard();
// };
