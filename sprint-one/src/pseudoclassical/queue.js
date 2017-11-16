var Queue = function() {
  this.storage = {};
  this.first = 0;
  this.last = 0;
};

Queue.prototype.enqueue = function(value) {
	if ( value ) {
		this.storage[this.last] = value;
		this.last++
	}
}

Queue.prototype.dequeue = function() {
	if ( this.last - this.first === 0 ) {
		return 0; 
	}
	if ( this.last > this.first ) {
		var result = this.storage[this.first];
		delete this.storage[this.first];
		this.first++;

		return result;
	}
}

Queue.prototype.size = function() {
	return this.last - this.first;
}

