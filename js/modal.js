'use strict';

// const modalBtn = document.querySelector('.modal-btn');
// const modalBg = document.querySelector('.modal-bg');
// const modalClose = document.querySelector('.modal-close');
// const modalYes = document.querySelector('.modal-yes');
// const hideModal = document.getElementById('questionModal');

// modalBtn.addEventListener('click', handleModal);

// modalClose.addEventListener('click', function(){
//   modalBg.classList.remove('bg-active');
// });

// modalYes.addEventListener('click', function(){
//   modalBg.classList.remove('bg-active');
// });


// function handleModal(){
//   hideModal.style.visibility ='visible';
//   modalBg.classList.add('bg-active');
// }


// function handleButton(button){
//   button.style.visibility = 'visible';
// }

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}