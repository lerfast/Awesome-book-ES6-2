import { DateTime } from './luxon.js';

export default function displayCurrentDate() {
  const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
  const dateContainer = document.getElementById('date');
  dateContainer.innerHTML = `<small>${currentDate}</small>`;
}
