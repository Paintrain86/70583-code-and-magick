'use strict';
var REVIEW_LIST_URL = 'http://localhost:1507/api/reviews';

define([
  'load',
  'get-reviews',
], function(load, getReviews) {
  load(REVIEW_LIST_URL, getReviews);
});

//initializeReviews();


// function initializeReviews() {
//   toggleFilterBlock('hide');
//   loadJSONP(REVIEW_LIST_URL, renderReviews);
// }
