'use strict';

define(function() {
  function getSearch(params) {
    return Object.keys(params).map(function(param) {
      return [param, params[param]].join('=');
    }).join('&');
  }

  return function(url, params, cbFunc) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function(e) {
      var loadedData = JSON.parse(e.target.response);
      cbFunc(loadedData);
    };
    xhr.open('GET', url + '?' + getSearch(params));
    xhr.send();
  };
});
