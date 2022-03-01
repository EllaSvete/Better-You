'use strict';

// Create constructor for cards which will then seperate out the cards for indexing and local storage. Allowing us track times completed.
let mentalCards =[];
let physicalCards = [];
let cardType = 'none';
let cardSubType = 'none';
const head  = document.getElementByTagName('head');
const link  = document.createElement('link');
let cardChoice = NaN;

// Contructor function for cards
function Cards(type, subType, fileExtension = 'png') {
  this.type = type;
  this.subType = subType;
  this.src = 'img/${name}.${fileExtension}';
  this.alt = '${name}';
  this.completed = 0; 
  if (this.type === 'mental') {
    mentalCards.push(this);
    console.log(mentalCards);
  }
  else if (this.type === 'physical'){
    physicalCards.push(this);
    console.log(physicalCards);
  }
}

//img loader for card back - if person clicks physical or mental ID cardback styling
//TODO: link to cardback ID in HTML 
function cardBackLoader() {
  cssChange();
  let cardBack = document.getElementById(/*TODO*/);
  if (cardType === 'physical') {
    cardBack.src = /*cardBack physical*/;
  } 
  else if (cardType === 'mental');{
    cardBack.src = /*CardBack mental*/;
    
  }
  console.log('card back loaded');
}

//CSS Loader Function 
//TODO: link physical and mental stylesheets
function cssChange();{
if (cardType === 'physical'){
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = /*physical stylesheet reference*/;
    link.media = 'all';
    head.appendChild(link);
}
  else if (cardtype == 'mental') {
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = /*mental stylesheet reference*/;
    link.media = 'all';
    head.appendChild(link);
  }
}

