exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var listOfFiles = [];
    var dirs = [];
    // dir : 0: index.html 1: dir: js files[main.js app.js disc.js object[dir:vendor files:[jquery.js underscore.js]]]
    function processDir(dir) {
      dirs.push(dir.dir); //
      for (var i = 0, len = dir.files.length; i < len; i++) {
        file = dir.files[i];
        if (typeof file === 'string') { //string is the file,object is the folder
          if (!dirName || dirs.indexOf(dirName) > -1) { //when dirName is undefined, return all the files
            // if (!dirName || dir.dir.indexOf(dirName) > -1) { //this is not work because all files recursively under js folder should be returned
            listOfFiles.push(dir.files[i]);
          }
        } else {
          processDir(dir.files[i]);
        }
      }
      dirs.pop();
    }

    processDir(data);


    return listOfFiles;
  },

  permute: function(arr) {
    // http://stackoverflow.com/questions/9960908/permutations-in-javascript/11509565#11509565
    var results = [];

    function permute_sub(arr, memo) {
      var cur, memo = memo || [];

      for (var i = 0; i < arr.length; i++) {
        cur = arr.splice(i, 1);
        if (arr.length === 0) {
          results.push(memo.concat(cur));
        }
        permute_sub(arr.slice(), memo.concat(cur));
        arr.splice(i, 0, cur[0]);
      }
      return results;
    }

    return permute_sub(arr);
  },

  fibonacci: function(n) {
    if (n < 3)
      return 1;
    var arr = [];
    arr[0] = 1;
    arr[1] = 1;
    for (var i = 2; i < n ; i++){
       arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n-1];
  },

  validParentheses: function(n) {

  }
};