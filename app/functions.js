exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null,arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(arg){
      return str + ', ' +　arg;
    }
  },

  makeClosures: function(arr, fn) {
    var res = [];
    var makeFn = function(val){
      return function(){
        return fn(val);
      }     
    };
    arr.forEach(function(item){
      res.push(makeFn(item));
    });
    return res;
  },  

  partial: function(fn, str1, str2) {
    return function(tmp){
      return fn.apply(this,[str1,str2,tmp]);
    }
  },

  useArguments: function() {
    var sum = 0;
    for(var i = 0;i<arguments.length;i++){
      sum+= arguments[i];
    }
    return sum;
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments,1,arguments.length);
    return fn.apply(this,args);
  },

  partialUsingArguments: function(fn) {
    var args = Array.prototype.slice.call(arguments,1);
    return function(){
      return fn.apply(this,args.concat(Array.prototype.slice.call(arguments)));
    }
  },

  //https://medium.com/@kevincennis/currying-in-javascript-c66080543528#.ie12o5ic2
  curryIt: function(fn) {
    var arity = fn.length;

    return (function resolver() {
      var memory = Array.prototype.slice.call( arguments);
      return function(forTestOnlyCouldBeOmitted) {
        var next;
        Array.prototype.push.apply( memory,arguments);
        next = memory.length >= arity ? fn : resolver;
        return next.apply( null, memory );
      };
    }());
  }
};
