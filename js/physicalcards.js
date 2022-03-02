'use strict';

let nutritionCardList = [/*'card1', 'card2', 'card3', 'card4', 'card5'*/];
let nutritionDeck = [];
//Constructor function for self-esteem cards

function NutritionCard(name, fileExtension = '.png') {
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.alt = `${name}`;
  this.subType = 'physical';
  this.completed = 0;
  nutritionDeck.push(this);
}

function createNutritionDeck(){
  for (let i = 0; i < nutritionCardList.length; i++){
    new NutritionCard(nutritionCardList[i]);
  }
  console.log(nutritionDeck);
  physicalCards.push(nutritionDeck);
}
createNutritionDeck();
