function getMessage(a, b) {

  switch (typeof a) {
    case 'boolean':
          if (a) {
            console.log('Я попал в ' + b);
          } else {
            console.log('Я никуда не попал');
          }
          break;
    case 'number':
          console.log('Я прыгнул на ' + a * 100 + ' сантиметров');
          break;
    case 'object':
          if (Array.isArray(a)){
            if (Array.isArray(b)){
              console.log('Я прошёл ' + getDistancePath(a, b) + ' метров');
            } else {
              console.log('Я прошёл ' + getNumberOfSteps(a, 0) + ' шагов');
            }
          }
          break;
    default: console.log('Переданы некорректные данные');
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

  for (var i = 0; i < arr1.length; i++) { // Честно говоря, сначала начал изобретать велосипед по поводу того, что длина одного массива больше, чем другая... и понеслось...=)
    result += (+arr1[i] * +arr2[i]);
  }

  return result;
}
