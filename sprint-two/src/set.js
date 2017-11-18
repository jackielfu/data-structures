var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; 
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!( this.storage.includes(item) )) {
    this.storage.push(item);
  }
};

setPrototype.contains = function(item) {
  for ( var i = 0; i < this.storage.length; i++ ) {
    if ( this.storage.includes(item) ) {
      return true;
    } else return false;
  }
};

setPrototype.remove = function(item) {
  var itemLocation = this.storage.indexOf(item);
  if ( this.storage.includes(item) ) {
    return this.storage.splice(itemLocation, 1)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
