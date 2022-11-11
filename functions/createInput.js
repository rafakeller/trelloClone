"use strict";

import { deleteInput } from "../componentes/deleteInput.js";

export const inputItem = document.createElement("input");
const form = document.querySelector("[data-form]");

export const createInput = (addCard, form) => {
  
  addCard.style.display = "none"

  const modalInput = document.createElement("div")
  modalInput.classList.add("modalInput")

  inputItem.classList.add("input");
  inputItem.placeholder = "Insira um titulo para este cartão...";
  inputItem.name = "nameItem";
  inputItem.type = "text";
  
  const modalButton = document.createElement("div")
  modalButton.classList.add("modalButton")

  const addInputButton = document.createElement("input");
  addInputButton.classList.add("addButton");
  addInputButton.type = "submit";
  addInputButton.value = "Adicionar Cartão";

  const deleteInputButton = document.createElement("span")
  deleteInputButton.classList.add("deleteInput")
  deleteInputButton.dataset.deleteinput = "";
  deleteInputButton.innerText = "X"

  form.appendChild(modalInput);
  modalInput.appendChild(inputItem)
  modalInput.appendChild(modalButton)
  modalButton.appendChild(addInputButton)
  modalButton.appendChild(deleteInputButton)
  
  inputItem.focus()
  
  deleteInput(addCard)

 
};
