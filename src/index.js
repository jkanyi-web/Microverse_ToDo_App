/* eslint-disable import/no-cycle */
/** @format */

import './style.css';
import {
  addItems,
  refreshList,
  clearInput,
  sort,
} from './modules/addremove.js';

const USER_INPUT = document.getElementById('input');

refreshList();

USER_INPUT.addEventListener('keyup', (e) => {
  const userValue = USER_INPUT.value.trim();
  if (e.key === 'Enter' && userValue) {
    addItems();
    clearInput();
    sort();
  }
});

export default USER_INPUT;
