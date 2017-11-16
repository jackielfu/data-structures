var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.first = 0;
  instance.last = 0;
  instance.storage = {};

  return instance;
};

var queueMethods = {
	enqueue: function(value) {
		if ( value ) {
			this.storage[this.last] = value;
			this.last++; 
		}
	},

	dequeue: function() {
		if ( this.last > this.first ) {
			var data = this.storage[this.first];
			
			delete this.storage[this.first];
			this.first++
			return data;
		}
	},

	size: function() {
		return this.last - this.first;
	},
};


