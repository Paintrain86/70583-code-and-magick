'use strict';

function getMessage(a, b) {

  switch (typeof a) {
    case 'boolean':
      if (a) {
        return ('Я попал в ' + b);
      } else {
        return ('Я никуда не попал');
      }
    case 'number':
      return ('Я прыгнул на ' + a * 100 + ' сантиметров');
    case 'object':
      if (Array.isArray(a)) {
        if (Array.isArray(b)) {
          return ('Я прошёл ' + getDistancePath(a, b) + ' метров');
        } else {
          return ('Я прошёл ' + getNumberOfSteps(a, 0) + ' шагов');
        }
      } else {
        return ('Переданы некорректные данные');
      }
    default:
      return ('Переданы некорректные данные');
  }
}

function getNumberOfSteps(arr) {
  var result = 0;

  for (var i = 0; i < arr.length; i++) {
    result += +arr[i];
  }

  return result;
}

function getDistancePath(arr1, arr2) {
  var result = 0;

  for (var i = 0; i < arr1.length; i++) {
    result += (+arr1[i] * +arr2[i]);
  }

  return result;
}

window.getMessage = getMessage;
