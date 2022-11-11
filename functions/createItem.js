import { deleteButton } from "../componentes/deleteButton.js";

const list = document.querySelector("[data-list]");

export const createItem = function (item) {
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerHTML = item.name;
  newItem.dataset.id = item.id;
  list.appendChild(newItem);
  
  newItem.appendChild(deleteButton(item.id));
  
  
  
};
