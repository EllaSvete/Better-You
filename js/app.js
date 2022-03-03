'use strict';

// Create constructor for cards which will then seperate out the cards for indexing and local storage. Allowing us track times completed.
let mentalCards = [];
let physicalCards = [];
let cardType = 'none';
let cardSubType = 'none';
let cardChoice = NaN;

// DOM REFERENCES 
const main = document.getElementById('main');
const title = document.getElementById('title');
const option = document.getElementById('button');
const aspect = document.getElementById('aspects');

//constructor function moved to own js files for card decks

//img loader for card back - if person clicks physical or mental ID cardback styling
//TODO: link to cardback ID in HTML 
function cardBackLoader() {
  cssChange();
  let cardBack = document.getElementById(/*TODO*/);
  if (cardType === 'physical') {
    cardBack.src = NaN;
  }
  else if (cardType === 'mental'); {
    cardBack.src = NaN;

  }
  console.log('card back loaded');
}

//CSS Loader Function 
//TODO: link physical and mental stylesheets
function cssChange() {
  const head = document.getElementById('head');
  const link = document.createElement('link');
  if (cardType === 'physical') {
    link.rel = 'stylesheet';
    link.type = 'text/css';
<<<<<<< HEAD
    link.href = 'css/physical.css';
    link.media = 'all';
=======
    link.href = './css/physical.css';
>>>>>>> 42b8e4cfa73747ec28e63094ce1aae7c09cb5dd8
    head.appendChild(link);
  }
  else if (cardType === 'mental') {
    link.rel = 'stylesheet';
    link.type = 'text/css';
<<<<<<< HEAD
    link.href = 'css/mental.css';
    link.media = 'all';
=======
    link.href = './css/mental.css';
>>>>>>> 42b8e4cfa73747ec28e63094ce1aae7c09cb5dd8
    head.appendChild(link);
  }
}

// Change to fram 2 of wireframe using JS to modify HTML
function aspectTitleChange() {
  //Remove title HTML children for replacing
  while (title.firstChild) {
    title.removeChild(title.firstChild);
  }
<<<<<<< HEAD
  let h2El = document.createElement('h2');
  h2El.textContent = `What aspect of your ${cardType} wellness do you want to improve today?`;
}

function aspectMainChange(){
  let appPoint = document.getElementById('mission');
  while(appPoint.firstChild){
=======
  //Replace header of Page
  let h1El = document.createElement('h1');
  h1El.textContent = `What aspect of your ${cardType} wellness do you want to improve today?`;
  title.appendChild(h1El);
}

// Change main body of frame 2
function aspectMainChange() {
  //Remove all children 
  let appPoint = document.getElementById('apppoint');
  while (appPoint.firstChild) {
>>>>>>> 42b8e4cfa73747ec28e63094ce1aae7c09cb5dd8
    appPoint.removeChild(appPoint.firstChild);
  }
  let buttons = document.getElementById('button');
  while (buttons.firstChild) {
    buttons.removeChild(buttons.firstChild);
  }
  let greeting = document.getElementById('main');
  while (greeting.firstChild) {
    greeting.removeChild(greeting.firstChild);
  }
  let question = document.getElementById('question');
  while (question.firstChild) {
    question.removeChild(question.firstChild);
  }
  if (cardType === 'mental') {
    //Repopulate Buttons with either mental or physical
    let buttonOneEl = document.createElement('button');
    buttonOneEl.name = 'selfEsteem';
    buttonOneEl.type = 'submit';
    buttonOneEl.textContent = 'Self Esteem';
    buttons.appendChild(buttonOneEl);
  }
  else if (cardType === 'physical') {

    let buttonTwoEl = document.createElement('button');
    buttonTwoEl.name = 'nutrition';
    buttonTwoEl.type = 'submit';
    buttonTwoEl.textContent = 'Nutrition';
    buttons.appendChild(buttonTwoEl);
  }
  let secondQuestion = document.createElement('p');
  secondQuestion.textContent = 'Here are a few things we can work on with you';
  question.appendChild(secondQuestion);
}

//Pick card to populate selection



//event handler for wellness option
function handleOption(event) {
  let optionClicked = event.target.value;
  cardType = optionClicked;
  aspectTitleChange();
  console.log('changed to aspect '+ cardType);
  cssChange();
  console.log(`Css style changed to ${cardType}`);
  aspectMainChange();
<<<<<<< HEAD
  cssChange();
=======
  console.log('main changed');
  console.log('cardType:', cardType);
  option.id = 'aspects';
>>>>>>> 42b8e4cfa73747ec28e63094ce1aae7c09cb5dd8
}

//event handler for aspect of wellness option chosen
function handleAspect(event){
  let aspectClicked = event.target.name;
  cardSubType = aspectClicked;
// next step: selected aspect takes you to three cards of sub-category and user selects

}

// //event handler for what card has been clicked
// function handleClick(event){
//   let cardClicked = event.target.alt;
// //card clicked flips displays tasks
// }

// // (stretch goal) event handler for if activity was completed
// function handleButton(event){
//   let buttonClicked = event.target.name;
// }

option.addEventListener('click', handleOption);
aspect.addEventListener('click', handleAspect);
// /*elementId*/.addEventListener('click', handleClick);
// /*elementId*/.addEventListener('click', handleButton);
