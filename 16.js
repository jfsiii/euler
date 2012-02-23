/*
 * From http://projecteuler.net/problem=16
 */
(function (num) {

	// problem: 2^1000 is represented as `1.0715086071862673e+301`
	var sum = num
		// cast to a string
		.toString()
		// so we can split into an aray of digits
		.split('')
		// then add them up via `reduce`
		.reduce(function (previous, current, a, x) {
			console.log(x);
			previous = ~~previous;
			current = ~~current;
			return previous + current;
		});

	console.log(sum);
})(Math.pow(2, 1000));