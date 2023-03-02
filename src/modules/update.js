/* eslint-disable import/no-cycle */
import items from './get.js';
import setItems from './set.js';
import refreshList from './refresh.js';

function updateItem(item, key, value) {
  item[key] = value;
  setItems(items);
  // eslint-disable-next-line no-use-before-define
  refreshList();
}

export default updateItem;