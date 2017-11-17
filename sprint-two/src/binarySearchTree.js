var BinarySearchTree = function(value) {
	// create constructor 
  // define value
  // define right 
  // define left

  // .insert(value)
    // create new node = value
    // create recursive function
      // if currentNode's value > passed-in value && left === undefined
        // insert currentNode as left
      // if currentNode's value > passed-in value
        // recurse currentNode's left child
      // if currentNode's value < passed-in value && right === undefined
        // insert currentNode as right
      // if currentNode's value < passed-in value 
        // recurse currentNode's right child
      // ? call recursive function on root node ? 

  // .contains(value)
    // create container variable to hold found node
    // create recursive function
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
	.left
	.right
	.insert(value)
    - performs binary search on root node
    - moves left if n < currentNode
    - moves right if n > currentNode
    - inserts when left or right child does not exist
	.contains(value)
    - performs binary search to determine if value exists
	.depthFirstLog()
    - accepts callback and applies callback to each value in tree
    - needs recursion to traverse nodes on tree
*/