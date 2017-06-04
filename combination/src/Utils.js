'use strict';

function add(num1, num2) {
  return num1 + num2;
}

var Utils = {
  add2: function(num) {
    return add(num, 2);
  }
};

module.exports = Utils;
