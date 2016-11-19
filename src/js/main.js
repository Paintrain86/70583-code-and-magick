'use strict';

define([
  './reviews',
  './form',
  './game',
  './gallery'
], function(reviews, form, game, gallery) {
  reviews();
  window.validator = form.validator;
  window.form = form.init();
  window.Game = game();
  window.Gallery = gallery;
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

/****** GALLERY *******/
var galleryElements = document.querySelectorAll('.photogallery-image'),
  galleryImages = document.querySelectorAll('.photogallery-image img'),
  gallerySources = [];

for (var i = 0; i < galleryImages.length; i++) {
  gallerySources.push(galleryImages[i].src);
}

var gallery = new window.Gallery(gallerySources);
for (var j = 0; j < gallerySources.length; j++) {
  galleryElements[j].addEventListener('click', function() {
    gallery.show(j);
  }, 'false');
}
