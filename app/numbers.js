exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  // according to test case, this bit is counting from right to left
  // just like c, we could shift it right and apply `and` operator
  valueAtBit: function(num, bit) {
 	 return 1 & (num >> (bit - 1)); 
  },

  base10: function(str) {

  },

  convertToBinary: function(num) {

  },

  multiply: function(a, b) {

  }
};
