var Queue = function() {
	var instance = {
		first: 0,
		last: 0,
		storage: {}
	};
	
	_.extend(instance, queueMethods);

	return instance;
};

var queueMethods = {

	enqueue: function(value) {
		this.storage[this.last] = value;
		this.last++;
	}, 
	dequeue: function() {
		if ( this.last > this.first ) {
			var value = this.storage[this.first];
			
			delete this.storage[this.first];
			this.first++;
			return value;
		}
	},
	size: function() {
		return this.last - this.first;
	}

};


