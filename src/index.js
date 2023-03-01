/** @format */
import './style.css';

const USER_INPUT = document.getElementById('input');
const ITEMS_CONTAINER = document.querySelector('.items');
const ITEM_TEMPLATE = document.querySelector('.itemTemplate');

function getItems() {
  const value = localStorage.getItem('todos') || '[]';

  return JSON.parse(value);
}

const items = getItems();

function setItems() {
  const itemsJson = JSON.stringify(items);
  localStorage.setItem('todos', itemsJson);
}

function addItems() {
  items.push({
    description: USER_INPUT.value,
    completed: false,
    index: items.length + 1,
  });

  setItems();
  // eslint-disable-next-line no-use-before-define
  refreshList();
}

function updateItem(item, key, value) {
  item[key] = value;
  setItems(items);
  // eslint-disable-next-line no-use-before-define
  refreshList();
}

function refreshList() {
  // sort items array
  items.sort((a, b) => a.index - b.index);

  ITEMS_CONTAINER.innerHTML = '';

  items.forEach((item) => {
    const itemElement = ITEM_TEMPLATE.content.cloneNode(true);
    const descriptionInput = itemElement.querySelector('.item-description');
    const completedInput = itemElement.querySelector('.input');

    descriptionInput.textContent = item.description;
    completedInput.checked = item.completed;

    descriptionInput.addEventListener('change', () => {
      updateItem(item, 'description', item.description);
    });

    completedInput.addEventListener('change', () => {
      updateItem(item, 'completed', completedInput.checked);
    });

    ITEMS_CONTAINER.append(itemElement);
  });
}

refreshList();

function removeItem() {
  const deleteButtons = document.querySelectorAll('.task i');
  deleteButtons.forEach((btn, id) => {
    btn.addEventListener('click', (e) => {
      items.splice(id, 1);
      e.target.parentElement.remove();
      setItems();
    });
    btn.index = id + 1;
    setItems();
  });
}

removeItem();

function clearInput() {
  USER_INPUT.value = '';
}

USER_INPUT.addEventListener('keyup', (e) => {
  const userValue = USER_INPUT.value.trim();
  if (e.key === 'Enter' && userValue) {
    addItems();
    clearInput();
  }
});
