"use strict";



export const deleteInput = (addCard) => {
  const deleteForm = document.querySelector("[data-deleteinput]");

  deleteForm.onclick = () => {
    const elementoAvo = deleteForm.parentElement.parentNode;
    elementoAvo.remove();

    addCard.style.display = "inline";
  };
};

export const deleteInputList = (inputButton)=>{
  inputButton.classList.remove("inputTitleList")
}