/* eslint-disable import/no-cycle */
/** @format */
import items, { setItems, refreshList } from './addremove.js';

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

export default removeItem;