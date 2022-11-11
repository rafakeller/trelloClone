"use strict"

import { deleteItem } from "../functions/deleteItem.js"


export const deleteButton = (id) =>{
  const deleteButtonX = document.createElement("button")
  deleteButtonX.classList.add("deleteButton")
  deleteButtonX.innerText = "x"

  deleteButtonX.onclick = function(){
      deleteItem(this.parentNode, id)
  }

  return deleteButtonX
}

