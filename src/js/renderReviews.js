'use strict';
var reviews = [];

var reviewsFilterBlock = document.querySelector('.reviews-filter'),
  reviewsList = document.querySelector('.reviews-list');
var IMAGE_LOAD_TIMEOUT = 3000;

function toggleFilterBlock(action) {
  if (action === 'hide') {
    reviewsFilterBlock.classList.add('invisible');
  } else if (action === 'show') {
    reviewsFilterBlock.classList.remove('invisible');
  }
}

function getReviewItem(item) {
  var reviewItem = new window.Review(item);
  reviewItem.element.querySelector('.review-rating').textContent = item.rating;
  reviewItem.element.querySelector('.review-text').textContent = item.description;

  var img = new Image(),
    imgTimeout = null;
  img.onload = function(e) {
    clearTimeout(imgTimeout);
    var reviewImg = reviewItem.element.querySelector('.review-author');

    reviewImg.style.width = reviewImg.style.height = 124;
    reviewImg.setAttribute('src', e.target.src);
    reviewItem.element.querySelector('.review-author').setAttribute('title', item.author.name);
  };
  img.onerror = function() {
    reviewItem.element.classList.add('review-load-failure');
  };
  img.src = item.author.picture;

  imgTimeout = setTimeout(function() {
    img.src = '';
    reviewItem.element.classList.add('review-load-failure');
  }, IMAGE_LOAD_TIMEOUT);

  return reviewItem.element;
}

function renderReviews(items) {
  reviews = items;
  toggleFilterBlock('hide');
  if (Array.isArray(reviews)) {
    reviews.forEach(function(item) {
      reviewsList.appendChild(getReviewItem(item));
    });
    if (reviewsList.children.length > 0) {
      toggleFilterBlock('show');
    } else {
      showNoReviewsMessage();
    }
  } else {
    showNoReviewsMessage();
  }
}

function showNoReviewsMessage() {
  reviewsList.style.textAlign = 'center';
  reviewsList.textContent = 'К этой классной игре пока никто не оставил ни одного отзыва :(';
}

define([
  './review'
], function(review) {
  window.Review = review;
  return renderReviews;
});
