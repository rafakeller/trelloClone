import { createItem } from "./createItem.js";

export const itens = JSON.parse(localStorage.getItem("itens")) || [];

export const loadItens = ()=>{

  itens.forEach(element => {
    const itemList = document.querySelectorAll("[data-list]");
    for (let i = 0; i < itemList.length; i++) {
      const list = itemList[i];
      
      const listId =  list.getAttribute("id");
      if(element.list === listId ){
        createItem(element, list);
      }
      
    }
    
  });
}

//pensar
