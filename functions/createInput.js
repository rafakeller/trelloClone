"use strict";

import { hideInput } from "../componentes/hideInput.js";



export const createInput = (buttonAddCard, form) => {
  buttonAddCard.style.display = "none";

  const modalInput = document.createElement("div");
  modalInput.classList.add("modalInput");

  const input = document.createElement("input");
  input.classList.add("input"); //é o input
  input.placeholder = "Insira um nome para este cartão...";
  input.dataset.input = "";
  input.name = "nameItem";
  input.type = "text";
  
  input.focus();

  const modalButton_addCard = document.createElement("div");
  modalButton_addCard.classList.add("modalButton");

  const addNewItem = document.createElement("input"); //é um input botão kkkk só p eu poder colocar type=submit
  addNewItem.classList.add("addButton");
  addNewItem.type = "submit";
  addNewItem.value = "Adicionar Cartão";

  const hideInputButton = document.createElement("span");
  hideInputButton.classList.add("deleteInput");
  hideInputButton.dataset.deleteinput = "";
  hideInputButton.innerText = "X";

  form.appendChild(modalInput);
  modalInput.appendChild(input);
  modalInput.appendChild(modalButton_addCard);
  modalButton_addCard.appendChild(addNewItem);
  modalButton_addCard.appendChild(hideInputButton);

  

  hideInput(buttonAddCard, hideInputButton);
};
