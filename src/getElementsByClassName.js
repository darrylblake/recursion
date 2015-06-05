// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
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
};
