/*eslint-disable*/

'use strict';
define([
  './validator',
  './formInit'
], function(validator, formInit) {
  return {
    validator: validator,
    init: formInit
  };
});
