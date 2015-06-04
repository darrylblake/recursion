// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
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
