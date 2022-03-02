'use strict';

let selfEsteemCardList = [/*'card1', 'card2', 'card3', 'card4', 'card5'*/];
let selfEsteemDeck = [];
//Constructor function for self-esteem cards

function SelfEsteemCard(name, fileExtension = '.png') {
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.alt = `${name}`;
  this.subType = 'mental';
  this.completed = 0;
  selfEsteemDeck.push(this);
}

function createSelfEsteemDeck(){
  for (let i = 0; i < selfEsteemCardList.length; i++){
    new SelfEsteemCard(selfEsteemCardList[i]);
  }
  console.log(selfEsteemDeck);
  mentalCards.push(selfEsteemDeck);
}
createSelfEsteemDeck();
