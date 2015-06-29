// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//inputs= some kind of data
//outputs = that same data, wrapped in a string

var stringifyJSON = function(obj) {
  //is an array?
  if (Array.isArray(obj)) {
    var results = [];
    //iterate over the array

    for (var i = 0; i < obj.length; i++){
      if ( obj[i] === undefined || typeof obj[i] === 'function'){
        continue;
      }
      //recurse on each element
      results.push( stringifyJSON(obj[i]) );
    }

    return '[' + results.join(',') + ']';
  }

  //is an object?
  if (obj instanceof Object){
    //stringify the object
    var results = [];

    for (var key in obj){
      if ( obj[key] === undefined || typeof obj[key] === 'function'){
        continue;
      }
      results.push(
        stringifyJSON(key) + ":" + stringifyJSON(obj[key])
        );
    }

    return '{' + results.join(',') + '}';
  }

  //is a string?
  if (typeof obj === 'string'){
    //stringify the string
    return '"' + obj + '"';
  }

  return '' + obj;
};
