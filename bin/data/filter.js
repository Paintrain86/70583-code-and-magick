'use strict';

module.exports = function(list, filterID) {
  switch (filterID) {
    case 'reviews-good':
      return list.filter(function(item) {
        return item.created >= (Date.now() - 1000 * 60 * 60 * 24 * 3);
      }).sort(function(a, b) {
        return b.created - a.created;
      });
    case 'reviews-good':
      return list.filter(function(item) {
        return item.rating >= 3;
      }).sort(function(a, b) {
        return b.rating - a.rating;
      });
    case 'reviews-bad':
      return list.filter(function(item) {
        return item.rating < 3;
      }).sort(function(a, b) {
        return a.rating - b.rating;
      });
    case 'reviews-popular':
      return list.sort(function(a, b) {
        return a.review_usefulness - b.review_usefulness;
      });
  }

  return list;
};
