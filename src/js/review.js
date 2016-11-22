'use strict';

var Review = function(data) {
  var review = this;
  var tpl = document.getElementById('review-template'),
    tplContainer = 'content' in tpl ? tpl.content : tpl;

  this.data = data;
  this.element = tplContainer.querySelector('.review').cloneNode(true);
  this.controls = {
    approve: this.element.querySelector('.review-quiz-answer-yes'),
    decline: this.element.querySelector('.review-quiz-answer-no')
  };

  this.controls.approve.onclick = this.controls.decline.onclick = function() {
    review.controls.approve.classList.remove('review-quiz-answer-active');
    review.controls.decline.classList.remove('review-quiz-answer-active');
    this.classList.add('review-quiz-answer-active');
  };

  this.remove = function() {
    this.controls.approve.onclick = this.controls.decline.onclick = null;
  };
};

define(function() {
  return Review;
});
