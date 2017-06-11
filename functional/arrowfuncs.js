const array = [1, 1.1, 1.2, 1.3, 1.5, 1.8, 1.14, 1.22, 1.36];
//const squares = array.map(x => x * x);
//const sq2 = squares.map(x => x * x);
//const sq3 = sq2.map(x => x * x);

supermapper(array); // maps to infinity very quickly...

// recursively use arrow function mapped values
function supermapper(array) {
	 if (array[0] > 1000) return;
	 const squares = array.map(x => x + x);
	 console.log(squares);
	 supermapper(squares);
}
