'use strict';
var REVIEW_LIST_URL = 'http://localhost:1507/api/reviews';

define([
  './review',
  './load',
  './renderReviews',
], function(review, load, renderReviews) {
  return function() {
    window.Review = review;
    load(REVIEW_LIST_URL, renderReviews);
  };
});
