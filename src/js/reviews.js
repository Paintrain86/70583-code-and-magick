'use strict';

define([
  './load',
  './renderReviews',
], function(load, renderReviews) {
  var REVIEW_LIST_URL = '/api/reviews';

  var activeFilter = 'reviews-all';
  var reviewsContainer = document.querySelector('.reviews-list');
  var reviewsFilter = document.querySelector('.reviews-filter');
  var pageActive = 0;
  var pageSize = 3;

  var loadReviews = function(filter, pageCurrent) {
    load(REVIEW_LIST_URL, {
      from: pageCurrent * pageSize,
      to: pageCurrent * pageSize,
      filter: filter
    }, renderReviews);
  };

  var changeFilters = function(filterID) {
    reviewsContainer.innerHtml = '';
    activeFilter = (typeof filterID === 'undefined') ? activeFilter : filterID;
    pageActive = 0;
    loadReviews(activeFilter, pageActive);
  };

  reviewsFilter.addEventListener('click', function(e) {
    if (e.target.classList.contains('reviews-filter-item')) {
      if (e.target.id !== activeFilter) {
        changeFilters(e.target.id);
      }
    }
  });
  // var lastCall = Date.now();

  return changeFilters;
});
