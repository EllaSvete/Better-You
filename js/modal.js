'use strict';

const modalBtn = document.querySelector('.modal-btn');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');
const modalYes = document.querySelector('.modal-yes');

modalBtn.addEventListener('click', function(){
  modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click', function(){
  modalBg.classList.remove('bg-active');
});

modalYes.addEventListener('click', function(){
  modalBg.classList.remove('bg-active');
});


