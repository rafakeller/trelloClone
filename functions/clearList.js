"use strict"


export const clearList = ()=>{
  const itemList = document.querySelectorAll("[data-list]");
  for (let i = 0; i < itemList.length; i++) {
    const list = itemList[i];
    list.innerHTML = "";
  }
}