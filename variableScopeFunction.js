var num = 1; // varible is global

function showGlobal() {
	// uses the global num
	console.log('showGlobal', num);
}
showGlobal();

function showLocal() {
	var num = 2;
	console.log('showLocal', num);
}
showLocal();

function showArgument(num) {
	console.log('showArgument', num);
}
showArgument(3);
