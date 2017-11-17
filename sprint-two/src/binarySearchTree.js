var BinarySearchTree = function(value) {
  var bst = Object.create(bstMethods);

  bst.value = value;
  bst.right = undefined;
  bst.left = undefined;

  return bst;
} 

var bstMethods = {};

  bstMethods.insert = function(value) {
    var node = BinarySearchTree(value);

    // if currentNode's value > passed-in value && left === undefined
    if ( this.value > value && this.left === undefined ) {
    // insert currentNode as left
      this.left = node;
    }
    // if currentNode's value > passed-in value
    else if ( this.value > value ) {
      // recurse currentNode's left child
      this.left.insert(value);
    }
    // if currentNode's value < passed-in value && right === undefined
    else if ( this.value < value && this.right === undefined ) {
      // insert currentNode as right
      this.right = node;
    }
    // if currentNode's value < passed-in value 
    else if ( this.value < value ) {
      // recurse currentNode's right child
      this.right.insert(value);
    }
  }
    
  bstMethods.contains = function(target) {
    // create container variable to hold found node
    var foundNode = false;
 
      // if currentNode's value = value
      if ( this.value === target ) {
        // container var = true
        return foundNode = true;
      }
      // else if left === !undefined && value < currentNode's value
      else if ( this.left && target < this.value ) {
        // recurse left child
        return this.left.contains(target);
      }
      // else if right === !undefined && value > currentNode's value
      else if ( this.right && target > this.value ) {
        // recurse right child
        return this.right.contains(target);
      }
    return foundNode;
  }

  bstMethods.depthFirstLog = function(callback) {
    callback(this.value);
    if ( this.left ) {
      this.left.depthFirstLog(callback);
    }
    if ( this.right ) {
      this.right.depthFirstLog(callback);
    }
  } 

  

/*
 * Complexity: What is the time complexity of the above functions?
 */
