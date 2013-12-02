if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item)
    },

    sum : function(arr) {
        var sum = 0;
        for (var i=0; i<arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    },

    remove : function(arr, item) {
        while (arr.indexOf(item) > -1) {
            arr.splice(arr.indexOf(item),1);
        }
        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        sortedArr = arr.sort();
        for (var i = sortedArr.length; i > sortedArr.length - 1; i--) {
            if (sortedArr.indexOf(item) > -1) {
                sortedArr.splice(sortedArr.indexOf(item),1);
            }
        }
        return sortedArr
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.splice(0,0,item);
        return arr;
    },

    curtail : function(arr) {
        arr.splice(0,1)
        return arr;
    },

    concat : function(arr1, arr2) {
        arr = arr1.concat(arr2);
        return arr;
    },

    insert : function(arr, item, index) {
        arr.splice(index,0,item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                count +=1;
            }
        }
        return count;
    },

    duplicates : function(arr) {

    },

    square : function(arr) {
        squaredArr = [];
        for (i = 0; i < arr.length; i++) {
            var square = Math.pow(arr[i],2);
            squaredArr.push(square);
        }
        return squaredArr;
    },

    findAllOccurrences : function(arr, target) {
        
    }
  };
});
