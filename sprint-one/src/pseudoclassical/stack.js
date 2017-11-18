var Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
}

Stack.prototype.pop = function() {
  var data = 0;
  
  if ( this.count ) {

    data = this.storage[this.count-1];
    delete this.storage[this.count-1];
    this.count--;

    return data;
  }
}

Stack.prototype.size = function() {
  return this.count;
}


