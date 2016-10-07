function getMessage(a, b) {

  switch (typeof a) {
    case 'boolean':
          if (a) {
            return('Я попал в ' + b);
          } else {
            return('Я никуда не попал');
          }
          break;
    case 'number':
          return('Я прыгнул на ' + a * 100 + ' сантиметров');
          break;
    case 'object':
          if (Array.isArray(a)){
            if (Array.isArray(b)){
              return('Я прошёл ' + getDistancePath(a, b) + ' метров');
            } else {
              return('Я прошёл ' + getNumberOfSteps(a, 0) + ' шагов');
            }
          }
          break;
    default: return('Переданы некорректные данные');
  }
}

function getNumberOfSteps(arr) {
  var result = 0;

  for ( var i = 0; i < arr.length; i++) {
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
