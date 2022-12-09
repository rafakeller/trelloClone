"use strict";

import { addItem } from "./addItem.js";
import { createInput } from "./createInput.js";



export const addCard = ( button, formItens) => {
  
  button.onclick = () => {
    
    
    createInput(button, formItens);

    
    addItem(button, formItens);
    
    
  };
};
 //1° Pq o botão só aparece em 1
 //2°Preciso identificar qual lista teve o botão clicado
 //REQUIRED