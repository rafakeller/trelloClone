"use strict";

import { titleList } from "./titleList.js";

export const addList = () => {
  const addListButton = document.querySelector("[data-addList]");

  addListButton.onclick = () => {
    addListButton.classList.add("inputTitleList");

    const writteTitle = document.createElement("input");
    writteTitle.classList.add("writteTitle");
    writteTitle.placeholder = "Insira o título da lista...";

    const addTitleList = document.createElement("button");
    addTitleList.classList.add("addButton");
    addTitleList.innerText = "Adicionar Lista";

    addListButton.appendChild(writteTitle);
    addListButton.appendChild(addTitleList);

    addTitleList.addEventListener("click", ()=>{
      titleList(writteTitle.value)
    })
  };

  
};
