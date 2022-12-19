"use strict";


export const hideInput = (addCard, hideInputButton) => {
  

  hideInputButton.onclick = () => {
    const elementoAvo = hideInputButton.parentElement.parentNode;
    elementoAvo.remove();

    addCard.style.display = "inline";
  };
  
};

