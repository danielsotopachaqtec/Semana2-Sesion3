function noBlock() {
	if (true) {
		var width = 10; // not block level scoped
	}

	console.log(width);
}

noBlock();
