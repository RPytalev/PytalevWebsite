'use strict'
window.onload = function () {
  var spinner = document.querySelector('.spinner');
  spinner.style.visibility = 'visible';
  document.body.classList.add('hide');
  window.setTimeout(function () {
    spinner.style.visibility = 'hidden';
    document.body.classList.add('show');
    document.body.classList.remove('hide');
  }, 300);
};