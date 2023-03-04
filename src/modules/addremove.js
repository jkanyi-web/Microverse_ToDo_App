/* eslint-disable import/no-cycle */
/**
 * eslint-disable import/no-cycle
 *
 * @format
 */

/**
 * eslint-disable import/no-cycle
 *
 * @format
 */

/**
 * eslint-disable import/no-cycle
 *
 * @format
 */

/**
 * eslint-disable no-use-before-define
 *
 * @format
 */

import USER_INPUT from '../index.js';
import { refreshList } from './update.js';

function getItems() {
  const value = localStorage.getItem('todos') || '[]';

  return JSON.parse(value);
}

const items = getItems();

function setItems() {
  const itemsJson = JSON.stringify(items);
  localStorage.setItem('todos', itemsJson);
}

function sort() {
  items.sort((a, b) => a.index - b.index);
}

function addItems() {
  items.push({
    description: USER_INPUT.value,
    completed: false,
    index: items.length + 1,
  });

  setItems();
  refreshList();
}

function removeItem() {
  const deleteButtons = document.querySelectorAll('.fa-solid.fa-trash');
  deleteButtons.forEach((btn, id) => {
    btn.addEventListener('click', (e) => {
      items.splice(id, 1);
      e.target.parentElement.remove();
      items.forEach((item, index) => {
        item.index = index + 1;
      });
      setItems();
      refreshList();
    });
  });
}

function clearInput() {
  USER_INPUT.value = '';
}

export {
  addItems, clearInput, removeItem, sort, setItems,
};

export default items;
