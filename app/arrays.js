exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    if(Array.prototype.indexOf){
      return arr.indexOf(item);
    }else{
      var num = arr.length;
      for(var i = 0;i<num;i++){
        if(arr[i]=== item)
          return i;
      }
    }
  },

  sum: function(arr) {
    return eval(arr.join('+'));
  },

  remove: function(arr, item) {
    return arr.filter(function(current ){
        return current !== item;
    });
  },

  removeWithoutCopy: function(arr, item) {
    var num = arr.length;
    for(var i = 0;i < num; i++){
      if(arr[i] === item){
        arr.splice(i,1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    return arr.concat(item);
  },

  truncate: function(arr) {
    return arr.slice(0,-1);
  },

  prepend: function(arr, item) {
    return [item].concat(arr); //return copied new array without editted the original. 
    //using unshift will changed the original one
  },

  curtail: function(arr) {
    return arr.slice(1);
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index,0,item);//splice return an array containing the deleted elements
    return arr;
  },

  count: function(arr, item) {
    // return arr.filter(function(e){
    //     return e == item ;
    // }).length; //this will create a new array
    var num = 0;
    arr.forEach(function(e){
      return e==item?num++:0;
    });
    return num;

  },

  duplicates: function(arr) {
    var result = [];
    arr.forEach(function(item){
      if(arr.indexOf(item) !== arr.lastIndexOf(item) && result.indexOf(item) == -1){
        result.push(item);
      };
    })
    return result;
  },

  square: function(arr) {
    return arr.map(function(item){
      return item*item;
    })
  },

  findAllOccurrences: function(arr, target) {
    var ind = arr.indexOf(target),
        result = [];
    
    while(ind != - 1){
      result.push(ind);
      ind = arr.indexOf(target,ind+1);
    };

    return result;
  }
};
