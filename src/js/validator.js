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

define(function() {
  return validator;
});
