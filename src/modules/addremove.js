/* eslint-disable import/no-cycle */
/**
 * eslint-disable no-use-before-define
 *
 * @format
 */

import USER_INPUT from '../index.js';
import removeItem from './remove.js';

const ITEMS_CONTAINER = document.querySelector('.items');

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

function updateItem(item, key, value) {
  item[key] = value;
  setItems(items);
}

function refreshList() {
  sort();

  ITEMS_CONTAINER.innerHTML = '';

  items.forEach((item) => {
    const itemElement = document.createElement('li');
    itemElement.classList.add('task');
    itemElement.innerHTML = `
          <input class="input" type="checkbox" name="checkbox" id="one">
          <input type="text" class="item-description">
          <i class="fa-solid fa-trash"></i>
    `;
    const descriptionInput = itemElement.querySelector('.item-description');
    const completedInput = itemElement.querySelector('.input');

    descriptionInput.value = item.description;
    completedInput.checked = item.completed;

    descriptionInput.addEventListener('change', () => {
      updateItem(item, 'description', descriptionInput.value);
    });

    completedInput.addEventListener('change', () => {
      updateItem(item, 'completed', completedInput.checked);
    });

    ITEMS_CONTAINER.append(itemElement);
  });
  removeItem();
  setItems();
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

function clearInput() {
  USER_INPUT.value = '';
}

export {
  addItems, refreshList, clearInput, sort, setItems,
};

export default items;