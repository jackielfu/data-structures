var Stack = function() {
  var instance = {
  	storage: {},
  	count: 0
  }
  
  _.extend(instance, stackMethods);
  
  return instance;
};

var stackMethods = {

	push: function(value){
		this.count++;
		this.storage[this.count] = value;
	},

	pop: function(){
		var data = 0;

		if (this.count) {
			data = this.storage[this.count];
			delete this.storage[this.count];
			this.count--;

			return data;
		}
	},

	size: function(){
		return this.count;
	}

};


