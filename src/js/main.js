'use strict';
var gameBlock = document.querySelector('.demo');
var formOpenButton = document.querySelector('.reviews-controls-new');

define([
  './reviews',
  './form',
  './game'
], function(reviews, form, game) {
  reviews();
  window.validator = form.validator;
  window.form = form.init();
  window.Game = game();
});

var game = new window.Game(gameBlock);
game.init();

/** @param {MouseEvent} evt */
formOpenButton.onclick = function(evt) {
  evt.preventDefault();

  window.form.open(function() {
    game.setGameStatus(window.Game.Verdict.PAUSE);
    game.setDeactivated(true);
  });
};

window.form.onClose = function() {
  game.setDeactivated(false);
};
