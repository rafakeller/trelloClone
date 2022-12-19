"use strict"

import { addTitle } from "../componentes/addTitle.js";
import { addCard } from "./addCard.js";

export const createList = (title) => {
  const listContent = document.querySelector("[data-content]");
  
  
  const modalList = document.createElement("div");
  modalList.classList.add("list_box");

  const titlePlace = document.createElement("h3");
  titlePlace.classList.add("title_h3");

  const modalItens = document.createElement("div");
  modalItens.classList.add("modalItens");
  modalItens.dataset.modalBox = "";

  const list = document.createElement("ul");
  list.setAttribute("id", `${title}`)
  list.classList.add("list");
  list.dataset.list = ""; //armazenado os itens

  const form = document.createElement("form");
  form.setAttribute("id", `${title}`);
  form.classList.add("form");
  form.dataset.form = ""; //formulario

  const addCardButton = document.createElement("button");
  addCardButton.classList.add("plus");
  addCardButton.innerText = "+  Adicionar um cartão";
  addCardButton.id = "plus";

  listContent.appendChild(modalList);
  modalList.appendChild(titlePlace);
  modalList.appendChild(modalItens);
  modalItens.appendChild(list);
  modalItens.appendChild(form);
  modalItens.appendChild(addCardButton);
  
  addTitle(title, titlePlace);
  
  addCard( addCardButton, form);

  
};


// return `<div class="list_box">
//           <h3 class="title_h3">cu</h3>

//           <div class="list_modalBox" data-modalBox>
//             <ul class="list" data-list></ul>
//             <form action="" class="form" data-form></form>
//             <button class="plus" data-add>+  Adicionar um cartão</button>
//           </div>

//         </div>`;
