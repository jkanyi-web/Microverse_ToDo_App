/** @format */
import items from './get.js';
import setItems from './set.js';

function removeItem() {
  const deleteButtons = document.querySelectorAll('.fa-solid.fa-trash');
  deleteButtons.forEach((btn, id) => {
    btn.addEventListener('click', (e) => {
      items.splice(id, 1);
      e.target.parentElement.remove();
      setItems();
    });
  });
}

export default removeItem;