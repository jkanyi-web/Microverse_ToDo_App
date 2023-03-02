/** @format */
import items from './get.js';

function sort() {
  items.sort((a, b) => a.index - b.index);
}

export default sort;