parseableStrings = [
  // basic stuff
  '[]',
  '{"foo": ""}',
  '{}',
  '{"foo": "bar"}',
  '["one", "two"]',
  '{"a": "b", "c": "d"}',
  '[null,false,true]',
  '{"foo": true, "bar": false, "baz": null}',
  '[1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999]',
  '{"boolean, true": true, "boolean, false": false, "null": null }',

  // basic nesting
  '{"a":{"b":"c"}}',
  '{"a":["b", "c"]}',
  '[{"a":"b"}, {"c":"d"}]',
  '{"a":[],"c": {}, "b": true}',
  '[[[["foo"]]]]',

  // escaping
  '["\\\\\\"\\"a\\""]',
  '["and you can\'t escape thi\s"]',
];

afew = [
  // basic stuff
  '{"foo": "bar"}',
  '["one", "two"]',
  '{"a": "b", "c": "d"}',
  '[null,false,true]',
  '{"foo": true, "bar": false, "baz": null}',
  '{"a":["b", "c"]}',
];


// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {

	// Determine the parent type
	var type = '';
	if (json[0] === '{')
		type = 'object';
	else if (json[0] === '[')
		type = 'array';
	else
		type = 'value';

	// Removing {} or []
	if (type === 'object' || type === 'array')
		json = json.slice(1, -1);

	var split = [];
	// Splitting by none-nested commas
	var openSquare = closeSquare = openBrace = closeBrace = 0;
	for (var i = 0; i < strObj.length; i++) {
		var char = strObj[i];
		if (char === '[') openSquare++
		if (char === ']') closeSquare++
		if (char === '{') openBrace++
		if (char === '}') closeBrace++

		if (char === ',') {
			// Check to see if not inside any nested brackets
			if (openSquare === closeSquare && openBrace === closeBrace) {
				console.log(i);
				// possible do the recursion here?
				split.push(strObj.slice(0, i));
				strObj = strObj.slice(i);
				break;
			}
		}
	}

	var obj

	if (split.length === 0) {
		if (type === 'object') {
			var keyValue = json.split(':')
			obj.keyValue[0] = parseJSON(obj.keyValue[1]);
			return obj
		}
		else if (type === 'array') {
			var obj = [];
			obj.push(parseJSON(json));
		}
		else if (type === 'value') {
			return obj;
		};
	};
};

// {"a":["b", "c"], "b": [{"d":1, "e":2}, {"f":4, "g":6}]}
// "a":["b", "c"], "b": [{"d":1, "e":2}, {"f":4, "g":6}]

afew.forEach(function(string){
	//console.log(JSON.parse(string));
	//parseJSON(string);
	//console.log('\n');
});


var strObj = '{"a":["b", "c"], "d":["e", "f"]}';

parseJSON(strObj);



















