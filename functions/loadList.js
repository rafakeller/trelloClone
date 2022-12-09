"use strict";

import { createList } from "./createList.js";

export const list = JSON.parse(localStorage.getItem("list")) || [];

export const loadList = () => {
  list.forEach((element) => {
    createList(element.title);
  });
};
