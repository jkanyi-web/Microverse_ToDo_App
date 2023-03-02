/* eslint-disable import/no-cycle */
/** @format */
import './style.css';
import addItems from './modules/add.js';
import refreshList from './modules/refresh.js';
import removeItem from './modules/remove.js';
import clearInput from './modules/clear.js';
import makeEditable from './modules/edit.js';

const USER_INPUT = document.getElementById('input');

refreshList();

USER_INPUT.addEventListener('keyup', (e) => {
  const userValue = USER_INPUT.value.trim();
  if (e.key === 'Enter' && userValue) {
    addItems();
    clearInput();
    removeItem();
    makeEditable();
  }
});

export default USER_INPUT;