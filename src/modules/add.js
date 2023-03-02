/* eslint-disable import/no-cycle */
/** @format */
import USER_INPUT from '../index.js';
import items from './get.js';
import setItems from './set.js';
import refreshList from './refresh.js';

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

export default addItems;
