function print() {
	console.log('Learning JS!');
}
// print();

(function() {
	console.log('Learning JS!');
})();

(function square(value) {
	var result = value * value;
	console.log(result);
})(10);
