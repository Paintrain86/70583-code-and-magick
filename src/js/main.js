'use strict';

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

var game = new window.Game(document.querySelector('.demo'));
game.initializeLevelAndStart();
game.setGameStatus(window.Game.Verdict.INTRO);

var formOpenButton = document.querySelector('.reviews-controls-new');

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
