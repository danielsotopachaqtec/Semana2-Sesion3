function Counter(count) {
	this.count = count;
}

Counter.prototype.count = 2;

var counter = new Counter(6);

console.log(counter.count);
