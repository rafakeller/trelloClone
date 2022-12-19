"use strict";

import { createList } from "../functions/createList.js";
import { saveList } from "../functions/saveList.js";
import { deleteItemButton } from "./deleteItemButton.js";

export const addInputBox = (buttonAddList) => {
  const modal = document.querySelector("[data-modal]");

  buttonAddList.style.display = "none";

  const writteTitle = document.createElement("input");
  writteTitle.classList.add("writteTitle");
  writteTitle.type = "text";
  writteTitle.placeholder = "Insira o título da lista...";

  const inputDiv = document.createElement("div");
  inputDiv.classList.add("inputAppear");
  const buttonDiv = document.createElement("div");

  const buttonAddTitle = document.createElement("button");
  buttonAddTitle.classList.add("addButton");
  buttonAddTitle.innerText = "Adicionar Lista";

  modal.appendChild(inputDiv);
  inputDiv.appendChild(buttonDiv);
  inputDiv.appendChild(writteTitle);
  buttonDiv.appendChild(buttonAddTitle);
  buttonDiv.appendChild(deleteItemButton(inputDiv));

  
  
  buttonAddTitle.onclick = () => {
    if (writteTitle.value !== "") {
      createList(writteTitle.value);
      saveList(writteTitle);
      
      writteTitle.value = ""; //só p nao deixar o nome da lista  ali no input depois de ser adicionada
    }

    
  };
};
