"use strict";

import {
  addInputBox,
  buttonAddTitle,
  writteTitle,
} from "../componentes/addInputBox.js";

import { createList} from "./createList.js";
import { saveList } from "./saveList.js";

export const addListButton = document.querySelector("[data-addList]");
 


export const addList = () => {

  
  addListButton.addEventListener("click", () => {
    addInputBox(addListButton);

    const addTitle = document.querySelector(".addButton");
    
 
    addTitle.onclick = () => {

        if(writteTitle.value !== ""){
          createList(writteTitle.value);
          saveList(writteTitle);
          writteTitle.value = ""; //só p nao deixar o nome da lista  ali no input depois de ser adicionada
        }
      
      
    };
  });
};
// buttonAddTitle.onclick = () => {
//   listContent.innerHTML = showButtonAddCard();
// };
