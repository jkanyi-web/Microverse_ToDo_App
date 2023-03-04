/**
 *
 * @format
 */

import './style.css';
// eslint-disable-next-line import/no-cycle
import { refreshList, clearAllCompleted } from './modules/update.js';
import { addItems, clearInput, sort } from './modules/addremove.js';

const USER_INPUT = document.getElementById('input');

refreshList();
clearAllCompleted();

USER_INPUT.addEventListener('keyup', (e) => {
  const userValue = USER_INPUT.value.trim();
  if (e.key === 'Enter' && userValue) {
    addItems();
    clearInput();
    sort();
  }
});

export default USER_INPUT;
