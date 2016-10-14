exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  // according to test case, this bit is counting from right to left
  // just like c, we could shift it right and apply `and` operator
  valueAtBit: function(num, bit) {
 	return 1 & (num >> (bit - 1)); 
  },

  base10: function(str) {
  	return parseInt(str,2);
  },

  convertToBinary: function(num) {
  	function byteString(n){
  		if(n<0||n>255 || n%1 !== 0  ) // use % 1 to tell whether it is an integer
  			throw new Error(n + "does not fit in a byte");
  		return ("00000000" + n.toString(2)).substr(-8); // me:prefix to make sure it is 8 digits long
  	}
  	 return byteString(num);
  },

  multiply: function(a, b) {
    var a1 = a.toString();
    var b1 = b.toString();
    var aLen = a1.substring(a1.indexOf(".")+1).length; //me: count the length of decimal digits
    var bLen = a1.substring(a1.indexOf(".")+1).length;
    return (a1 * Math.pow(10,aLen)) * (b1 * Math.pow(10,bLen)) / Math.pow(10,aLen+bLen);
  }
};
