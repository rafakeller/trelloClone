"use strict";

import { deleteItemButton } from "./deleteItemButton.js";


export const inputDiv = document.createElement("div");
export const writteTitle = document.createElement("input");
export const buttonAddTitle = document.createElement("button");
const modal = document.querySelector("[data-modal]")

export const addInputBox = (buttonAddList) => {
  buttonAddList.style.display = "none";

  writteTitle.classList.add("writteTitle");
  writteTitle.type = "text";
  writteTitle.placeholder = "Insira o título da lista...";


  inputDiv.classList.add("inputAppear");
   const buttonDiv = document.createElement("div");
  

  

  buttonAddTitle.classList.add("addButton");
  buttonAddTitle.innerText = "Adicionar Lista";

  modal.appendChild(inputDiv);
  inputDiv.appendChild(buttonDiv);
  inputDiv.appendChild(writteTitle);
  buttonDiv.appendChild(buttonAddTitle);
  buttonDiv.appendChild(deleteItemButton(inputDiv));
};
