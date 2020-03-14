function counter() {
	var index = 0;
	function increment() {
		index = index + 1;
		console.log(index);
		return index;
	}
	return increment;
}

var userIncrement = counter(); // a reference to inner increment function
var adminIncrement = counter(); // a reference to inner increment function

userIncrement();
userIncrement();
adminIncrement();
adminIncrement();
adminIncrement();

function greetings(name) {
	function sayWelcome() {
		console.log(`Welcome to ${name}`);
	}
	return sayWelcome;
}

var greet = greetings('Atlanta');

greet();
greet();
greet();
