'use strict';
var REVIEW_LIST_URL = 'http://localhost:1507/api/reviews';

define([
  './load',
  './renderReviews',
], function(load, renderReviews) {
  return function() {
    load(REVIEW_LIST_URL, renderReviews);
  };
});
