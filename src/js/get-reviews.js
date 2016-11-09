'use strict';
var reviews = [];

var reviewsFilterBlock = document.querySelector('.reviews-filter'),
  reviewsList = document.querySelector('.reviews-list'),
  tpl = document.getElementById('review-template'),
  tplContainer = 'content' in tpl ? tpl.content : tpl;
var IMAGE_LOAD_TIMEOUT = 3000;

function toggleFilterBlock(action) {
  if (action === 'hide') {
    reviewsFilterBlock.classList.add('invisible');
  } else if (action === 'show') {
    reviewsFilterBlock.classList.remove('invisible');
  }
}

function getReviewItem(item) {
  var reviewItem = tplContainer.querySelector('.review').cloneNode(true);
  reviewItem.querySelector('.review-rating').textContent = item.rating;
  reviewItem.querySelector('.review-text').textContent = item.description;

  var img = new Image(),
    imgTimeout = null;
  img.onload = function(e) {
    clearTimeout(imgTimeout);
    var reviewImg = reviewItem.querySelector('.review-author');

    reviewImg.style.width = reviewImg.style.height = 124;
    reviewImg.setAttribute('src', e.target.src);
    reviewItem.querySelector('.review-author').setAttribute('title', item.author.name);
  };
  img.onerror = function() {
    reviewItem.classList.add('review-load-failure');
  };
  img.src = item.author.picture;

  imgTimeout = setTimeout(function() {
    img.src = '';
    reviewItem.classList.add('review-load-failure');
  }, IMAGE_LOAD_TIMEOUT);

  return reviewItem;
}

function renderReviews(items) {
  reviews = items;
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
return renderReviews;
