'use strict';

function loadJSONP(url, cbFunc) {
  var jsonpCallbackName = 'myJsonp' + Date.now();
  window[jsonpCallbackName] = cbFunc;

  var reviewsScript = document.createElement('script');
  reviewsScript.onerror = function() {
    console.log('Алярма!!! Проблема с сервером, перезвоните позднее!');
  };
  reviewsScript.src = url + '?callback=' + jsonpCallbackName;
  document.body.appendChild(reviewsScript);
}
return loadJSONP;
