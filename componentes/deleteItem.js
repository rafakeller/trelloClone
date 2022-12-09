"use strict";

import { itens } from "../functions/loadItens.js";


export const deleteItem = (item, id) => {
  item.remove();

  itens.splice(
    itens.findIndex((elemento) => elemento.id === id),1 );

  localStorage.setItem("itens", JSON.stringify(itens));
};
