/*eslint-disable*/
'use strict';

window.form = function() {
  var formElem = document.querySelector('.review-form'),
    formContainer = document.querySelector('.overlay-container'),
    formCloseButton = document.querySelector('.review-form-close'),
    formRate = document.querySelector('[name="review-mark"]:checked'),
    blockControls = document.querySelector('.review-fields'),
    blockRates = document.querySelector('.review-form-group-mark'),
    inputName = document.getElementById('review-name'),
    labelName = document.querySelector('.review-fields-name'),
    inputText = document.getElementById('review-text'),
    labelText = document.querySelector('.review-fields-text'),
    formSubmitButton = document.querySelector('.review-submit');

  var getExpireDays = function() {
    var now = new Date(),
      nowYear = now.getFullYear(),
      hopperHB = new Date(nowYear + '-12-9'),
      diff = 0;
    if (now < hopperHB) {
      hopperHB = new Date(nowYear - 1 + '-12-9');
      diff = now - hopperHB;
    } else {
      diff = hopperHB - now;
    }
    return Math.floor(diff / (1000 * 3600 * 24 ));
  };

  var form = {
    onClose: null,

    /**
     * @param {Function} cb
     */
    open: function(cb) {
      formContainer.classList.remove('invisible');
      if (typeof Cookies.get('review-name') !== 'undefined') {
        inputName.value = Cookies.get('review-name');
      }
      if (typeof Cookies.get('review-mark') !== 'undefined') {
        formRate = document.querySelector('#review-mark-' + Cookies.get('review-mark'));
        formRate.checked = true;
      }
      validator.checkValidForm(inputName, inputText, formRate, labelName, labelText, blockControls, formSubmitButton);
      cb();
    },

    close: function() {
      formContainer.classList.add('invisible');

      if (typeof this.onClose === 'function') {
        this.onClose();
      }
    }
  };


  formCloseButton.onclick = function(evt) {
    evt.preventDefault();
    form.close();
  };

  blockRates.onchange = function(evt) {
    Cookies.set('review-mark', evt.target.value, { expires: getExpireDays()});
    validator.checkValidForm(inputName, inputText, evt.target, labelName, labelText, blockControls, formSubmitButton);
  };

  formElem.oninput = function(evt) {
    if (evt.target === inputName) {
      Cookies.set('review-name', evt.target.value, { expires: getExpireDays()});
    }
    validator.checkValidForm(inputName, inputText, formRate, labelName, labelText, blockControls, formSubmitButton);
  };

  return form;
};

define(function(){
  return window.form;
});
