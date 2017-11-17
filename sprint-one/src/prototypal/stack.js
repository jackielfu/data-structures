var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.count = 0;
  instance.storage = {};

  return instance;
};

var stackMethods = {
	push: function(value) {
		this.storage[this.count] = value;
		this.count++;
	},

	pop: function() {
		var data = 0;
		
		if (this.count) {
			data = this.storage[this.count];
			delete this.storage[this.count];
			this.count--;

			return data;
		}
	},

	size: function() {
		return this.count;
	}
};
