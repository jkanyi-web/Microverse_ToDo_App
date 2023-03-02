/**
 * eslint-disable import/no-cycle
 *
 * @format
 */

/** @format */
import items from './get.js';
// eslint-disable-next-line import/no-cycle
import updateItem from './update.js';
import removeItem from './remove.js';
import sort from './sort.js';
import setItems from './set.js';
import makeEditable from './edit.js';

const ITEMS_CONTAINER = document.querySelector('.items');

function refreshList() {
  // sort items array
  sort();

  ITEMS_CONTAINER.innerHTML = '';

  items.forEach((item) => {
    const itemElement = document.createElement('li');
    itemElement.classList.add('task');
    itemElement.innerHTML = `
          <input class="input" type="checkbox" name="checkbox" id="one">
          <p class="item-description"></p>
          <i class="fa-solid fa-trash"></i>
    `;
    const descriptionInput = itemElement.querySelector('.item-description');
    const completedInput = itemElement.querySelector('.input');

    descriptionInput.textContent = item.description;
    descriptionInput.contentEditable = true;

    completedInput.checked = item.completed;

    descriptionInput.addEventListener('change', () => {
      updateItem(item, 'description', item.description);
    });

    completedInput.addEventListener('change', () => {
      updateItem(item, 'completed', completedInput.checked);
    });

    ITEMS_CONTAINER.append(itemElement);
  });
  // eslint-disable-next-line no-use-before-define
  removeItem();
  makeEditable();
  setItems();
}

export default refreshList;
