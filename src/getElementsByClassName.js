// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
<<<<<<< HEAD
var getElementsByClassName = function(className){
  matches = [];
  function getChildren(parentNode) {
    // Base Case
    if (parentNode.length === undefined) {
      parentNode.classList.forEach(function(nodeClassName) {
        if (nodeClassName === className)
          matches.push(parentNode);
      });
    }
    // Recursion
    for (var i = 0; i < parentNode.childNodes.length; i++){ // childNodes are only array like...
      getChildren(parentNode.childNodes[i]);
    }    
  }
  getChildren(document.body);
  return matches;
=======

/********************************************************************
* VERSION 1: The code we wrote together in class. If you run it,    *
* you'll encounter an error. What steps should you take to          *
* understand and fix the error?                                     *
********************************************************************/
var getElementsByClassName = function(className){

  // declare an array called 'results'
  var results = [];

  // Declare a function that accepts a DOM element as an argument
  var checkElement = function(element){
    // does element have our classname?
    if (element.classList.contains(className)){
      //push to our results array
      results.push(element);
    }
  };
  var searchNode = function (node){
    // for each node in children
    for (var i = 0; i < node.childNodes.length; i++){
      // do the recursive thing and add that result to the previous array
      checkElement(node.childNodes[i]);
      searchNode(node.childNodes[i]);
    }
  };

  checkElement(document.body);
  searchNode(document.body);
  return results;
>>>>>>> 54b0173b87b60a9836b10d882313841e6ecbd2b8
};

/********************************************************************
* VERSION 2: This code only uses one subroutine (smaller function), *
* but is quite similar to what I would have written if I were       *
* in your shoes.                                                    *
********************************************************************/

// var getElementsByClassName = function(className){

//   var results = [];

//   var searchNode = function(node){
//     // if it has the className
//     // NOTE: We've included Underbar in this repo.
//     // Let's use `_.indexOf` to check for our target className
//     if (_.indexOf(node.classList, className) > -1) {
//       //add it to results
//       results.push(node);
//     }
//     //if the node has children 
//     for (var i = 0; i< node.childNodes.length; i++){
//       //RECURSE!!!!
//       searchNode(node.childNodes[i]);
//     }
//   };
  
//   searchNode(document.body);

//   return results;
// };

/********************************************************************
* VERSION 3: This version does not use a subroutine; instead it     *
* actually calls itself outright. Note that to make this approach   *
* work, we have to modify the function's parameters.                *
********************************************************************/

// var getElementsByClassName = function(className, element){
//   // your code here

//   // NOTE: JavaScript actually cares very little about how many
//   // arguments you pass to your functions. This line below
//   // essentially says "if I wasn't passed an element argument,
//   // just assume the user meant `document.body`"
//   element = element || document.body;
//   var results = [];

//   // This if statement has an expression as its condition. If our
//   // element has a classList, and that classList contains our target,
//   // the expression evaluates to true and we run the code inside our
//   // `if`. 
//   if (element.classList && _.contains(element.classList, className)) {
//     results.push(element);
//   }
//   _.each(element.childNodes, function(node, i) {
//     results = results.concat(getElementsByClassName(className, node));
//   });

//   return results;
// };
