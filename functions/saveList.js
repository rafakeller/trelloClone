"use strict";

import { list} from "./loadList.js";

export const saveList = (listTitle) => {
  

  const currentList = {
    "title": listTitle.value,
  };

  list.push(currentList);

  localStorage.setItem("list", JSON.stringify(list));
};

//talvez seja aqui q eu coloque o id relacional