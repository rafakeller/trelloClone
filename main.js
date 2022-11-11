"use strict"

import { addItem } from "./functions/addItem.js";
import { addList } from "./functions/addList.js";
import { createInput } from "./functions/createInput.js";



const addCard = document.querySelector("[data-add]");
const form = document.querySelector("[data-form]");

addCard.addEventListener("click", () => {
  
  createInput(addCard,form)
  addItem(form)

});

addList()



