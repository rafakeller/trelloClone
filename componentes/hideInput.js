"use strict";



export const hideInput = (addCard, deleteButton) => {
  

  deleteButton.onclick = () => {
    const elementoAvo = deleteButton.parentElement.parentNode;
    elementoAvo.remove();

    addCard.style.display = "inline";
  };
};

export const deleteInputList = (inputButton)=>{
  inputButton.classList.remove("inputTitleList")
}