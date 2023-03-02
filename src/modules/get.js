/** @format */

function getItems() {
  const value = localStorage.getItem('todos') || '[]';

  return JSON.parse(value);
}

const items = getItems();

export default items;