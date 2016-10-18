'use strict';
var validator = {
  ratingCurrent: '',
  getCurrentRating: function(rate) {
    this.ratingCurrent = rate.value;
  },
  checkFieldRequired: function(value) {
    return (value !== '');
  },
  checkRates: function() {
    return (Number(this.ratingCurrent) > 2);
  },
  checkValidForm: function(name, text) {
    if (this.checkFieldRequired(name)) {
      if (this.checkRates()) {
        return true;
      } else {
        if (this.checkFieldRequired(text)) {
          return true;
        }
      }
    }
    return false;
  }
};

window.form = (function() {
  var formContainer = document.querySelector('.overlay-container'),
    formCloseButton = document.querySelector('.review-form-close'),
    formRates = document.querySelectorAll('[name="review-mark"]'),
    formRate = document.querySelector('[name="review-mark"]:checked'),
    blockControls = document.querySelector('.review-fields'),
    inputName = document.getElementById('review-name'),
    labelName = document.querySelector('.review-fields-name'),
    inputText = document.getElementById('review-text'),
    labelText = document.querySelector('.review-fields-text'),
    buttonSubmit = document.querySelector('.review-submit');

  var form = {
    onClose: null,

    /**
     * @param {Function} cb
     */
    open: function(cb) {
      formContainer.classList.remove('invisible');
      validator.getCurrentRating(formRate);
      if (validator.checkRates()) {
        labelText.style.display = 'none';
      }
      checkFormStatus();
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

  for ( var i = 0; i < formRates.length; i++) {
    formRates[i].onchange = function() {
      validator.getCurrentRating(this);
      labelText.style.display = (validator.checkRates()) ? 'none' : 'inline';
      checkFormStatus();
    };
  }

  inputName.oninput = function() {
    labelName.style.display = (validator.checkFieldRequired(this.value)) ? 'none' : 'inline';
    checkFormStatus();
  };
  inputText.oninput = function() {
    if (!validator.checkRates()) {
      if (validator.checkFieldRequired(this.value)) {
        labelText.style.display = 'none';
      } else {
        labelText.style.display = 'inline';
      }
    }
    checkFormStatus();
  };

  function checkFormStatus() {
    if (validator.checkValidForm(inputName.value, inputText.value)) {
      blockControls.style.visibility = 'hidden';
      buttonSubmit.removeAttribute('disabled');
    } else {
      blockControls.style.visibility = 'visible';
      buttonSubmit.setAttribute('disabled', 'disabled');
    }
  }

  return form;
})();
