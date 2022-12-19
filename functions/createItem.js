import { deleteItemButton } from "../componentes/deleteItemButton.js";

export const createItem = (item, itemList) => {
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerHTML = item.name;
  newItem.dataset.id = item.id;
  
  newItem.appendChild(deleteItemButton(item.id));
  itemList.appendChild(newItem); //por que...o content ta nulo kct
  
};
