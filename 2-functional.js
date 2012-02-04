/*
 * Each new term in the Fibonacci sequence is generated by adding the
 * previous two terms. By starting with 1 and 2, the first 10 terms will be:
 *
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 *
 * By considering the terms in the Fibonacci sequence whose values do not
 * exceed four million, find the sum of the even-valued terms.
*/
(function (max) {
var n = 0;
var result = 0;
var cache = {};
var sequence = [];

// get the Fibonacci sequence where the last term is below `max`
do {
	// get the last value in the sequence
	result = fib(n, cache);
}
while (
	// if the last value is less than the max
	result < max &&
	// push `result` into the sequence
	sequence.push(result) &&
	// increment `n` and iterate again
	++n
);
console.log(sequence);

var sum = 0;
sequence
	// get the even values
	.filter(function (value) {
		return !(value % 2);
	})
	// add them together
	.forEach(function (value) {
		console.log('add', value);
		sum += value;
	});
console.log('sum of even-valued terms less than', max, 'is', sum);

function fib(n, cache) {

	// create a cache if it's missing
	if (! cache) cache = fib.cache = {};

	// if we haven't already computed the sequence
	if (! isFinite(cache[n])) {
		// store the result
		cache[n] = (n < 2)
			? n
			: fib(n - 1, cache) + fib(n - 2, cache);
	}

	// return the stored result
	return cache[n];
}
})(4e6);