'use strict'
window.onload = function () {
  let spinner = document.querySelector('.spinner');
  let container = document.querySelector('.container');
  spinner.style.display = 'flex';
  container.classList.add('hide');
  window.setTimeout(function () {
    spinner.style.display = 'none';
    container.classList.add('show');
    container.classList.remove('hide');
  }, 700);
};