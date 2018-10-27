function make(...arg) {
	let arr = [...arg];

	return function f(...arg) {
		if (typeof arg[0] !== "function") {
			arr = arr.concat(arg);
			console.log(arr);
			return f;
		}

		return arr.reduce( (prevValue, elem) => arg[0](prevValue, elem) );
	}
}