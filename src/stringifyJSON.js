// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//inputs= some kind of data
//outputs = that same data, wrapped in a string

var stringifyJSON = function(obj) {
<<<<<<< HEAD
    // Single Values (Base case)
    if (obj === null)
        return 'null';
    if (obj.constructor !== Object && obj.constructor !== Array) { // Test if single value
        if (Number(obj) || obj === false || obj === true || obj === 0)
            return String(obj);
        else
            return String('"' + obj + '"'); // returns just the value
    }

    var keyValue = '';
    try {
        // Objects
        if (obj.constructor === Object) {
            for (var property in obj) {
                keyValue += '"' + property + '":' + stringifyJSON(obj[property]) + ',';
            }
            keyValue = '{' + keyValue.slice(0, -1) + '}'; // Adding {} and removing last comma
        }
        // Arrays
        if (obj.constructor == Array) {
            obj.forEach(function(item) { // I'm assuming I can use this since it's in the Jasmine tests?
                keyValue += stringifyJSON(item) + ',';
            });
            keyValue = '[' + keyValue.slice(0, -1) + ']'; // Adding {} and removing last comma
        }
        return keyValue;
    } catch (err) { // To catch unstringifiableValues
        console.log(err);
        return '{}';
    }
}
=======
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
>>>>>>> 54b0173b87b60a9836b10d882313841e6ecbd2b8
