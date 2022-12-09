"use strict";

import { clearList } from "./clearList.js";

import { itens, loadItens } from "./loadItens.js";

export const addItem = (buttonAddCard, formSubmit) => {
 
 

  formSubmit.addEventListener("submit", (event) => {
    event.preventDefault();

    const itemName = event.target.elements["nameItem"];
    const idForm = event.target.getAttribute("id");
    
    

    const currentItem = {
      "name": itemName.value,
      "list": idForm
    };

    currentItem.id = itens[itens.length - 1] ? itens[itens.length - 1].id + 1 : 0;
    itens.push(currentItem);

    
      localStorage.setItem("itens", JSON.stringify(itens)); //localStorage só guarda strigs por isso precisei converter
      clearList();
      loadItens();

      buttonAddCard.value = "";
    
  });
};

/*itens.forEach((element, ulList) => {
  createItem(element, ulList);

  map - array
  reduce
  spread operator
  chaining operator
  operador ternário
  
}); */
