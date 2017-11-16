var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var highestCount = 0;
  var lowestCount = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if ( value ) {
      storage[highestCount] = value;
      highestCount++;
    }
  };

  someInstance.dequeue = function() {
    if ( highestCount - lowestCount === 0 ) {
      return 0;
    }

    var result = storage[lowestCount];
    delete storage[lowestCount];
    lowestCount++;
    return result;
  };

  someInstance.size = function() {
    return highestCount - lowestCount;
  };

  return someInstance;
};
