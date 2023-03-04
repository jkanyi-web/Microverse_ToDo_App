/**
 *
 * @format
 */

// eslint-disable-next-line import/no-cycle
import items, { setItems, removeItem, sort } from './addremove.js';

const ITEMS_CONTAINER = document.querySelector('.items');
const clear = document.querySelector('.container h3');

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

function clearAllCompleted() {
  clear.addEventListener('click', () => {
    function returnInComplete(arr) {
      return arr.completed === false;
    }

    const incompletedItems = items.filter(returnInComplete);

    incompletedItems.forEach((item, index) => {
      item.index = index + 1;
    });

    const finalList = JSON.stringify(incompletedItems);

    localStorage.clear();
    localStorage.setItem('todos', finalList);

    // eslint-disable-next-line no-restricted-globals
    location.reload();
  });
}

export { updateItem, refreshList, clearAllCompleted };
