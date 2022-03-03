'use strict';

// Create constructor for cards which will then seperate out the cards for indexing and local storage. Allowing us track times completed.
let mentalCards =[];
let physicalCards = [];
let cardType = 'none';
let cardSubType = 'none';
const head  = document.getElementByTagName('head');
const link  = document.createElement('link');
const title = document.getElementById('title');
let cardChoice = NaN;

// DOM REFERENCES 

let myMain = document.getElementById('main'); //Is this correct for where 

//constructor function moved to own js files for card decks

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
function cssChange(){
if (cardType === 'physical'){
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/physical.css';
    link.media = 'all';
    head.appendChild(link);
}
  else if (cardType == 'mental') {
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'css/mental.css';
    link.media = 'all';
    head.appendChild(link);
  }
}

function aspectTitleChange(){
  while(title.firstChild){
    title.removeChild(title.firstChild);
  }
  let h2El = document.createElement('h2');
  h2El.textContent = `What aspect of your ${cardType} wellness do you want to improve today?`;
}

function aspectMainChange(){
  let appPoint = document.getElementById('mission');
  while(appPoint.firstChild){
    appPoint.removeChild(appPoint.firstChild);
  }
  let buttons = document.getElementById('buttons');
  while(buttons.firstChild){
    buttons.removeChild(buttons.firstChild);
  }
  if (cardType === 'mental'){

  let buttonOneEl = document.createElement('button');
  buttonOneEl.name = "selfEsteem";
  buttonOneEl.type = "submit";
  buttonOneEl.textContent = 'Self Esteem';
  buttons.appendChild(buttonOneEl);
  }
  else if (cardType === 'physical'){

  let buttonTwoEl = document.createElement('button');
  buttonTwoEl.name = "nutrition";
  buttonTwoEl.type = "submit";
  buttonTwoEl.textContent = 'Nutrition';
  buttons.appendChild(buttonTwoEl);
  }
}

//event handler for wellness option
function handleOption(event){
  let optionClicked = event.target.name;
  cardType = optionClicked;
  aspectTitleChange();
  aspectMainChange();
  cssChange();
}

//event handler for aspect of wellness option chosen
function handleAspect(event){
  let aspectClicked = event.target.name;
  cardSubType = aspectClicked;
// next step: selected aspect takes you to three cards of sub-category and user selects

}

//event handler for what card has been clicked
function handleClick(event){
  let cardClicked = event.target.alt;
//card clicked flips displays tasks
}

// (stretch goal) event handler for if activity was completed
function handleButton(event){
  let buttonClicked = event.target.name;
}

ment-phys.addEventListener('click', handleOption);
/*elementID*/.addEventListener('click', handleAspect);
/*elementId*/.addEventListener('click', handleClick);
/*elementId*/.addEventListener('click', handleButton);
