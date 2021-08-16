'use strict'
window.onload = function() {

  document.body.classList.add('hide');

  window.setTimeout(function() {
    document.body.classList.add('show');
    document.body.classList.remove('hide');
  }, 300);
}

document.querySelector('.hamburger-menu').addEventListener('click', function() {

  document.querySelector('.topbar').classList.toggle('change');

});

window.addEventListener('scroll', function() {
  document.querySelector('.hamburger-menu').style.position = 'absolute';
});