"use stricit";

import { createItem } from "./createItem.js";
import { inputItem } from "./createInput.js";
export const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach((element) => {
  createItem(element);
  
});

export const addItem = (formSubmit) => {
  formSubmit.addEventListener("submit", (event) => {
    event.preventDefault();

    const itemName = event.target.elements["nameItem"];

    const currentItem = {
      "name": itemName.value,
    };
    currentItem.id = itens[itens.length - 1] ? itens[itens.length - 1].id + 1: 0;
    
    if (inputItem.value == "") {
    } else {
      createItem(currentItem);

      itens.push(currentItem);
      
      
      localStorage.setItem("itens", JSON.stringify(itens)); //localStorage só guarda strigs por isso precisei converter

      inputItem.value = "";
    }
  });
};





