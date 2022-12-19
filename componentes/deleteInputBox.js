"use strict"

import { addListButton } from "../functions/addList.js"

export const deleteInputBox = (divAvo)=>{
  divAvo.remove()
  addListButton.style.display = "inline";
}