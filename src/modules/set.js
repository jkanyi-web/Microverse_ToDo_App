/** @format */

import items from './get.js';

function setItems() {
  const itemsJson = JSON.stringify(items);
  localStorage.setItem('todos', itemsJson);
}

export default setItems;