var Tree = function(value) {
  var newTree = {};

  _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = []; 

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var found = false;
  if ( this.value === target ) {
    return found = true;
  }
  else {
    for ( var i = 0; i < this.children.length; i++ ) {
      if ( this.children[i].contains(target) ) {
        return found = true;
      }
    }
  }
  return found;
};

// treeMethods.depthFirstLog = function(callback, results) {

// };


/*
 * Complexity: What is the time complexity of the above functions?
 */
