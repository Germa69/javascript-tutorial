const app = {

	// Tạo số
	create() {
		console.group('Create Number');
		// Cách thông thường
		let simpleNumber = 4;
		console.log(simpleNumber);
		// Cách phức tạp
		let complexNumber = new Number(4);
		console.log(complexNumber);
		console.groupEnd();
	},

	// Check type number
	checkType() {
		console.group('Check type number');
		let typeNumber = 4;
		console.log(typeof typeNumber);
		console.groupEnd();
	},

	// Invalid number
	invalid() {
		console.group('Invalid number');
		let result = 20 / 'A';
		console.log("Error1: " + result);
		console.log(typeof result);
		// => Trả về NaN: Kiểu số không hợp lệ
		// Cách kiểm tra biến NaN
		console.log("Checked NaN: " + isNaN(result));

		var result1 = 20 / 0;
		console.log("Error2: " + result1);
		// => Trả về Infinity: dương vô cùng || âm vô cùng
		console.log(typeof result1);
		console.groupEnd();
	},
 
	// Number.isFinite()
	isFinite(){
		let x = 4 / 5;

		console.group('isFinite number');
		let result = Number.isFinite(x);
		console.log(result);
		console.groupEnd();
	},

	// Number.isInteger()
	isInteger(){
		let x = 3.5;

		console.group('isInteger number');
		let result = Number.isInteger(x);
		console.log(result);
		console.groupEnd();
	},

	// Number.parseFloat() : Biến type: string => number
	parseFloat(){
		let x = 45;

		console.group('parseFloat number');
		let result = Number.parseFloat(x);
		console.log(x);
		console.log(result);
		console.groupEnd();
	},

	// Number.parseInt(): Biến float => Int
	parseInt(){
		let x = 4.5;

		console.group('parseFloat number');
		let result = Number.parseInt(x);
		console.log(x);
		console.log(result);
		console.groupEnd();
	},

	// Number.prototype.toFixed()
	toFixed(){
		let pi = 3.14;

		console.group('toFixed number');
		let result = Number.prototype.toFixed(pi);
		console.log(result);
		console.groupEnd();
	},

	// Number.prototype.toString()
	toString() {
		let x = 4.5;

		console.group('toString number');
		let result = Number.prototype.toString(x);
		console.log(x);
		console.log(typeof result);
		console.groupEnd();
	}
}

app.create();
app.checkType();
app.invalid();
app.isFinite();
app.isInteger();
app.parseFloat();
app.parseInt();
app.toFixed();
app.toString();