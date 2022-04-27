const app = {

	// Create
	create() {
		// Way 1
		console.group('Create');
		let arr = [
			1,
			'New',
			undefined,
			function run() {},
			run = {
				name: 'new',
			}
		];

		
		// Way 2
		let arr2 = new Array(
			1,
			'New',
			undefined,
			function run() {},
			run = {
				name: 'new',
			}
		);

		console.log(arr);
		console.log(typeof arr);

		console.log(arr2);
		console.log(typeof arr);
		console.groupEnd();
	},

	// Check type arr
	checkType() {
		console.group('Check type array');
		let arr = [];
		console.log(typeof arr);
		console.groupEnd();
	},

	// Kiểm tra xem có phải là mảng hay không => boolean
	isArray() {
		console.group('isArray');
		let arr = [];
		console.log(Array.isArray(arr));
		console.groupEnd();
	},

	// Độ dài của mảng
	length() {
		console.group('Array Length');
		let arr = [1, 2, 3];
		console.log(arr.length);
		console.groupEnd();
	},

	// Lấy phần tử theo index (key)
	getArrayIndex() {
		console.group('Get Array Index');
		let arr = [1, 2, 3];
		console.log(arr[0]);
		console.groupEnd();
	},

	// Array.prototype.toString: Biến 1 mảng thành 1 chuỗi
	toString() {
		console.group('toString');
		let arr = [1, 2, 3];
		console.log(arr.toString());
		console.groupEnd();
	},

	// Array.prototype.join
	join() {
		console.group('join');
		let arr = [1, 2, 3];
		let ar2 = [4, 5]
		console.log(arr.toString());
		console.log(typeof arr.toString());
		console.groupEnd();
	},

	valueOf() {
		console.group('valueOf');
		let arr = [1, 2, 3];
		console.log(arr.toString());
		console.log(typeof arr.valueOf());
		console.groupEnd();
	},

	// Array.prototype.pop: Xóa phần tử cuối của mảng
	pop() {
		console.group('pop');
		let arr = [1, 2, 3];
		console.log(arr.pop());
		console.log(arr);
		console.groupEnd();
	},

	// Array.prototype.push: Thêm một hoặc nhiều phần tử vào cuối mảng
	push() {
		console.group('push');
		let arr = [1, 2, 3];
		console.log(arr.push(4));
		console.log(arr);
		console.groupEnd();
	},

	// Array.prototype.shift: Xóa element đầu mảng và trả về phần tử đã xóa
	shift() {
		console.group('shift');
		let arr = [1, 2, 3];
		console.log(arr.shift());
		console.log(arr);
		console.groupEnd();
	},

	// Array.prototype.unshift: Thêm một hoặc nhiều các element vào đầu mảng và trả về độ dài mới của mảng 
	unshift() {
		console.group('unshift');
		let arr = [1, 2, 3];
		console.log(arr.unshift(4, 5));
		console.log(arr);
		console.groupEnd();
	},

	// Array.prototype.splice: 
	splice() {
		console.group('splice');
		let arr = [1, 2, 3];
		// Tham số thứ nhất quyết định đặt con trỏ vào đâu, con trỏ thứ hai là xóa đi mấy phần tử
		console.log(arr.splice(1, 2));
		console.log(arr);
		// Thêm: Tham số thứ nhất quyết định đặt con trỏ vào đâu, con trỏ thứ hai là thêm mấy phần tử, tham số 3 là tên phần tử muốn thêm
		console.log(arr.splice(1, 2, 5));
		console.log(arr);
		console.groupEnd();
	},

	// Array.prototype.concat
	concat() {
		console.group('concat');
		let arr = [1, 2, 3];
		let arr2 = [5, 8]
		console.log(arr.concat(arr2));
		console.groupEnd();
	},

	// Array.prototype.slice: Xóa một hoặc nhiều phần tử tính đầu mảng
	slice() {
		console.group('slice');
		let arr = [1, 2, 3];
		console.log(arr.slice(1));
		console.groupEnd();
	},

	// Array.prototype.includes: Kiểm tra xem phần tử đó có tồn tại trong mảng hay không => boolean
	includes() {
		console.group('includes');
		let arr = [1, 2, 3];
		console.log(arr.includes(1));
		console.groupEnd();
	}

}

app.create();
app.checkType();
app.isArray();
app.length();
app.getArrayIndex();

app.toString();
app.join();
app.valueOf();

app.pop();
app.push();
app.shift();
app.unshift();

app.splice();
app.concat();
app.slice();
app.includes();