function countDown(n) {
	console.log(n);
	if (n >= 1) countDown(n - 1);
}

countDown(5);

function countDownFor(n) {
	for (let i = n; i >= 0; i--) {
		console.log(i);
	}
}

countDownFor(5);
