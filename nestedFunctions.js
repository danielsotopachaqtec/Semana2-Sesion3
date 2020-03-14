function hypotenuse(m, n) {
	// outer function
	function square(num) {
		// inner function
		console.log('inner function');
		return num * num;
	}
	console.log('outer function');
	return Math.sqrt(square(m) + square(n));
}

console.log(hypotenuse(3, 4));

function verify(name, surname = 'Henderson') {
	function isJohn() {
		return name === 'John';
	}
	if (isJohn()) {
		console.log('Yes, this is John');
	} else {
		console.log(`No, this is ${name} ${surname}`);
	}
}
verify('Peter');
