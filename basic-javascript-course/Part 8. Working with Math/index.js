const app = {

	// PI
	pi() {
		console.group('PI');
		console.log(Math.PI)
		console.groupEnd();
	},

	// Round
	round() {
		let x = 4.5;
		console.group('Round');
		console.log(Math.round(x))
		console.groupEnd();
	},

	// Absolute 
	abs() {
		let x = -4;
		console.group('Absolute');
		console.log(Math.abs(x))
		console.groupEnd();
	},

	// Ceil
	ceil() {
		let x = 3.6;
		console.group('Ceil');
		console.log(Math.ceil(x))
		console.groupEnd();
	},

	// Floor
	floor() {
		let x = 3.6;
		console.group('Floor');
		console.log(Math.floor(x))
		console.groupEnd();
	},

	// Random
	randomGift() {
		let gift = ['Mercedes-Benz', 'Lamborghini', 'Porsche'];
		
		console.group('Random gift');
		let giftName = Math.floor(Math.random() * gift.length);
		console.log(gift[giftName]);
		console.groupEnd();
	},

	// Min
	min() {
		console.group('Min');
		console.log(Math.min(1, 4, 5))
		console.groupEnd();
	},

	// Max
	max() {
		console.group('Max');
		console.log(Math.max(-1, 4, 5))
		console.groupEnd();
	}
}

app.pi();
app.round();
app.abs();
app.ceil();
app.floor();

app.randomGift();
app.min();
app.max();