/*eslint-disable*/

'use strict';
var validator = {
  ratingCurrent: '',
  setCurrentRating: function(rate) {
    this.ratingCurrent = rate.value;
  },
  checkFieldRequired: function(value) {
    return (value !== '');
  },
  checkRates: function() {
    return (Number(this.ratingCurrent) > 2);
  },
  checkValidForm: function(name, text, rate, nameLabel, textLabel, control, button) {
    var validityName = true,
      validityText = true;

    this.setCurrentRating(rate);

    if (this.checkFieldRequired(name.value)) {
      nameLabel.style.display = 'none';
    } else {
      nameLabel.style.display = 'inline';
      validityName = false;
    }

    if (this.checkRates()) {
      textLabel.style.display = 'none';
    } else {
      if (this.checkFieldRequired(text.value)) {
        textLabel.style.display = 'none';
      } else {
        textLabel.style.display = 'inline';
        validityText = false;
      }
    }

    if (validityName && validityText) {
      control.style.visibility = 'hidden';
      button.removeAttribute('disabled');
    } else {
      control.style.visibility = 'visible';
      button.setAttribute('disabled', 'disabled');
    }
  }
};

window.form = (function() {
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
})();
